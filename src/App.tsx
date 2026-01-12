import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 Backend Developer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
