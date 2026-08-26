import { Link } from "react-router-dom";

function Button({
  children,
  href,
  to,
  variant = "primary",
  external = false,
}) {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link
        to={to}
        className={className}
      >
        {children}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default Button;