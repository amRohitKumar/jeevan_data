const asyncHandler = require("express-async-handler");
const Doc = require("../models/doctorModel");

const getAllDoc = asyncHandler(async (req, res) => {
    const docs = await Doc.find({});
    res.status(200).send(docs);
  });

  const getDocBySpec = asyncHandler(async (req, res) => {
    const spec = req.params.spec;
    const docs = [];
    for(let doc of Doc)
    {
      if(doc.specialisation == spec) {docs.push(doc);}
    }
    res.status(200).send(docs);
  });

const newDoc = asyncHandler(async(req,res) => {
  
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