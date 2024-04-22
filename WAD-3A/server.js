// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define the directory for serving static files (e.g., HTML, CSS, JS)
const staticDir = path.join(__dirname, 'public');

// Set up middleware to serve static files
app.use(express.static(staticDir));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
