const ProjectController = require("../controllers/projects.controller");
const router = require("express").Router();

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProjectById);

router.post("/create", ProjectController.createProject);

router.patch("/update/:id", ProjectController.updateProject);

router.patch("/updateimages/:id", ProjectController.updateProjectImages);

router.delete("/delete/:id", ProjectController.deleteProjectById);

module.exports = router;