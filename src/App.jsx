import "./App.css";
import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="profile-section">
          <img
            src={profile}
            alt="B Sri Hasini"
            className="profile"
          />
        </div>

        <div className="hero-content">

          <span className="badge">
            Computer Science Engineering Student
          </span>

          <h1>B SRI HASINI</h1>

          <h3>
            Aspiring Software Engineer • Front-End Developer • AI Enthusiast
          </h3>

          <p className="hero-description">
            Passionate Computer Science student at KL University,
            actively building expertise in Java and Front-End Development
            while exploring the transformative potential of Artificial
            Intelligence. Dedicated to continuous learning, problem
            solving, and creating impactful technology solutions.
          </p>

          <div className="hero-info">

            <div className="info-card">
              <h4>Email</h4>
              <p>bsrihasini25@gmail.com</p>
            </div>

            <div className="info-card">
              <h4>Phone</h4>
              <p>+91 9603999999</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Vijayawada, India</p>
            </div>

            <div className="info-card">
              <h4>Date of Birth</h4>
              <p>30 August 2008</p>
            </div>

          </div>

          <div className="hero-buttons">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="card">

        <h2>About Me</h2>

        <p>
          Hi, I'm Hasini, a passionate and curious learner currently
          pursuing my B.Tech in Computer Science and Engineering (CSE)
          at KL University.
        </p>

        <br />

        <p>
          Right now, I'm actively learning Java and Front-End
          Development to build a strong programming foundation and
          solve real-world problems through code.
        </p>

        <br />

        <p>
          Deeply interested in how Artificial Intelligence is
          transforming the world, I aspire to contribute to
          impactful technology projects and continuously expand
          my knowledge and skills.
        </p>

      </section>

      {/* EDUCATION */}

      <section className="card">

        <h2>Education</h2>

        <div className="education-item">
          <h3>KL University</h3>
          <span>2025 – Present</span>
          <p>B.Tech – Computer Science & Engineering</p>
        </div>

        <div className="education-item">
          <h3>Sarada Educational Institutions</h3>
          <span>2023 – 2025</span>
          <p>Intermediate (MPC)</p>
          <p>Percentage: 94.1%</p>
        </div>

        <div className="education-item">
          <h3>Nalanda Vidya Niketan</h3>
          <span>2015 – 2023</span>
          <p>Secondary Education</p>
          <p>Percentage: 83.2%</p>
        </div>

        <div className="education-item">
          <h3>St Anne's High School</h3>
          <span>2011 – 2015</span>
          <p>Primary Education</p>
        </div>

      </section>

      {/* SKILLS */}

      <section className="card">

        <h2>Technical Skills</h2>

        <div className="skill">
          <span>Java</span>
          <div className="bar">
            <div className="fill java"></div>
          </div>
        </div>

        <div className="skill">
          <span>HTML & CSS</span>
          <div className="bar">
            <div className="fill html"></div>
          </div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="bar">
            <div className="fill js"></div>
          </div>
        </div>

        <div className="skill">
          <span>React JS</span>
          <div className="bar">
            <div className="fill react"></div>
          </div>
        </div>

      </section>

      {/* LANGUAGES */}

      <section className="card">

        <h2>Languages</h2>

        <div className="language-grid">

          <div className="language-card">
            <h4>English</h4>
            <p>Professional Proficiency</p>
          </div>

          <div className="language-card">
            <h4>Telugu</h4>
            <p>Native Proficiency</p>
          </div>

          <div className="language-card">
            <h4>Hindi</h4>
            <p>Intermediate Proficiency</p>
          </div>

          <div className="language-card">
            <h4>German</h4>
            <p>Basic Proficiency</p>
          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}

      <section className="card">

        <h2>Certifications</h2>

        <ul className="cert-list">
          <li>3 Cambridge Certification</li>
          <li>Linguaskill Certification</li>
          <li>MOOC Certification</li>
        </ul>

      </section>

      {/* INTERESTS */}

      <section className="card">

        <h2>Areas of Interest</h2>

        <ul className="cert-list">
          <li>Artificial Intelligence</li>
          <li>Software Development</li>
          <li>Web Development</li>
          <li>Problem Solving</li>
          <li>Technology & Innovation</li>
        </ul>

      </section>

      {/* CONTACT */}

      <section className="card">

        <h2>Connect With Me</h2>

        <div className="hero-buttons">

          <a
            href="https://www.linkedin.com/in/b-sri-hasini-b86b03375/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>

        </div>

      </section>
       <footer className="footer">
  <div className="footer-content">
    <h3>B Sri Hasini</h3>

    <div className="footer-links">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a href="mailto:bsrihasini25@gmail.com">
        Email
      </a>
    </div>

    <p className="copyright">
      © 2026 B Sri Hasini. All Rights Reserved.
    </p>
  </div>
</footer>
    </div>
    
  );
}

export default App;