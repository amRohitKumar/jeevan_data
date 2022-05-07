const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleWare");
const connectDB = require("./config/db");
const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/nemp';
const port = process.env.PORT || 8000;
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const axios = require('axios').default;
const MongoStore = require("connect-mongo")(session);

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const secret = process.env.SECRET;

const store = new MongoStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on('error', function (error) {
    console.log(error);
});

const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxage: 1000 * 60 * 60 * 24 * 7
    },

}

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/userRoutes"))

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});