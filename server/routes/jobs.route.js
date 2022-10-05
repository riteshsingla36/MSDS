const router = require("express").Router();
const JobsController = require("../controllers/jobs.controller");

router.get("/", JobsController.getAllJobs);

router.get("/:id", JobsController.getJobById);

router.post("/create",JobsController.createJob);

router.patch("/update/:id", JobsController.updateJob);

router.delete("/delete/:id", JobsController.deleteJobById);

module.exports = router;