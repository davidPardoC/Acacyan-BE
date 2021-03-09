/* Methods */
const Note = require('../schema/Notes')
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

const getNoteByID = (req, res) => {
  res.json({ message: "get Note by id" });
};

const deleteNote = (req, res) => {
  res.json({ message: "delete Note by id" });
};

const noteController = {
  createNote,
  getNotes,
  getNoteByID,
  deleteNote,
};

module.exports = noteController;
