import { skills } from '../data/portfolioData';
import SectionHeader from '../components/ui/SectionHeader';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader label="03 — Skills" title="Tech Stack" accentWord="Stack" />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={s.category} className="skill-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skill-icon" style={s.iconStyle}>{s.icon}</div>
              <div className="skill-category">{s.category}</div>
              <div className="skill-pills">
                {s.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
