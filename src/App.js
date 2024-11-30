import React from 'react';
import './App.css';

function App() {
  const skills = {
    languages: ["Java", "TypeScript", "JavaScript"],
    frameworks: ["Angular 8, 12, 17", "React", "Spring Boot"],
    webTechnologies: ["HTML5", "SCSS", "Bootstrap"],
    databases: ["MySQL", "PostgreSQL"],
    testing: ["Jasmine", "Karma"],
    webPerformance: ["Lazy loading", "Code Splitting", "Caching"],
    versionControl: ["Git", "Azure DevOps"],
    tools: ["Visual Studio Code", "Jira", "Kibana", "Postman", "SoapUI"]
  };

  const sectionames = {
    languages: 'Languages', frameworks: 'Frameworks', webTechnologies: 'Web Technologies', databases: 'Databases', testing: 'Testing', webPerformance: 'Web Performance', versionControl: 'Version Control', tools: 'Tools'
  };

  const projects = [
    {
      name: 'Group Chat App',
      description: 'A real-time group chat application built with Node.js and Angular, leveraging WebSocket for instant communication and seamless user interaction.',
      liveLink: 'https://group-chat-mentos.vercel.app/'
    },
    {
      name: 'Tic Tac Toe',
      description: 'A simple and interactive Tic Tac Toe game built with React. Features real-time play, intuitive UI, and game state tracking using React hooks.',
      liveLink: 'https://tic-tac-toe-mentos.vercel.app/'
    },
    {
      name: 'Analytics Dashboard',
      description: 'An interactive analytics dashboard built with Angular and Angular Material, showcasing data visualization, charts, and a clean, user-friendly UI.',
      liveLink: 'https://analytics-dashboard-mentos.vercel.app/'
    }
  ];
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#technologies">Technologies & Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h1>Ashish Kavathekar</h1>
        <h2><code>&lt;Enthusiastic Web Developer /&gt;</code></h2>
        <p>
          Hello! I'm a passionate web developer specializing in front-end development with a strong foundation in Core Java, SpringBoot for back-end solutions. Always eager to learn and implement the latest technologies to build dynamic and responsive web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="technologies" className="section-styling">
        <h1>Technologies & Skills</h1>
        <div className="projects-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-category card-styling" key={category}>
              <h2>{sectionames[category]}</h2>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="section-styling">
        <h1>My Projects</h1>
        <div className="projects-grid-style">
          {projects.map((project, index) => (
            <div key={index} className="card-styling">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Ashish K. All rights reserved.</p>
        <div>
          <a>akavathekar03@gmail.com</a> |
          <a target="_blank" href="https://github.com/mentossez">GitHub</a> |
          <a target="_blank" href="https://www.linkedin.com/in/ashish-kavathekar-b7b034213/">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
