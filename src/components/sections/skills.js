import React, { useEffect, useRef, useState } from 'react';
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
  order: 2;

  @media (min-width: 769px) {
    order: 1;
  }

  p {
    text-align: justify;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }

  .skill-bar {
    position: relative;
    height: 25px;
    width: 100%;
    background: #e0e0e0;
    border-radius: 15px;
    overflow: hidden;
  }

  .skill-name {
    position: absolute;
    left: 10px;
    top: 3px;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    z-index: 1;
    color: #333;
  }

  .skill-level {
    height: 100%;
    background: linear-gradient(90deg, var(--green) 0%, var(--blue) 100%);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    border-radius: 15px;
    opacity: 0.9;
    width: 0;
    transition: width 1.5s ease-in-out;
  }

  .skill-percentage {
    font-size: var(--fz-xs);
    color: #fff;
    font-weight: bold;
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (revealContainer.current) {
      observer.observe(revealContainer.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const skills = [
    { name: 'Web Application Penetration Testing', level: 99 },
    { name: 'Network Penetration Testing', level: 99 },
    { name: 'Active Directory Penetration Testing', level: 98 },
    { name: 'Attack Surface Reconnaissance', level: 100 },
    { name: 'Security Automation (Python)', level: 98 },
    { name: 'Adversary Emulation', level: 97 },
    { name: 'Source Code Review', level: 95 },
    { name: 'Network Forensics', level: 96 },
    { name: 'Linux System Hardening', level: 96 },
    { name: 'Incident Response and Log Analysis', level: 94 },
  ];

  return (
    <StyledAboutSection id="expertise" ref={revealContainer}>
      <h2 className="numbered-heading">Expertise</h2>

      <StyledText>
        <div className="skills-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-bar">
              <div className="skill-name">{skill.name}</div>
              <div
                className="skill-level"
                style={{
                  width: inView ? `${skill.level}%` : '0%',
                }}>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </StyledText>
    </StyledAboutSection>
  );
};

export default Skills;
