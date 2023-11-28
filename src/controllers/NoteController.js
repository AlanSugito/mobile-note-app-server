import { NoteService } from "../services/index.js";

class NoteController {
  async createNote(req, res, next) {
    try {
      const { userid } = req.params;

      const result = await NoteService.createNote(userid, req.body);

      res
        .status(201)
        .json({ message: "Note successfully created", data: result });
    } catch (error) {
      next(error);
    }
  }

  async getNotes(req, res, next) {
    try {
      const { userid } = req.params;

      const notes = await NoteService.getNotes(userid);

      res
        .status(200)
        .json({ message: "Successfully retrieve data", data: { notes } });
    } catch (error) {
      next(error);
    }
  }

  async getNoteById(req, res, next) {
    try {
      const { noteid } = req.params;
      const note = await NoteService.getNoteById(noteid);

      res.status(200).json({ message: "Successfully get note", data: note });
    } catch (error) {
      next(error);
    }
  }

  async updateNote(req, res, next) {
    try {
      const { noteid } = req.params;

      await NoteService.updateNote(noteid, req.body);
      res.status(200).json({ message: "Note successfully updated" });
    } catch (error) {
      next(error);
    }
  }

  async deleteNote(req, res, next) {
    try {
      const { noteid } = req.params;

      await NoteService.deleteNote(noteid);

      res.status(200).json({ message: "Note successfully inactivated" });
    } catch (error) {
      next(error);
    }
  }
}

export default new NoteController();
