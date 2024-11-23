import React ,{useState}from 'react';
import styled from '@emotion/styled';
import teamImage1 from '../assets/home.jpg'; // Update with actual paths to your images
import teamImage2 from '../assets/home.jpg';
import { translations } from './translations';
import { useSelector } from 'react-redux';
const AboutContainer = styled.div`
 width:75%;
 margin:auto;

`;

const Title = styled.h1`
  font-size: 2.5em;
   color:#117BF6;
  margin-bottom: 20px;
  text-align: center;
    @media (max-width: 560px) {
 font-size:30px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

const Section = styled.section`
  flex: 1 1 45%; /* Adjusts width based on available space */
  min-width: 30%; /* Minimum width for smaller screens */
  margin-bottom: 20px;
   background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : 'white')};
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#ccc')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Stack vertically on small screens */
  }
`;

const SubTitle = styled.h2`
  font-size: 2em;
  color:#117BF6;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  text-align: center; /* Center align text for better readability */
  img{
  width:80%;
  height:auto;
  border-radius:10px;}
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: center; /* Center team members horizontally */
  gap: 30px; /* Increase space between team members */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    align-items: center; /* Center align items */
    gap: 20px; /* Adjust gap on smaller screens */
  }
`;

const TeamMember = styled.div`
  flex: 1 1 280px; /* Flex-grow, flex-shrink, and flex-basis */
  max-width: 320px; /* Slightly larger max-width */
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px; /* Increased padding for better spacing */
`;

const TeamImage = styled.img`
  width: 120px; /* Set a fixed width for images */
  height: 120px; /* Set a fixed height for images */
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover; /* Ensure images cover their container */
`;

const TeamName = styled.h3`
  font-size: 1.6em;
  color: #333;
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  font-size: 1.1em;
  color: #555;
`;

const AboutPage = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedLanguage = useSelector((state) => state.language.value); // Get language from Redux store

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Fetching translated texts
  const t = translations[selectedLanguage] || translations['English']; // Fallback to English if language not found

  // Text content
  const textabout = t.textabout;
  const truncatedText = textabout.slice(0, 200) + '...';

  return (
    <AboutContainer theme={theme} id='about'>
      <Title>{t.about}</Title>

      <SectionWrapper theme={theme}>
        <Section theme={theme}>
          <Paragraph>
            <img src='/HULU.avif' alt="HULU" style={{ width: '100%', height: 'auto' }} />
          </Paragraph>
        </Section>
        <Section theme={theme}>
          <Paragraph>
            {isExpanded ? textabout : truncatedText}
            <button
              onClick={handleToggle}
              style={{ border: "none", backgroundColor: "transparent", textDecoration: "underline", color: "blue" }}
            >
              {isExpanded ? t.seeLess : t.seeMore}
            </button>
          </Paragraph>
        </Section>

        <Section theme={theme}>
          <SubTitle>{t.missionTitle}</SubTitle>
          <Paragraph>
            {t.missionText}
          </Paragraph>
        </Section>

        <Section theme={theme}>
          <SubTitle>{t.historyTitle}</SubTitle>
          <Paragraph>
            {t.historyText}
          </Paragraph>
        </Section>
      </SectionWrapper>
    </AboutContainer>
  );
};

export default AboutPage;