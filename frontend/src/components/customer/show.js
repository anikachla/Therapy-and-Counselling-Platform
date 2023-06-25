import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Datepicker from "react-tailwindcss-datepicker";

// const Picker= () => {
//     const [value, setValue] = useState({
//         startDate: new Date(),
//         endDate: new Date().setMonth(11)
//     });
    
//     const handleValueChange = (newValue) => {
//         console.log("newValue:", newValue);
//         setValue(newValue);
//     }
    
//     return (
//         <div>
//             <Datepicker
//                 value={value}
//                 onChange={handleValueChange}
//             />
//         </div>
//     );
// };

// export default Picker;


function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    );
  }
  export default MyDatePicker;
  
  
  