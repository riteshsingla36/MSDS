const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema(
    {
        postName: {
            type: String,
            trim: true,
            required: true
        },
        location: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        startDate: {
            type: String,
            trim: true,
            required: true
        },
        salary: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('job', jobsSchema);