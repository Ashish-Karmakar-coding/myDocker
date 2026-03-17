import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Required for ESM
import noteRoutes from './routes/notes.routes.js'; // Note: ESM often requires the .js extension

const app = express();
app.use(express.json());

dotenv.config();

// --- FIX START ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- FIX END ---

const mongoURI = process.env.MONGO_URI || 'mongodb://admin:password@database:27017/notesdb?authSource=admin';

console.log("Connecting to:", mongoURI); // Add this to debug in Docker logs

mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Connection error:', err));
// Now this line will work perfectly!
app.get('/api/notes/addnotes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/notes', noteRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Running at http://localhost:${PORT}/api/notes/addnotes`));