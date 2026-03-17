import express from 'express';
import { addNote, getNotes } from '../controllers/notes.controllers.js';

const router = express.Router();

router.post('/addnotes', addNote);
router.get('/getnotes', getNotes);

export default router;