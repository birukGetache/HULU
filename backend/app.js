// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Path to the JSON file
const TESTIMONIAL_FILE = path.join(__dirname, 'testimonial.json');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to add feedback
app.post('/api/feedback', (req, res) => {
  const { name, feedback, rating } = req.body;
  const value = 0;
  if (!name || !feedback || typeof rating !== 'number') {
    return res.status(400).json({ message: 'Invalid input. All fields are required.' });
  }

  const newFeedback = {
    id: Date.now(),
    name,
    feedback,
    rating,
    value
  };

  try {
    let feedbacks = [];

    // Read existing data or start with an empty array
    if (fs.existsSync(TESTIMONIAL_FILE)) {
      const data = fs.readFileSync(TESTIMONIAL_FILE, 'utf8');
      feedbacks = JSON.parse(data || '[]');
    }

    feedbacks.push(newFeedback);

    fs.writeFileSync(TESTIMONIAL_FILE, JSON.stringify(feedbacks, null, 2));
    res.status(201).json({ message: 'Feedback added successfully!' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Error saving feedback.' });
  }
});

app.put('/api/feedback/:id/approve', (req, res) => {
    const { id } = req.params;
    try {
      // Read the testimonials from the file
      let feedbacks = JSON.parse(fs.readFileSync(TESTIMONIAL_FILE, 'utf8'));
  
      // Find the testimonial by id
      const testimonialIndex = feedbacks.findIndex((feedback) => feedback.id === parseInt(id));
      if (testimonialIndex === -1) {
        return res.status(404).json({ message: 'Testimonial not found.' });
      }
  
      // Mark the testimonial as approved (changing the 'value' to 1 or any other approved value)
      feedbacks[testimonialIndex].value = 1;
  
      // Save the updated testimonials back to the file
      fs.writeFileSync(TESTIMONIAL_FILE, JSON.stringify(feedbacks, null, 2));
      res.status(200).json({ message: 'Testimonial approved successfully.' });
    } catch (error) {
      console.error('Error updating approval:', error);
      res.status(500).json({ message: 'Error updating approval.' });
    }
  });

  
app.delete('/api/feedback/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      if (fs.existsSync(TESTIMONIAL_FILE)) {
        const data = fs.readFileSync(TESTIMONIAL_FILE, 'utf8');
        const feedbacks = JSON.parse(data);
  
        // Filter out the feedback by id
        const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== parseInt(id));
  
        // If no feedback was found to delete
        if (updatedFeedbacks.length === feedbacks.length) {
          return res.status(404).json({ message: 'Feedback not found.' });
        }
  
        // Write the updated feedbacks to the file
        fs.writeFileSync(TESTIMONIAL_FILE, JSON.stringify(updatedFeedbacks, null, 2));
  
        res.status(200).json({ message: 'Feedback deleted successfully!' });
      } else {
        res.status(500).json({ message: 'Error accessing the file.' });
      }
    } catch (error) {
      console.error('Error deleting feedback:', error.message);
      res.status(500).json({ message: 'Error deleting feedback' });
    }
  });
  


// Mock user data (stored in a JSON file)
const USERS_FILE = './users.json';

// Endpoint to handle login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
console.log(username , password)
  // Read the users JSON file
  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error reading users file' });
    }

    const users = JSON.parse(data);

    // Validate username and password
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});


// GET endpoint to fetch feedback
app.get('/api/feedback', (req, res) => {
  try {
    if (fs.existsSync(TESTIMONIAL_FILE)) {
      const data = fs.readFileSync(TESTIMONIAL_FILE, 'utf8');
      const feedbacks = JSON.parse(data || '[]');
      res.status(200).json(feedbacks);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error('Error retrieving feedback:', error);
    res.status(500).json({ message: 'Error retrieving feedback.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
