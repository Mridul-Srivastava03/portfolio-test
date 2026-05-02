export default function Button({ variant = 'primary', href, children, ...rest }) {
  return (
    <a href={href} className={`btn btn-${variant}`} {...rest}>
      {children}
    </a>
  );
}
