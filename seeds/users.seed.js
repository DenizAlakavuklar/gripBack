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
},{
  "_id": "53007cdd6fbd749d9622f1a7",
  "username": "kostas",
  "email": "kostas@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HTMQJ5M1-88e4cda046d2-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "29007cdd6fbd749d9622f1a9",
  "username": "zsofia",
  "email": "zsofia@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HM1G87L1-e8cd870566bd-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "12307cdd6fbd749d9622f2b4",
  "username": "istvan",
  "email": "istvan@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HTF5JM8E-3d4f2291fb0e-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "33607cdd6fbd222d9622e7b1",
  "username": "matan",
  "email": "matan@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H86S2EK1-5a4347873ccf-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "24607cdd6fbd222d9622e7b1",
  "username": "charlie",
  "email": "charlie@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H7JG3D8B-d9a3c4713f66-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "54327cdd6fbd749d9622f1a8",
  "username": "fabrizio",
  "email": "fabrizio@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H6474MNH-7f6cde486a9c-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-02T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "61007cee6fcc75989622f1a8",
  "username": "dean",
  "email": "dean@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H6L5V7L3-0aeb4b5c60db-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-02T10:36:09.606+00:00"
},{
  "_id": "6407678136d604f24836b82f",
  "username": "pablo",
  "email": "pablo@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H49L7FAR-0f72c47a525b-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
},{
  "_id": "6407677dab069cc6f4c18ab6",
  "username": "anna",
  "email": "anna@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HX4M87QQ-7d85010ecad6-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "64076778d703ac6331928f7a",
  "username": "asmaa",
  "email": "asmaa@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HZ1W5648-d4461d41524b-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "64076775e2db6e1b4caffeed",
  "username": "nomin",
  "email": "nomin@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HCQN4T6H-3735d640c556-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407677138610dcff506ede1",
  "username": "toks",
  "email": "toks@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HNMTT3U2-fe4de1df41ba-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407676cdb7b6677ddd28bf4",
  "username": "yunus",
  "email": "yunus@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HWEYUS2U-g1fe52979b4d-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "640767685698caec191fed93",
  "username": "leila",
  "email": "leila@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HG12MGGN-9255bdf0302d-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "64076764f24ce60bbd2e52e1",
  "username": "marc",
  "email": "marc@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04J278LKHQ-8df60dbb1724-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "640767606bd2092218834744",
  "username": "raquel",
  "email": "raquel@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HWESAAUQ-76c8ad095428-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407675be485e40b05a46575",
  "username": "miguel",
  "email": "miguel@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04JBUQJDPA-2b63e0d06862-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "64076757f16a70908d34f554",
  "username": "dengxian",
  "email": "dengxian@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HC3DDCLS-a64f32e50289-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "64076754d5b8dbe8656e93e4",
  "username": "rodrigo",
  "email": "rodrigo@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H97HQACU-a083d83dffb7-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407674e8baadc946ed02ddb",
  "username": "dennis",
  "email": "dennis@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H7BSTS9G-7265b6c010cb-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407674bbce18f875083d155",
  "username": "abiel",
  "email": "abiel@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04H07UAGT0-97f6a8c7bdbf-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "640767451c14e351e989f3d6",
  "username": "borja",
  "email": "borja@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HS1KLXQF-726a3bd27eeb-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407673f24593266c3281f22",
  "username": "diogo",
  "email": "diogo@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04J18B09ND-2f766f1c3fa0-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} ,{
  "_id": "6407673ba22212b8dd8f319e",
  "username": "maik",
  "email": "maik@ironhack.com",
  "picture": "https://ca.slack-edge.com/T04H61XFU3D-U04HN8N57KM-g6ea9bd5e274-512",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
}  /* ,{
  "_id": "",
  "username": "",
  "email": "@ironhack.com",
  "picture": "",
  "passwordHash": "$2a$13$a8SBMKSI936pAjNu97pAfOpLvgMya/9bj5BOQXXlmQRbgwBkSHObq",
  "createdAt": "2023-03-07T10:36:09.606+00:00", 
  "updatedAt": "2023-03-07T10:36:09.606+00:00"
} */]

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
