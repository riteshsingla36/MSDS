const projectTypeController = require("../controllers/projectType.controller");

const router = require("express").Router();

router.get("/", projectTypeController.getAllProjectTypes);

router.get("/:id", projectTypeController.getProjectTypeById);

router.post("/create", projectTypeController.createProjectType);

router.delete("/delete/:id", projectTypeController.deleteProjectType);

router.patch("/update/:id", projectTypeController.updateProjectType);

module.exports = router;