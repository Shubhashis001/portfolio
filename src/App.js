import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./index.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Shubhashis</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I am <br />
            <span>Shubhashis Sarkar</span>
          </h1>

          <p>
            B.Tech CSE (Data Science) <br />
            Brainware University
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.png" alt="Profile" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section glass">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student specializing in Data Science.
          I enjoy programming, problem solving, and building real-world
          applications using modern technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skill-grid">
          <div className="glass card">Python</div>
          <div className="glass card">Java</div>
          <div className="glass card">C</div>
          <div className="glass card">HTML & CSS</div>
          <div className="glass card">JavaScript</div>
          <div className="glass card">React</div>
          <div className="glass card">Data Structures</div>
          <div className="glass card">Git & GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="glass project-card">
            <h3>AI Assistant</h3>
            <p>AI assistant using NLP and OpenAI API.</p>
          </div>
          <div className="glass project-card">
            <h3>Portfolio Website</h3>
            <p>React portfolio deployed on Vercel.</p>
          </div>
        </div>
      </section>

      {/* CONTACT WITH REAL ICONS */}
      <section id="contact" className="section glass">
        <h2>Contact</h2>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhashissarkar375@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Shubhashis001"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhashis-sarkar-s1"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Shubhashis Sarkar
      </footer>

    </div>
  );
}

export default App;
