import React, { useState } from 'react';
import  { useEffect } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import { render } from 'react-dom';
// import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Navg from '../navgbar/navgbar';
import './book.css';
import logo from '../images/splash.jpg';
import { Typography, Grid, Paper , Button ,Table , TableBody ,TableCell ,TableRow , TableContainer} from '@material-ui/core';
// import { Button } from 'react-bootstrap';
// import '@coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';
import DayjsUtils from '@date-io/dayjs';



// const headerLinks1 = [
//   { text: "MyBookings", url: "#" },
//   { text: "Calendar", url: "#" },
//   { text: "Payments", url: "#" },

// ];



function Pay(){
  
  const [timeData, setTimeData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [selectedButtonData, setSelectedButtonData] = useState(null);
  const [date, setDate] = useState(dayjs());
    const [value, setValue] = useState(dayjs());
    const [therapist, setTherapist] = useState(''); // state variable to hold the therapist name



  const handledateChange = (value) => {
    setDate(value);
  };

  const params = useParams();
  const { custid, therapistId } = useParams();
  const headerLinks1 = [
    
    { text: "MyBookings", url: `http://localhost:3000/bookings/cust/${custid}` },
  
    { text: "Meeting", url: "http://localhost:3000/videochatc" },
  
  ];

  useEffect(() => {
    axios.get(`http://localhost:9000/payment/${custid}/${therapistId}`)
      .then(response => {
                setPaymentData(response.data);
                // axios.get(`http://localhost:9000/single_therapist/${custid}/${therapistId}`);
            
      })
    
      .catch(error => {
        console.log(error);
      });
  }, [therapistId]);

  //toggle
  const handleClick = (index, data) => {
    if (selectedButtonIndex === index) {
      setSelectedButtonIndex(-1); // toggle the selection if the button is already selected
      setSelectedButtonData(null); // clear the selected button data
    } else {
      setSelectedButtonIndex(index); // set the index of the clicked button as selected
      setSelectedButtonData(data); // set the data of the selected button
      console.log(setSelectedButtonData);
      console.log('Selected button data:', data);
    }
  };

  const handleBooking= () => {
    if (!selectedButtonData) {
      alert('Please select a time slot');
      return;
    }
    if (!value) {
      alert('Please select a Date ');
      return;
    }

    // Make an HTTP POST request to your server endpoint
    axios.post('http://localhost:9000/bookings', {
      therapistId: therapistId, // or some other identifier for the therapist
      date: value,
      time: selectedButtonData,
      custid: custid

    }).then((response) => {
      alert('Booking successful!');
    }).catch((error) => {
      console.error(error);
      alert('Booking failed');
    });
  };



  //db se baad me
  const [book,setBook] =useState({
    name: "Rohan Laban",
    price: 250,
    
  })
  const initPayment=(data) =>{
    const options ={
      key:"rzp_test_o5hY0t6s1DEslM",
      amount: data.amount,
      currency :data.currency,
      name: book.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:9000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
    };
  

  const handlePayment =async()=>{
    try{
      const orderUrl = "http://localhost:9000/api/payment/orders";
      const {data} = await axios.post(orderUrl, {amount :book.price});
      console.log(data);
      initPayment(data.data);
    }catch(error)
    {
        console.log(error);
    }
  }
  
  return(

    // <div style={{ backgroundImage:`url(${logo})` }} className="hoimg2">
    <div className='bookm'>
       <div>

    <Navg links={headerLinks1} className="" />
    {/* <DayTimePicker timeSlotSizeMinutes={15} />; */}
   
    <h2 className="center">Enter your Appointment Details</h2>
 
    {/* <Button className="colo secondary" color="primary" > */}
       
        {paymentData && paymentData.map((data, index) => (
      
        //   <Button variant="contained" color="secondary" className="slots" style={{ fontSize: '20px' ,margin:'8px'}} key={index} >
        //   {data}
        // </Button>
        <Button
          variant="contained"
          color={selectedButtonIndex === index ? 'primary' : 'secondary'} // change color only of the clicked button
          className="slots"
          style={{ fontSize: '20px' ,margin:'8px'}}
          key={index}
          onClick={() => handleClick(index, data)} // pass the index and data of the clicked button to handleClick function
        >
          {data}
        </Button>

        ))} 

      {/* </Button> */}
      <div className="dt">
      <h3> Select a Date :</h3>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
     
      <DatePicker
        label=""
        value={value}
        InputLabelProps={{
          style: { fontSize: 40 }}}
        onChange={(newValue) => setValue(newValue)}
      />
    </MuiPickersUtilsProvider>
    </div>
    
    {/* <h3 className="paym"> Payment through Razorpay :</h3> */}
    <div className ="paym">
      
      <div className="pay_container">
        <h2 className='book_price'> Checkout: </h2>
        <p className="book_price"> Price is : {book.price} per hour</p>
       
       <button onClick={handlePayment} className ="buy_btn">Pay</button>
      </div>

    </div>
       <Button className='conf'onClick={handleBooking} style={{ fontSize: '27px' ,margin:'10px'}}> Confirm booking</Button>
    
    </div>
    {/* <div className="dt2"> 
      <p>Therapist Name: </p>
      <p>Speciality    : </p>
      <p>Date Selected : </p>
      <p>Time selected : </p>
      <p>For customer number : { custid }</p>
      
      </div> */}
    </div>
  );
}
export default Pay;

  





























/** 
import { bookAvailableTimeSlotByDateTime } from './api';
const BookTimeSlot = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleBookTimeSlot = async () => {
    const updatedAvailableTimeSlot = await bookAvailableTimeSlotByDateTime(date, time);
    if (updatedAvailableTimeSlot) {
      setMessage(`The available time slot for ${date} at ${time} has been booked.`);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter date (YYYY-MM-DD)" value={date} onChange={e => setDate(e.target.value)} />
      <input type="text" placeholder="Enter time (HH:MM)" value={time} onChange={e => setTime(e.target.value)} />
      <button onClick={handleBookTimeSlot}>Book Time Slot</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookTimeSlot;

**/

// function Calendars() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//        // http://localhost:9000/single_therapist/${therapistId}
//       const response = await axios.post(' http://localhost:9000/single_therapist/${therapistId}/bookings', {
//         therapist: 'John Smith',
//         startTime: selectedDate,
//         endTime: new Date(selectedDate.getTime() + 30 * 60 * 1000), // End time is 30 minutes after start time
//       });

//       console.log(`Booking created: ${response.data._id}`);
//     } catch (error) {
//       console.error(`Error creating booking: ${error.message}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Book a session</h1>
//       <Calendar value={selectedDate} onChange={handleDateSelect} />
//       <form onSubmit={handleSubmit}>
//         <button disabled={!selectedDate}>Book session</button>
//       </form>
//     </div>
//   );

// }
// export default Calendars;