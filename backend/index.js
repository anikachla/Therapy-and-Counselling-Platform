import cors from "cors"
import mongoose from "mongoose"
import { ObjectId } from "mongodb";
import moment from 'moment';
import multer from "multer";
import express from 'express';
import dotenv from 'dotenv';


// Connect to MongoDB using Mongoose



const app = express();
// import router from 'D:\\Anika\\VS_code\\nodejs_therapy\\3login\\march11\\PRJ_1\\backend\\routes\\payment.js';

app.use(express.json());
// app.use(express.urlencoded())
app.use(cors());
app.use(express.urlencoded({ extended: true }));



mongoose.set("strictQuery", false)
mongoose.connect("mongodb://127.0.0.1:27017/prj1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected !")
})

const custSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    password: String,

})

const therapSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const TherSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    spec: String,
    experience: String,
    qualification: String,
    desc: String,
    photo: {
      data: Buffer,
      contentType: String
  }

})

  const bookingSchema = new mongoose.Schema({
    therapistId: String,
    date: Date,
    time: String,
    custid: String
  });
  // Define schema
const personalDetailsSchema = new mongoose.Schema({
    therapistId: String,
    aboutMe: String,
    specializations: String,
    schedule: Date,
  });
  


// const AVTSs = [
//   { dayOfWeek: 0, startTime: '9:00 AM', endTime: '10:00 AM' },
//   { dayOfWeek: 0, startTime: '10:00 AM', endTime: '11:00 AM' },
//   { dayOfWeek: 0, startTime: '11:00 AM', endTime: '12:00 AM' },
//   { dayOfWeek: 0, startTime: '13:00 PM', endTime: '14:00 PM' },
//   { dayOfWeek: 0, startTime: '15:00 AM', endTime: '16:00 PM' },
//   { dayOfWeek: 0, startTime: '17:00 AM', endTime: '18:00 AM' },
//   { dayOfWeek: 0, startTime: '19:00 AM', endTime: '20:00 AM' },
//   { dayOfWeek: 0, startTime: '21:00 AM', endTime: '22:00 AM' },

//   { dayOfWeek: 1, startTime: '9:00 AM', endTime: '10:00 AM' },
//   { dayOfWeek: 1, startTime: '10:00 AM', endTime: '11:00 AM' },
//   // ... add more time slots for other days of the week
// ];


/**note about avts and its datatypes : It seems like you have shared a document from a MongoDB database.
 *  The document contains a unique identifier field "_id" with a value of "6421662d584fd9372b30be06" in BSON ObjectId format. 
 * The "date" field contains a Date object with a Unix timestamp of "1677750445879" in milliseconds. 
 * The "timeSlots" field is an array of available time slots in string format, from "9:00 AM" to "8:30 PM". 
 * The "status" field is an array of integers with a length of 24, representing the availability status of each time slot. 
 * The "therapistId" field is an array containing the ObjectId of the therapist associated with this document like a foreign key,
 *  with a value of  example :"640c3af2b2c97a03c99688e1". 
 * The "__v" field is a version key used by Mongoose to track document versioning. */
 
const AVTSSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    timeSlots: { type: [String], required: true },
    status: { type: [Number], default: 0 },
    // therapistId : { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist1' }
    therapistId: { type: [String] ,required: true}

  });



const AVTS = mongoose.model('AVTS', AVTSSchema);
const PersonalDetails = mongoose.model('PersonalDetails', personalDetailsSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Therapist1 = new mongoose.model("Therapist1", TherSchema)

const Customer = new mongoose.model("Customer", custSchema)
const Therapist = new mongoose.model("Therapist", therapSchema)
const Admin = new mongoose.model("Admin", adminSchema)

// Export the schema as a named export
// exports.AVTS = mongoose.model('AVTS', AVTSSchema);
// exports.Therapist1 = mongoose.model('Therapist1', TherSchema);

// const admin = new Admin({
//     name : "Admin",
//     email : "admin123@gmail.com",
//     password : "admin123"
// })

// admin.save(function (err,doc){
//     console.log(doc._id);
// })

app.post("/custregister", (req, res) => {
    const { name, email, phone, address1, address2, city, state, country, pincode, password } = req.body
    Customer.findOne({ email: email }, (err, customer) => {
        if (customer) {
            res.send({ message: "User already registered" })
        } else {
            const customer = new Customer({
                name: name,
                email: email,
                phone: phone,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                country: country,
                pincode: pincode,
                password: password
            })
            customer.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered!. Please login now" })
                }
            })
        }
    })

})

