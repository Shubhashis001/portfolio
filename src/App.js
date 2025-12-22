function App() {
  const sectionStyle = {
    background: "#020617",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px"
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "#020617",
    padding: "15px 0",
    textAlign: "center",
    zIndex: 1000
  };

  const linkStyle = {
    margin: "0 15px",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <>
      {/* NAVBAR */}
      <div style={navStyle}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#education" style={linkStyle}>Education</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "120px 60px", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ color: "#38bdf8" }}>Shubhashis Sarkar</h1>
        <h2>B.Tech CSE (Data Science)</h2>
        <p>Student at Brainware University</p>

        <div id="about" style={sectionStyle}>
          <h2>About Me</h2>
          <p>
            I am a Computer Science student specializing in Data Science.
            I am interested in programming, problem solving, and learning
            new technologies. My goal is to build real-world applications
            and grow as a software developer.
          </p>
        </div>

        <div id="skills" style={sectionStyle}>
          <h2>Skills</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React (Beginner)</li>
            <li>Data Structures (Basics)</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div id="projects" style={sectionStyle}>
          <h2>Projects</h2>
          <h3 style={{ color: "#38bdf8" }}>AI Assistant</h3>
          <p>
            Developed an AI Assistant that can interact with users,
            understand natural language queries, and provide intelligent
            responses using AI concepts.
          </p>
          <p><b>Technologies:</b> Python, OpenAI API</p>
        </div>

        <div id="education" style={sectionStyle}>
          <h2>Education</h2>
          <p>
            <b>Bachelor of Technology (B.Tech)</b><br />
            Computer Science & Engineering (Data Science)<br />
            Brainware University<br />
            2022 – Present
          </p>
        </div>

        <div id="contact" style={sectionStyle}>
          <h2>Contact</h2>
          <p>Email: your-email@gmail.com</p>
          <p>GitHub: github.com/your-username</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
        </div>
      </div>
    </>
  );
}

export default App;
