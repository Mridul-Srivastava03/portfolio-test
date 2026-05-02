import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/ui/Button';

const floatingBadges = [
  { label: 'Java',        style: { top: '4%',  left: '-12%' },  delay: '0s' },
  { label: 'Spring Boot', style: { top: '18%', right: '-20%' }, delay: '0.6s' },
  { label: 'REST APIs',   style: { top: '44%', left: '-18%' },  delay: '1.1s' },
  { label: 'MySQL',       style: { top: '65%', right: '-14%' }, delay: '0.3s' },
  { label: 'JPA',         style: { top: '82%', right: '-10%' }, delay: '0.8s' },
  { label: 'Git',         style: { top: '5%',  right: '-8%'  }, delay: '1.4s' },
];

export default function Hero() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const lines = terminalRef.current?.querySelectorAll('[data-line]');
    lines?.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(4px)';
      setTimeout(() => {
        line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 400 + i * 180);
    });
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT ── */}
          <div className="hero-left">
            <div className="hero-badge">
              {personalInfo.availableForWork ? 'Available for opportunities' : 'Not currently available'}
            </div>

            <h1>
              Kumar<br />
              <span className="name-accent">Mridul</span>
            </h1>

            <p className="hero-subtitle">
              <span className="bracket">[</span>
              {personalInfo.title}
              <span className="bracket">]</span>
            </p>

            <p className="hero-desc">{personalInfo.bio}</p>

            <div className="hero-ctas">
              <Button variant="primary" href={`mailto:${personalInfo.email}`}>✉ Get in Touch</Button>
              <Button variant="outline" href={personalInfo.linkedin} target="_blank" rel="noreferrer">↗ LinkedIn</Button>
              <Button variant="outline" href={personalInfo.github} target="_blank" rel="noreferrer">↗ GitHub</Button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-right">

            {/* Floating tech badges */}
            {floatingBadges.map((b) => (
              <span
                key={b.label}
                className="hero-float-badge"
                style={{ ...b.style, animationDelay: b.delay }}
              >
                {b.label}
              </span>
            ))}

            {/* Avatar card */}
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <span className="hero-avatar-initials">KM</span>
                </div>
              </div>
              <div className="hero-avatar-status">
                <span className="hero-avatar-dot" />
                Open to work
              </div>
            </div>

            {/* Info card */}
            <div className="hero-info-card">
              <div className="hero-info-row">
                <span className="hero-info-icon">📍</span>
                <span>Kolkata, West Bengal</span>
              </div>
              <div className="hero-info-row">
                <span className="hero-info-icon">🎓</span>
                <span>B.Tech CSE · Data Science</span>
              </div>
              <div className="hero-info-row">
                <span className="hero-info-icon">💼</span>
                <span>Deltafour · Backend Intern</span>
              </div>
              <div className="hero-info-row">
                <span className="hero-info-icon">⭐</span>
                <span>SIH 2024 National Finalist</span>
              </div>
            </div>

            {/* Terminal */}
            <div className="terminal" ref={terminalRef}>
              <div data-line="" className="t-line">
                <span className="kw">Engineer</span>
                <span className="plain"> engineer = </span>
                <span className="kw">Engineer</span>
                <span className="plain">.builder()</span>
              </div>
              <div data-line="" className="t-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">.stack</span>
                <span className="plain">(</span>
                <span className="kw">List</span>
                <span className="plain">.of(</span>
                <span className="str">&quot;Java&quot;</span><span className="plain">, </span>
                <span className="str">&quot;Spring Boot&quot;</span><span className="plain">, </span>
                <span className="str">&quot;JPA&quot;</span><span className="plain">, </span>
                <span className="str">&quot;MySQL&quot;</span>
                <span className="plain">))</span>
              </div>
              <div data-line="" className="t-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">.focus</span>
                <span className="plain">(</span>
                <span className="str">&quot;Backend Systems · API Design · Security&quot;</span>
                <span className="plain">)</span>
              </div>
              <div data-line="" className="t-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">.status</span>
                <span className="plain">(</span>
                <span className="str">&quot;Building at Deltafour 🚀&quot;</span>
                <span className="plain">)</span>
              </div>
              <div data-line="" className="t-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">.build</span>
                <span className="plain">(); </span>
                <span className="comment">// open to full-time roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
