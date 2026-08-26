function GridVisual({
  columns = 12,
  gutter = "24px",
  margin = "48px",
  variant = "default",
}) {
  const className =
    variant === "crm" ? "crm-grid-demo" : "grid-visual";

  return (
    <div
      className={className}
      style={
        variant === "crm"
          ? undefined
          : {
              columnGap: gutter,
              paddingInline: margin,
            }
      }
      role="img"
      aria-label={`${columns}-column layout with ${gutter} gutters and ${margin} side margins`}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default GridVisual;
