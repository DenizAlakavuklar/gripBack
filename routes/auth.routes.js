const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const User = require('../models/User.model');
const isAuthenticated = require('../middlewares/isAuthenticated');


router.post('/signup', async (req, res, next) => {
  try {

    const username = req.body.username;
    const email = req.body.email;
    const salt = bcrypt.genSaltSync(13);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);

    // Check if the email or password or name is provided as an empty string 
    if (email === '' || passwordHash === '' || username === '') {
      res.status(400).json({ message: "Provide email, password and username" });
      return;
    }
    // Use regex to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: 'Provide a valid email address.' });
      return;
    }
      // Use regex to validate the password format
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(req.body.password)) {
    res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }
    await User.create({ username: username, email: email, passwordHash: passwordHash });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error signing up: ", error);
    res.status(400).json({ errorMessage: "Error signing up" });
  }
})

router.post('/login', async (req, res, next) => {
  const username = req.body.username;

  try {
    const foundUser = await User.find({ username: username });
    if (foundUser.length) {
      if (bcrypt.compareSync(req.body.password, foundUser[0].passwordHash)) {

        const authToken = jwt.sign(
          {
            expiresIn: '6h',
            user: foundUser[0].username, // Put yhe data of your user in there
          },
          process.env.TOKEN_SECRET,
          {
            algorithm: 'HS256',
          }
        )
        console.log(foundUser)
        res.status(200).json({ token: authToken, userId: foundUser[0]._id });
      } else {
        res.status(403).json('Password incorrect')
      }
    } else {
      res.status(404).json('User not found')
    }
  } catch (error) {
    console.log("Error finding user: ", error);
  }
})

router.post('/verify', isAuthenticated, (req, res, next) => {
  if (req.payload) {
    console.log("PAYLOAD: ", req.payload);
    res.json(req.payload.user);
  }
})


router.get('/user/:userId', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log('Error fetching user:', error);
    res.status(500).json({ errorMessage: 'Error fetching user' });
  }
});



module.exports = router
