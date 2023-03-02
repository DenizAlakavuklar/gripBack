const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    picture: {
      type: String,
      required: false,
      default: "https://unsplash.com/photos/jzY0KRJopEI"
    },

    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;



