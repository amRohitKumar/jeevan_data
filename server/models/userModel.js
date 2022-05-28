const { date } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:[true,'admin Name is required']
    },
    email:{
        type:String,
        required:[true,'admin Email is required']
    },
    reports:[
      {
        testedFor:{type:String},
        testDate:{type:Date},
        result:{type:String},
        imageName: {type: String},
        imageUrl: {type: String},
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);