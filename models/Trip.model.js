const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const tripSchema = new Schema(
    {
  tripName: {
    type: String,
    required: true
  },

  image: {
    type: String,
    default: "https://unsplash.com/photos/jzY0KRJopEI"
  },

  description: {
    type: String,
    required: true,
  },

  budget: {
    type: String,
    enum: ['budget', 'moderate', 'luxury']
  },

  location: [String],

  dateDescription: String,

  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 

  // Alexia: I've deleted the required: true below as it wasn't allowing me to create more trips:
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  
},

{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;

