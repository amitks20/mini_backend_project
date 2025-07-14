const express = require('express');
const Note = require('../models/note');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ user: req.user._id, title, content });
  await note.save();
  res.send(note);
});

router.get('/', auth, async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.send(notes);
});

module.exports = router;
