const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const mongoose = require('mongoose');

const jobsRouter = require('./routes/jobs.route');
const projectsRouter = require('./routes/projects.route');
const projectTypeRouter = require('./routes/projectType.route');

dotenv.config({ path: "./.env" });

mongoose.connect(process.env.DB_URI)
.then(() => console.log("moongoose connected successfully"))
.catch(error => console.log(error.meaasge));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/careers", jobsRouter);
app.use("/projects", projectsRouter);
app.use("/projecttype", projectTypeRouter);

app.listen(process.env.PORT, console.log(`Your app is running at http://localhost:${process.env.PORT}`))