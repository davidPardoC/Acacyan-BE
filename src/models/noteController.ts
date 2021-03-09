import { RequestHandler } from "express";

export interface noteControllerModel {
    createNote: RequestHandler;
    getNotes: RequestHandler;
    getNoteByID: RequestHandler;
    deleteNote: RequestHandler;
  }