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
          <div className="profile-card profile-card-full">
            <h3>간단 소개</h3>
            <p>
            4년차 경력의 서버 개발자로, Python/Django 및 Nest.js 기반의 서비스 설계·운영 경험을 보유하고 있습니다.
            </p>
            <ul className="profile-intro-list">
              <li>
                <strong>함께 하고 싶은 동료가 되기 위해 노력합니다.</strong>
                <ul className="profile-intro-sublist">
                  <li>부족한 부분을 보완하기 위해 팀 동료들의 의견을 경청하며 부족한 점을 개선하고, 성장하기 위해 노력합니다.</li>
                  <li>조금이라도 따뜻한 언행을 통해 다정한 동료가 되고자 노력합니다.</li>
                </ul>
              </li>
              <li>
                <strong>개발에만 국한되지 않고 다양한 경험을 추구합니다.</strong>
                <ul className="profile-intro-sublist">
                  <li>개발 전, 기획 단계에서 의견을 제시하며 함께 참여하고 작업하는 것을 추구합니다.</li>
                  <li>AI를 활용한 숏폼 만들기 웨비나를 참여하여 숏폼을 만들어보고, 사내 스터디를 통해 AI 음악 만들기 등을 경험해보았습니다.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="profile-grid-half">
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
