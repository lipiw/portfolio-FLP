import goweb from '../../assets/goweb.png';
import horizon from '../../assets/horizon.jpg';
import rentalx from '../../assets/rentalx.jpg';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import tpcpAdmnistradora from '../../assets/tpcp.jpeg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tpcpAdmnistradora}
          link="https://github.com/lipiw/tpcp-admnistradora"
          h3="TPCP Admnistradora"
          p="Portfólio Empresarial"
        />
        <ProjectCard
          src={horizon}
          link="https://github.com/lipiw/horizon-final"
          h3="Horizon"
          p="Plataforma de Ingressos"
        />
        <ProjectCard
          src={goweb}
          link="https://github.com/lipiw/Go.Web"
          h3="Go Web"
          p="Landing Page de Startup"
        />
        <ProjectCard
          src={rentalx}
          link="https://github.com/lipiw/rentalx"
          h3="Rentalx"
          p="API de Aluguel de Carros"
        />
      </div>
    </section>
  );
}

export default Projects;
