const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
// const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

const jobsRouter = require('./routes/jobs.route');
const projectsRouter = require('./routes/projects.route');
const projectTypeRouter = require('./routes/projectType.route');
const onBoarding = require('./routes/onBoarding.route');
const oneWeek = 1000 * 60 * 60 * 24 * 7;
const MongoDBStore = require("connect-mongodb-session")(session);
const cookieParser = require('cookie-parser');


// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cookieParser());
dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
  secure: true
});

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("moongoose connected successfully"))
  .catch(error => console.log(error.message));

const store = new MongoDBStore({
  uri: process.env.DB_URI,
  collection: "mySessions",
});
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);


app.use(
  session({
    key: 'user',
    secret: "secret",
    resave: true,
    rolling: true,
    saveUninitialized: false,
    store: store,
    cookie: {
      expires: oneWeek,
    }
  })
);

app.use("/careers", jobsRouter);
app.use("/projects", projectsRouter);
app.use("/projecttype", projectTypeRouter);
app.use("/onboarding", onBoarding);

app.listen(process.env.PORT, console.log(`Your app is running at http://localhost:${process.env.PORT}`))