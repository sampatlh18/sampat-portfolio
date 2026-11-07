import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Projects built around <span className="gradient-text">real needs.</span></>}
          description="Two web application projects that demonstrate my exposure to application workflows, data management and user-focused features."
        />

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${index % 2 ? "project-card-reverse" : ""}`}
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
            >
              <div className="project-art-wrap">
                <ProjectVisual type={project.visual} />
              </div>
              <div className="project-info">
                <div className="project-number">PROJECT / {project.number}</div>
                <h3>{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p>{project.description}</p>
                <div className="project-feature-list">
                  {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                </div>
                {project.technologies.length > 0 ? (
                  <div className="project-tech">
                    <span className="tech-label"><Layers3 size={13} /> TECHNOLOGIES</span>
                    <div>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  </div>
                ) : (
                  <div className="project-tech project-tech-note">
                    <span className="tech-label"><Layers3 size={13} /> TECHNOLOGY STACK</span>
                    <p>Not specified in the supplied resume — add the actual stack when available.</p>
                  </div>
                )}
                <div className="project-actions">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link project-link-primary">
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                    <Github size={15} /> GitHub <ExternalLink size={12} />
                  </a>
                </div>
                <span className="project-link-hint">Replace the example URLs with your actual project links.</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
