import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/layout/header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">Фронтенд-разработчик React + Next</Link>
          </div>
          
          <button 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Контакты</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Навыки</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Обо мне</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Проекты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;