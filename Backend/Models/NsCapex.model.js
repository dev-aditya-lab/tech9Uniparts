const mongoose = require('mongoose');

// create Schema
const NsCapexSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    year1: {
        type: Number,
        required: true
    },
    year2: {
        type: Number,
        required: true
    },
    year3: {
        type: Number,
        required: true
    },
    year4: {
        type: Number,
        required: true
    },
    year5: {
        type: Number,
        required: true
    },
})


//create model

const NsCapex = mongoose.model('NsCapex', NsCapexSchema);
module.exports = NsCapex;
