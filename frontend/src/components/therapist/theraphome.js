import React from "react"
import "../homepage.css"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Navg from "../navgbar/navgbar"
import logo from '../images/image4.jpg';
import { useParams } from 'react-router-dom';
import{ useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper , Button ,Table , TableBody ,TableCell ,TableRow , TableContainer} from '@material-ui/core';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import Gantt from 'react-gantt-timeline';
// import 'react-gantt-timeline/dist/react-gantt-timeline.css';
import 'react-gantt-timeline/src/lib/TimeLine.css'





// const headerLinks1 = [
//     { text: "View Bookings", url: "http://localhost:3000/bookings/therap/${therapid}" },
//     { text: "Schedule Meeting", url: "http://localhost:3000/videochat" },
   
//   ];

  const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
// const TherapHomepage = () => {
//     const { therapid } = useParams();
//     const history = useNavigate();

//     const handleLogout = () => {
//       localStorage.removeItem("therapist");
//       console.log("Removed");
//       history("/");
//     };

//     return (
//         <div>
            
//             <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
//             <div className="homepage">
//                 <h1>Hello Therapist with id: {therapid}</h1>
//                 {/* <div className="button" onClick={handleLogout} >Logout</div> */}


//                 <h1>Available Slots</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Time Slot</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>

//           {slots.map((slot) => (
//             <tr key={slot.slot}>
//               <td>{slot.slot}</td>
//               <td>{slot.status === 0 ? 'Available' : 'Booked'}</td>
//             </tr>
//           ))}
//         </tbody>  
//         </table>  

//             </div>
//         </div>

//     )

    
// }

// export default TherapHomepage


// import React, { useState, useEffect } from 'react';



