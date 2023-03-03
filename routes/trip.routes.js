const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip.model');

router.get('/trips', (req, res, next) => {
    res.json('All good in here for trips')
  })


// Endpoints for creating a trip:
// router.post('/trips/new', async (req, res) => {
router.post('/trips', async (req, res) => {
    const newTripData = req.body
    console.log(newTripData)
    const newTrip = await Trip.create(newTripData)
    res.status(201).json(newTrip)
  })

  
// Endpoints for reading a trip

    // All the trips created by all 
      router.get('/trips/alltrips', async (req, res, next) => {
          // Get all trips
          const allTrips = await Trip.find()
          res.json(allTrips)
        });


    // A user's trips
      router.get('/trips/usertrips/:userId', async (req, res, next) => {
        try{  
          const {userId} = req.params
          console.log("Testing the userId queries:", req.params)
          const userTrips = await Trip.find({ createdBy: userId })
          res.status(200).json(userTrips);
          } catch (error) {
            console.error('Error fetching user trips:', error);
            res.status(500).json({errorMessage:"Error fetching a user's trips data"});
          }
        });
      

    // Only a specific trip
        router.get('/trips/:tripId', async (req, res, next) => {
          const { tripId } = req.params
          try {
            // Get one trip
            const trip = await Trip.findById(tripId)
            res.json(trip)
          } catch (error) {
            console.log(error)
          }
        }
      );
    

  //Updating a trip:
  router.put('/trips/:tripId', async (req, res) => {
        const { tripId } = req.params
        const updateTripData = req.body
        console.log(updateTripData)
        await Trip.findByIdAndUpdate(tripId, updateTripData)
        res.json({ message: 'Trip updated properly' })
      })



  //Delete a trip
  router.delete('/trips/:tripId', async (req, res, next) => {
    const { tripId } = req.params
    try {
      // Delete one recipe
      await Trip.findByIdAndDelete(tripId)
      res.json({ message: 'Trip deleted properly' })
    } catch (error) {
      console.log(error)
    }
  })
  

  module.exports = router;