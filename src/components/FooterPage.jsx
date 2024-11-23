import React from 'react';
import styled from '@emotion/styled';
import { FaTiktok, FaYoutube, FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import logo from '../assets/HULU.png'; // Update with the path to your logo
import ContactPage from './ContactPage';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
   background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : ' #f2f2f2')};
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
justify-content:space-between;

  width: 100%;
  max-width: 1200px;
  gap: 20px;


  @media (max-width: 960px) {
  display:grid;
    grid-template-columns:1fr 1fr;
     align-items:start;
    gap: 20px;
  }
      @media (max-width: 680px) {
  display:flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 90px;
  height:90px;
  margin-bottom: 10px;
  border-radius:50%;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0;
`;

const SocialMedia = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SocialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin:7px;
`;

const SocialIcon = styled.a`
  font-size: 1.4em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

const SocialLabel = styled.span`
  font-size: 1em;
  color: #555;
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
const Socials = styled.div`
display:flex;
`
const Text = styled.span`
margin: 10px auto;
 color:${(props) => (props.theme === 'dark' ? '#000066' : ':#117BF6')};
font-size:20px;
padding:10px;
`

const QuikLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const NavList = styled.ul`

  list-style: none;
  display: grid;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
  display:flex;
  justify-content:start;
  padding:0;

`;
const P = styled.p`
margin: 10px auto;
color:#117BF6;
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#117BF6')};
font-size:20px;
padding:10px;
`
const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
   color:${(props) => (props.theme === 'dark' ? '#000066' : '#117BF6')};
`
const Button = styled.button`
background-color:#117BF6;
color:white;
border-radius:40px;
border:none;
height:40px;
width:150px;`
const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  padding: 10px 4px;
  font-size: 13px;
  border-radius: 5px;

  &:hover {

  }
  font-family: "Poppins", system-ui;
`;
const S = styled.span`
 color:${(props) => (props.theme === 'dark' ? '#000066' : ':#117BF6')};`
const H = styled.p`
color:#555;
overflow-wrap: break-word; `
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Close the mobile menu after selection
  }
};


