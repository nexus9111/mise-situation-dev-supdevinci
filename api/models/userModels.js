const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const genders = ["h", "f"];

const userSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
});

// presave
userSchema.pre("save", function (next) {
    this.id = uuidv4();
    next();
});

module.exports = mongoose.model("user", userSchema);