import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faLinkedin, faMedium, faGithub, faAngellist,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Portfolio.css';

function Portfolio() {
  const [text, setText] = useState('');
  const message = "I'm Misal. Glad to see you! I'm a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.";

  useEffect(() => {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < message.length) {
        setText((prevText) => prevText + message.charAt(charIndex));
        charIndex += 1;
      }
    };

    const typingInterval = setInterval(typeText, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="hero">
        <div className="hero-content">
          <h1>
            I&apos;m Misal.
            <br />
            Glad to see you!
          </h1>
          <p>
            {text}
          </p>
        </div>
        <div className="lets-connect">
          <span>LET&apos;S CONNECT</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/misal-azeem/" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/misal_azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@misal.azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faMedium} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/misalazeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </a>
            </li>
            <li>
              <a href="https://wellfound.com/u/misal-azeem" target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={faAngellist} className="fa-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
