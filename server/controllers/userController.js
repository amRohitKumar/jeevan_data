const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const getReports = asyncHandler(async (req, res) => {
  const userId = req.params.userid;
  const user = await User.findById(userId);
  res.status(200).send(user.reports);
});

const newUser = asyncHandler(async (req, res) => {
 
});

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.userid;
  const user = await User.findById(userId);
  user.name = req.bedy.name;
  usercontactDetails = req.bedy.contactDetails;
  const result = await user.save();
  res.send(JSON.stringify(result));
});

const uploadImg = asyncHandler(async (req, res) => {
  
});

module.exports = { uploadImg, getReports , newUser, updateUser};

