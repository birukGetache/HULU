import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import imageHome from '../assets/home.webp';
import { useSelector } from 'react-redux';
import Typewriter from './Typewriter';
import images from '../assets/images.jpg'
import TestimonialPage from './TestimonialPage';
import ServicePage from './ServicePage';
import FooterPage from './FooterPage';
import { FaBolt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import AboutPage from './AboutPage';
import Navbar from './Navbar';
import { translations } from './translations'; 
import FeedBack from './FeedBack';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  margin-top:140px;
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
  height:fit-content;
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
  display: grid;
  grid-template-columns:1fr 1fr;
  width: 100vw;
  justify-content: space-between;
height:fit-content;
  // Media query for mobile devices
  @media (max-width: 830px) { // Adjust the max-width value to target different screen sizes
   display:grid;
   grid-template-columns:1fr; // Stack items vertically
    align-items: center;    // Center items horizontally
    padding: 20px;         // Adjust padding for smaller screens
    height:fit-content;
  }
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
const P = styled.p`
height:30px;
background-color:#117BF6;
color:white;
margin:0;
margin-bottom:0;
text-align:center;`

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
// Styled container for the text
const TextContainer = styled.div`
box-sizing:border-box;
margin-bottom:150px;
width:50vw;
  diplay:flex;
  justify-content:center;
  align-items:start;
  padding-left: 200px;
  color: ${(props) => (props.theme === 'dark' ? '	 #e6f2ff' : 'black')};
  p {
 max-width:40vw;
    font-size: 2.5vw;
    .highlight {
    
    }
  }

  @media (max-width: 900px) {

  margin-bottom:0px;
    p {
      font-size: 1,5rem;
      margin-top: 10px;
       max-width:90vw;
       
      .highlight {
        font-size: 24px;
        margin-top: 0;
      }
    }
  @media (max-width: 820px) {
  margin:0 auto;
  display:flex;
  width:80vw;
  justify-content:center;
  padding:0;
  height: fit-content;
  p{
   font-size:20px;
  }
 
  }
`;

// Styled container for the image
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-right: 60px;
  margin-bottom:150px;
width:50vw;
  img {
    height: auto;
    width: 30vw;
      margin-right:140px;
    border-radius:20px;
  }

  @media (max-width: 930px) {
  margin-top:0;
  display:flex;
  justify-content:center;
    padding-right: 20px;
  height: fit-content;
    img {
      height: 20vh;
    
    }
  @media (max-width: 820px) {
  margin-top:0;
  display:flex;
  width:80vw;
  margin:auto;
  justify-content:center;
  padding:0;
  height: fit-content;
    img {
      width: 90%;
      height:auto;
      margin:0;
    }
  }
`;

const Titlet = styled.p`
  text-align: center;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

// Styled component for icon cards
const CardContainer = styled.div`
 width:80vw;
 margin:auto;
  display: flex;
  justify-content:space-between;
`;

const Card = styled.div`
height:201px;
  border: 1px solid #ddd;
  border-radius: 8px;
 background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : 'white')};
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#000066')};
  padding: 20px;
  font-size:20px;
  width: 20vw;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 10px 10px 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 10px 0;
    font-size: 1em;
  }

  p {
    color: #555;
    font-size:1em;
    margin-top:10px;
  }

  svg {
    font-size: 40px;
    color: #007bff;
  }
      @media (max-width: 930px) {
    font-size: 0.8em;
    max-width:90%;
      width: 30%;
  }
       @media (max-width: 450px) {
       height:100px;
       border:none;
       svg{
       margin:auto;
       }
       p{
       display:none;}
       }
`;
const T = styled.div`
height:100%;
display:flex;
align-items:start;
`
const HomePage = () => {
  const theme = useSelector((state) => state.theme.value);
  const language = useSelector((state) => state.language.value); // Assume you have a language state
  const [selectedImage, setSelectedImage] = useState(null); // Default selected image to null

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(()=>{
    console.log(language);
  },[language])
  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  const text = translations[language].text;
  const cardTexts = {
    efficient: translations[language].efficient,
    efficientDesc: translations[language].efficientDesc,
    reliable: translations[language].reliable,
    reliableDesc: translations[language].reliableDesc,
    easy: translations[language].easy,
    easyDesc: translations[language].easyDesc
  };

  return (
    <Container theme={theme}>
      <Navbar />
      <Header id='home'>
        <Class>
          <TextContainer theme={theme}>
            <T>
              <Typewriter
                text={text}
                speed={30}
                className="highlight"
                style={{ fontWeight: "bold" }}
              />
            </T>
          </TextContainer>
          <ImageContainer>
            <img src="/HULUABOUT.jpg" alt="Commission-Based Work" />
          </ImageContainer>
        </Class>
      </Header>
      <CardContainer>
        <Card theme={theme}>
          <FaBolt color="#117BF6" />
          <h3>{cardTexts.efficient}</h3>
          <p>{cardTexts.efficientDesc}</p>
        </Card>
        <Card theme={theme}>
          <FaShieldAlt color="#117BF6" />
          <h3>{cardTexts.reliable}</h3>
          <p>{cardTexts.reliableDesc}</p>
        </Card>
        <Card theme={theme}>
          <FaCheckCircle color="#117BF6" />
          <h3>{cardTexts.easy}</h3>
          <p>{cardTexts.easyDesc}</p>
        </Card>
      </CardContainer>
      <AboutPage theme={theme}/>
      <ServicePage theme={theme}  language = {language}  />
      <TestimonialPage theme={theme} language = {language} />
      <FeedBack theme={theme}></FeedBack>
      <FooterPage theme={theme} language = {language} />
      <P>&copy; {translations[language].footer}</P>
    </Container>
  );
};

export default HomePage;