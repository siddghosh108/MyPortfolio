import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles.css';

const Homepage = () => {
  const typedText = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'a full-stack developer',
        'a front-end developer',
        'a back-end developer',
        'a software developer',
      ],
      typeSpeed: 80,
      loop: true,
      backSpeed: 30,
    };

    const typed = new Typed(typedText.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="homepage" id="homepage">
      <div className="homepage-content">
        <h1>Hi, I&apos;m Siddhartha Ghosh</h1>
        <p>
          <span ref={typedText} />
        </p>
        <p className="intro-about">
          A passionate Full Stack Developer, crafting seamless web applications.
          <br />
          I&apos;ve spent
          over 1300+ hours mastering JavaScript, React, Ruby on Rails, and more.
          <br />
          Collaborative and driven by learning, I&apos;m excited to tackle new
          challenges and elevate digital landscapes.
          <br />
          Explore my work and let&apos;s connect to shape innovative tech
          ventures!
        </p>
        <div className="socials">
          <a
            href="https://github.com/siddghosh108"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharthagh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
