import React from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram ,FaTelegram } from 'react-icons/fa';
import { faUser, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
const IconWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
    
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 2.5em;
 color: #117BF6;
  margin-bottom: 20px;
  text-align: center;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const ServiceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 285px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
 background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : 'white')};
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#ccc')};
  color: #117BF6;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Icon = styled.div`
  font-size: 3em;
  color: #117BF6;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h2`
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#ccc')};
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

const ServicePage = ({ theme, language }) => {
  const services = [
    {
      id: 1,
      icon: (
        <div>
          <FontAwesomeIcon icon={faHome} title="Rent" color="#117BF6" />
          <FontAwesomeIcon icon={faMapSigns} title="Sale" color="#117BF6" />
        </div>
      ),
      title: {
        English: 'Land Sell and Rent',
        Amharic: 'መሬት ሽያጭ እና ኪራይ'
      },
      description: {
        English: 'We provide expert assistance with buying, selling, and renting land, ensuring smooth transactions through personalized support and market analysis.',
        Amharic: 'የግል ድጋፍ እና የገበያ ትንተና በማድረግ ገንዝብ ልውውጦችን ለማረጋገጥ መሬት በመግዛት, በመሸጥ እና በመከራየት ረገድ ባለሙያ እገዛ እናደርጋለን ።'
      },
    },
    {
      id: 2,
      icon: (
        <div>
          <FaTiktok color="#117BF6" />
          <FaTelegram color="#117BF6" />
          <FaInstagram color="#117BF6" />
          <FaFacebook color="#117BF6" />
          <FaYoutube color="#117BF6" />
        </div>
      ),
      title: {
        English: 'Social Media Marketing and Event Organizer',
        Amharic: 'ሶሻል ሚዲያ ማርኬቲንግ እና ኢቨንት ኦርጋናይዚንግ'
      },
      description: {
        English: 'Create a positive and proactive relationship with your social media followers, develop situations that align with your strategy, and organize various events.',
        Amharic: ' ከማህበራዊ ሚዲያ ተከታዮቻችሁ ጋር ጥሩና ቀጣይነት ያለው ግንኙነት በመፍጠር ከእቅዳችሁ ጋር የሚስማሙ ሁኔታዎችን መፍጠር፤የተለያዩ ኢቨንቶችን ማዘጋጀት፡፡'
      },
    },
    {
      id: 3,
      icon: (
        <svg
          fill="#117BF6"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#117BF6"
          height="110px"
          width="110px"
        >
          <path d="M18 0C13.515625 0 10 3.515625 10 8C10 12.484375 13.515625 16 18 16C22.484375 16 26 12.484375 26 8C26 3.515625 22.484375 0 18 0 Z M 30.40625 4C30.210938 4 30.007813 4.046875 29.84375 4.15625L28.6875 4.96875L27.5625 4.15625C27.457031 4.085938 27.34375 4.058594 27.21875 4.03125C27.730469 5.242188 28 6.582031 28 8C28 9.429688 27.707031 10.78125 27.1875 12L37 12C37.265625 12 37.53125 11.90625 37.71875 11.71875L39.71875 9.71875C39.90625 9.53125 40 9.265625 40 9L40 7C40 6.734375 39.90625 6.46875 39.71875 6.28125L37.71875 4.28125C37.53125 4.09375 37.265625 4 37 4L35.3125 4C35.046875 4 34.8125 4.09375 34.625 4.28125L33.5 5.4375L32.375 4.28125C32.1875 4.09375 31.921875 4 31.65625 4 Z M 16 6C17.105469 6 18 6.894531 18 8C18 9.105469 17.105469 10 16 10C14.894531 10 14 9.105469 14 8C14 6.894531 14.894531 6 16 6 Z M 15.6875 18C13.667969 18 11.832031 19.242188 11.09375 21.09375L8.125 28L7 28C5.347656 28 4 29.347656 4 31C4 32.652344 5.347656 34 7 34L7 47C7 48.652344 8.347656 50 10 50L13 50C14.652344 50 16 48.652344 16 47L16 46L34 46L34 47C34 48.652344 35.347656 50 37 50L40 50C41.652344 50 43 48.652344 43 47L43 34C44.652344 34 46 32.652344 46 31C46 29.347656 44.652344 28 43 28L41.875 28L38.9375 21.125C38.191406 19.253906 36.332031 18 34.3125 18 Z M 15.6875 20L34.3125 20C35.523438 20 36.636719 20.765625 37.09375 21.90625L39.90625 28.53125L38.9375 29.1875C38.152344 29.738281 37.234375 30 36.1875 30L13.8125 30C12.765625 30 11.867188 29.71875 11.0625 29.15625L10.09375 28.53125L12.9375 21.875C13.386719 20.757813 14.476563 20 15.6875 20 Z M 14.5 36C15.898438 36 17 37.101563 17 38.5C17 39.898438 15.898438 41 14.5 41C13.101563 41 12 39.898438 12 38.5C12 37.101563 13.101563 36 14.5 36 Z M 35.5 36C36.898438 36 38 37.101563 38 38.5C38 39.898438 36.898438 41 35.5 41C34.101563 41 33 39.898438 33 38.5C33 37.101563 34.101563 36 35.5 36Z"></path>
        </svg>
      ),
      title: {
        English: 'Car Rent and Sell',
        Amharic: 'መኪና ኪራይ እና ሽያጭ'
      },
      description: {
        English: 'Connecting with customers who are interested in buying and servicing cars.',
        Amharic: ' መኪና መሸጥና ማከራየት የሚፈልጉ ደንበኞችን መግዛትና መከራየት ከሚፈልጉ ደንበኞች ጋር ማገናኘት፡:'
      },
    },
    {
      id: 4,
      icon: (
        <IconWrapper>
          <div>
            <FontAwesomeIcon icon={faUser} size="1x" color="#117BF6" />
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} size="1x" color="#117BF6" />
          </div>
          <div>
            <FontAwesomeIcon icon={faUserTie} size="1x" color="#117BF6" />
          </div>
        </IconWrapper>
      ),
      title: {
        English: 'Human Resource',
        Amharic: 'የሰው ሀብት'
      },
      description: {
        English: 'We provide complete HR services, including recruitment, employee management, and organizational development, ensuring effective practices and tailored solutions to enhance workforce efficiency.',
        Amharic: 'የምልመላ፣ የሰራተኛ አስተዳደርእና ድርጅታዊ ልማትን ጨምሮ የተሟላ የHR አገልግሎት እንሰጣለን። ውጤታማ ተግባራትን እና የሰራተኞችን ውጤታማነት ለማሻሻል የተጣጣሙ መፍትሄዎችን እናቀርባለን።'
      },
    }
  ];
 console.log(language)

  return (
    <Container id="services">
   <Title>{language === "English" ? "Our Services" : "አገልግሎት"}</Title>
    <Services>
      {services.map((service) => (
     
        <ServiceCard key={service.id} theme={theme}>
          <Icon>{service.icon}</Icon>
          {/* Safely access title and description */}
          <ServiceTitle theme={theme}>
            {service.title[language] || 'Title not found'} {/* Fallback in case of undefined */}
          </ServiceTitle>
          <Description>
            {service.description[language] || 'Description not found'} {/* Fallback in case of undefined */}
          </Description>
        </ServiceCard>
      ))}
    </Services>
    </Container>
  );
};

export default ServicePage;