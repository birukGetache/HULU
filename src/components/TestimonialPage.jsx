// src/TestimonialPage.js
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #117BF6;
  margin-bottom: 20px;
  text-align: center;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const TestimonialCard = styled.div`
  border: 1px solid #ddd;
  background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : 'white')};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Name = styled.h2`
  font-size: 1.5em;
  color: ${(props) => (props.theme === 'dark' ? '#000066' : '#333')};
  margin-bottom: 10px;
`;

const Feedback = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? '#f39c12' : '#ddd')};
  font-size: 1.5em;
  margin-right: 5px;
`;

const TestimonialPage = ({ theme = 'light', language = 'English' }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/feedback');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <Container>Loading testimonials...</Container>;
  }

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  return (
    <Container>
      <Title>{language === 'English' ? 'What Our Clients Say' : 'ደንበኞቻችን ምን ይላሉ?'}</Title>
      <TestimonialList>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} theme={theme}>
            <Name theme={theme}>{testimonial.name}</Name>
            <Feedback>{testimonial.feedback}</Feedback>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonial.rating}>★</Star>
              ))}
            </Rating>
          </TestimonialCard>
        ))}
      </TestimonialList>
    </Container>
  );
};

export default TestimonialPage;
