// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const User = require('../models/User.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/back";


const usersArr = [{
  "_id": "64007c196fbd729d9f22f19d",
  "username": "krystina",
  "email": "krystina@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H0AC7VQE-000c7a74ede2-512",
  "passwordHash": "$2a$13$LWehRktaZGLBQ3ZFifo.Nu1OobK2KYi8lRryJc7Criv5fGOMY8URW",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  },
  {
  "_id": "64007c216fbd729d9f22f19f",
  "username": "deniz",
  "email": "deniz@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H7ACN082-0e4749dbf4ee-512",
  "passwordHash": "$2a$13$n7FoFmgizXtfl70qNkQrT.jDXWCxkadN2EdtykI83tk9oojBKu6qi",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007c456fbd729d9f22f1a2",
  "username": "alexia",
  "email": "alexia@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GUEMDLSK-gd45f2f4a56a-512",
  "passwordHash": "$2a$13$7a58iF345.gUnUMkO7FE9eta3GSkUibCHtFy9y9PA3zwYSqCtUS0S",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cca6fbd729d9f22f1a4",
  "username": "josh",
  "email": "josh@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GRJVPDRD-e3ee3ba67cb0-512",
  "passwordHash": "$2a$13$LnLeiZaqr2HlPRRs7tc2QeDjI.ErjrorUbiZyQ9bIeBSsEHMNBvBi",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"

},{
  "_id": "64007cd36fbd729d9f22f1a6",
  "username": "mat",
  "email": "mat@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GZH7CNG6-8b1243eb32c5-512",
  "passwordHash": "$2a$13$zaogNCStcnzy2HFj5gBubux3YmWEFDhc0Oa9ETaH83jaMBjLNzkvy",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cdd6fbd729d9f22f1a8",
  "username": "daniel",
  "email": "daniel@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04J0BSSD09-d49aa42a888a-512",
  "passwordHash": "$2a$13$WCo9pDdJMwYe38jmJyIr4eM1guTQR/XBG.JrirN0so7uZPtwKhDTS",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cdd6fbd749d9622f1a8",
  "username": "diana",
  "email": "diana@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H63Q9LH4-d458f1adb535-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
}]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return User.create(usersArr)
  })
  .then(data => console.log('User data seeded', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`User database closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
