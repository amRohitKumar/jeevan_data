const asyncHandler = require("express-async-handler");
const Doc = require("../models/doctorModel");

const getAllDoc = asyncHandler(async (req, res) => {
    const docs = await Doc.find({});
    res.status(200).send(docs);
  });

  const getDocBySpec = asyncHandler(async (req, res) => {
    const spec = req.params.spec;
    const allDoc = await Doc.find(); console.log(allDoc);
    const docs = [];
    for(let doc of allDoc)
    {
      if(doc.specialization == spec) {docs.push(doc);}
    }
    console.log(docs);
    res.status(200).send(docs);
  });

const newDoc = asyncHandler(async(req,res) => {
  const {doctorObj} = req.body; console.log(doctorObj);
  const newDoctor = new Doc({...doctorObj}); 
  const registeredDoctro = await newDoctor.save();
  console.log(registeredDoctro);
  res.status(200).send(); 
})

const updateDoc = asyncHandler(async (req, res) => {
    const docId = req.params.docid;
    const doc = await Doc.findById(docId);
    doc.name = req.bedy.name;
    doc.specialisation = req.bedy.specialisation;
    doc.contactDetails = req.bedy.contactDetails;
    const result = await doc.save();
    res.send(JSON.stringify(result));
  });

 
module.exports = { getAllDoc, getDocBySpec,newDoc,updateDoc };