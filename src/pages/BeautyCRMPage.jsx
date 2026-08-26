import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import TechStack from "../components/TechStack";
import Carousel from "../components/Carousel";
import CaseLayout from "../components/CaseLayout";
import ColorSwatch from "../components/ColorSwatch";
import GridVisual from "../components/GridVisual";
import FigmaLink from "../components/FigmaLink";

const CRM_COLORS = [
  { name: "Primary", hex: "#745CD4" },
  { name: "Secondary", hex: "#8B7FFF" },
  { name: "Soft Background", hex: "#FCF8FF" },
  { name: "Background", hex: "#FFFFFF", bordered: true },
  { name: "Main Text", hex: "#111827" },
  { name: "Additional Text", hex: "#6B7280" },
  { name: "Success", hex: "#22C55E" },
  { name: "Warning", hex: "#F59E0B" },
  { name: "Error", hex: "#EF4444" },
];

const TYPE_ROWS = [
  { id: "h1", label: "H1", sample: "Customer retention dashboard", spec: "40 / 32 — Bold" },
  { id: "h2", label: "H2", sample: "Campaign performance", spec: "24 / 32 — Regular" },
  { id: "h3", label: "H3", sample: "Customer insights", spec: "20 / 28 — Regular" },
  { id: "body", label: "Body", sample: "Supporting text used to explain customer information, metrics and actions.", spec: "14 / 20 — Regular" },
  { id: "caption", label: "Caption", sample: "Additional information and metadata", spec: "12 / 16 — Regular" },
];

const ARCHITECTURE = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Top customers, retention trends, acquisition and key business metrics.",
  },
  {
    id: "risk",
    title: "Customer & Risk",
    description: "Segmentation, customer risk and retention actions.",
  },
  {
    id: "profile",
    title: "Customer Profile",
    description: "Customer information, history, insights and recommendations.",
  },
  {
    id: "analytics",
    title: "Campaign Analytics",
    description: "Campaign performance, bookings, conversion and ROI.",
  },
];

