const ProjectType = require('../models/projectType.model')
const Project = require("../models/projects.model")

const getAllProjectTypes = async (req, res) => {
    try {
        const projectTypes = await ProjectType.find({});
        res.json({ status: true, data: projectTypes });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const getProjectTypeById = async (req, res) => {
    
    const id = req.params.id;
    console.log("id", id)
    if (!id) {
        res.json({ status: false, message: 'please provide id' });
    }

    try {
        const projectType = await ProjectType.findById(id).populate('type');
        res.json({ status: true, data: projectType });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const createProjectType = async (req, res) => {
    console.log(req);
    const name = req.body.name;
    if (!name) {
        res.json({ status: false, message: "Please enter a name" });
    }
    try {
        const projectType = await ProjectType.create({ name: name });
        res.json({ status: true, data: projectType });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const deleteProjectType = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.json({ status: false, message: 'please provide id' });
    }
    try {
        await Project.deleteMany({ type: id });
        await ProjectType.findByIdAndDelete(id);
        res.json({ status: true, data: "ProjectType deleted successfully" });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const updateProjectType = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    if (!id) {
        res.json({ status: false, message: 'please provide id' });
    }

    try {
        const projectType = await ProjectType.findByIdAndUpdate(id, { name: name }, { runValidators: true, new: true });
        res.json({ status: true, data: projectType });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

module.exports = { getAllProjectTypes, getProjectTypeById, createProjectType, deleteProjectType, updateProjectType }
