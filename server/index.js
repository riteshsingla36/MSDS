const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

const jobsRouter = require('./routes/jobs.route');
const projectsRouter = require('./routes/projects.route');
const projectTypeRouter = require('./routes/projectType.route');

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

dotenv.config({ path: "./.env" });

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET_KEY,
    secure: true
});

mongoose.connect(process.env.DB_URI)
.then(() => console.log("moongoose connected successfully"))
.catch(error => console.log(error.meaasge));


app.use("/careers", jobsRouter);
app.use("/projects", projectsRouter);
app.use("/projecttype", projectTypeRouter);

app.listen(process.env.PORT, console.log(`Your app is running at http://localhost:${process.env.PORT}`))