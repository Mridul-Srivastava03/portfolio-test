import { projects } from '../data/portfolioData';
import Tag from '../components/ui/Tag';
import SectionHeader from '../components/ui/SectionHeader';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader label="02 — Projects" title="Things I've Built" accentWord="Built" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-badge" style={p.badgeStyle}>{p.badge}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((t) => <Tag key={t.label} label={t.label} accent={t.accent} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
