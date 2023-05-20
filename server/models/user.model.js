const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      status:{
        type:Number,
        default:1
      }
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    role:{
        type:Number,
        default:0
        
      }

  },





  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);