const mongoose = require('mongoose');

const blogsSchems = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        slug: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        images: [
            {
                type: String,
                trim: true
            }
        ],
        content: {
            type: String,
            required: true
        },
        headerContent: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('blog', blogsSchems);