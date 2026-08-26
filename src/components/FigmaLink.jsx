function FigmaLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="figma-link"
    >
      <span>{children}</span>
      <span className="figma-link__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default FigmaLink;
