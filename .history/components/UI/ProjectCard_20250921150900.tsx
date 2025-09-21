import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ui/project-card.module.scss';

interface Project {
  name: string;
  description: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      {/* <div className={styles.projectImage}>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
        </a>
      </div> */}
      <Image
        src={`/${project.name.toLowerCase()}.jpg`}
        alt={project.name}
        className={styles.projectImage}
        width={400}
        height={250}
        style={{
          width: '100%',
          height: 'auto',
        }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHL0Uf5aT//Z"
      />
      <div className={styles.projectContent}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.projectActions}>
          <a
            href={project.demoLink}
            className={styles.demoButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Перейти к демонстрации
          </a>
          <a
            href={project.codeLink}
            className={styles.codeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть код
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;