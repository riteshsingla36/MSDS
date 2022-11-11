const Project = require("../models/projects.model");
const cloudinary = require('cloudinary').v2;
const uploadImage = require('../middleware/helper')
const processFileMiddleware = require("../middleware/helper");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: "msds-368315-58b8d3f58b95.json",projectId: "msds-368315" });
const bucket = storage.bucket('msds_projects');

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ status: true, data: projects });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const getProjectById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        const project = await Project.findById(id);
        res.json({ status: true, data: project });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const createProject = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const role_service = req.body.role_service;
    const awards_recognition = req.body.awards_recognition;
    const type = req.body.type;

    try {
        let publicUrl;
        await processFileMiddleware(req, res);
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
          // Create a new blob in the bucket and upload the file data.
          const blob = bucket.file(req.file.originalname);
          const blobStream = blob.createWriteStream({
            resumable: false,
          });
      
          blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
          });
      
          console.log("-"+bucket.name+"-")
          blobStream.on("finish", async (data) => {
            // Create URL for directly file access via HTTP.
            publicUrl = format(
              `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );
      
            res.status(200).send({
              message: "Uploaded the file successfully: " + req.file.originalname,
              url: publicUrl,
            });
          });
      
          blobStream.end(req.file.buffer);
        const project = await Project.create({ name: name, description: description, type: type, role_service: role_service, awards_recognition: awards_recognition, images: publicUrl });
        res.json({ status: true, data: project });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
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
}

const updateProject = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json({ status: false, message: "Please provide id" });
    }
    try {
        const project = await Project.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.json({ status: true, data: project });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProjectById };