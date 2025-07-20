// model/url.js
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortCode: {
        type: String,
        required: true,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Creates a reference to the User model
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);
module.exports = { Url };