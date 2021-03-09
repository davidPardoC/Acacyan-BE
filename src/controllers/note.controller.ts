import express = require("express");
import { noteControllerModel } from "../models/noteController";

const createNote = (req: express.Request, res: express.Response) => {
  res.json({ message: "Create Note" });
};

const getNotes = (req: express.Request, res: express.Response) => {
  res.json({ message: "get Notes" });
};

const getNoteByID = (req: express.Request, res: express.Response) => {
  res.json({ message: "get Note by id" });
};

const deleteNote = (req: express.Request, res: express.Response) => {
  res.json({ message: "delete Note by id" });
};

const noteController: noteControllerModel = {
  createNote,
  getNotes,
  getNoteByID,
  deleteNote,
};

module.exports = noteController;
