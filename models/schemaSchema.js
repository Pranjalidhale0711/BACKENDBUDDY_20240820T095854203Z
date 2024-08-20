const mongoose = require('mongoose');

const schemaSchema = new mongoose.Schema(
{
    fieldname1: { 
        type: String,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('schema', schemaSchema);
