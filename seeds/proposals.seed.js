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
  "votes": ["64007cd36fbd729d9f22f1a6"],
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
  "totalPrice": 200,
  "nights": 21,
  "link": "https://www.airbnb.com/rooms/737336213626967440?adults=2&check_in=2023-03-12&check_out=2023-04-02&federated_search_id=3f0d65e1-eb3e-499b-b0ec-31bacaaeaa3e&source_impression_id=p3_1677758179_kYOK74obsETakr6Q",
  "link2": "",
  "trip": "64007c198fbd72993f22f19d",
  "votes": ["64007cdd6fbd749d9622f1a8", "64007c456fbd729d9f22f1a2"],
  "createdBy": "64007cdd6fbd749d9622f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } , 
  {
    "_id": "64087956e5d723cba711aaeb",
  "title": "3Bdr+Central+Spacious+Netflix+Air-con",
  "image": "https://a0.muscache.com/im/pictures/miso/Hosting-11872394/original/bf2147c2-1899-498e-97b5-66362c482605.jpeg?im_w=960",
  "location": "Kutchan, Abuta District, Hokkaido, Japan",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 356,
  "nights": 21,
  "link": "https://www.airbnb.com/rooms/11872394?adults=2&category_tag=Tag%3A7765&check_in=2023-03-08&check_out=2023-03-29&federated_search_id=7f21c884-cc17-477a-b41f-45bc7a3bd495&source_impression_id=p3_1678276915_AI%2BR4EIGJ2lIaJfZ",
  "link2": "",
  "trip": "64007c198fbd72993f22f19d",
  "votes": ["64007c456fbd729d9f22f1a2"],
  "createdBy": "64007c456fbd729d9f22f1a2",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } , 
  {
    "_id": "640879b0642ca08c5741a5f7",
  "title": "Private old house inn",
  "image": "https://a0.muscache.com/im/pictures/be223c9b-0416-43b2-93f2-cfc600cf6a8a.jpg?im_w=960",
  "location": "Minobu, Minamikoma District, Yamanashi, Japan",
  "type": "AirBnB", /* AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment */
  "totalPrice": 155,
  "nights": 21,
  "link": "https://www.airbnb.com/rooms/593130866047245545?adults=2&category_tag=Tag%3A8524&check_in=2023-03-08&check_out=2023-03-29&federated_search_id=7f21c884-cc17-477a-b41f-45bc7a3bd495&source_impression_id=p3_1678276919_nxtAudk3Dy40ZO6q",
  "link2": "",
  "trip": "64007c198fbd72993f22f19d",
  "votes": ["64007c456fbd729d9f22f1a2"],
  "createdBy": "64007c456fbd729d9f22f1a2",
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
  , 
  {
    "_id": "64087784460daac3b47f9512",
  "title": "Leafy Greens Chiangmai : Snail Dome (SND)",
  "image": "https://a0.muscache.com/im/pictures/f6c46cce-0c0b-4ebc-ba01-3cce16527978.jpg?im_w=720",
  "location": "Tambon Chang Phueak, Chang Wat Chiang Mai, Thailand",
  "type": "AirBnB", 
  // AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment
  "totalPrice": 80,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/32751601?adults=3&category_tag=Tag%3A8225&check_in=2023-03-21&check_out=2023-03-25&federated_search_id=d796c9a1-c5c5-40d9-b53a-b2bf421aa624&source_impression_id=p3_1678276471_4Kpeym2LE5xOI5S3",
  "link2": "",
  "trip": "28577c198fcd729d9f22f110",
  "votes": ["61007cee6fcc75989622f1a8", "54327cdd6fbd749d9622f1a8"],
  "createdBy": "54327cdd6fbd749d9622f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }

  , 
  {
    "_id": "640877e8299c5c238febd9bd",
  "title": "[VR] 2BR High Skyline Ocean View @ Pattaya",
  "image": "https://a0.muscache.com/im/pictures/1f23e84a-f226-4b5d-9405-ffe291206b13.jpg?im_w=1200",
  "location": "Muang Pattaya, Chang Wat Chon Buri, Thailand",
  "type": "AirBnB", 
  // AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment
  "totalPrice": 112,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/25986044?adults=3&category_tag=Tag%3A7769&check_in=2023-03-21&check_out=2023-03-25&federated_search_id=d796c9a1-c5c5-40d9-b53a-b2bf421aa624&source_impression_id=p3_1678276593_Xa5gn92nlRUtcnZW",
  "link2": "",
  "trip": "28577c198fcd729d9f22f110",
  "votes": ["24607cdd6fbd222d9622e7b1", "54327cdd6fbd749d9622f1a8"],
  "createdBy": "24607cdd6fbd222d9622e7b1",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }
  /*SURFING IN MORCOO*/
  ,   {
    "_id": "64087a3631844efd010f5b1b",
  "title": "❤️Charming apartment in❤️❤️ Quartier Hivernage❤️",
  "image": "https://a0.muscache.com/im/pictures/miso/Hosting-549767899995543224/original/b1ff4bf0-7c42-47be-a1ed-46cd6b9f0826.jpeg?im_w=960",
  "location": "Marrakech, Marrakech-Safi, Morocco",
  "type": "AirBnB", 
  // AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment
  "totalPrice": 95,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/549767899995543224?adults=3&check_in=2023-03-09&check_out=2023-03-12&federated_search_id=33db5e31-5948-46f2-a42b-80bccaa627c9&source_impression_id=p3_1678277142_ciB%2BqQPznmzwBO4x",
  "link2": "",
  "trip": "84007c198fcd729d9f22f198",
  "votes": ["64007cdd6fbd729d9f22f1a8", "64007cca6fbd729d9f22f1a4", "64007cd36fbd729d9f22f1a6"],
  "createdBy": "64007cdd6fbd729d9f22f1a8",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } ,   {
    "_id": "64087a79412cddfd30228db7",
  "title": "OceanFront Beautiful Condo with Pool/Beach",
  "image": "https://a0.muscache.com/im/pictures/7953468a-fc66-46ed-802c-32b2b42acaa6.jpg?im_w=1200",
  "location": "Marrakech, Marrakech-Safi, Morocco",
  "type": "AirBnB", 
  // AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment
  "totalPrice": 89,
  "nights": 4,
  "link": "https://www.airbnb.com/rooms/549767899995543224?adults=3&check_in=2023-03-09&check_out=2023-03-12&federated_search_id=33db5e31-5948-46f2-a42b-80bccaa627c9&source_impression_id=p3_1678277142_ciB%2BqQPznmzwBO4x",
  "link2": "",
  "trip": "84007c198fcd729d9f22f198",
  "votes": ["64007cca6fbd729d9f22f1a4", "64007cd36fbd729d9f22f1a6"],
  "createdBy": "64007cca6fbd729d9f22f1a4",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  }

 /*  , 
  {
    "_id": "",
  "title": "",
  "image": "",
  "location": "",
  "type": "", 
  // AirBnB, Camping, Crash at a friends, Hotel, Serviced Apartment
  "totalPrice": 0,
  "nights": 0,
  "link": "",
  "link2": "",
  "trip": "",
  "votes": ["", "", "", "", ""],
  "createdBy": "",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  } */
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
