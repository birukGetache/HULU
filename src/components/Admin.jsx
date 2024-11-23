import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux'; // For accessing Redux state
import { useNavigate } from 'react-router-dom'; // For navigation

const AdminContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const TestimonialList = styled.div`
  margin-top: 20px;
`;

const TestimonialCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const TestimonialDetails = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d93636;
  }
`;

const AdminPage = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username); // Retrieve username from Redux
  const password = useSelector((state) => state.user.password); // Retrieve password from Redux

  const [testimonials, setTestimonials] = useState([]);
  const [message, setMessage] = useState('');

  // Redirect to login if username or password is missing
  useEffect(() => {
    if (!username || !password) {
      navigate('/login');
    }
  }, [username, password, navigate]);

  // Fetch testimonials from backend
  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/feedback');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      setMessage('Error fetching testimonials. Please try again.');
    }
  };

  // Delete a testimonial
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Testimonial deleted successfully.');
        setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
      } else {
        setMessage('Failed to delete the testimonial. Please try again.');
      }
    } catch (error) {
      setMessage('Error occurred while deleting. Please try again.');
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <AdminContainer>
      <Title>Admin Page</Title>
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
      <TestimonialList>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialDetails>
                <p><strong>Name:</strong> {testimonial.name}</p>
                <p><strong>Feedback:</strong> {testimonial.feedback}</p>
                <p><strong>Rating:</strong> {testimonial.rating}</p>
              </TestimonialDetails>
              <DeleteButton onClick={() => handleDelete(testimonial.id)}>Delete</DeleteButton>
            </TestimonialCard>
          ))
        ) : (
          <p>No testimonials available.</p>
        )}
      </TestimonialList>
    </AdminContainer>
  );
};

export default AdminPage;
