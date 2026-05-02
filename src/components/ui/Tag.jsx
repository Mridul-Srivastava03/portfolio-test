export default function Tag({ label, accent = false }) {
  return (
    <span className={`tag${accent ? ' accent' : ''}`}>{label}</span>
  );
}
