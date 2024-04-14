const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Get port from environment variable or default to 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Another route with a parameter
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Post request example
app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name} is ${age} years old.` });
});

// Route to get server IP address
app.get('/ipaddr', (req, res) => {
  const ipAddress = req.ip;
  res.send(`Server IP address: ${ipAddress}`);
});

// Listening on specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Route to get server IP address
app.get('/ipaddr', (req, res) => {
    const ipAddress = req.ip;
    res.send(`Server IP address: ${ipAddress}`);
  });