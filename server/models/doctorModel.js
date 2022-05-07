const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    specialisation:{
        type:String,
        required:[true,'Specialisation is required']
    },
    contactDetails:{
      type:Number,
        required:[true,'contact details is required']
  }
}
);

module.exports = mongoose.model("Doc", doctorSchema);