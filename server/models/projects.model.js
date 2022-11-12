const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "projectType",
            required: true
        },
        role_service: {
            type: String,
            trim: true,
            required: true
        },
        awards_recognition: {
            type: String,
            trim: true,
            required: true
        },
        images: [{
            type: String,
            trim: true,
            default: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'   
        }],
        tag_line: {
            type: String,
            time: true
        },
        client_link: {
            type: String,
            trim: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("project", projectSchema);