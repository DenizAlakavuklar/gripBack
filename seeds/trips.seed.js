// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Trip = require('../models/Trip.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/back";

const tripsArr = [{
  "_id": "64007c198fbd729d9f22f19d",
  "tripName": "Long weekend at coding conference",
  "image": "https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/62f10b60551494e57971deb3_2_WAD22_Day%203_07%20Main%20Stage_Joseph%20Krpelan_0052(1)-min-p-1080.jpeg",
  "description": "Boys trip to learn nerdy coding stuff in Berlin AND GO TO BERGHAIN!!",
  "budget": "luxury",
  "location": "Berlin",
  "dateDescription": "Long weekend in July 2023 (Conference is 27-28 July 2023)",
  "attendees": ["64007cdd6fbd729d9f22f1a8", "64007cd36fbd729d9f22f1a6", "64007cca6fbd729d9f22f1a4"],
  "createdBy": "64007cdd6fbd729d9f22f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  },
  {
    "_id": "64007c198fbd739d9f22f19d",
    "tripName": "Girls trip in July",
    "image": "https://a.cdn-hotels.com/gdcs/production121/d841/5521ff65-1e9b-4b6a-a921-0a219a6f2637.jpg",
    "description": "Week somewhere warm where we can swim, eat, drink cocktails after bootcamp. Somewhere cheap because we are broke AF",
    "budget": "budget",
    "location": "Portugal, Greece, Italy, ????",
    "dateDescription": "Everyone is free in last 2 weeks of July",
    "attendees": ["64007c196fbd729d9f22f19d", "64007c216fbd729d9f22f19f", "64007c456fbd729d9f22f1a2"],
    "createdBy": "64007c196fbd729d9f22f19d",
    "createdAt": "2023-01-02T10:36:09.606+00:00", 
    "updatedAt": "2023-01-02T10:36:09.606+00:00"
    },
    {
      "_id": "64007c198fbd72993f22f19d",
      "tripName": "Module 2 project celebration at Harry Potter World Japan",
      "image": "https://www.adventureswithfamily.com/wp-content/uploads/2018/02/The-Wizarding-World-of-Harry-Potter.png",
      "description": "WE LOVE HARRY POTTER SO MUCH, Let's go to Japan!",
      "budget": "budget",
      "location": "Tokyo",
      "dateDescription": "March for 3 weeks",
      "attendees": ["64007cdd6fbd749d9622f1a8", "64007c456fbd729d9f22f1a2"],
      "createdBy": "64007c456fbd729d9f22f1a2",
      "createdAt": "2023-01-02T10:36:09.606+00:00", 
      "updatedAt": "2023-01-02T10:36:09.606+00:00"
      },
      {
        "_id": "74007c198fbd729d9f22f198",
        "tripName": "Port Wine tasting long weekend!",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Sdtad0mRE09pRHhZNQ3ckMFyhW1fl7lfxA&usqp=CAU",
        "description": "Need to relax and drink Port Wine in PORTO!",
        "budget": "budget",
        "location": "Porto",
        "dateDescription": "Long weekend in March - Any weekend is fine!",
        "attendees": ["64007c196fbd729d9f22f19d", "64007c216fbd729d9f22f19f", "64007cdd6fbd729d9f22f1a8", "64007cd36fbd729d9f22f1a6", "64007cca6fbd729d9f22f1a4"],
        "createdBy": "64007c216fbd729d9f22f19f",
        "createdAt": "2023-02-02T10:36:09.606+00:00", 
        "updatedAt": "2023-02-02T10:36:09.606+00:00"
        }
  ]

  

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return Trip.create(tripsArr)
  })
  .then(data => console.log('Trips data seeded', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`Trips database closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
