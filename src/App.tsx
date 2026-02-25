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
        <section className="profile-section">
          <h2 className="section-title">About Me</h2>
          <div className="profile-grid">
            <div className="profile-card">
              <h3>간단 소개</h3>
              <p>
              4년차 경력의 서버 개발자로, Python/Django 및 Nest.js 기반의 서비스 설계·운영 경험을 보유하고 있습니다. 문제 해결과 협업에 강점을 갖추었으며, 최신 아키텍처와 배포 자동화 경험을 바탕으로 안정적이고 확장성 높은 서비스를 구현합니다.
              </p>
            </div>
            <div className="profile-card">
              <h3>경력</h3>
              <ul>
                <li>
                  <strong>모두의연구소 백엔드 개발자</strong>
                  <br />
                  <span className="profile-meta">2022.02 - 2026.01</span>
                </li>
              </ul>
            </div>
            <div className="profile-card">
              <h3>학력</h3>
              <ul>
                <li>
                  <strong>국민대학교</strong> · 전자공학부 전공
                  <br />
                  <span className="profile-meta">2009.03 - 2016.02 졸업</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
