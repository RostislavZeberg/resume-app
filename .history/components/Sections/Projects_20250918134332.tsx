import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import styles from '../../styles/sections/projects.module.scss';
import { projects } from '@/info/projects';

const Projects: React.FC = () => {
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