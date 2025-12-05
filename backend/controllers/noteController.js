const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const note = await Note.create({
      userId: req.user,
      title,
      description,
      status
    });

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating note" });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      { title, description, status },
      { new: true }
    );

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Error updating note" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findOneAndDelete({ _id: req.params.id, userId: req.user });
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};
