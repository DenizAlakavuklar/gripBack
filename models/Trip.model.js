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
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  
},

{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;

