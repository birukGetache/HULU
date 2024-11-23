import React, { useState } from 'react';
import styled from '@emotion/styled';
import imageHome from '../assets/home.webp';
import car from '../assets/car.webp'; 
import track from '../assets/track.avif'; 
import TestimonialPage from './TestimonialPage';
import ServicePage from './ServicePage';
import FooterPage from './FooterPage';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    /* Styles for tablets and mobile devices */
  }
  
  @media (max-width: 480px) {
    /* Styles for mobile devices */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center;
  margin: 0 auto; /* Center the header */
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 2em; /* Adjust font size for tablets and mobile */
  margin: 20px;
  color: orange;
  
  @media (max-width: 480px) {
    font-size: 1.5em;
    margin-left: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 1em; /* Adjust font size for tablets and mobile */
  margin-bottom: 20px;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Service = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px; /* Margin for mobile devices */
  
  @media (min-width: 769px) {
    margin: 0 10px;
    flex: 1;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #007bff;
  
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Portfolio = styled.div`
  margin-top: 30px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #007bff;
  
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  width: 48%;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto; /* Adjust height for responsiveness */
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Testimonials = styled.div`
  margin-top: 30px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Testimonial = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const Footer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Class = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0;
  z-index: 1;
`;

const Item = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow: hidden;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.8);
`;

const Img = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const Dis = styled.p`
color:blue;
  position: absolute;
  width: 90%;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease;
  font-size: 15px;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
  box-sizing: border-box;
  text-shadow: 0 5px 10px #0004;
  
  @media (max-width: 480px) {
    top: 30px;
  }
`;

const Main = styled.h5`
  color: #333;
  margin-bottom: 0;
  margin-top: 20px;
  margin-left: 20px;
  
  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

const Slider = styled.h2`
  font-size: 2em;
  margin: 0;
  margin-left: 20px;
  
  @media (max-width: 480px) {
    font-size: 1.5em;
    margin-left: 10px;
  }
`;

const Tbnail = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: max-content;
  z-index: 100;
  display: flex;
  gap: 10px;
  transform: translateX(-50%);
  
  @media (max-width: 480px) {
    bottom: 10px;
    gap: 5px;
  }
`;

const Contentd = styled.div`
  width: 120px;
  height: 180px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  
  @media (max-width: 480px) {
    width: 100px;
    height: 150px;
  }
`;

const Titlet = styled.p`
  text-align: center;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const Imgt = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(imageHome); // Set default image to "Home"

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <ServicePage></ServicePage>
<TestimonialPage></TestimonialPage>
     <FooterPage></FooterPage>
    </Container>
  );
};

export default HomePage;
