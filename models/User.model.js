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
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    picture: {
      type: String,
      required: false,
      default: "https://ca.slack-edge.com/T04H61XFU3D-U04HWEYUS2U-g1fe52979b4d-512"
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



