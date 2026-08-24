import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { Reveal } from "@/components/portfolio/Reveal";
import {
  certifications,
  coreExperience,
  education,
  hackathons,
  internships,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surisetti Bhargav Pavan Sai — Cybersecurity Analyst Portfolio" },
      {
        name: "description",
        content:
          "Cybersecurity portfolio of Surisetti Bhargav Pavan Sai: C-DAC Hyderabad experience, malware analysis, SOC operations, SIEM automation and VAPT projects on GitHub.",
      },
      { property: "og:title", content: "Surisetti Bhargav Pavan Sai — Cybersecurity Analyst" },
      {
        property: "og:description",
        content:
          "Malware analysis, SOC operations, SIEM automation and vulnerability assessment projects, with hands-on experience at C-DAC Hyderabad.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#internships", label: "Internships" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="mb-10 text-2xl font-semibold uppercase tracking-[0.16em] text-foreground md:text-3xl">
      {children}
    </h2>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/15 selection:text-primary">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-lg font-bold tracking-tight">BHARGAV.SEC</span>
          <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden transition-colors hover:text-primary sm:inline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-sm bg-foreground px-4 py-1.5 text-primary-foreground transition-colors hover:bg-primary"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="cyber-grid absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl">

  {/* Profile Image */}
  <div className="pointer-events-none absolute right-0 top-[65%] hidden -translate-y-1/2 md:block">
    <div className="size-56 overflow-hidden rounded-full border-4 border-primary/20 bg-surface shadow-xl lg:size-64">
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Bhargav Pavan Sai"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>

  <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-safe/30 bg-safe/5 px-3 py-1 text-xs font-semibold text-safe">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-safe" />
              </span>
              CYBERSECURITY PRACTITIONER · SOC • VAPT • MALWARE ANALYSIS
            </div>
            <h1 className="mb-8 font-display text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
              {profile.firstName} <span className="text-primary">{profile.lastName}</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4" /> {profile.phone}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" /> {profile.location}
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="experience" className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Core Work Experience</SectionLabel>
          <Reveal>
            <div className="relative rounded-xl border-2 border-primary bg-primary/5 p-8 transition-colors hover:bg-primary/8 md:p-12">
              <div className="absolute -top-4 left-8 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                PRIMARY ENGAGEMENT
              </div>
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-3xl font-bold">{coreExperience.company}</h3>
                  <p className="mb-1 text-lg font-medium text-primary">{coreExperience.title}</p>
                  <p className="mb-6 text-sm text-muted-foreground">{coreExperience.companyFull}</p>
                  <ul className="space-y-3 text-muted-foreground">
                    {coreExperience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:text-right">
                  <div className="font-display text-xl font-bold">{coreExperience.period}</div>
                  <div className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                    {coreExperience.location}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 border-t border-primary/20 pt-8 md:grid-cols-2">
                {coreExperience.highlights.map((item) => (
                  <div key={item.name} className="rounded-lg border border-border bg-surface p-6">
                    <div className="mb-3 inline-flex items-center gap-2 font-display font-bold">
                      <ShieldCheck className="size-4 text-primary" />
                      {item.name}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {coreExperience.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="internships" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Internship History</SectionLabel>
          <div className="grid gap-8 md:grid-cols-2">
            {internships.map((item, i) => (
              <Reveal key={item.company} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-xl font-bold">{item.company}</h4>
                      <p className="text-sm text-primary">{item.title}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border bg-secondary/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-base">
  Security Projects
</h2>
              <h3 className="font-display text-4xl font-bold">Live Operations</h3>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-primary/30 font-medium text-primary transition-colors hover:border-primary"
            >
              View full GitHub archive &rarr;
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.repoName} delay={(i % 3) * 90}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {project.year}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                      <Github className="size-3.5" /> {project.repoName}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-base">
  Cybersecurity Challenges
</h2>
            <SectionLabel>Hackathons & CTFs</SectionLabel>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {hackathons.map((hackathon, i) => (
              <Reveal key={hackathon.title} delay={i * 80}>
                <a
                  href={hackathon.repo || undefined}
                  target={hackathon.repo ? "_blank" : undefined}
                  rel={hackathon.repo ? "noreferrer noopener" : undefined}
                  className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {hackathon.year}
                    </span>

                    <span className="grid size-8 place-items-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-primary-foreground">
                      <Trophy className="size-4" />
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
                    {hackathon.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {hackathon.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {hackathon.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {hackathon.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {hackathon.repoName && (
                      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                        <Github className="size-3.5" />
                        {hackathon.repoName}
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="border-t border-border bg-surface px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <SectionLabel>Education</SectionLabel>

    <div className="space-y-8">
      {education.map((edu, i) => (
        <Reveal key={edu.degree} delay={i * 100}>
          <div className="rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/40 hover:shadow-lg">
            <div className="flex items-start gap-5">
              <div className="grid size-12 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/5">
                <GraduationCap className="size-6 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-bold">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-base text-muted-foreground">
                      {edu.school}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {edu.score}
                  </span>
                </div>

                {i === 0 && (
                  <div className="mt-6 border-l-2 border-primary/30 pl-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Minor Degree
                    </p>

                    <p className="font-display text-lg font-semibold">
                      Computer Science & Engineering (CSE)
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Minor specialization completed alongside B.Tech
                    </p>

                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      CGPA 7.90/10
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <section id="skills" className="border-t border-border px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <SectionLabel>Technical Skills</SectionLabel>

    <p className="mb-10 max-w-2xl text-sm leading-6 text-muted-foreground">
      Security-focused technical stack covering offensive security, SOC
      operations, security tooling, networking, systems, cloud, and automation.
    </p>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.label} delay={(i % 3) * 80}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            
            <div className="mb-5 flex items-center justify-between">
              <h4 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {group.label}
              </h4>

              <span className="font-mono text-[10px] text-muted-foreground">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-[13px] font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      <section className="border-t border-border px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <SectionLabel>Certifications</SectionLabel>

    <p className="mb-10 max-w-2xl text-sm leading-6 text-muted-foreground">
      Industry-recognized certifications and technical learning completed
      across networking, cybersecurity, cloud, and security operations.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      {certifications.map((cert, i) => (
        <Reveal key={cert.name} delay={(i % 2) * 80}>
          <div className="group flex h-full items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <Award className="size-4 text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">
                {cert.name}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {cert.issuer}
              </p>
            </div>

            <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {cert.year}
            </span>

          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <footer id="contact" className="border-t border-border px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
              Let&apos;s secure the <br />
              <span className="text-primary underline decoration-2 underline-offset-8">
                perimeter together.
              </span>
            </h2>
            <p className="text-muted-foreground">
              Focused on offensive security, malware analysis, SOC operations, SIEM monitoring, and security automation.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-auto">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-16 items-center justify-center rounded-sm bg-foreground px-8 font-mono text-sm font-bold text-primary-foreground transition-colors hover:bg-primary"
            >
              {profile.email}
            </a>
            <div className="flex gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-12 flex-1 items-center justify-center gap-2 border border-border text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-12 flex-1 items-center justify-center gap-2 border border-border text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary"
              >
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-6xl flex-wrap justify-between gap-4 border-t border-border/60 pt-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <span>© Surisetti Bhargav Pavan Sai</span>
          <span>Andhra Pradesh . India</span>
        </div>
      </footer>
    </div>
  );
}
