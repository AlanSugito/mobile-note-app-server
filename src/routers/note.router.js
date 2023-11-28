import { Router } from "express";
import { NoteController } from "../controllers/index.js";

const router = Router();

router.post("/:userid", NoteController.createNote);
router.get("/by/:noteid", NoteController.getNoteById);
router.get("/:userid", NoteController.getNotes);
router.put("/:noteid", NoteController.updateNote);
router.delete("/:noteid", NoteController.deleteNote);

export default router;
