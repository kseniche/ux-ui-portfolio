import { Link } from "react-router-dom";
import { GITHUB_URL } from "../data/projects";

function Header() {
  return (
    <header className="site-header">
      <div className="header__inner">
        <Link
          to="/"
          className="header__logo"
          aria-label="Go to homepage"
        >
          КСЮША
        </Link>

        <nav className="header__nav">
          <a href="/#projects" className="header__link">
            Projects
          </a>

          <a href="/#about" className="header__link">
            About
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="header__link"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
