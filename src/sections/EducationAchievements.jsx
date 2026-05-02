import { education, achievements } from '../data/portfolioData';
import SectionHeader from '../components/ui/SectionHeader';

export default function EducationAchievements() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="edu-two-col">
          <div>
            <SectionHeader label="04 — Education" title="Academic Background" accentWord="Background" />
            {education.map((edu, i) => (
              <div key={i} className="edu-card fade-in">
                <div className="edu-icon">{edu.icon}</div>
                <div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-meta">{edu.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <SectionHeader label="05 — Achievements" title="Awards & Leadership" accentWord="Leadership" />
            <div className="achiev-list">
              {achievements.map((a, i) => (
                <div key={i} className="achiev-item fade-in">
                  <div className="achiev-icon">{a.icon}</div>
                  <div>
                    <div className="achiev-title">{a.title}</div>
                    <div className="achiev-desc">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
