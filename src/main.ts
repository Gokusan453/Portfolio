import './style.css';

type NavLink = {
  id: string;
  label: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  highlight: string;
};

type TimelineItem = {
  period: string;
  title: string;
  detail: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

type SkillCategory = {
  title: string;
  groups: SkillGroup[];
};

const navLinks: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const heroPhrases = ['Full-stack Developer', 'System Explorer', 'Curious Builder'];

const focusStats = [
  { value: '2.5+', label: 'Years coding' },
  { value: '8', label: 'Projects shipped' },
  { value: '2', label: 'AI projects built' },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Coding stack',
    groups: [
      {
        label: 'Confident with',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'PHP', 'MySQL'],
      },
      {
        label: 'Tools & platforms',
        items: ['Figma', 'Docker', 'Craft CMS', 'Git', 'GitHub'],
      },
      {
        label: 'Learning',
        items: ['Python (AI & automation)'],
      },
    ],
  },
  {
    title: 'Languages',
    groups: [
      {
        label: 'Fluent in',
        items: ['Dutch', 'English', 'Turkish'],
      },
      {
        label: 'Learning',
        items: ['French (beginner)'],
      },
    ],
  },
];

const projects: Project[] = [
  {
    title: 'The Grand Library',
    description:
      'Next.js + Prisma platform where admins manage catalogue entries and loans while students browse, review, wishlist, and extend their books.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    link: 'https://github.com/gokusan453/eindopdracht-Gokusan453',
    highlight: 'Full-stack app',
  },
  {
    title: 'Attendance App (QR)',
    description:
      'Mobile app (coming soon) to scan QR codes for classroom attendance. Built together with a team of four students.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    link: '#',
    highlight: 'Mobile — coming soon',
  },
  {
    title: 'Student Progress Tracker',
    description:
      'A follow-up system for coaching meetings with programming students, helping lecturers log appointments, notes, and next steps in one place.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Strapi'],
    link: '#',
    highlight: 'Student coaching - coming soon',
  },
];

const timeline: TimelineItem[] = [
  {
    period: '2024 — Today',
    title: 'Applied Computer Science @ Arteveldehogeschool',
    detail: 'Focusing on full-stack development with Node.js, TypeScript, Express, SQLite and modern web frameworks. Building production-ready projects and learning how to design clean backend systems.',
  },
  {
    period: '2023 - 2024',
    title: 'Discovering AI & automation',
    detail: 'Started learning how AI models, chatbots and automation tools work behind the scenes. Explored APIs, prompts, voicebots and early bot logic the foundation for the AI-driven projects I build today.',
  },
  {
    period: '2022 - 2023',
    title: 'Building my first real websites',
    detail: 'Created small responsive websites with HTML, CSS and simple animations. Designed and structured portfolio pages in WordPress and learned the basics of front-end layout and visual design.',
  },
  {
    period: '2021 - 2022',
    title: 'First steps into web development',
    detail: 'Built simple static pages using only HTML and CSS. This early phase gave me the core understanding of structure, layout and styling that shaped my journey into full-stack development.',
  },
];

const contactLinks = [
  { label: 'Email', value: 'gokhan.guner@student.arteveldehs.be', href: 'mailto:gokhan.guner@student.arteveldehs.be' },
  { label: 'GitHub', value: '@gokusan453', href: 'https://github.com/gokusan453', target: '_blank' },
  { label: 'LinkedIn', value: 'Gokhan Guner', href: 'https://www.linkedin.com/in/gokhan-gunerr/', target: '_blank' },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App container not found');
}

const renderBadges = (items: string[]) =>
  items.map((item) => `<span class="badge">${item}</span>`).join('');

const renderProjects = () =>
  projects
    .map(
      (project) => `
        <article class="card project-card" data-reveal>
          <div class="card-header">
            <span class="pill">${project.highlight}</span>
            <div class="dot-grid" aria-hidden="true"></div>
          </div>
          <div class="card-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="stack">${renderBadges(project.stack)}</div>
          </div>
          <a class="ghost-link" href="${project.link}" target="_blank" rel="noreferrer">
            Source code →
          </a>
        </article>
      `,
    )
    .join('');

const renderTimeline = () =>
  timeline
    .map(
      (item) => `
        <article class="timeline-item" data-reveal>
          <span class="period">${item.period}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </article>
      `,
    )
    .join('');

const renderSkills = () =>
  skillCategories
    .map(
      (category) => `
        <article class="card skill-card" data-reveal>
          <p class="label">${category.title}</p>
          ${category.groups
            .map(
              (group) => `
                <div class="skill-group">
                  <p class="sub-label">${group.label}</p>
                  <div class="stack">${renderBadges(group.items)}</div>
                </div>
              `,
            )
            .join('')}
        </article>
      `,
    )
    .join('');

const renderStats = () =>
  focusStats
    .map(
      (stat) => `
        <div class="stat" data-reveal>
          <span class="value">${stat.value}</span>
          <span class="label">${stat.label}</span>
        </div>
      `,
    )
    .join('');

