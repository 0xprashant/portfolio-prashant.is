import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const StyledText = styled.div`
  order: 2; /* For mobile, text comes after the image */

  @media (min-width: 769px) {
    order: 1; /* For desktop, maintain original order */
  }

  p {
    text-align: justify; /* Ensures text is justified */
  }
`;

const StyledPic = styled.div`
  order: 1; /* For mobile, image comes first */

  @media (min-width: 769px) {
    order: 2; /* For desktop, maintain original order */
  }

  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: transparent;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: transparent;
      mix-blend-mode: normal;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/main_pic.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>

        <StyledText>
          <div>
            <p>
              I am a dedicated information security professional with three years of experience and a passion for CyberSecurity. 
              I proudly represented India in {' '} <a href="https://worldskills2024.com/en/home-page/" target="_blank">WorldSkills 2024</a>, 
              earning a {' '} <a href="https://www.credly.com/badges/0a6748fc-cfab-41c7-9142-28a1b438f643/public_url" target="_blank">Medallion for Excellence</a> among global competitors of 21 countries. 
              Holding certifications such as {' '} <a href="https://www.offsec.com/courses/pen-300/" target="_blank">OSEP</a> (OffSec Experienced Penetration Tester), {' '} <a href="https://www.offsec.com/courses/pen-200/" target="_blank">OSCP</a> (OffSec Certified Professional), and {' '} <a href="https://www.alteredsecurity.com/redteamlab" target="_blank">CRTE</a> (Certified Red Team Expert).
            </p>
            <p>
              I specialize in Red Teaming, Adversary Emulation, and Web Application Penetration Testing, while also possessing skills in Blue Team operations, 
              including Source Code Review, Incident Response, Network Forensics, and Log Analysis.
            </p>
            <p>
              My commitment to continuous learning is evident through my achievements in CTFs and pro labs on {' '} <a href="https://www.hackthebox.com/" target="_blank">HackTheBox</a>, 
              alongside earning a Gold medal in the {' '} <a href="https://worldskillsindia.co.in/" target="_blank">India Skills</a> Cybersecurity Competition 2024. 
              I strive to stay at the forefront of industry trends and techniques, enhancing my skill set to better address emerging security challenges.
            </p>
            <p>
              Outside of my professional endeavors, I have a keen interest in cars, motorcycles, and fitness, complemented 
              by a background in cricket at the district level. This blend of personal and professional passions drives my 
              dedication to excellence in all areas of my life.
            </p>
          </div>
          
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;