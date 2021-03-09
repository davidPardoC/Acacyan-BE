/* Methods */
const Note = require("../schema/Notes");
const createNote = async (req, res) => {
  try {
    const note = await new Note(req.body).save();
    res.json(note);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

const getNoteByID = async (req, res) => {
  try {
    const NOTE = await Note.findById(req.params.id);
    res.status(200).json(NOTE);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteNote = async (req, res) => {
  try {
    const NOTE = await Note.findByIdAndRemove(req.params.id);
    res.status(200).json(NOTE);
  } catch (error) {
    res.status(500).json(error);
  }
};

const noteController = {
  createNote,
  getNotes,
  getNoteByID,
  deleteNote,
};

module.exports = noteController;
