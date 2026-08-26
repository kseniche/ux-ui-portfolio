import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import TechStack from "../components/TechStack";
import Carousel from "../components/Carousel";
import CaseLayout from "../components/CaseLayout";
import ColorSwatch from "../components/ColorSwatch";
import GridVisual from "../components/GridVisual";
import FigmaLink from "../components/FigmaLink";

const PROMPTLY_COLORS = [
  { name: "Primary", hex: "#E1E8FD" },
  { name: "Secondary", hex: "#64748B" },
  { name: "Accent", hex: "#4F46E5" },
  { name: "Background", hex: "#F9F9FF", bordered: true },
  { name: "Text", hex: "#111827" },
];

function PromptlyPage({ project }) {
  const { figmaUrl } = project;

  return (
    <CaseLayout className="case-study">

        {/* =========================================
            COVER
        ========================================== */}

        <section className="case-cover">

          <div className="case-cover__top">

            <p className="case-cover__eyebrow">
              Case Study / SaaS Landing Page
            </p>

            <p className="case-cover__year">
              {project.year}
            </p>

          </div>


          <div className="case-cover__main">

            <div className="case-cover__title-block">

              <h1 className="case-cover__title">
                {project.title}
              </h1>

              <p className="case-cover__subtitle">
                {project.subtitle}
              </p>

            </div>


            <div className="case-cover__meta">

              <div className="case-cover__meta-item">

                <span>
                  Role
                </span>

                <strong>
                  {project.role}
                </strong>

              </div>


              <div className="case-cover__meta-item">

                <span>
                  Duration
                </span>

                <strong>
                  {project.duration}
                </strong>

              </div>


              <div className="case-cover__meta-item">

                <span>
                  Tools
                </span>

                <strong>
                  {project.tools.join(", ")}
                </strong>

              </div>

            </div>

          </div>


          <div className="case-cover__image">

            <img
              src={project.coverImage}
              alt={project.coverAlt}
            />

          </div>

        </section>


        {/* =========================================
            PROJECT OVERVIEW
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="01">
            Project overview
          </SectionTitle>


          <div className="case-overview">

            <div className="case-overview__intro">

              <p>
                Promptly AI is a landing page concept
                for an AI-assisted content platform.
                The interface explores how a SaaS product
                could present marketing materials, product
                descriptions and social content tools.
              </p>

            </div>


            <div className="case-overview__details">

              <div>

                <span>
                  Project
                </span>

                <p>
                  Landing page concept for an
                  AI-assisted content platform.
                </p>

              </div>


              <div>

                <span>
                  Goal
                </span>

                <p>
                  Design a modern SaaS landing page
                  focused on communicating product
                  value and a clear conversion path.
                </p>

              </div>


              <div>

                <span>
                  Target audience
                </span>

                <p>
                  Marketers, copywriters, marketing
                  teams and small business owners.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            THE PROBLEM
        ========================================== */}

        <section className="case-section case-section--dark">

          <SectionTitle number="02">
            The problem
          </SectionTitle>


          <div className="case-problem">

            <p className="case-problem__lead">
              Creating content often takes time
              and requires significant manual effort.
            </p>


            <p>
              Small businesses and marketing teams
              can struggle to create high-quality
              content consistently and at scale.
            </p>


            <p>
              Many AI tools also fail to clearly
              communicate their capabilities and
              overwhelm users with complex interfaces.
              This can lead to lower trust and lower
              conversion.
            </p>

          </div>

        </section>


        {/* =========================================
            GOALS
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="03">
            Goals
          </SectionTitle>


          <div className="goals-grid">

            <article className="goal-card">

              <span>
                01
              </span>

              <h3>
                Design a clean and scalable
                SaaS experience.
              </h3>

            </article>


            <article className="goal-card">

              <span>
                02
              </span>

              <h3>
                Demonstrate the product's
                key features.
              </h3>

            </article>


            <article className="goal-card">

              <span>
                03
              </span>

              <h3>
                Build trust through
                product demonstration.
              </h3>

            </article>


            <article className="goal-card">

              <span>
                04
              </span>

              <h3>
                Communicate the product's
                value within seconds.
              </h3>

            </article>

          </div>

        </section>


        {/* =========================================
            WIREFRAMES
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="04">
            Wireframes
          </SectionTitle>


          <div className="case-intro">

            <p>
              Before moving into visual design,
              I defined the page structure,
              content hierarchy and main user flow.
            </p>

          </div>


          <Carousel
            slides={project.wireframes}
            altPrefix="Promptly AI wireframe"
          />


          <div className="case-section__action">

            <FigmaLink href={figmaUrl}>
              View wireframes in Figma
            </FigmaLink>

          </div>

        </section>


        {/* =========================================
            DESIGN SYSTEM
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="05">
            Design system
          </SectionTitle>


          <div className="design-system">

            {/* COLORS */}

            <div className="design-system__block">

              <h3>
                Colors
              </h3>


              <div className="color-grid">
                {PROMPTLY_COLORS.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    hex={color.hex}
                    bordered={color.bordered}
                  />
                ))}
              </div>

            </div>


            {/* TYPOGRAPHY */}

            <div className="design-system__block">

              <h3>
                Typography
              </h3>


              <div className="type-preview">

                <p className="type-preview__h1">
                  H1 — Create high-converting content
                </p>


                <p className="type-preview__h2">
                  H2 — Precision tools for every creator
                </p>


                <p className="type-preview__body">
                  Body — Supporting text used to
                  explain product features and benefits.
                </p>


                <p className="type-preview__caption">
                  Caption — Small supporting information
                </p>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="design-system__block">

              <h3>
                Buttons
              </h3>


              <div className="design-system-buttons">

                <Button variant="primary">
                  Start for free
                </Button>


                <Button variant="secondary">
                  Watch demo
                </Button>

              </div>

            </div>


            {/* SPACING */}

            <div className="design-system__block">

              <h3>
                Spacing
              </h3>


              <div className="spacing-scale">

                {[8, 16, 24, 32, 48, 64, 96].map(
                  (value) => (
                    <div key={value}>

                      <span>
                        {value}
                      </span>

                      <div
                        style={{
                          width: `${value * 2}px`,
                        }}
                      />

                    </div>
                  )
                )}

              </div>

            </div>

          </div>


          <div className="design-system__tech">

            <h3>
              Tools
            </h3>


            <TechStack tools={project.tools} />

          </div>


          <div className="case-section__action">
            <FigmaLink href={figmaUrl}>
              View full design system in Figma
            </FigmaLink>
          </div>

        </section>


        {/* =========================================
            GRID
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="06">
            Grid
          </SectionTitle>


          <div className="grid-spec">
            <div>
              <span>Desktop</span>
              <strong>1440 px</strong>
            </div>
            <div>
              <span>Margin</span>
              <strong>48 px</strong>
            </div>
            <div>
              <span>Columns</span>
              <strong>12</strong>
            </div>
            <div>
              <span>Gutter</span>
              <strong>24 px</strong>
            </div>
          </div>

          <GridVisual />

        </section>


        {/* =========================================
            FINAL DESIGN
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="07">
            Final design
          </SectionTitle>


          <div className="case-intro">

            <p>
              The landing page concept combines a clear
              SaaS structure with product-focused
              visuals and a conversion-oriented
              user flow.
            </p>

          </div>


          <Carousel
            slides={project.finalImages}
            altPrefix="Promptly AI final design"
          />


          <div className="case-section__action">

            <FigmaLink href={figmaUrl}>
              View full design in Figma
            </FigmaLink>

          </div>

        </section>


        {/* =========================================
            RESPONSIVE DESIGN
        ========================================== */}

        <section className="case-section">

          <SectionTitle number="08">
            Responsive design
          </SectionTitle>


          <div className="responsive-case">

            <div className="responsive-case__text">

              <h3>
                Designed for
                smaller screens.
              </h3>


              <p>
                The desktop layout was adapted
                for a smaller screen while preserving
                the main content hierarchy, navigation
                and product flow.
              </p>

            </div>


            <div className="responsive-case__image">

              <img
                src={project.mobileImage}
                alt="Promptly AI mobile layout concept"
              />

            </div>

          </div>

        </section>


        {/* =========================================
            PROJECT LINKS
        ========================================== */}

        <section className="case-section case-section--last">

          <SectionTitle number="09">
            Explore the project
          </SectionTitle>


          <div className="case-links">

            <Button
              href={figmaUrl}
              variant="primary"
              external
            >
              View in Figma ↗
            </Button>

          </div>

        </section>

    </CaseLayout>
  );
}

export default PromptlyPage;