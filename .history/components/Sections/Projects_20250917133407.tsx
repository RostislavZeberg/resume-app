import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import styles from '../../styles/sections/projects.module.scss';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'CinemaGuide',
      description: 'Приложение CinemaGuide создано на React + TypeScript + Vite',
      demoLink: 'https://rostislavzeberg.github.io/CinemaGuide',
      codeLink: 'https://github.com/RostislavZeberg/CinemaGuide/tree/dev',
      technologies: ['React', 'TypeScript', 'Vite', 'React Router DOM', 'Axios', 'React Hook Form', 'Zod', 'React Query']
    },
    {
      name: 'ShopOnline',
      description: 'Онлайн-магазин на Next.js',
      demoLink: 'https://shop-online-omega.vercel.app/',
      codeLink: 'https://github.com/RostislavZeberg/ShopOnline',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Redux Toolkit', 'SCSS', 'Axios', 'GSAP', 'Zod']
    },
    // Добавьте остальные проекты по аналогии
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Мои проекты</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <a 
            href="https://github.com/RostislavZeberg?tab=repositories" 
            className={styles.viewAllButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть все проекты
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;