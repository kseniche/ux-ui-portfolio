import Button from "./Button";
import { GITHUB_URL } from "../data/projects";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="site-footer__eyebrow">
            Let’s stay in touch
          </p>

          <h2 className="site-footer__title">
            Thanks for
            <br />
            stopping by.
          </h2>
        </div>

        <Button href={GITHUB_URL} variant="primary" external>
          GitHub ↗
        </Button>
      </div>

      <div className="site-footer__bottom">
        <p>
          This website was designed and developed by Ksenia.
        </p>

        <p>© 2026 Ksenia</p>
      </div>
    </footer>
  );
}

export default Footer;
