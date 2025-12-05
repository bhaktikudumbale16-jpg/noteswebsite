const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote
} = require("../controllers/noteController");

router.post("/create", auth, createNote);        // Create
router.get("/", auth, getNotes);           // Read
router.put("/:id", auth, updateNote);      // Update
router.delete("/:id", auth, deleteNote);   // Delete

module.exports = router;
