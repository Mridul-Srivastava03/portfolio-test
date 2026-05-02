import { personalInfo } from '../data/portfolioData';
import SectionHeader from '../components/ui/SectionHeader';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card fade-in">
          <SectionHeader
            label="06 — Contact"
            title="Let's Build Something Together"
            accentWord="Together"
            className="contact-header"
          />
          <p className="contact-desc">
            Currently open to backend engineering roles and internship opportunities.
            Feel free to reach out — I read every message.
          </p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">✉ {personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone}`} className="contact-link">📞 {personalInfo.phone}</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-link">↗ LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-link">↗ GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
