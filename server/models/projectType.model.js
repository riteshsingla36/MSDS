const mongoose = require('mongoose');

const projectTypeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true,
        },
        slug: {
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

module.exports = mongoose.model('projectType', projectTypeSchema);