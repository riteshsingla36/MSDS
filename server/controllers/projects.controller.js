const Project = require("../models/projects.model");
const cloudinary = require('cloudinary').v2;
const uploadImage = require('../middleware/helper')

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
    let images = req.file.path;

    console.log('file path', req.file.path);

    try {
        // let imagesBuffer = [];

        // for (let i = 0; i < images.length; i++) {
        //     const result = await uploadImage(images[i]);
        //     imagesBuffer.push(result.secure_url)
        // }
        const img = await uploadImage(images);
        console.log(img);

        // const project = await Project.create({ name: name, description: description, type: type, role_service: role_service, awards_recognition: awards_recognition, images: imagesBuffer });
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