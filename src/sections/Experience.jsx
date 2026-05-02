import { experience } from '../data/portfolioData';
import Tag from '../components/ui/Tag';
import SectionHeader from '../components/ui/SectionHeader';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader label="01 — Experience" title="Where I've Shipped Code" accentWord="Shipped Code" />
        {experience.map((job, i) => (
          <div key={i} className="exp-item fade-in">
            <div className="exp-meta">
              <div className="exp-date">{job.date}</div>
              <div className="exp-company">{job.company}</div>
              <div className="exp-loc">{job.location}</div>
            </div>
            <div>
              <div className="exp-role">{job.role}</div>
              <ul className="exp-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="exp-tags">
                {job.tags.map((t) => <Tag key={t.label} label={t.label} accent={t.accent} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
