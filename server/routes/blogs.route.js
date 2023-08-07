const BlogController = require("../controllers/blogs.controller");
const router = require("express").Router();

router.get("/", BlogController.getAllBlogs);

router.get("/:id", BlogController.getBlogById);

router.post("/create", BlogController.createBlog);

router.patch("/update/:id", BlogController.updateBlog);

router.patch("/updateimages/:id", BlogController.updateBlogImages);

router.delete("/delete/:id", BlogController.deleteBlogById);

module.exports = router;