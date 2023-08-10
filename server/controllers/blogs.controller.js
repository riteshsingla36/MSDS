const Blog = require("../models/blogs.model");
const processFileMiddleware = require("../middleware/helper");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
    keyFilename: "msds-1-63945b29afc6.json",
    projectId: "msds-1",
});
const bucket = storage.bucket("projects_msds");

const getAllBlogs = async (req, res) => {
    let blogs;
    try {
        blogs = await Blog.find({});
        res.json({ status: true, data: blogs });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const getBlogById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide slug" });
    }
    try {
        const blogs = await Blog.find({slug: id});
        const blog = blogs[0];
        res.json({ status: true, data: blog });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const createBlog = async (req, res) => {

    try {
        let publicUrl;
        await processFileMiddleware(req, res);

        const title = req.body.title;
        const slug = req.body.slug;
        const description = req.body.description;
        const content = req.body.content;
        const headerContent = req.body.headerContent;

        let publicUrls = [];
        for (let i = 0; i < req.files.length; i++) {
            if (!req.files[i]) {
                return res.status(400).send({ message: "Please upload a file!" });
            }
            publicUrl = await test(req.files[i])
            publicUrls.push(publicUrl)
        }

        const blog = await Blog.create({
            slug: slug,
            title: title,
            description: description,
            images: publicUrls,
            content: content,
            headerContent: headerContent
        });

        res.json({ status: true, data: blog });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const test = async (f) => {
    return new Promise((resolve, reject) => {
        const blob = bucket.file("blogs/" + Date.now() + "-" +f.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on("error", (err) => {
            // res.status(500).send({ message: err.message });
            reject(err);
        });


        blobStream.on("finish", async (data) => {
            publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );
            resolve(publicUrl)
        });

        blobStream.end(f.buffer);
    })
}

const deleteBlogById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        const blog = await Blog.findByIdAndDelete(id);
        res.json({ status: true, data: "Blog deleted successfully" });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateBlog = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        let publicUrl;
        await processFileMiddleware(req, res);
        
        const title = req.body.title;
        const slug = req.body.slug;
        const description = req.body.description;
        const content = req.body.content;
        const headerContent = req.body.headerContent;
        let blog;

        let publicUrls = [];

        let blg = await Blog.findById(id);

        if(req.files.length===0){
            blog = await Blog.findByIdAndUpdate(id, {slug, title, description, content, headerContent},{
                runValidators: true,
                new: true,
            });
        }else{
            for (let i = 0; i < req.files.length; i++) {
                if (!req.files[i]) {
                    return res.status(400).send({ message: "Please upload a file!" });
                }
                publicUrl = await test(req.files[i])
                publicUrls.push(publicUrl)
            }
            blog = await Blog.findByIdAndUpdate(id, {slug, title, description, content,headerContent, images: [...(blg.images), ...publicUrls]},{
                runValidators: true,
                new: true,
            });
        } 
        
        res.json({ status: true, data: blog });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateBlogImages = async (req, res) => {
        const id = req.params.id;
        if (!id) {
            res.json({ status: false, message: "Please provide id" });
        }
        try {
            const images = req.body.images;
            
            let blog;
    
            if(images.length!==0){
                blog = await Blog.findByIdAndUpdate(id, {images},{
                    runValidators: true,
                    new: true,
                });
            }else {
                throw new Error("Please Add Images");
            }
            
            res.json({ status: true, data: blog });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
}


module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlogById,
    updateBlogImages
};
