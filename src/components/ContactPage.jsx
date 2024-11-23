import React from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Styled components for layout
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
   padding-top:50px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin: -50px;
  text-align: center;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const InfoItem = styled.p`
  font-size: 1.1em;
  color: #555;
  margin: 10px 0;
`;

const MapSection = styled.div`
  width: 100%;
  max-width: 1200px;
  height:200px; // Ensures the map container has a fixed height
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative; // Needed for Leaflet map
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const SocialIcon = styled.a`
  font-size: 2em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
  
        <SubTitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SubTitle>
        <MapSection>
          <MapContainer
            center={[9.011704301013898, 38.754134401379275]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false} // Disables scroll wheel zoom
            doubleClickZoom={false} // Disables double click zoom
            dragging={true} // Allows dragging
            touchZoom={false} // Disables touch zoom
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[9.011704301013898, 38.754134401379275]}>
              <Popup>
                Amhara Bank, Legahar
              </Popup>
            </Marker>
          </MapContainer>
        </MapSection>


     
    </ContactContainer>
  );
};

export default ContactPage;
