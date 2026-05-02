export default function SectionHeader({ label, title, accentWord, className = '' }) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.lastIndexOf(accentWord);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="accent">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  };

  return (
    <div className={className}>
      <div className="section-label fade-in">{label}</div>
      <h2 className="section-title fade-in">{renderTitle()}</h2>
    </div>
  );
}
