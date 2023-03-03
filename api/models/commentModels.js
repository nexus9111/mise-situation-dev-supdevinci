const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const commentSchema = new mongoose.Schema({
    anonymous: {
        type: Boolean,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    companyIdentifier: {
        type: String,
        required: true,
    },
    id: {
        type: String,
    },
    workerComment: {
        type: Boolean,
        required: true,
    },
});

// presave
commentSchema.pre("save", function (next) {
    this.id = uuidv4();
    next();
});

module.exports = mongoose.model("comment", commentSchema);