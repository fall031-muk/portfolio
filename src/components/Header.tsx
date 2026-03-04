import React from 'react';
import './Header.css';
import profileImage from '../assets/profile.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-profile">
          <img src={profileImage} alt="프로필 사진" className="header-profile-image" />
        </div>
        <div className="header-text">
          <h1>Backend Developer Portfolio</h1>
          <p className="subtitle">
            학습 도메인을 이해하고, 운영·확장·성능까지 고려해서 설계할 수 있는 백엔드 개발자
          </p>
          <div className="contact-info">
            <a href="https://github.com/fall031-muk" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://velog.io/@fall031/posts" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
