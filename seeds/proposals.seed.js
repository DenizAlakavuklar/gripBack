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

  /*GIRL TRIP*/
  , 
  {
    "_id": "64007c198fbd739d9f22f19a",
  "title": "MOURARIA/S. VICENTE-Castle/City View Cosy 2 bed+AC",
  "image": "https://a0.muscache.com/im/pictures/f99f9cb5-f54c-4e7a-b8c5-572ed8991986.jpg?im_w=960",
  "location": "Lisbon",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 115,
  "nights": 14,
  "link": "https://www.airbnb.com/rooms/18281007?adults=3&check_in=2023-07-16&check_out=2023-07-30&federated_search_id=2ac9db5a-2591-4637-aeb7-df6f5ffda8ea&source_impression_id=p3_1677758038_fXcB9Keag%2FlRdn%2Fx",
  "link2": "",
  "trip": "64007c198fbd739d9f22f19d",
  "votes": ["64007c196fbd729d9f22f19d", "64007c216fbd729d9f22f19f", "64007c456fbd729d9f22f1a2"],
  "createdBy": "64007c196fbd729d9f22f19d",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } , 
  {
    "_id": "64007c198fbd739d9f22f19b",
  "title": "White House / Near the beach / Sea view",
  "image": "https://a0.muscache.com/im/pictures/e6c7e2b9-bfba-4420-b3f2-7e1fce4d0c57.jpg?im_w=960",
  "location": "Lisbon",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 90,
  "nights": 14,
  "link": "https://www.airbnb.com/rooms/27820673?adults=3&check_in=2023-07-16&check_out=2023-07-30&federated_search_id=2ac9db5a-2591-4637-aeb7-df6f5ffda8ea&source_impression_id=p3_1677758040_yLqiW8ujmqDeecGd",
  "link2": "",
  "trip": "64007c198fbd739d9f22f19d",
  "votes": ["64007c216fbd729d9f22f19f", "64007c196fbd729d9f22f19d"],
  "createdBy": "64007c216fbd729d9f22f19f",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }

  /*HARRY POTTER WORLD*/
  , 
  {
    "_id": "64007c198fbd72993f22f19c",
  "title": "Great Location! APT. 202 in Shinjuku",
  "image": "https://a0.muscache.com/im/pictures/ff1ccf4c-806f-44ed-bf81-7172f7874633.jpg?im_w=960",
  "location": "Shinjuku City, Tokyo, Japan",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 0,
  "nights": 0,
  "link": "https://www.airbnb.com/rooms/737336213626967440?adults=2&check_in=2023-03-12&check_out=2023-04-02&federated_search_id=3f0d65e1-eb3e-499b-b0ec-31bacaaeaa3e&source_impression_id=p3_1677758179_kYOK74obsETakr6Q",
  "link2": "",
  "trip": "64007c198fbd72993f22f19d",
  "votes": ["64007cdd6fbd749d9622f1a8", "64007c456fbd729d9f22f1a2"],
  "createdBy": "64007cdd6fbd749d9622f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } 
  /*PORTO WINE*/
  , 
  {
    "_id": "74007c198fbd729d9f22f198",
  "title": "Lemon Tree Garden - 2 BR Apt in Top Location",
  "image": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48089487/original/ace67b68-10c8-4103-ae71-90d096504172.jpeg?im_w=960",
  "location": "Porto, Portugal",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 77,
  "nights": 3,
  "link": "https://www.airbnb.com/rooms/48089487?adults=5&check_in=2023-03-16&check_out=2023-03-19&federated_search_id=8de19fcd-44c8-4cc7-9470-e4162b095302&source_impression_id=p3_1677758316_fWVf0f9QJAAtdwlE",
  "link2": "",
  "trip": "74007c198fbd729d9f22f198",
  "votes": ["64007c196fbd729d9f22f19d", "64007c216fbd729d9f22f19f", "64007cdd6fbd729d9f22f1a8", "64007cd36fbd729d9f22f1a6", "64007cca6fbd729d9f22f1a4"],
  "createdBy": "64007c196fbd729d9f22f19d",
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
