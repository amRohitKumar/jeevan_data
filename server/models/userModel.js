const { date } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:[true,'admin Email is required']
    },
    contactDetails:{
      type:Number,
        required:[true,'contact details is required']
    },
    email:{
        type:String,
        required:[true,'admin Email is required']
    },
    password:{
        type:String,
        required:[true,'admin password is required']
    },
    reports:[
      {
        testedFor:{type:String},
        testDate:{type:Date},
        result:{type:String},
        accuracy:{type:Number}
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);