app.innerHTML = `
  <div class="background-grid" aria-hidden="true"></div>
  <header class="site-header" data-parallax>
    <button class="menu-toggle" aria-label="Toggle navigation" data-menu-toggle>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      ${navLinks
        .map((link) => `<a href="#${link.id}" data-nav-link>${link.label}</a>`)
        .join('')}
    </nav>
    <a class="primary-btn header-cta" href="#contact">Say hi</a>
  </header>
  <main>
    <section id="hero" class="panel hero" data-parallax>
      <div class="hero-text">
        <p class="eyebrow">Hi, I am</p>
        <h1>Gökhan Güner</h1>
        <p class="hero-lead">
          Full-stack development student in Ghent, building fast, reliable applications with a focus on AI, automation, and modern web technology.
        </p>
        <p class="typewriter">I am a <span id="typewriter"></span></p>
        <div class="cta-group">
          <a class="primary-btn" href="#projects">View projects</a>
          <a class="ghost-btn" href="#about">Learn more</a>
        </div>
        <div class="stats">${renderStats()}</div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="portrait-frame">
          <img src="/images/ME.jpeg" alt="Portrait of Gokhan Guner" loading="lazy" />
        </div>
      </div>
    </section>

    <section id="about" class="panel two-col">
      <div class="panel-text" data-reveal>
        <p class="eyebrow">About me</p>
        <h2>Junior full-stack developer</h2>
        <p>
          I study Applied Computer Science at Arteveldehogeschool, focusing on full-stack development with Node.js, TypeScript and modern web frameworks. I enjoy designing clean backend logic, optimizing data flow, and building reliable APIs.
        </p>
        <p>
          Outside of coding, I explore new developer tools, take notes from articles, and sketch ideas that help me grow faster as a developer.
        </p>
      </div>
      <div class="panel-card" data-reveal>
        <h3>Focus</h3>
        <ul>
          <li>Full-stack development</li>
          <li>AI experiments</li>
          <li>Automation</li>
        </ul>
      </div>
    </section>

    <section id="skills" class="panel">
      <div class="panel-heading">
        <p class="eyebrow">Skills</p>
        <h2>Building blocks & languages</h2>
      </div>
      <div class="grid">${renderSkills()}</div>
    </section>

    <section id="projects" class="panel">
      <div class="panel-heading">
        <p class="eyebrow">Projects</p>
        <h2>Selected work & experiments</h2>
      </div>
      <div class="grid">${renderProjects()}</div>
    </section>

    <section id="experience" class="panel">
      <div class="panel-heading">
        <p class="eyebrow">Journey</p>
        <h2>Milestones so far</h2>
      </div>
      <div class="timeline">${renderTimeline()}</div>
    </section>

    <section id="contact" class="panel contact">
      <div class="panel-text" data-reveal>
        <p class="eyebrow">Contact</p>
        <h2>Let us collaborate</h2>
        <p>
          Reach out for projects, collaborative ideas, or just a friendly hello. I am always open to talk about systems, tools, and internships in Ghent or remote.
        </p>
        <a class="primary-btn" href="mailto:gokhan.guner@arteveldehs.be">Write an email</a>
      </div>
      <div class="contact-list" data-reveal>
        ${contactLinks
          .map(
            (link) => `
              <a class="contact-item" href="${link.href}" target="_blank" rel="noreferrer">
                <span>${link.label}</span>
                <strong>${link.value}</strong>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Gökhan Güner</p>
  </footer>
`;

const typewriter = document.querySelector<HTMLSpanElement>('#typewriter');

const runTypewriter = () => {
  if (!typewriter) return;
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  const tick = () => {
    const currentPhrase = heroPhrases[phraseIndex];
    if (!deleting) {
      characterIndex += 1;
    } else {
      characterIndex -= 1;
    }

    typewriter.textContent = currentPhrase.slice(0, characterIndex);

    if (!deleting && characterIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(tick, 1200);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % heroPhrases.length;
    }

    const delay = deleting ? 60 : 110;
    setTimeout(tick, delay);
  };

  tick();
};

runTypewriter();

const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

revealElements.forEach((el) => observer.observe(el));

const navItems = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
const sections = document.querySelectorAll<HTMLElement>('section');
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (!id) return;
      const current = Array.from(navItems).find((link) => link.getAttribute('href') === `#${id}`);
      if (current) {
        if (entry.isIntersecting) {
          navItems.forEach((link) => link.classList.remove('active'));
          current.classList.add('active');
        }
      }
    });
  },
  { threshold: 0.6 },
);

sections.forEach((section) => navObserver.observe(section));

const parallaxNodes = document.querySelectorAll<HTMLElement>('[data-parallax]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxNodes.forEach((node) => {
    node.style.setProperty('--parallax-offset', `${scrollY * 0.02}px`);
  });
});

document.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  document.documentElement.classList.add('reduce-motion');
}

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const siteHeader = document.querySelector<HTMLElement>('.site-header');

const closeMenu = () => {
  siteHeader?.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

if (menuToggle && siteHeader) {
  menuToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('is-open');
    document.body.classList.toggle('nav-open');
  });

  navItems.forEach((link) =>
    link.addEventListener('click', () => {
      closeMenu();
    }),
  );

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
}
