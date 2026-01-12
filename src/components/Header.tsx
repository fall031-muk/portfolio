import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Backend Developer Portfolio</h1>
        <p className="subtitle">학습 도메인을 이해하고, 운영·확장·성능까지 고려해서 설계할 수 있는 백엔드 개발자</p>
        <div className="contact-info">
          <a href="https://github.com/fall031-muk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
