import React from 'react';
import styles from '../../styles/sections/skills.module.scss';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Основные технологии',
      skills: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'Next.js', 'Sass/SCSS']
    },
    {
      title: 'Сборка и инструменты',
      skills: ['Vite', 'Webpack', 'Parcel', 'Gulp', 'Git', 'GitHub']
    },
    {
      title: 'Тестирование',
      skills: ['Unit-тестирование', 'Jest', 'React Testing Library']
    },
    {
      title: 'Дополнительные навыки',
      skills: ['HTTP/REST', 'ООП', 'DRY/KISS', 'WordPress', 'Vue.js', 'SQL', 'Python', 'Docker', 'Linux']
    },
    {
      title: 'Языки',
      skills: ['Английский (B1)']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>Мои навыки</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;