function SectionTitle({ number, children }) {
  return (
    <div className="section-title">
      <span className="section-title__number">
        {number}
      </span>

      <h2 className="section-title__heading">
        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;