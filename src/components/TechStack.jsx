function TechStack({ tools }) {
  return (
    <div className="tech-stack">
      {tools.map((tool) => (
        <span
          key={tool}
          className="tech-stack__item"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default TechStack;