const Project = require("../models/projects.model");
const ProjectType = require("../models/projectType.model");
const processFileMiddleware = require("../middleware/helper");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
    keyFilename: "msds-1-63945b29afc6.json",
    projectId: "msds-1",
});
const bucket = storage.bucket("projects_msds");

const getAllProjects = async (req, res) => {
    const {type} = req.query
    let projects;
    try {
        if(type === 'all') {
            projects = await Project.find({}).populate('type').sort('createdAt DESC');
        }
        else {
            const types = await ProjectType.find({slug: type})

            projects = await Project.find({type: types[0]._id}).populate('type').sort('createdAt DESC');
        }
        res.json({ status: true, data: projects });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const getProjectById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        const project = await Project.find({slug: id}).populate('type');
        res.json({ status: true, data: project[0] });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const createProject = async (req, res) => {

    try {
        let publicUrl;
        await processFileMiddleware(req, res);

        const slug = req.body.slug;
        const name = req.body.name;
        const description = req.body.description;
        const role_service = req.body.role_service;
        const awards_recognition = req.body.awards_recognition;
        const type = req.body.type;
        const client_link = req.body.client_link;
        const tag_line = req.body.tag_line;

        let publicUrls = [];
        for (let i = 0; i < req.files.length; i++) {
            if (!req.files[i]) {
                return res.status(400).send({ message: "Please upload a file!" });
            }
            publicUrl = await test(req.files[i])
            publicUrls.push(publicUrl)
        }

        // publicUrls = publicUrls.sort((a,b) => {
        //     if((a.split('-'))[(a.split('-')).length-1].split(".")[0]> (b.split('-'))[(b.split('-')).length-1].split(".")[0]) {
        //         return 1;
        //     }
        //     else {
        //         return -1;
        //     }
        // })

        const project = await Project.create({
            name: name,
            slug: slug,
            description: description,
            type: type,
            role_service: role_service,
            awards_recognition: awards_recognition,
            images: publicUrls,
            tag_line: tag_line,
            client_link: client_link
        });

        res.json({ status: true, data: project });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const test = async (f) => {
    return new Promise((resolve, reject) => {
        const blob = bucket.file("projects/" + Date.now() + "-" +f.originalname);
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

const deleteProjectById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        const project = await Project.findByIdAndDelete(id);
        res.json({ status: true, data: "Project deleted successfully" });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateProject = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        let publicUrl;
        await processFileMiddleware(req, res);
        
        const name = req.body.name;
        const description = req.body.description;
        const role_service = req.body.role_service;
        const awards_recognition = req.body.awards_recognition;
        const type = req.body.type;
        const tag_line = req.body.tag_line;
        const images = req.files;
        const client_link = req.body.client_link;
        let project;

        let publicUrls = [];

        let prj = await Project.findById(id);


        if(req.files.length===0){
            project = await Project.findByIdAndUpdate(id, {name, description, role_service, awards_recognition, type, tag_line, client_link},{
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
            project = await Project.findByIdAndUpdate(id, {name, description, role_service, awards_recognition, type, tag_line, client_link, images: [...(prj.images), ...publicUrls]},{
                runValidators: true,
                new: true,
            });
        } 
        
        res.json({ status: true, data: project });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateProjectImages = async (req, res) => {
        const id = req.params.id;
    
        if (!id) {
            res.json({ status: false, message: "Please provide id" });
        }
        try {
            const images = req.body.images;
            console.log(images);
            
            let project;
    
            if(images.length!==0){
                project = await Project.findByIdAndUpdate(id, {images},{
                    runValidators: true,
                    new: true,
                });
            }else {
                throw new Error("Please Add Images");
            }
            
            res.json({ status: true, data: project });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
}


module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProjectById,
    updateProjectImages
};
