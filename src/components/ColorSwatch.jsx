function ColorSwatch({
  name,
  hex,
  bordered = false,
  variant = "default",
}) {
  const isCrm = variant === "crm";

  return (
    <div className={isCrm ? undefined : "color-swatch-item"}>
      <div
        className={
          isCrm
            ? "crm-color"
            : `color-swatch${bordered ? " color-swatch--border" : ""}`
        }
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span>{name}</span>
      <small>{hex}</small>
    </div>
  );
}

export default ColorSwatch;
