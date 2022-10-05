const ProjectController = require("../controllers/projects.controller");
const router = require("express").Router();
const upload = require("../middleware/cloudinary");

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProjectById);

router.post("/create", upload.array('image', 10),ProjectController.createProject);

router.patch("/update/:id", ProjectController.updateProject);

router.delete("/delete/:id", ProjectController.deleteProjectById);

module.exports = router;