import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledTestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  margin-top: 50px;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 20px;
  }

  .testimonials-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .testimonial {
    min-width: 100%;
    padding: 1rem 2rem;
    text-align: center;
    color: var(--light-slate);
    transition: var(--transition);
    /* Box styling for mobile to prevent content shifting */
    @media (max-width: 768px) {
      padding: 1rem;
      max-width: 90%;
      margin: 0 auto;
      background-color: var(--light-navy);
      border-radius: var(--border-radius);
      height: 200px; /* Fixed height for consistency on mobile */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .testimonial-content {
    font-size: 18px;
    margin-bottom: 15px;

    /* Truncate text on smaller screens */
    @media (max-width: 768px) {
      display: -webkit-box;
      -webkit-line-clamp: 3; /* Limit the lines shown */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .testimonial-author {
    font-weight: bold;
    font-size: 20px;
    color: var(--green);
  }

  .testimonial-title {
    color: var(--green);
    font-size: 16px;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s, transform 1s;
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s, transform 1s;
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      testimonials: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/testimonial/" }
          frontmatter: { showInTestimonials: { eq: true } }
        }
        sort: { fields: [frontmatter___name], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              title
              company
              linkedin
            }
            html
          }
        }
      }
    }
  `);

  const testimonials = data.testimonials.edges;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Truncate HTML content to a specific number of words
  const truncateText = (htmlContent, wordLimit) => {
    const text = htmlContent.replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <StyledTestimonialsSection>
      <h2 id="testimonials">Recommendations from others</h2>

      <div className="testimonials-wrapper">
        <TransitionGroup component={null}>
          {testimonials.map((testimonial, index) => (
            currentIndex === index && (
              <CSSTransition key={index} classNames="fade" timeout={1000}>
                <div className="testimonial">
                  <div
                    className="testimonial-content"
                    dangerouslySetInnerHTML={{
                      __html: window.innerWidth <= 768
                        ? truncateText(testimonial.node.html, 30)
                        : testimonial.node.html,
                    }}
                  />
                  <div className="testimonial-author">
                    {testimonial.node.frontmatter.linkedin ? (
                      <a 
                        href={testimonial.node.frontmatter.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {testimonial.node.frontmatter.name}
                      </a>
                    ) : (
                      testimonial.node.frontmatter.name
                    )}
                  </div>
                  <div className="testimonial-title">
                    {testimonial.node.frontmatter.title}, {testimonial.node.frontmatter.company}
                  </div>
                </div>
              </CSSTransition>
            )
          ))}
        </TransitionGroup>
      </div>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