app.post("/custlogin", (req, res) => {
    const { email, password } = req.body
    Customer.findOne({ email: email }, (err, customer) => {
        if (customer) {
            if (password === customer.password) {
                res.send({ message: "Login Successful", customer: customer })
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "Customer not registered" })
        }
    })
})

app.post("/theraplogin", (req, res) => {
    const { email, password } = req.body
    Therapist.findOne({ email: email }, (err, therapist) => {
        if (therapist) {
            if (password === therapist.password) {
                res.send({ message: "Therapist login Successful", therapist: therapist })
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "Therapist not registered" })
        }
    })
})

app.post("/adminlogin", (req, res) => {
    const { email, password } = req.body
    Admin.findOne({ email: email }, (err, admin) => {
        if (admin) {
            if (password === admin.password) {
                res.send({ message: "Admin login Successful", admin: admin })
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "Invalid Login" })
        }
    })
})



 
const upload = multer();

app.post('/therapist', upload.single('photo'), (req, res) => {
    const { name,phone,email,password, spec, experience, qualification ,desc} = req.body;
    const therapist = new Therapist1({
        name: name,
        phone: phone,
        email: email,
        password: password,
        spec: spec,
        experience: experience,
        qualification: qualification,
        desc: desc,
        photo: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });
    therapist.save(err => {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: 'Therapist added!' });
        }
    });
});


app.get("/chattherapdisplay", (req, res) => {
    Therapist1.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


app.get("/chatcustdisplay", (req, res) => {
  Customer.find((err, data) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(200).send(data);
      }
  });
});


// chat00ooogpt
 
app.get('/single_therapist/:custid/:therapistId', (req, res) => {

    const fetchid= req.params.therapistId;
    const custid = req.params.custid;
 

    console.log("fetchid = "+fetchid);
    console.log("fetchid = "+fetchid);
   // const ObjectId  = require('mongodb').ObjectID;

    Therapist1.findOne({ "_id": mongoose.Types.ObjectId(fetchid)}, (err, data) => {
        if (err) {
            //res.status(500).send(err);
            console.log("mongo error");
            res.send("mongo error");
        } 
        else if (!data)
        {   console.log("no data");
            console.log(data);
            // res.status(404).send('whyy Therapist not found');
             res.send("whyy no data");

        } else 
        {   
            console.log("datata= "+data);
            res.send(data);
        }

    });

});


