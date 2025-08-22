const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS for production
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Portfolio API is running!', 
    timestamp: new Date().toISOString() 
  });
});

// API routes placeholder - add your routes here
app.get('/api/projects', (req, res) => {
  res.json({ message: 'Projects endpoint - implement your portfolio projects API here' });
});

app.get('/api/contact', (req, res) => {
  res.json({ message: 'Contact endpoint - implement your contact form API here' });
});

// Handle all other API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Export for Vercel
module.exports = app;