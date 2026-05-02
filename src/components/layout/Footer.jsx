import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Designed &amp; built by {personalInfo.name} · {personalInfo.location}</p>
      </div>
    </footer>
  );
}