function BeautyCRMPage({ project }) {
  return (
    <CaseLayout className="crm-case-study">
      <section className="crm-cover">
        <div className="crm-container">
          <div className="crm-cover__top">
            <span className="crm-eyebrow">Case Study</span>
            <span className="crm-cover__year">{project.year}</span>
          </div>

          <div className="crm-cover__content">
            <div className="crm-cover__heading">
              <h1>{project.title}</h1>
              <p>
                Designing a retention-focused
                CRM concept for beauty businesses.
              </p>
            </div>

            <div className="crm-cover__meta">
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>Type</span>
                <strong>{project.type}</strong>
              </div>
              <div>
                <span>Tools</span>
                <strong>{project.tools.join(", ")}</strong>
              </div>
              <div>
                <span>Platform</span>
                <strong>{project.platform}</strong>
              </div>
            </div>
          </div>

          <div className="crm-cover__visual">
            <img src={project.coverImage} alt={project.coverAlt} />
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <SectionTitle number="01">Project overview</SectionTitle>

          <div className="crm-overview">
            <div className="crm-overview__statement">
              <p>
                BeautyCRM is a desktop CRM concept
                designed around one core business
                question: <strong>which customers
                need attention, and what should
                the team do next?</strong>
              </p>
            </div>

            <div className="crm-overview__text">
              <p>
                Instead of treating customer data,
                retention actions and campaign
                performance as separate areas, I
                designed the experience as a connected
                workflow.
              </p>
              <p>
                The goal was to make a data-heavy
                B2B interface feel predictable,
                readable and useful during everyday
                administrative work.
              </p>
            </div>
          </div>

          <div className="crm-info-grid">
            <div>
              <span>Role</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>Product</span>
              <p>{project.product}</p>
            </div>
            <div>
              <span>Platform</span>
              <p>{project.platform} only</p>
            </div>
            <div>
              <span>Tool</span>
              <p>{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-section crm-section--soft">
        <div className="crm-container">
          <SectionTitle number="02">The problem</SectionTitle>

          <div className="crm-problem">
            <h2>
              Too much customer data,
              not enough clarity.
            </h2>
            <p>
              A salon administrator may have
              plenty of customer information,
              but information alone does not
              tell them who needs attention or
              what action should happen next.
            </p>
            <p>
              I focused the interface around
              three consecutive questions:
            </p>
          </div>

          <div className="crm-problem-steps">
            <article>
              <span>01</span>
              <h3>Who is at risk?</h3>
              <p>
                Identify customers whose
                behavior suggests they may
                not return.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>What can we do?</h3>
              <p>
                Select relevant customer groups
                and launch a retention action.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Did it work?</h3>
              <p>
                Evaluate campaign results
                through measurable business
                indicators.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <SectionTitle number="03">Goals</SectionTitle>

          <div className="crm-focus-intro">
            <p>
              The interface was designed around
              the administrator's workflow rather
              than around the structure of the
              underlying data.
            </p>
          </div>

          <div className="crm-focus-grid">
            <article>
              <span>01</span>
              <h3>Scan first</h3>
              <p>
                Important metrics and risk signals
                should be understood without
                reading every data point.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Act from context</h3>
              <p>
                Customer information should lead
                naturally to the next relevant
                action.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Keep navigation predictable</h3>
              <p>
                The same header and sidebar
                structure is maintained across
                the desktop interface.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Make status visible</h3>
              <p>
                Functional colors distinguish
                success, warning and error states
                without relying only on text.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <SectionTitle number="04">Wireframes</SectionTitle>

          <div className="crm-section-intro">
            <p>
              Before working on the visual layer,
              I mapped the main information hierarchy
              and interaction patterns on two
              representative screens: Customer &amp; Risk
              and Customer Profile.
            </p>
          </div>

          <Carousel
            slides={project.wireframes}
            labels={project.wireframeLabels}
            altPrefix="BeautyCRM wireframe"
            variant="crm"
          />

          <div className="crm-action">
            <FigmaLink href={project.figmaUrl}>
              View wireframes in Figma
            </FigmaLink>
          </div>
        </div>
      </section>

      {/* ==========================================
    DESIGN SYSTEM
========================================== */}

<section className="case-section">

  <SectionTitle number="05">
    Design system
  </SectionTitle>


  <div className="case-intro">

    <p>
      A consistent visual system was created to keep
      the interface clear, predictable and scalable
      across different desktop workflows.
    </p>

  </div>


  <div className="design-system">

    {/* =========================================
        COLORS
    ========================================== */}

    <div className="design-system__block">

      <h3>
        Colors
      </h3>


      <div className="color-grid">

        {CRM_COLORS.map((color) => (
          <ColorSwatch
            key={`${color.name}-${color.hex}`}
            name={color.name}
            hex={color.hex}
            bordered={color.bordered}
          />
        ))}

      </div>

    </div>


    {/* =========================================
        TYPOGRAPHY
    ========================================== */}

    <div className="design-system__block">

      <h3>
        Typography
      </h3>


      <div className="type-preview">

        <p className="type-preview__h1">
          H1 — Customer retention dashboard
        </p>


        <p className="type-preview__h2">
          H2 — Campaign performance
        </p>


        <p className="type-preview__body">
          Body — Supporting text used to explain
          customer information, metrics and actions.
        </p>


        <p className="type-preview__caption">
          Caption — Additional information and metadata
        </p>

      </div>


      <p className="design-system__note">
        Typeface: Inter
      </p>

    </div>


    {/* =========================================
        COMPONENTS
    ========================================== */}

    <div className="design-system__block">

      <h3>
        Components
      </h3>


      <div className="design-system-buttons">

        <Button variant="primary">
          Create campaign
        </Button>


        <Button variant="secondary">
          View customer
        </Button>

      </div>


      <p className="design-system__description">
        Reusable buttons and interaction patterns
        were used to keep actions consistent across
        the interface.
      </p>

    </div>


    {/* =========================================
        SPACING
    ========================================== */}

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


      <p className="design-system__description">
        An 8px-based spacing system keeps the
        interface visually consistent across
        cards, tables and navigation.
      </p>

    </div>

  </div>

{/* =========================================
    GRID
========================================== */}

<section className="case-section">

  <SectionTitle number="06">
    Grid
  </SectionTitle>


  <div className="case-intro">

    <p>
      The interface uses a 12-column desktop grid
      with consistent margins and gutters to support
      clear alignment across complex data-heavy screens.
    </p>

  </div>


  <div className="grid-spec">

    <div>

      <span>
        Layout
      </span>

      <strong>
        Desktop
      </strong>

    </div>


    <div>

      <span>
        Columns
      </span>

      <strong>
        12
      </strong>

    </div>


    <div>

      <span>
        Margin
      </span>

      <strong>
        48 px
      </strong>

    </div>


    <div>

      <span>
        Gutter
      </span>

      <strong>
        24 px
      </strong>

    </div>

  </div>


  <GridVisual />

</section>
  {/* =========================================
      TOOLS
  ========================================== */}

  <div className="design-system__tech">

    <h3>
      Tools
    </h3>


    <TechStack
      tools={project.tools}
    />

  </div>


  {/* =========================================
      FIGMA
  ========================================== */}

  <div className="case-section__action">

    <FigmaLink href={project.figmaUrl}>
      View full design system in Figma
    </FigmaLink>

  </div>

</section>

      <section className="crm-section crm-section--soft">
        <div className="crm-container">
          <SectionTitle number="06">Tools</SectionTitle>
          <div className="crm-section-intro">
            <p>
              The concept was designed entirely in Figma
              as a desktop UI/UX exploration.
            </p>
          </div>
          <TechStack tools={project.tools} />
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <SectionTitle number="07">Key screens</SectionTitle>

          <div className="crm-section-intro">
            <p>
              The concept is organized around
              four connected desktop screens. Each one
              answers a different part of the
              retention workflow while keeping
              the same navigation and visual
              language.
            </p>
          </div>

          <div className="crm-architecture">
            <div className="crm-architecture__root">
              {project.title}
            </div>
            <div className="crm-architecture__line" />
            <div className="crm-architecture__grid">
              {ARCHITECTURE.map((item, index) => (
                <article key={item.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="crm-screen-list">
            {project.screens.map((screen, index) => (
              <article
                key={screen.id}
                className={
                  index % 2 === 0
                    ? "crm-screen"
                    : "crm-screen crm-screen--reverse"
                }
              >
                <div className="crm-screen__image">
                  <img src={screen.image} alt={screen.alt} />
                </div>
                <div className="crm-screen__content">
                  <span>{screen.label}</span>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-section crm-section--dark">
        <div className="crm-container">
          <SectionTitle number="08">UI decisions</SectionTitle>

          <div className="crm-decisions">
            <article>
              <span>01</span>
              <h3>Consistent navigation</h3>
              <p>
                The same top header and sidebar
                navigation is preserved across
                all four screens, allowing users
                to build a predictable mental model
                of the interface.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Data before decoration</h3>
              <p>
                Visual hierarchy is used to make
                metrics, statuses and actions
                easier to scan rather than simply
                adding visual complexity.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>From overview to detail</h3>
              <p>
                The information architecture
                follows a natural progression from
                business-level metrics to customer
                details and campaign results.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Functional color</h3>
              <p>
                Success, warning and error colors
                communicate meaningful states and
                help users notice important signals
                faster.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="crm-closing">
        <div className="crm-container">
          <SectionTitle number="09">Explore the project</SectionTitle>
          <div className="crm-closing__content">
            <span>{project.title}</span>
            <h2>
              A clearer workflow for
              customer retention.
            </h2>
            <p>
              A desktop CRM concept focused on
              turning customer data into clear,
              actionable decisions.
            </p>
            <Button href={project.figmaUrl} variant="primary" external>
              Explore the project in Figma ↗
            </Button>
          </div>
        </div>
      </section>
    </CaseLayout>
  );
}

export default BeautyCRMPage;