app.post('/single_therapist/:therapistId/bookings', async (req, res) => {
  const therapistId = req.params.therapistId;
  const startTime = new Date(req.body.startTime);
  const endTime = new Date(req.body.endTime);

  // Check if there is already a booking for this therapist during the requested time slot
  const existingBooking = await Booking.findOne({
    therapistId: therapistId,
    $or: [
      { startTime: { $lte: startTime }, endTime: { $gt: startTime } },
      { startTime: { $gte: startTime }, endTime: { $lt: endTime } },
      { startTime: { $lt: endTime }, endTime: { $gte: endTime } },
    ],
  });

  /**
    * { startTime: { $lte: startTime }, endTime: { $gt: startTime } }:
    *  This condition checks if there is an existing booking that starts
    *  before the requested start time ($lte: startTime) and ends after the 
    * requested start time ($gt: startTime).
    */
  if (existingBooking) {
    return res.status(400).json({ error: 'Therapist is already booked for this time slot' });
  }

  // Create a new booking for this therapist
  const booking = new Booking({
    therapistId: therapistId,
    startTime: startTime,
    endTime: endTime,
  });

  try {
   
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: booking });
  
    } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



  
  // Define API endpoint
  app.get('/theraphome/:therapid', async (req, res) => {
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      const { therapid } = req.params // therapist table
      console.log("now therapid = "+therapid);


 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 // First, fetch the doc with name from 'therapists'(name email pw table) where therapid="x"
     var name="";
     const th =  await Therapist.findOne({"_id": therapid});  // "_id": mongoose.Types.ObjectId(therapid)
     if (th) {
          const therapistId = th._id;
          console.log("th="+therapistId);
          name = th.name;

          }
          else
         {
            console.log("Therapist not found");
          }
   
        console.log("name mil gaya = "+name);
        // name extracted from (name email pw) and find in photo qualif exp table
        Therapist1.findOne({name: name}, function(err, therapist1) {
          if (err) console.log(err);
  
          if (!therapist1) {
            console.log(`name not found ?No therapist1 found with name ${name}`);
            return;
          }
    
          console.log(`Therapist1 _id is ${therapist1._id}`);
          const therapistId = therapist1._id;
          console.log("new id = "+therapistId);
  
      //const therapistId = map to>>>>>>>>>>>therapid;

                                         
      const today = moment().startOf('day').format('YYYY-MM-DD');
      AVTS.deleteMany({ date: { $lt: today } }, (err, result) => 
      {
        if (err) {
          console.log(err);
        } else {
          console.log(`Deleted ${result.deletedCount} documents`);
        
        }});
      
      AVTS.find( {therapistId: {$in: [therapistId]} }, (err, data) => { 
     // Return the available slots
     if(err)
     {
       console.log("mongo error");
       res.send(err);
     }
     else if(!data)
     {
      console.log("no data came");
      res.send("no data retrieved !");

     }

     else{
      console.log("avts= "+data);
      res.send(JSON.stringify(data));
     }
 

   });
});  });




  app.get('/single_therapist/:therapistId/available-time-slots', (req, res) => {
    const currentDate = moment();
    const currentDayOfWeek = currentDate.day();
    const availableSlots = AVTS.filter(slot => slot.dayOfWeek === currentDayOfWeek);
  
    const rows = availableSlots.map(slot => 
    {
      const startTime = moment(slot.startTime, 'h:mm A');
      const endTime = moment(slot.endTime, 'h:mm A');
      const timeSlots = [];
  
      while (startTime.isBefore(endTime)) {
        timeSlots.push(startTime.format('h:mm A'));
        startTime.add(30, 'minutes');
      }
  
      return {
        date: currentDate.format('YYYY-MM-DD'),
        timeSlots: timeSlots,
      };
    });
  
    res.json(rows);
  });

  // app.get(`/appointments/:therapistId`,(req,res)=>
  // {
  //   const { therapistId } = req.params;
  //    // Find the document for the specified therapistId
  //   const doc = AVTS.findOne({ therapistId });
  //    // Return the available slots
  //    const availableSlots = [];
  //    doc.status.forEach((status, i) => {
  //        availableSlots.push(doc.timeSlots[i]);
  //        console.log(doc);
  //    })
  //    res.send(availableSlots);

  // }
  // );

  app.get(`/appointments/:therapistId`, (req, res) => {
    const { therapistId } = req.params;
    // Find the document for the specified therapistId
    const doc = AVTS.findOne({ therapistId });
    
    // Retrieve name, specialization, and experience from the doc object
    const { name, specialization, experience } = doc;
  
    // Send the therapist's information back to the client as a JSON object
    res.json({ name, specialization, experience });
  });
  

  // Create a new available time slot for a date
const createAVTS = async (date, timeSlots) => {
    try {
      const existingTimeSlot = await AVTS.findOne({ date: date });
      if (existingTimeSlot)
      {
        console.log('A time slot already exists for this date.');
      }
      const newTimeSlot = new AVTS({ date: date, timeSlots: timeSlots });
      await newTimeSlot.save();

      console.log(`New available time slot created for ${date}.`);
    } catch (error) 
    {
      console.log(error);
    }
  };





  // Update a specific available time slot by date and time
const updateAVTSByDateTime = async (date, time, newTime) => {
    try {
      const AVTS = await AVTS.findOne({ date: date, timeSlots: { $elemMatch: { time: time } } });
      if (!AVTS) {
       console.log('The specified time slot does not exist.');
      }
      const index = AVTS.timeSlots.findIndex(slot => slot.time === time);
      if (AVTS.timeSlots[index].status === 1) {
       console.log('The specified time slot is already booked.');
      }
      AVTS.timeSlots[index].time = newTime;
      await AVTS.save();
      console.log(`Available time slot for ${date} updated from ${time} to ${newTime}.`);
    } catch (error) {
      console.log(error);
    }
  };
  
  // Delete a specific available time slot by date and time
  const deleteAVTSByDateTime = async (date, time) => {
    try {
      const AVTS = await AVTS.findOne({ date: date, timeSlots: { $elemMatch: { time: time } } });
      if (!AVTS) {
       console.log('The specified time slot does not exist.');
      }
      const index = AVTS.timeSlots.findIndex(slot => slot.time === time);
      if (AVTS.timeSlots[index].status === 1) {
       console.log('The specified time slot is already booked.');
      }
      AVTS.timeSlots.splice(index, 1);
      await AVTS.save();
      console.log(`Available time slot for ${date} at ${time} deleted.`);
    } catch (error) {
      console.log(error);
    }
  };
  

