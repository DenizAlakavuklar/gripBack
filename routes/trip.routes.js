const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip.model');

router.get('/', (req, res, next) => {
    res.json('All good in here for trips')
  })

  
// Endpoints for creating a trip:
router.post('/create', async (req, res) => {
    const newTripData = req.body
    console.log(newTripData)
    const newTrip = await Trip.create(newTripData)
    res.status(201).json(newTrip)
  })

  
// Endpoints for reading a trip
router.get('/:tripId', async (req, res, next) => {
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

    router.get('/alltrips', async (req, res, next) => {
        // Get all trips
        const allTrips = await Trip.find()
        res.json(allTrips)
      })


  //Updating a trip:
  router.put('/:tripId', async (req, res) => {
        const { tripId } = req.params
        const updateTripData = req.body
        console.log(updateTripData)
        await Trip.findByIdAndUpdate(tripId, updateTripData)
        res.json({ message: 'Trip updated properly' })
      })


  //Delete a trip
  router.delete('/:tripId', async (req, res, next) => {
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