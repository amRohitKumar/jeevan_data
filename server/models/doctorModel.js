const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    specialization: {
      type: String,
      enum: ['Covid-19', 'Pneumonia', 'Skin_Cancer', 'Retinal_Disease'],
    },
    address: {
      type: String,
      required: [true, 'Address is required']
    }
  }
);

module.exports = mongoose.model("Doc", doctorSchema);