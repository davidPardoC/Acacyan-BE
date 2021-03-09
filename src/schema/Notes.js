/* Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

/* Schema */
const NoteSchema = new Schema({
    content:{type:String},
    createdAt:{type:Date, default:Date.now}
});

module.exports = model('Note', NoteSchema)