//   // Book a specific available time slot by date and time
//   const bookAVTSByDateTime = async (date, time) => {
//     try {
//       const AVTS = await AVTS.findOne({ date: date, timeSlots: { $elemMatch: { time: time } } });
//       if (!AVTS) {
//        console.log('The specified time slot does not exist.');
//       }
//       const index = AVTS.timeSlots.findIndex(slot => slot.time === time);
//       if (AVTS.timeSlots[index].status === 1) {
//        console.log('The specified time slot is already booked.');
//       }
//       AVTS.timeSlots[index].status = 1;
//       await AVTS.save();
//       console.log(`Available time slot for ${date} at ${time} booked.`);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   // Cancel a booking for a specific available time slot by date and time
//   const cancelAVTSBookingByDateTime = async (date, time) => {
//     try {
//       const AVTS = await AVTS.findOne({ date: date, timeSlots: { $elemMatch: { time: time }}});
//       if (!AVTS) {
//        console.log('The specified time slot does not exist.');
//       }
//       const index = AVTS.timeSlots.findIndex(slot => slot.time === time);
//       if (AVTS.timeSlots[index].status === 1) {
//        console.log('The specified time slot is already booked.');
//       }
//       }
//       catch(error)
//         {
//             console.log(error);
//           }
      
//         }
// Get all the therapistIds from the Therapist schema
const arr=[];
Therapist1.find({}, {_id:1 }, (err, therapists) => {
  if (err) {
    console.error(err);
  } else {
    therapists.forEach((therapist) => {
      arr.push(therapist._id);
    });
    console.log("arr="+arr); // Do something with the therapistIds list
  }
});


// fill || date |time |status | therapistID  ||
// run only once in the beginning by removing 1st line = function reset() {  and last bracket} then do 
// $node index

 function reset(){
  // finds each therapist's object id 
Therapist1.find({}, {_id:1 }, (err, therapists) => {
  if (err) {
    console.error(err);
  } else {
    therapists.forEach((therapist) => {
      // Loop through each day of the month
      // each therapistid must have a month's slots
      console.log("-----> "+therapist._id);
      const currentDate = moment();
      const currentMonth = currentDate.month();
      const currentYear = currentDate.year();
      const daysInMonth = moment(currentDate).daysInMonth();

      for (let i = 1; i <= daysInMonth; i++) 
      {
        const date = moment().year(currentYear).month(currentMonth).date(i);
        const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
        const status = timeSlots.map(() => 0); // Initialize the status array to all 0s
       
        const newSlot = new AVTS({
          date: date.toDate(),
          timeSlots: timeSlots,
          status: status,
          therapistId: therapist._id,
          // therapistId: "22"
        });

        newSlot.save((err) => {
          if (err) {
            console.error(err);
            console.log("error-------------");
          } else {
            console.log(`Created AVTS for therapistId ${therapist.therapistId} on ${date.format('YYYY-MM-DD')} on ${therapist.date}`);
          }
        });
      }
    });
  }
});
 };


function setnextmonthalso() {
  // finds each therapist's object id 
  Therapist1.find({}, {_id:1 }, (err, therapists) => {
    if (err) {
      console.error(err);
    } else {
      therapists.forEach((therapist) => {
        // Loop through each day of the month
        // each therapistid must have a month's slots
        console.log("-----> "+therapist._id);
        const currentDate = moment();
        const currentMonth = currentDate.month();
        const currentYear = currentDate.year();
        const daysInMonth = moment(currentDate).daysInMonth();
        const today = moment();
        // Get the first day of next month
         const firstDayOfNextMonth = moment(today).add(1, 'months').startOf('month');
  
        for (let i = 1; i <= daysInMonth; i++) 
        {
       //  const date = moment(firstDayOfNextMonth).add(i, 'days').format('YYYY-MM-DD');
          const momentDate = moment(firstDayOfNextMonth).add(i, 'days');
          const date = momentDate.format('YYYY-MM-DD');
          const toDate = momentDate.toDate()

  console.log(toDate);
          const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
          const status = timeSlots.map(() => 0); // Initialize the status array to all 0s
         
  
          const newSlot = new AVTS({
            date: toDate,
            timeSlots: timeSlots,
            status: status,
            therapistId: therapist._id,
            // therapistId: "22"
          });
          console.log(therapist);
  
          newSlot.save((err) => {
            if (err) {
              console.error(err);
              console.log("error-------------");
            } else {
              console.log(`Created AVTS for therapistId ${therapist.therapistId} on } on ${therapist.date}`);
            }
          });
        }
      });
    }
  });
}
// add next month also 




