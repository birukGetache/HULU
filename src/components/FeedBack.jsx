import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon
import './feedback.css';
import { FaRegCommentDots } from 'react-icons/fa'; // Feedback comment icon
import styled from '@emotion/styled';
import axios from 'axios'; // Import Axios for API calls

const Button = styled.button`
  background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : '#117BF6')};
`;

const FeedBack = () => {
  // States for handling form visibility, name, feedback content, and submission status
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // New state for rating
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading status

  // Handle form toggle (show/hide)
  const toggleForm = () => setIsFormVisible(!isFormVisible);

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  
  // Handle rating change
  const handleRatingChange = (value) => {
    setRating(value);  // Update the rating when a star is clicked
  };

  // Handle form submission and send feedback to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send
    const feedbackData = {
      name: name,
      feedback: feedback,
      rating: rating, // Send the rating along with other data
    };

    try {
      // Make the API call to send the feedback to the backend
      const response = await axios.post('http://localhost:5000/api/feedback', feedbackData);

      // Handle the response from the backend (optional)
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false); // Reset submitting status
    }
  };

  return (
    <div>
      {/* Button to show form */}
      {!isFormVisible && (
        <Button className="feedback-button" onClick={toggleForm}>
          <FaRegCommentDots />
        </Button>
      )}

      {/* Overlay when form is visible */}
      {isFormVisible && <div className="overlay" onClick={toggleForm}></div>}

      {/* If form is visible, display the feedback form */}
      {isFormVisible && (
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-wrapper">
              <label>Feedback:</label>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter your feedback"
                required
              />
            </div>

            {/* Rating Input */}
            <div className="input-wrapper">
              <label>Rating:</label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>

          {/* Close Button with React Icon */}
          <AiOutlineClose className="close-button" onClick={toggleForm} />
        </div>
      )}

      {/* Show feedback after submission */}
      {submitted && !isFormVisible && (
        <div className="feedback-display">
          <h3>Feedback Submitted</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Feedback:</strong> {feedback}
          </p>
          <p>
            <strong>Rating:</strong> {rating} Stars
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
