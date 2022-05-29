const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const {cloudinary} = require('../cloudinary');

const getReports = asyncHandler(async (req, res) => {
  const {email} = req.params; 
  const user = await User.findOne({"email": email}); console.log(user);
  res.status(200).send(user.reports);
});

const getUserByEmail = asyncHandler(async (req, res) => {
  const {emailId} = req.params;
  const reqUser = await User.findOne({email: emailId});
  res.status(200).send(reqUser);
})

const addReport = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const report = req.body;
  const {imageUrl} = req.body;
  const cloudinaryResult = await cloudinary.uploader.upload(imageUrl, {
    resource_type: 'image',
    folder: 'Jeevan.Data',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  });
  report.imageUrl = cloudinaryResult.url;
  const reqUser = await User.findOne({"email": email}); 
  console.log(report);
  reqUser.reports.unshift(report);
  await reqUser.save();
  res.status(200).send();
})

const newUser = asyncHandler(async (req, res) => {
  const{name, email} = req.body;
  const newUser = new User({name: name, email: email});
  const registeredUser = await newUser.save();
  res.status(200).send({userId: registeredUser._id});
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

module.exports = { uploadImg, getReports , newUser, updateUser, getUserByEmail, addReport};

