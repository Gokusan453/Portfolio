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
  { value: '2+', label: 'Years coding' },
  { value: '8', label: 'Projects shipped' },
  { value: '2', label: 'AI projects built' },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Coding stack',
    groups: [
      {
        label: 'Confident with',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'PHP', 'MySQL', 'Git & GitHub', 'Docker', 'Figma', 'Craft CMS'],
      },
      {
        label: 'Learning',
        items: ['Python'],
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
        items: ['French'],
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
    title: 'Aanwezigheidsapp (QR)',
    description:
      'Mobile app (coming soon) to scan QR codes for attendance purposes. Used in the classroom for attendance purposes. Developed in a team of 4 students.',
    stack: ['React Native', 'Expo', 'Typescript'],
    link: '#',
    highlight: 'Mobile — coming soon',
  },
  {
    title: 'Trajectopvolgsysteem',
    description:
      'Een opvolgsysteem voor trajectgesprekken met studenten van het graduaat programmeren. Docenten houden afspraken, notities en vervolgstappen centraal bij.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Strapi'],
    link: '#',
    highlight: 'Student coaching - coming soon',
  },
];

const timeline: TimelineItem[] = [
  {
    period: '2024 — Today',
    title: 'Student @ Arteveldehogeschool',
    detail:
      'Started the programming track, diving deeper into software engineering fundamentals while working my way toward becoming a full-stack engineer.',
  },
  {
    period: '2022 - 2024',
    title: 'First steps in web development',
    detail: 'Published my first one-page website and got introduced to WordPress as a CMS, learning how templating and plugins speed up delivery.',
  },
  {
    period: '2021 - 2022',
    title: 'First lines of code',
    detail: 'During my multimedia studies I started building simple HTML/CSS sites and picked up Adobe tools to translate ideas into visuals.',
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
            Visit project →
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
          22-year-old programming student in Ghent, focused on full-stack builds, AI experiments, and automation that keeps moving faster.
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
          I study Applied Computer Science at Arteveldehogeschool. I enjoy figuring out how data moves through a system, what makes APIs reliable, and how to design maintainable backend layers.
        </p>
        <p>
          When I am not coding, I am sketching system ideas, taking notes from articles, or exploring new tooling that can make me faster and sharper as a developer.
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
