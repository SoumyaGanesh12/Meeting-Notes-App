import mongoose from "mongoose";

// Schema for meeting note
const meetingNoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    actionItems: [{
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }],
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('Note', meetingNoteSchema );

export default model;