const FooterPage = ({ theme, language }) => {
  const latitude = 9.011704301013898;
  const longitude = 38.754134401379275;
  const zoomLevel = 15; // Adjust the zoom level if needed
  const handleClick = () => {
    // Open the Telegram bot in a new tab or window
    window.open('https://t.me/HuluA_bot', '_blank');
  };

  // Construct the URLs for email, phone, and Google Maps
  const emailUrl = 'hulugeneralcommission@gmail.com';
  const phoneUrl = 'tel:+251963959694'; // Format the phone number as needed
  const mapUrl = `https://www.google.com/maps/@${latitude},${longitude},${zoomLevel}z`;

  // Texts in English and Amharic
  const texts = {
    companyInfo: {
      English: {
        description: 'We are a leading company providing high-quality services tailored to meet your needs. Our team is dedicated to delivering excellence and ensuring customer satisfaction.',
      },
      Amharic: {
        description: 'እኛ እንደ ታላቅ ኩባንያ እንደ ጥራት አገልግሎት እንዲሰጥ በቅርብ የተዘጋጁ አገልግሎቶች እንቀርባለን። ቡድናችን በጥራት እንዲደርስና ደኅንነት እንዲሆን የተገነዘበ ነው።'
      }
    },
    quickLinks: {
      English: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact'
      },
      Amharic: {
        home: 'መነሻ',
        about: 'ስለ እኛ',
        services: 'አገልግሎቶች',
        contact: 'እንዴት ትገናኝ'
      }
    },
    contact: {
      English: {
        contactUs: 'Contact Us',
        email: 'hulugeneralcommission@gmail.com',
        phone: '+2519-63-95-96-94',
        address: 'Legehar, Ahmara Bank.',
        botText: 'Go to Telegram Bot',
        botDesc: 'Register on Bot'
      },
      Amharic: {
        contactUs: 'እንዴት ትገናኝ',
        email: 'hulugeneralcommission@gmail.com',
        phone: '+2519-63-95-96-94',
        address: 'ለገሃር፣ አምራ ባንክ።',
        botText: 'ወደ ቴሌግራም ቦት ይሂዱ',
        botDesc: 'በቴሌግራም ቦት ይመዝገቡ'
      }
    }
  };

  return (
    <FooterContainer id='contact' theme={theme}>
      <FooterContent>
        <CompanyInfo>
          <P theme={theme}>
          {language === 'English' ? "Our Company" : " የእኛ ኩባንያ "}
          </P>
          <div style={{ display: "grid", alignContent: "center", borderRadius: "50%", objectFit: "cover" }}>
            <Logo src={logo} alt="Company Logo" />
          </div>
          <Description>
            {language === 'English' ? texts.companyInfo.English.description : texts.companyInfo.Amharic.description}
          </Description>
        </CompanyInfo>

        <QuikLink>
          <P theme={theme}>
          {language === 'English' ? "Quick Link" : "አገናኝ"}
          </P>
          <NavList>
            <NavItem onClick={() => scrollToSection('home')}>
              <span><FaGreaterThan size={12} color="black" /> <NavLink to="#">{language === 'English' ? texts.quickLinks.English.home : texts.quickLinks.Amharic.home}</NavLink></span>
            </NavItem>
            <NavItem onClick={() => scrollToSection('about')}>
              <span><FaGreaterThan size={12} color="black" /> <NavLink to="#">{language === 'English' ? texts.quickLinks.English.about : texts.quickLinks.Amharic.about}</NavLink></span>
            </NavItem>
            <NavItem onClick={() => scrollToSection('services')}>
              <span><FaGreaterThan size={12} color="black" /> <NavLink to="#">{language === 'English' ? texts.quickLinks.English.services : texts.quickLinks.Amharic.services}</NavLink></span>
            </NavItem>
            <NavItem onClick={() => scrollToSection('contact')}>
              <span><FaGreaterThan size={12} color="black" /> <NavLink to="#">{language === 'English' ? texts.quickLinks.English.contact : texts.quickLinks.Amharic.contact}</NavLink></span>
            </NavItem>
          </NavList>
        </QuikLink>

        <SocialMedia theme={theme}>
          <S theme={theme} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "19px", fontSize: "20px" }}>
            {language === 'English' ? "Contact US" : "ያግኙን"}
          </S>
          <div>
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '20px' }}>
                <a href={`mailto:${emailUrl}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <FaEnvelope style={{ fontSize: '24px', color: '#555', marginRight: '8px' }} />
                  <span>{language === 'English' ? texts.contact.English.email : texts.contact.Amharic.email}</span>
                </a>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <a href={phoneUrl} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <FaPhone style={{ fontSize: '24px', color: '#555', marginRight: '8px', transform: 'scaleX(-1)' }} />
                  <span>{language === 'English' ? texts.contact.English.phone : texts.contact.Amharic.phone}</span>
                </a>
              </div>
              <div>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <FaMapMarkerAlt style={{ fontSize: '24px', color: '#555', marginRight: '8px' }} />
                  <span>{language === 'English' ? texts.contact.English.address : texts.contact.Amharic.address}</span>
                </a>
              </div>
            </div>
          </div>

          <Socials>
            <span>
              <SocialItem>
                <SocialIcon href="https://tiktok.com/@hulugeneralcommission? t= 8 p3kz0clhsr" target="_blank" rel="noopener noreferrer">
                  <FaTiktok color='#555' />
                </SocialIcon>
              </SocialItem>
            </span>
            <span>
              <SocialItem>
                <SocialIcon href="https://t.me/HuluA_bot" target="_blank" rel="noopener noreferrer">
                  <FaTelegram color='#555' />
                </SocialIcon>
              </SocialItem>
            </span>
            <span>
              <SocialItem>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram color='#555' />
                </SocialIcon>
              </SocialItem>
            </span>
            <span>
              <SocialItem>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook color='#555' />
                </SocialIcon>
              </SocialItem>
            </span>
            <span>
              <SocialItem>
                <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube color='#555' />
                </SocialIcon>
              </SocialItem>
            </span>
          </Socials>
        </SocialMedia>

        <App theme={theme}>
          <P theme={theme}> 
          {language === 'English' ? "Download App" : " መተግበሪያ አውርድ "}
          </P>
          <H>
            {language === 'English' ? 'Our app used for register and see job according to your preferences' : 'መተግበሪያችን ለመዝግብ እና በተመረጡ እንደ ምርጫ ስራዎች ማየት ይጠቀሙበታል'}
          </H>
          <Button>  {language === 'English' ? "HULU App" : "መተግበሪያ አውርድ"}</Button>
          <P theme={theme}>
            {language === 'English' ? texts.contact.English.botDesc : texts.contact.Amharic.botDesc}
          </P>
       
          <Button onClick={handleClick}>
            {language === 'English' ? texts.contact.English.botText : texts.contact.Amharic.botText}
          </Button>
        </App>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterPage;

