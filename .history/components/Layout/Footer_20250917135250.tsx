import React from 'react';
import styles from '../../styles/layout/footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p>&copy; {currentYear} Ростислав Зеберг. Все права защищены.</p>
          <p>Фронтенд-разработчик React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;