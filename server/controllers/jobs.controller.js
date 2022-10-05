const Job = require('../models/jobs.model');

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.json({ status: true, data: jobs });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const getJobById = async (req, res) => {
    const id = req.paramsid;
    if (!id) {
        res.json({ status: false, message: 'please provide id' });
    }
    try {
        const job = await Job.findById(id);
        res.json({ status: true, data: job });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

const createJob = async (req, res) => {
    const postName = req.body.postName;
    const location = req.body.location;
    const description = req.body.description;
    const startDate = req.body.startDate;
    const salary = req.body.salary;

    if (!postName || !location || !description || !startDate || !salary) {
        res.json({ status: false, message: "please pass all the arguments to create a job" });
    }

    try {
        const job = Job.create({ postName: postName, description: description, startDate: startDate, location: location, salary: salary });
        res.json({status: true, data: job});
    } catch (err) {
        res.json({status: false, message: err.message});
    }
}

const updateJob = async (req, res) => {
    const id = req.params.id;

    try {
        const job = await Job.findByIdAndUpdate(id, req.body, {runValidators: true , new: true});
        res.json({status: true, data: job});
    } catch (err) {
        res.json({status: false, message: err.message});
    }
}

const deleteJobById = async (req, res) => {
    const id = req.params.id;

    try {
        const job = Job.findByIdAndDelete(id);
        res.json({status: true, data: "Job deleted successfully"});
    } catch (err) {
        res.json({status: false, message: err.message});
    }
}

module.exports = { getAllJobs, getJobById, createJob, updateJob, deleteJobById }