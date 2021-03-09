/* Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

/* Schema */
const NoteSchema = new Schema({
    content:{type:String,required:true},
    createdAt:{type:Number,required:true}
});

module.exports = model('Note', NoteSchema)