import React from 'react';
import styled from '@emotion/styled';

const ServicesContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
   padding-top:80px;
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
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  text-align: center; /* Center align text for better readability */
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    align-items: center; /* Center align items */
    gap: 15px; /* Adjust gap on smaller screens */
  }
`;

const ServiceCard = styled.div`
  flex: 1 1 280px;
  max-width: 300px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid #ddd;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const HistorySection = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const HistoryTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 15px;
  text-align: center;
`;

const HistoryParagraph = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>

      <Section>
        <SubTitle>Introduction</SubTitle>
        <Paragraph>
          We offer a range of high-quality services designed to meet your needs. Our team is dedicated to providing exceptional solutions tailored to your specific requirements. Explore our services below to see how we can help you achieve your goals.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Our Services</SubTitle>
        <ServiceList>
          <ServiceCard>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>
              We create responsive, user-friendly websites that help you connect with your audience and grow your business. Our web development services include front-end and back-end development, e-commerce solutions, and more.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Mobile App Development</ServiceTitle>
            <ServiceDescription>
              Our mobile app development team builds engaging and intuitive apps for iOS and Android. We focus on delivering high-performance applications that meet the needs of your users and align with your business objectives.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Digital Marketing</ServiceTitle>
            <ServiceDescription>
              Enhance your online presence with our digital marketing services. We offer SEO, social media marketing, content creation, and other strategies to help you reach your target audience and increase your brand's visibility.
            </ServiceDescription>
          </ServiceCard>
        </ServiceList>
      </Section>

      <Section>
        <SubTitle>Our Mission</SubTitle>
        <Paragraph>
          Our mission is to empower businesses by providing innovative and effective digital solutions. We strive to exceed our clients' expectations by delivering exceptional quality and unparalleled service in every project we undertake.
        </Paragraph>
      </Section>

      <HistorySection>
        <HistoryTitle>Our History</HistoryTitle>
        <HistoryParagraph>
          Since our inception in 2010, we have evolved from a small startup into a leading provider of digital solutions. Our journey began with a passion for technology and a commitment to excellence. Over the years, we have expanded our services, embraced cutting-edge technologies, and built a team of experts dedicated to helping our clients succeed. Our history is a testament to our growth, innovation, and unwavering dedication to delivering outstanding results.
        </HistoryParagraph>
      </HistorySection>
    </ServicesContainer>
  );
};

export default ServicesPage;
