import { prisma } from "../configs/index.js";
import { APIError } from "../utils/index.js";
import { noteSchema, validate } from "../validations/index.js";

class NoteService {
  async createNote(userid, data) {
    try {
      const validatedData = validate(data, noteSchema);
      const note = await prisma.note.create({
        data: { ...validatedData, user_id: userid },
        select: { title: true },
      });

      return note;
    } catch (error) {
      throw APIError.handleError(error);
    }
  }

  async getNotes(userId) {
    try {
      const notes = await prisma.note.findMany({
        where: { user_id: userId, isActive: true },
      });

      return notes;
    } catch (error) {
      throw APIError.handleError(error);
    }
  }

  async updateNote(id, data) {
    try {
      const validatedData = validate(data, noteSchema);
      const result = await prisma.note.update({
        where: { id },
        data: validatedData,
        select: { title: true, content: true },
      });

      return result;
    } catch (error) {
      throw APIError.handleError(error);
    }
  }

  async deleteNote(id) {
    try {
      const result = await prisma.note.update({
        where: { id },
        data: { isActive: false },
        select: { isActive: true },
      });

      return result;
    } catch (error) {
      throw APIError.handleError(error);
    }
  }
}

export default new NoteService();