const TherapHomepage = () => {
  const [appointments, setAppointments] = useState([]);
  const { therapid} = useParams();
  var arr=[];
  // console.log("useparams kya ="+{therapid});
  // console.log("useparams kya ="+therapid);
  const headerLinks1 = [
    { text: "View Bookings", url: `http://localhost:3000/bookings/therap/${therapid}` },
    { text: "Schedule Meeting", url: "http://localhost:3000/videochat" },
   
  ];
      const history = useNavigate();
  
      const handleLogout = () => {
        localStorage.removeItem("therapist");
        console.log("Removed");
        history("/");
      };

      const useStyles = makeStyles((theme) => ({
        // paper: {
        //   padding: theme.spacing(2),
        //   margin: theme.spacing(1),
        // },
        chartContainer: {
          height: '500px',
          width: '500px'
        },
      }));

      const [selectedTimes, setSelectedTimes] = useState([]);
      const [selected, setSelected] = useState(false);


/**When a button is clicked, it checks if the selected times array already includes the 
 * time slot. If it does, it removes it from the array. If it doesn't,
 *  it sets the selected times array to an array containing only the 
 * clicked time slot. */


      const classes = useStyles();
      const weekStart = moment().startOf('week');
      const weekEnd = moment().endOf('week');
      var allSelectedTimes = [];
   

      const handleSubmit = () => {


        
      
      
      //   try {
      //     console.log("sending submit" +allSelectedTimes);
      //     if(!allSelectedTimes)
      //     {
      //       const data = {
      //         therapistId: therapid,
      //         timeslot:  selectedTimes,
      //         status: 0
      //       };
      //       const response = axios.post(`http://localhost:9000/theraphome/${therapid}/updateStatus`, data);
      //       console.log(response.data);
      //     }
      //     else
      //   {   const  data = {
      //       therapistId: therapid,
      //       timeslot:  selectedTimes,
      //       status: 1
      //           };
        
      //     const response = axios.post(`http://localhost:9000/theraphome/${therapid}/updateStatus`, data);
      //     console.log(response.data);
      //     }
        
      //   } 
      //   catch (error) {
      //     console.log(error);
      //   }
      alert('Time slots saved  successfully!');

      };
      
      
      const handleButtonClick = (item,bn) => {
        
        //var newtime =  timeSlots[bn-1];
        console.log("timess: "+selectedTimes);
        console.log("item - "+item);
        console.log("newitem - "+newtime);

        if (selectedTimes.includes(item))
         {
          setSelectedTimes(selectedTimes.filter((time) => time !== item));
          setSelected(null);
        } else {
          var newtime = item;
          setSelectedTimes([...selectedTimes, newtime]);
          setSelected([setSelected,bn]);
          allSelectedTimes= selectedTimes;
          const data = {

            therapistId: therapid,
            timeslot: item,
            status: selectedTimes.includes(item) ? 0:1
          };
          console.log("now sending data"+data);
          const response = axios.post(`http://localhost:9000/theraphome/${therapid}/updateStatus`, data);

        }
        console.log("timess: "+selectedTimes);
        console.log("changed? ast ="+allSelectedTimes);
        // Make a call to your backend API to update the status
        //If selectedTimes includes item, then the status value is set to 0,
        // indicating that the time slot is not available. If selectedTimes does not include item,
        // then the status value is set to 1, indicating that the time slot is available.
        // http://localhost:3000/theraphome/64252f4c5e96860bf11702b9

        // const data = {
        //   therapistId: therapid,
        //   timeslot: item,
        //   status: selectedTimes.includes(item) ? 1 : 0
        // };
        // try {
        //   console.log("putting: "+data);
        //   const response = axios.post(`http://localhost:9000/theraphome/${therapid}/updateStatus`, data);
        //   console.log(response.data);
        // } catch (error) {
        //   console.log(error);
        // }
            };
  
      useEffect(() => {
        console.log("timess: "+selectedTimes);
      }, [selectedTimes]);
// fetch avts database entirely

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/theraphome/${therapid}`);
        setAppointments(response.data);
   
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [therapid]);

  const currentDate = moment().startOf('day');
  // filter out past appointments
  const futureAppointments = appointments.filter(appointment => moment(appointment.date).isSameOrAfter(currentDate))
  console.log("future appt: +"+futureAppointments);
  // separate date and time by splitting the single string fetched from db and storing separate date:time in arr

  futureAppointments.map((appointment) => {
    const [date, timeWithMillis] = appointment.date.split('T');
    const timet = timeWithMillis.split('.')[0];
    arr.push({ date, timet });
    console.log("arr=> = +"+timet);

});
console.log('appointments:', futureAppointments);




const bn1 = 1;
const bn2 = 2;
const bn3 = 3;
const bn4 = 4;
var bnum =0;
const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
  return (
    <div>
    <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
    
  

{/* {arr.map((item) => (
      <div key={item.date}>
        <p>Date: {item.date}</p>
        <p>Time: {item.timet}</p>
      </div>
    ))} */}
   
      {/* {timeSlots.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item}>
      
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleButtonClick(item)}   >
        <Typography variant="h6">{item}</Typography>
        <Typography variant="body1">{item.timet}</Typography>
      </Button>
        </Grid>
      ))} */}

      <p>  Book your time slots</p>
    <TableContainer component={Paper}>
  <Table className={classes.table} aria-label="time slots table">
    <TableBody>

      {timeSlots.map((item, index) => (
        index % 4 === 0 ? 
        <TableRow  key={index}>  
        {/* // className={selected === item ? classes.selected : null} */}
          <TableCell align="center">
            {/* <Button
            
            variant={selectedTimes.includes(item) ? "contained" : "outlined"}
            color="secondary"
            className={`${classes.button} ${selectedTimes.includes(item) ? classes.selected : ''}`}
            onClick={() => handleButtonClick(item, index)}
            >  */}
      <div className="white">{bnum =bnum+1} </div>
            <Button
                    variant={selectedTimes.includes(timeSlots[index]) ? "contained" : "outlined"}
                    color="secondary"
                    className={classes.button}
                    onClick={() => handleButtonClick(item,bnum)}
                  >
                  <Typography variant="h6">{item}</Typography>
                 
              
            </Button>
     
          </TableCell>

          {index + 1 < timeSlots.length ? 
          <TableCell align="center">
            {/* <Button
               variant={selectedTimes.includes(item) ? "contained" : "outlined"}
               color="secondary"
               className={`${classes.button} ${selectedTimes.includes(item) ? classes.selected : ''}`}
               onClick={() => handleButtonClick(item, index)}
            > */}

             <div className="white">{bnum =bnum+1} </div>
            <Button
                variant={selectedTimes.includes(timeSlots[index + 1]) ? "contained" : "outlined"}
                color="secondary"
                className={classes.button}
                onClick={() => handleButtonClick(timeSlots[index + 1],bnum)}
                
             >
              <Typography variant="h6">{timeSlots[index + 1]}</Typography>
              <Typography variant="body1">{timeSlots[index + 1].timet}</Typography>
            </Button>
          </TableCell> : null}
          {index + 2 < timeSlots.length ? 
          <TableCell align="center">
           

      
           <div className="white">{bnum =bnum+1} </div>
           <Button
              variant={selectedTimes.includes(timeSlots[index + 2]) ? "contained" : "outlined"}
              color="secondary"
              className={classes.button}
              onClick={() => handleButtonClick(timeSlots[index + 2],bnum)}
            >

              <Typography variant="h6">{ timeSlots[index + 2]}</Typography>
              <Typography variant="body1">{timeSlots[index + 2].timet}</Typography>
            </Button>
          </TableCell> : null}

          {index + 3 < timeSlots.length ? 
          <TableCell align="center">

            <div className="white">{bnum =bnum+1} </div>
            
          <Button
                variant={selectedTimes.includes(timeSlots[index + 3]) ? "contained" : "outlined"}
                color="secondary"
                className={classes.button}   
                onClick={() => handleButtonClick(timeSlots[index + 3],bnum)}
              >
              <Typography variant="h6">{timeSlots[index + 3]}</Typography>
              <Typography variant="body1">{timeSlots[index + 3].timet}</Typography>
            </Button>
          </TableCell> : null}
        </TableRow> : null
      ))}
    </TableBody>
  </Table>
</TableContainer>
<button type="button" align="center" onClick={handleSubmit}>Submit</button>
  
    </div>  

  );

};


export default TherapHomepage;
