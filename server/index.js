const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

const dotenv = require('dotenv');
const mongoose = require('mongoose');

const jobsRouter = require('./routes/jobs.route');
const projectsRouter = require('./routes/projects.route');
const blogsRouter = require('./routes/blogs.route');
const projectTypeRouter = require('./routes/projectType.route');
const onBoarding = require('./routes/onboarding.route');
const emailRouter = require('./routes/sendemail.route');
const oneWeek = 1000 * 60 * 60 * 24 * 7;
const cookieParser = require('cookie-parser');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cookieParser());
dotenv.config({ path: "./.env" });


mongoose.connect(process.env.DB_URI)
  .then(() => console.log("moongoose connected successfully"))
  .catch(error => console.log(error.message));

app.use(
  cors({
    origin: ['https://www.manavsachdevdesign.com', 'https://manavsachdevdesign.com', 'http://localhost:3000'],
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
    cookie: {
      expires: oneWeek,
    }
  })
);

app.get('/', (req, res)=> {
  res.send("Server is Running");
})

app.use("/careers", jobsRouter);
app.use("/projects", projectsRouter);
app.use("/blogs", blogsRouter);
app.use("/projecttype", projectTypeRouter);
app.use("/onboarding", onBoarding);
app.use("/send", emailRouter);

app.listen(process.env.PORT, console.log(`Your app is running at http://localhost:${process.env.PORT}`))