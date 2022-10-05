const projectTypeController = require("../controllers/projectType.controller");

const router = require("express").Router();

router.get("/", projectTypeController.getAllProjectTypes);

router.post("/create", projectTypeController.createProjectType);

router.delete("/delete/:id", projectTypeController.deleteProjectType);

module.exports = router;