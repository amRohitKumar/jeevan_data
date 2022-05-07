const express = require("express");
const router = express.Router();
module.exports = router;

const {
  newUser,
  updateUser,
  uploadImg,
  getReports
} = require("../controllers/userController");

const {
  newDoc,
  updateDoc,
  getAllDoc,
  getDocBySpec
} = require("../controllers/docController");

router.get("/user/:userid", getReports)
router.post("/user/:userid/:spec", uploadImg);
router.post("/create/user", newUser);
router.put("/user/:userid", updateUser);


router.get("/docs", getAllDoc)
router.get("/doc/:spec", getDocBySpec);
router.post("/create/doc", newDoc);
router.put("/doc/:docid", updateDoc);

module.exports = router;