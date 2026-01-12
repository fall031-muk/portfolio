import React from 'react';
import { Project } from '../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{project.name}</h2>
      </div>

      <p className="description">{project.description}</p>

      <div className="project-meta">
        <div className="meta-item">
          <span className="label">Role:</span>
          <span>{project.role}</span>
        </div>
        <div className="meta-item">
          <span className="label">Period:</span>
          <span>{project.period}</span>
        </div>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tags">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="contributions">
        <h3>주요 기여 사항</h3>
        <ul>
          {project.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      </div>

      {project.commits && project.commits.length > 0 && (
        <div className="commits">
          <h3>주요 커밋</h3>
          <ul className="commit-list">
            {project.commits.map((commit, index) => (
              <li key={index}>
                <span className="commit-date">{commit.date}</span>
                <span className="commit-message">{commit.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.problemSolutions && project.problemSolutions.length > 0 && (
        <div className="problem-solutions">
          <h3>주요 문제 해결 경험</h3>
          {project.problemSolutions.map((problem, index) => (
            <div key={index} className="problem-item">
              <h4 className="problem-title">{problem.title}</h4>
              <div className="problem-detail">
                <div className="detail-section">
                  <span className="detail-label">상황</span>
                  <p className="detail-content">{problem.situation}</p>
                </div>
                <div className="detail-section">
                  <span className="detail-label">해결</span>
                  <p className="detail-content">{problem.solution}</p>
                </div>
                <div className="detail-section result-section">
                  <span className="detail-label">결과</span>
                  <p className="detail-content">{problem.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
