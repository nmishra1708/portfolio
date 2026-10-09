import { useEffect, useMemo, useState } from "react";

const filters = ["All work", "AI & Computer Vision", "Fintech & Compliance", "Robotics", "Enterprise"];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Mark() {
  return (
    <a className="brand" href="#home" aria-label="Nitin Mishra — back to top">
      <img className="brand-photo" src="/uploads/nitin-mishra-portrait.png" alt="" width="40" height="40" />
      <span className="brand-name" > NITIN MISHRA <span>TECHNICAL COUNSULTANT (FULL-STACK & AI/LLM)</span></span>
    </a>
  );
}

function assetUrl(path) {
  return `${import.meta.env.VITE_API_URL || ""}${path}`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Mark />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a className="nav-cta" href={assetUrl("/uploads/Nitin_Mishra_AI_LLM_Resume_V1.0.pdf")} download="Nitin_Mishra_AI_LLM_Resume_V1.0.pdf" onClick={() => setMenuOpen(false)}>
            Resume PDF <ArrowIcon diagonal />
          </a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero({ profile }) {
  return (
    <section className="hero shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="availability-dot" /> AVAILABLE IMMEDIATELY <span className="kicker-divider">/</span> INDIA</div>
        <p className="eyebrow">PRODUCT ENGINEERING · APPLIED AI · SYSTEMS</p>
        <h1 id="hero-title">Senior Full-Stack<br /><span>&amp; AI/LLM Software Engineer</span></h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-description">
          I turn complex challenges into production-ready software—from high-scale platforms to AI systems that deliver measurable impact.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
          <a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowIcon diagonal /></a>
        </div>
        <div className="hero-proof">
          <a href={assetUrl(profile.resumeUrl)} download aria-label="Download Nitin Mishra's resume">
            <span className="proof-mark">↓</span>
            <span><strong>Resume</strong><small>Download PDF</small></span>
          </a>
          <span className="proof-divider" />
          <div className="proof-note"><span className="availability-dot" /> Available for senior & lead roles</div>
        </div>
      </div>
      <aside className="hero-visual" aria-label={`Portrait of ${profile.name}`}>
        <div className="hero-photo-frame">
          <img src={assetUrl(profile.portraitUrl)} alt={`${profile.name}, ${profile.role}`} width="768" height="768" />
          <div className="photo-vignette" />
          <div className="photo-label"><span>INNOVATION, BUILT TO SHIP</span><span>IND · 22°43′N</span></div>
        </div>
        <div className="hero-float-card hero-stat-card">
          <span className="float-icon">↗</span>
          <span><strong>70%</strong><small>less document processing time</small></span>
        </div>
        <div className="hero-float-card hero-award-card">
          <span className="award-medal">✳</span>
          <span><strong>Performance of the Year</strong><small>Recognized · 2023</small></span>
        </div>
        <span className="hero-side-note">NITIN MISHRA <span>·</span> 01 / 04</span>
      </aside>
    </section>
  );
}

function ImpactStrip({ metrics }) {
  return (
    <section className="impact-strip shell" aria-label="Project outcomes">
      {metrics.map((metric, index) => (
        <div className="impact-item" key={metric.label}>
          <span className="impact-index">0{index + 1}</span>
          <strong>{metric.value}</strong>
          <span className="impact-label">{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

function About({ profile }) {
  return (
    <section className="section about-section" id="about">
      <div className="shell about-layout">
        <div className="section-heading">
          <p className="eyebrow">ABOUT THE WORK</p>
          <h2>Good engineering.<br /><span>Real-world impact.</span></h2>
          <div className="about-location"><span className="location-icon">↗</span><span>Indore, India</span><i /> <span>{profile.workPreference}</span></div>
        </div>
        <div className="about-content">
          <p className="about-intro">
            I work at the intersection of <span>thoughtful engineering</span>, practical AI, and the people who use the product.
          </p>
          <p className="about-description">
            From fintech compliance platforms to computer vision and connected devices, I bring complex products from an early idea to reliable, production-ready software. Good engineering isn&apos;t just what ships—it&apos;s how quickly it helps people move forward.
          </p>
          <figure className="award-card">
            <img
              src={assetUrl(profile.awardPhotoUrl)}
              alt="Nitin Mishra receiving the Performance of the Year award"
              width="268"
              height="468"
              loading="lazy"
            />
            <figcaption>
              <span className="award-icon" aria-hidden="true">✳</span>
              <span>
                <strong>Performance of the Year</strong>
                <small>Recognized for engineering impact · 2023</small>
              </span>
              <span className="award-year">2023</span>
            </figcaption>
          </figure>
          <div className="achievement-list">
            {profile.highlights.map((highlight, index) => (
              <div className="achievement" key={highlight}>
                <span className="achievement-number">0{index + 1}</span>
                <p>{highlight}</p>
                <ArrowIcon diagonal />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card-${index % 3}`}>
      <div className="project-art">
        <span className="project-art-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-art-orbit project-art-orbit-one" />
        <span className="project-art-orbit project-art-orbit-two" />
        <span className="project-art-label">{project.category.toUpperCase()}</span>
        <span className="project-art-monogram" aria-hidden="true">{project.name.split(/[\s/&-]+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("")}</span>
        <span className="project-art-bottom">{project.domain.toUpperCase()}</span>
      </div>
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-card-main">
        <h3>{project.name}</h3>
        <p className="project-client">{project.client}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
      <div className="project-card-bottom">
        <div className="project-tags" aria-label="Technology stack">
          {project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
          {project.technologies.length > 5 && <span className="more-tags">+{project.technologies.length - 5}</span>}
        </div>
        {project.url ? (
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
            <ArrowIcon diagonal />
          </a>
        ) : (
          <span className="project-link project-link-static" aria-hidden="true"><ArrowIcon diagonal /></span>
        )}
      </div>
    </article>
  );
}

function Work({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All work" || project.category === activeFilter;
      const searchable = [
        project.name,
        project.client,
        project.domain,
        project.summary,
        ...project.technologies,
        ...project.highlights,
      ].join(" ").toLowerCase();
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, projects, query]);

  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <div className="work-heading">
          <div className="section-heading">
            <p className="eyebrow">A SELECTION OF THINGS I&apos;VE BUILT</p>
            <h2>Selected <span>work.</span></h2>
          </div>
          <p className="work-heading-note">
            A few challenges, many disciplines, one common thread: building things that work in the real world.
          </p>
        </div>
        <div className="work-toolbar">
          <div className="filter-list" role="group" aria-label="Filter projects by specialty">
            {filters.map((filter) => (
              <button
                className={`filter-button${activeFilter === filter ? " filter-active" : ""}`}
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="search-box">
            <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.4" />
              <path d="m12 12 3.2 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Search projects</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a project" />
          </label>
        </div>
        {visibleProjects.length ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}
          </div>
        ) : (
          <div className="empty-results">
            <p>No projects match that search just yet.</p>
            <button type="button" onClick={() => { setQuery(""); setActiveFilter("All work"); }}>Clear filters <ArrowIcon /></button>
          </div>
        )}
        <p className="project-count">SHOWING {String(visibleProjects.length).padStart(2, "0")} OF {String(projects.length).padStart(2, "0")} PROJECTS</p>
      </div>
    </section>
  );
}

function Expertise({ profile }) {
  const [activeStack, setActiveStack] = useState(profile.stackGroups[0].name);
  const selectedStack = profile.stackGroups.find((group) => group.name === activeStack);

  return (
    <section className="section expertise-section" id="expertise">
      <div className="shell expertise-layout">
        <div className="section-heading">
          <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
          <h2>Practical depth.<br /><span>End-to-end thinking.</span></h2>
          <p className="expertise-copy">
            I care about the complete picture: sound architecture, delightful interfaces, resilient infrastructure, and AI that solves real problems.
          </p>
        </div>
        <div className="expertise-content">
          <div className="expertise-focus">
            {profile.focusAreas.map((area, index) => (
              <div className="focus-row" key={area}>
                <span>0{index + 1}</span><h3>{area}</h3><ArrowIcon diagonal />
              </div>
            ))}
          </div>
          <div className="skills-block">
            <p className="eyebrow">ENGINEERING STACK</p>
            <h3 className="stack-heading">Tools I use to build.</h3>
            <div className="stack-tabs" role="group" aria-label="Engineering stack categories">
              {profile.stackGroups.map((group) => (
                <button
                  className={`stack-tab${activeStack === group.name ? " stack-tab-active" : ""}`}
                  key={group.name}
                  type="button"
                  aria-pressed={activeStack === group.name}
                  onClick={() => setActiveStack(group.name)}
                >
                  {group.name}<span>{String(group.tools.length).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
            {selectedStack && (
              <div className="skills-list" key={selectedStack.name} aria-live="polite">
                {selectedStack.tools.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            )}
          </div>
          <div className="ai-tools">
            <span>AI-augmented practice</span>
            {profile.aiTools.map((tool) => <span className="ai-tool" key={tool}>{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ roles, resumeUrl }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="shell">
        <div className="experience-heading">
          <div className="section-heading">
            <p className="eyebrow">THE PATH SO FAR</p>
            <h2>Experience that <span>delivers.</span></h2>
          </div>
          <p className="experience-intro">From teaching the fundamentals to leading teams building production AI and enterprise platforms.</p>
        </div>
        <div className="experience-list">
          {roles.map((role, index) => (
            <article className="experience-card" key={role.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-meta"><span>{role.company}</span><span>{role.period}</span></div>
                <h3>{role.role}</h3>
                <p className="experience-location">{role.location}</p>
                <p className="experience-summary">{role.summary}</p>
                <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="experience-tags">{role.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <a className="button button-dark" href={assetUrl(resumeUrl)} download="Nitin_Mishra_AI_LLM_Resume_V1.0.pdf">View full experience <ArrowIcon diagonal /></a>
      </div>
    </section>
  );
}

function Contact({ profile }) {
  const [formStatus, setFormStatus] = useState("");
  const [emailDraftUrl, setEmailDraftUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const body = `Hi Nitin,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setEmailDraftUrl(mailto);
    setFormStatus("Your email draft is ready. Review it in your email app, then press Send.");
  }

  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner">
        <p className="eyebrow">THE NEXT GOOD THING STARTS HERE</p>
        <h2>Let&apos;s build<br /><span>something great.</span></h2>
        <p className="contact-copy">
          Have a role, a product idea, or a tricky engineering problem in mind? Tell me a little about it.
        </p>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>Email me <ArrowIcon diagonal /></a>
              <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
              <a className="button button-quiet" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>Call {profile.phone}</a>
            </div>
            <div className="contact-footnote">
              <span className="button contact-status"><span className="availability-dot" />{profile.availability}</span>
              <span className="contact-preference">{profile.workPreference}</span>
            </div>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <label className="form-field">
                <span>Your name</span>
                <input autoComplete="name" maxLength="100" name="name" placeholder="Jane Smith" required />
              </label>
              <label className="form-field">
                <span>Email address</span>
                <input autoComplete="email" maxLength="254" name="email" placeholder="jane@company.com" required type="email" />
              </label>
              <label className="form-field form-field-wide">
                <span>Subject</span>
                <input maxLength="150" name="subject" placeholder="Let's talk about..." required />
              </label>
              <label className="form-field form-field-wide">
                <span>Message</span>
                <textarea maxLength="5000" minLength="10" name="message" placeholder="Tell me a little about what you're building or the role you're hiring for..." required rows="5" />
              </label>
            </div>
            <div className="form-submit-row">
              <button className="button button-primary" type="submit">Prepare email draft <ArrowIcon /></button>
              <span>No message is sent without your confirmation.</span>
            </div>
            <p className="form-status" aria-live="polite" role="status">
              {formStatus}
              {emailDraftUrl && <a href={emailDraftUrl}>Open email draft <ArrowIcon diagonal /></a>}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Mark />
        <span>© 2026 Nitin Mishra. All rights reserved. | Thoughtfully built. Ready for what&apos;s next.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetch(`${import.meta.env.VITE_API_URL || ""}/api/portfolio`)
      .then((response) => {
        if (!response.ok) throw new Error(`Portfolio API returned ${response.status}.`);
        return response.json();
      })
      .then((data) => {
        if (!data.profile || !Array.isArray(data.projects) || !data.projects.length) {
          throw new Error("Portfolio data is incomplete.");
        }
        if (active) setPortfolio(data);
      })
      .catch((fetchError) => {
        if (active) setError(fetchError.message || "Could not load portfolio data.");
      });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (portfolio?.profile?.name) {
      document.title = `${portfolio.profile.name} — ${portfolio.profile.role}`;
    }
  }, [portfolio]);

  if (error) {
    return (
      <main className="load-state">
        <Mark />
        <p className="eyebrow">PORTFOLIO COULDN&apos;T LOAD</p>
        <h1>Something went wrong.</h1>
        <p>{error} Please make sure the portfolio API is running and try again.</p>
        <button className="button button-primary" type="button" onClick={() => window.location.reload()}>Try again <ArrowIcon /></button>
      </main>
    );
  }

  if (!portfolio) {
    return (
      <main className="load-state">
        <Mark />
        <p className="eyebrow">LOADING PORTFOLIO</p>
        <div className="loading-indicator" role="status"><span className="sr-only">Loading portfolio</span></div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero profile={portfolio.profile} />
        <ImpactStrip metrics={portfolio.profile.impact} />
        <About profile={portfolio.profile} />
        <Work projects={portfolio.projects} />
        <Experience roles={portfolio.profile.careerHistory} resumeUrl={portfolio.profile.resumeUrl} />
        <Expertise profile={portfolio.profile} />
        <Contact profile={portfolio.profile} />
      </main>
      <Footer />
    </>
  );
}
