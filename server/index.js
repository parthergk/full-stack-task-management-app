const express = require("express");
const jwt = require('jsonwebtoken'); // Import jwt library
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const dbConnect = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');


app.use(express.json());


dbConnect();

// Authentication routes (public routes)
app.use("/api/auth", authRoutes);

// Authentication middleware 
app.use((req, res, next) => {
    
    if (req.originalUrl.startsWith('/api/auth')) {
        
        return next(); 
    }

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to the request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Invalid token:', error);
        return res.status(400).json({ message: 'Invalid token.' });
    }
});

app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
