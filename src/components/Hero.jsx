import Button from "./Button";
import { GITHUB_URL } from "../data/projects";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          Designer & Developer
        </p>

        <h1 className="hero__title">
          I design
          <br />
          interfaces and
          <br />
          digital experiences.
        </h1>

        <p className="hero__description">
          I’m Ksenia — a designer and developer focused
          on interfaces, websites and digital experiences.
        </p>

        <div className="hero__actions">
          <Button href="#projects" variant="primary">
            View projects
          </Button>

          <Button href={GITHUB_URL} variant="secondary" external>
            GitHub ↗
          </Button>
        </div>
      </div>

      <div className="hero__meta">
        <span>Based in Europe</span>
        <span>Available for projects</span>
      </div>
    </section>
  );
}

export default Hero;
