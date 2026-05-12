import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4000;

// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static("public"));


// API Routes

app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: 'Raj Kumar', email: 'raj@example.com' },
            { id: 2, name: 'Priya Sharma', email: 'priya@example.com' }
        ]
    });
});


// React catch-all route
app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});