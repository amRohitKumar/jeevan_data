if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleWare");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
const app = express();

const path = require('path');
const methodOverride = require('method-override');

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

var cors = require("cors");
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
  next();
})
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use("/", require("./routes/userRoutes"))

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});