// // Update time slot status for a therapist
// app.post('/theraphome/:therapid/updateStatus', async (req, res) => {
//   console.log("inside update\n");
//   try {
//     var { therapistId, timeslot, status } = req.body;
//     var therapid = req.params.therapid;
//     console.log("recieved therap ="+therapistId);
//     console.log("recieved timeslot ="+timeslot);
//     console.log("recieved status ="+status);


//     // Find the therapist with the given ID
//     const row = await AVTS.find({ therapistId: { $in: therapistId } });
//     console.log("row =", row);
//     // const row = await AVTS.find({therapistId});
//     console.log("timeslot ="+timeslot);
//     // Find the index of the time slot in the therapist's timeSlots array
//     const timeSlotIndex = row.timeSlots.indexOf(timeslot);
//     console.log("indexts = "+timeSlotIndex);
//     // Update the status of the time slot in the therapist's status array
//     row.status[timeSlotIndex] = status;
//     // Save the updated therapist document to the database
//     await row.save();
//     res.status(200).send('Time slot status updated successfully');

//   } 
//   catch (err) {
//     console.error(err);
//     res.status(500).send('updateStatus :Internal server error');
//   }
 
// });


// Update time slot status for a therapist
app.post('/theraphome/:therapid/updateStatus', async (req, res) => {
  console.log("inside update\n");
  try {
    var { therapistId, timeslot, status } = req.body;
    var therapid = req.params.therapid;
    console.log("recieved therap ="+therapistId);
    console.log("recieved timeslot ="+timeslot);
    console.log("recieved status ="+status);

/////////////////////therapid mapping from therapists(login) id to therapist1(info) id--->because therp(info) id is in AVTS 
    var name=""; var final_id=0;
     const th =  await Therapist.findOne({"_id": therapid});  // "_id": mongoose.Types.ObjectId(therapid)
     if (th) {
          const therapistId = th._id;
          console.log("th="+therapistId);
          name = th.name;

          }
          else
         {
            console.log("Therapist not found");
          }
   
        console.log("name mil gaya = "+name);
        // name extracted from (name email pw) and find in photo qualif exp table

        Therapist1.findOne({name: name}, async function(err, therapist1) {
          if (err) console.log(err);
  
          if (!therapist1) {
            console.log(`name not found ?No therapist1 found with name ${name}`);
            return;
          }
    
          console.log(`Therapist1 _id is ${therapist1._id}`);
          therapistId = therapist1._id;
          final_id= therapist1._id;
          console.log("new id = "+therapistId);
          console.log("final_id = +"+final_id);
        

          /////////////////////////////////////////

    // Find the therapist with the given ID in AVTS
      console.log("finding +"+final_id);
      const docs = await AVTS.find({ therapistId: { $in: [therapistId] } })
      console.log("found:"+docs);

      for (let i = 0; i < docs.length; i++) {
     
        const doc = docs[i];
        const timeslotIndex = doc.timeSlots.indexOf(timeslot);
        if (timeslotIndex >= 0) {
          
          doc.status[timeslotIndex] = status;
          // doc.status[timeslotIndex] = 1;

          console.log("timeslotindex :"+timeslotIndex);
         await doc.save();
          console.log(`Updated status for timeslot ${timeslot} in document with id ${doc._id}`);
          console.log("recieved therap ="+therapistId);
          console.log("recieved timeslot ="+timeslot);
          console.log("status ="+doc.status[timeslotIndex]);
        
      }

    }
     });

  }
  catch(err) {
    console.log(err);
    res.status(500).send("abhi bhi");
  }

      
});


/////////////////////////////////////////////////////

// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// import router from 'router';
// import Ra

import crypto from "crypto";
import Razorpay from "razorpay";

const router = express.Router();
// const razorpay = new Razorpay({
//   key_id: "your_key_id",
//   key_secret: "your_key_secret",
// });

// your code here



//create orders
app.post("/api/payment/orders",async(req,res)=>{
    try{
       const instance = new Razorpay({
        key_id : process.env.KEY_ID,
        key_secret :process.env.KEY_SECRET,
       });
       const options ={
        amount: req.body.amount*100,
        currency : "INR",
        receipt: crypto.randomBytes(10).toString("hex"),
    };
        instance.orders.create(options,(error,order)=>{
            if(error)
            {
                console.log(error);
                console.log("jojo");
                console.log("amount= "+req.body.amount*100);
                return res.status(500).json({message: "Sometihing went wrong"});

            }
            res.status(200).json({data:order});
        });

    }
    catch(error)
    {
     console.log(error);
     console.log("popo");
     res.status(500).json({message:"Internal Server Error !"});
    }
});


