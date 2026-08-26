import CaseLayout from "../components/CaseLayout";
import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import SectionTitle from "../components/SectionTitle";
import TechStack from "../components/TechStack";
import Button from "../components/Button";

import projects, { GITHUB_URL } from "../data/projects";

const SKILLS = [
  "UI/UX Design",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

function Home() {
  return (
    <CaseLayout>
      <Hero />

      <section id="about" className="section section--about">
        <SectionTitle number="01">About</SectionTitle>

        <div className="about__content">
          <p className="about__text">
            I'm a designer and developer interested in
            creating interfaces, websites and digital
            products.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle number="02">
          Selected projects
        </SectionTitle>

        <ProjectGrid projects={projects} />
      </section>

      <section id="skills" className="section">
        <SectionTitle number="03">Skills</SectionTitle>

        <TechStack tools={SKILLS} />
      </section>

      <section id="contact" className="section section--contact">
        <SectionTitle number="04">
          Let’s work together
        </SectionTitle>

        <Button href={GITHUB_URL} variant="primary" external>
          GitHub ↗
        </Button>
      </section>
    </CaseLayout>
  );
}

export default Home;
