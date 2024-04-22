// Import required dependencies
import express from 'express';  // Import Express.js for building web applications
import colors from 'colors';    // Import a library for adding colors to console logs
import dotenv from 'dotenv';    // Import dotenv to load environment variables from a .env file
import morgan from 'morgan';    // Import morgan for HTTP request logging
import connectDB from "./config/db.js";  // Import custom function to connect to the database
import authRoutes from "./routes/authRoute.js";    // Import routes related to authentication
import categoryRoutes from "./routes/categoryRoutes.js";  // Import routes related to categories
import cors from "cors";   // Import cors for handling Cross-Origin Resource Sharing
import productRoutes from "./routes/productRoutes.js";   // Import routes related to products

// Configuring environment variables
dotenv.config();

// Configuring database connection
connectDB();

// Create an Express application
const app = express();

// Middleware configuration
app.use(express.json());  // Parse incoming JSON data in the request body
app.use(morgan('dev'));   // Configure logging of HTTP requests in development mode

// Route configuration
app.use('/api/v1/auth', authRoutes);   // Map authentication routes to /api/v1/auth
app.use('/api/v1/category', categoryRoutes);   // Map category routes to /api/v1/category
app.use('/api/v1/product', productRoutes);     // Map product routes to /api/v1/product

// Default route for the root URL
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the ecommerce website</h1>");
});

// Set up the server to listen on a specified port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