//payment verify
app.post("/verify",async(req,res)=>{

    try{

        const{ razorpay_order_id ,razorpay_payment_id, razorpay_signature } =req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}

        }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Internal Server Error !"});

    }
});


dotenv.config();
app.use("api/payment/",router);




// Define a route to handle the GET request
app.get('/payment/:custid/:therapistId', async (req, res) => {
  const therapistId = req.params.therapistId;
  const custid = req.params.custid;

  console.log("tho: "+therapistId);
  try {
    const avts = await AVTS.findOne({ therapistId: { $in: [therapistId] }});
    console.log(avts);
    if (avts.length === 0) {
      return res.status(404).json({ message: 'No timeslots found for the therapist' });
    }
    const availableTimeSlots = avts.timeSlots.filter((timeSlots, index) => {
      return avts.status[index] === 1;
    });
    
    console.log(availableTimeSlots);
    res.send(availableTimeSlots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});



// Define a POST route for creating a new booking
app.post('/bookings', (req, res) => {
  const { therapistId, date, time, custid } = req.body;  //  put therapistId in bracket
  //wrong ie hardcode
  // therapistId = "6434939b43613e0d007d711d";
  const booking = new Booking({ therapistId, date, time, custid });
  booking.save((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving booking');
    } else {
      res.status(201).send('Booking saved successfully');
    }
  });
});




// app.get('/bookings/cust/:custid', async (req, res) => {
//   const custid = req.params.custid;
//   console.log("\npppppppppp\n");
//   const mybookings = await Booking.find({ custid: custid }).exec();
//   res.json(mybookings);
// });

// app.get('/bookings/therap/:therapid',(req,res)=>{
//   const therapistId = req.params.therapid;
//   const cursor = Booking.find({ therapistId: therapistId });

// })



// app.get('/gettherapists', (req, res) => {
//   Therapist.find({}, (err, therapists) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch therapists' });
//     } else {
//       res.send(therapists);
//     }
//   });
// });
app.get('/bookings/cust/:custid', async (req, res) => {
  const custid = req.params.custid;
  
  try {
    const mybookings = await Booking.find({ custid: custid }).exec();

    // Extract therapist names from TherSchema
    const therapistIds = mybookings.map(booking => booking.therapistId);
    const therapists = await Therapist1.find({ _id: { $in: therapistIds } }, 'name').exec();

    console.log(therapists);
    const therapistNamesMap = therapists.reduce((map, therapist) => {
      map[therapist._id] = therapist.name;
      return map;
    }, {});
    console.log("tnmap"+therapistNamesMap);
    // Attach therapist names to booking data
    const bookingsWithTherapistNames = mybookings.map(booking => ({
      ...booking.toObject(),
      therapistName: therapistNamesMap[booking.therapistId]
    }));

    console.log("bwtn"+bookingsWithTherapistNames);

    res.json(bookingsWithTherapistNames);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

app.get('/bookings/therap/:therapid', async (req, res) => {
  const therapistId = req.params.therapid;
  console.log("p = "+therapistId);
  
  try {
    const mybookings = await Booking.find({ therapistId: therapistId }).exec();
    console.log("p2 = "+mybookings);

    // Extract customer names from Schema
    const custIds = mybookings.map(booking => booking.custid);
    const customers = await Customer.find({ _id: { $in: custIds } }, 'name').exec();
   
    console.log(customers);
    const cNamesMap = customers.reduce((map, customer) => {
      map[customer._id] = customer.name;
      return map;
    }, {});
 ///////////////////////////////////////////////////
    const cemailsMap = customers.reduce((map, customer) => {
      map[customer._id] = customer.email;
      return map;
    }, {});
/////////////////////////

    console.log("cnmap"+cNamesMap);
    // Attach therapist names to booking data
    const bookingsWithCustNames = mybookings.map(booking => ({
      ...booking.toObject(),
      customerName: cNamesMap[booking.custid],

      /////
      customerEmail : cemailsMap[booking.custid]
      ////
    }));

    console.log("bwtn"+bookingsWithCustNames);

    res.json(bookingsWithCustNames);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});



app.listen(9000, () => {
    console.log("Started at port 9000")
});

