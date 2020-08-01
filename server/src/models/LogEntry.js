const mongoose = require('mongoose');

const { Schema } = mongoose;

// Variable to avoid retyping
const requiredString = {
    type: String,
    required: true,
};

const requiredNumber = {
    type: Number,
    required: true,
};

const defaultRequiredDate = {
    type: Date,
    default: Date.now,
    required: true,
};

// Schema for db obj
const logEntrySchema = new Schema({
    title: requiredString,
    description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: [0, 'Minimum is 0'],
        max: [10, 'Maximum is 10'],
        default: 0,
    },
    laltitude: {
        ...requiredNumber,
        min: -90,
        max: 90,
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
    },
    visitDate: defaultRequiredDate,
}, {
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
