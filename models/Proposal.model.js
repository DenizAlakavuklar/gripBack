const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const proposalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: "https://www.traveloffpath.com/wp-content/uploads/2022/03/road-trip.jpg"
    },
    location: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true,
      enum: ['AirBnB', 'Camping', 'Crash at a friends', 'Hotel', 'Serviced Apartment']
    }, 

    totalPrice: {
      type: Number,
      required: true
    }, 
    nights: {
      type: Number,
      required: true
    }, 
    
    link: {
      type: String,
      required: true
    }, 
    link2: {
      type: String
    }, 

    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
    }, 

    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
    
  },
  
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Proposal = model("Proposal", proposalSchema);

module.exports = Proposal;



