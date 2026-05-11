import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 4000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Dummy API Endpoints

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: 'Raj Kumar', email: 'raj@example.com' },
            { id: 2, name: 'Priya Sharma', email: 'priya@example.com' },
            { id: 3, name: 'Arjun Singh', email: 'arjun@example.com' }
        ]
    });
});

// GET /api/users/:id - Get user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    res.json({
        success: true,
        data: {
            id: userId,
            name: 'User ' + userId,
            email: `user${userId}@example.com`
        }
    });
});

// POST /api/users - Create a new user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
            id: 4,
            name: name || 'New User',
            email: email || 'newuser@example.com'
        }
    });
});

// GET /api/posts - Get all posts
app.get('/api/posts', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, title: 'First Post', content: 'This is the first post', userId: 1 },
            { id: 2, title: 'Second Post', content: 'This is the second post', userId: 2 }
        ]
    });
});

// GET /api/health - Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        endpoints: {
            health: 'GET /api/health',
            users: 'GET /api/users',
            userById: 'GET /api/users/:id',
            createUser: 'POST /api/users',
            posts: 'GET /api/posts'
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
