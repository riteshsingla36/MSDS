const ProjectType = require('../models/projectType.model')
const Project = require("../models/projects.model")

const getAllProjectTypes = async (req, res) => {
    try {
        const projectTypes = await ProjectType.find({});
        res.json({status: true, data: projectTypes});
    } catch (err) {
        res.json({status: false, message: err.message});
    }
}

const createProjectType = async (req, res) => {
    const name = req.body.name;
    if(!name) {
        res.json({status: false, message:"Please enter a name"});
    }
    try {
        const projectType = await ProjectType.create({name: name});
        res.json({status: true, data: projectType});
    } catch (err) {
        res.json({status: false, message: err.message});
    }
}

const deleteProjectType = async (req, res) => {
    const id = req.paramsid;
    if (!id) {
        res.json({ status: false, message: 'please provide id' });
    }
    try {
        await Project.deleteMany({type: id});
        await ProjectType.findByIdAndDelete(id);
        res.json({ status: true, data: "ProjectType deleted successfully"});
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

module.exports = {getAllProjectTypes, createProjectType, deleteProjectType}
