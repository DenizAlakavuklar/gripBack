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
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H0AC7VQE-000c7a74ede2-512",
  "passwordHash": "$2a$13$07F7WK2o/LHjOlkdU8Y3seuZwUr2bq3eODDXc91VelBKLgETCidQK",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
  },
  {
  "_id": "64007c216fbd729d9f22f19f",
  "username": "deniz",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H7ACN082-0e4749dbf4ee-512",
  "passwordHash": "$2a$13$.apjL7gfexU6n5GAmz9.4uW7c1krLi7LQGVPoSpaJYvoOLq6s4XuW",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007c456fbd729d9f22f1a2",
  "username": "alexia",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GUEMDLSK-gd45f2f4a56a-512",
  "passwordHash": "$2a$13$hey.soYmShr01VSYXSDLBOtIVgbH.S7iicETlu4SOqySQL0zEfS1a",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cca6fbd729d9f22f1a4",
  "username": "josh",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GRJVPDRD-e3ee3ba67cb0-512",
  "passwordHash": "$2a$13$T4Cvym1YJONEcHmzeTzsWehXd4mBE/hcjHX2CbRkao0exKTrmldRq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"

},{
  "_id": "64007cd36fbd729d9f22f1a6",
  "username": "mat",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04GZH7CNG6-8b1243eb32c5-512",
  "passwordHash": "$2a$13$YH.Og09cjE.ohcBnX4GjOO9RbnLFExVY0vT0cwVKeYndtNKwOsSh.",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cdd6fbd729d9f22f1a8",
  "username": "daniel",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04J0BSSD09-d49aa42a888a-512",
  "passwordHash": "$2a$13$if2iJqFYbLvMniP8CVZLI.g5n4TsVssDg7r1al/wid4v2laR71yRO",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "64007cdd6fbd749d9622f1a8",
  "username": "diana",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H63Q9LH4-d458f1adb535-512",
  "passwordHash": "$2a$13$if2iJqFYbLvMniP8CVZLI.g5n4TsVssDg7r1al/wid4v2laR71yRO",
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
