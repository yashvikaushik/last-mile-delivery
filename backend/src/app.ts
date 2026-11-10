
import express from "express";

// Create an Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Last-Mile Delivery Backend is running!"
    });
});

export default app;
