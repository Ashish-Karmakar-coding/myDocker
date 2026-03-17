// MUST include the .js extension here!
import Note from '../models/note.js';

// controllers/notes.controllers.js
export const addNote = async (req, res) => {
    console.log("📥 Received Data:", req.body); // ADD THIS LINE
    try {
        const note = new Note(req.body);
        const savedNote = await note.save();
        console.log("✅ Saved Note:", savedNote); // ADD THIS LINE
        res.status(201).json(savedNote);
    } catch (err) {
        console.error("❌ Save Error:", err.message);
        res.status(500).json({ error: err.message });
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};