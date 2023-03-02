// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Proposal = require('../models/Proposal.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/back";

const proposalsArr = [{


  "_id": "64007c198fbd729d9522f19d",
  "title": "Enchanting 142m²(1530 ft²) Loft/Flat in F'Hain",
  "image": "https://a0.muscache.com/im/pictures/14357568-7df0-4248-9d0b-fbf6fad780ca.jpg?im_w=960",
  "location": "Berlin",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 400,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/694871?adults=3&location=Berlin%2C%20Germany&check_in=2023-07-25&check_out=2023-07-29&federated_search_id=85f0c4f5-8314-4438-8cf7-4e2a369399dc&source_impression_id=p3_1677757244_jZWl9Aa%2FBbElkA%2FZ",
  "link2": "",
  "trip": "64007c198fbd729d9f22f19d",
  "votes": ["64007cdd6fbd729d9f22f1a8", "64007cd36fbd729d9f22f1a6"],
  "createdBy": "64007cdd6fbd729d9f22f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }, 
  {
    "_id": "64007c198fcd739d9f22f19d",
  "title": "Dachterrassen-Apartment in Friedrichshain",
  "image": "https://a0.muscache.com/im/pictures/miso/Hosting-696787654491967485/original/b56462fc-9a1b-41d9-a2cf-b26573121803.jpeg?im_w=960",
  "location": "Berlin",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 500,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/696787654491967485?adults=3&check_in=2023-07-25&check_out=2023-07-29&federated_search_id=85f0c4f5-8314-4438-8cf7-4e2a369399dc&source_impression_id=p3_1677757346_uGLnTT%2BaHfbCFC1U",
  "link2": "",
  "trip": "64007c198fbd729d9f22f19d",
  "votes": ["64007cd36fbd729d9f22f1a6", "64007cd36fbd729d9f22f1a6"],
  "createdBy": "64007cd36fbd729d9f22f1a6",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }
  ]

  

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return Proposal.create(proposalsArr)
  })
  .then(data => console.log('Proposals data seeded', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`Proposals database closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
