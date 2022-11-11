const ProjectController = require("../controllers/projects.controller");
const router = require("express").Router();
// const upload = require("../middleware/cloudinary");
const multer = require('multer');

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProjectById);

const upload = multer({ dest: 'uploads/' });
var storage = multer.memoryStorage();

router.post("/create", upload.single('images'), ProjectController.createProject);

router.patch("/update/:id", ProjectController.updateProject);

router.delete("/delete/:id", ProjectController.deleteProjectById);

module.exports = router;