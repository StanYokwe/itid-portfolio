const bootScreen = document.getElementById('bootScreen');
const startButton = document.getElementById('startButton');
const bootClock = document.getElementById('bootClock');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const screenContent = document.getElementById('screenContent');
const screenTitle = document.getElementById('screenTitle');
const screenDesc = document.getElementById('screenDesc');
const screenTag = document.getElementById('screenTag');
const controlButtons = document.querySelectorAll('.control-btn');
const trackingSlider = document.getElementById('trackingSlider');
const filters = document.querySelectorAll('.filter');
const tapeCards = document.querySelectorAll('.tape-card');
const caseModal = document.getElementById('caseModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalTag = document.getElementById('modalTag');
const modalProblem = document.getElementById('modalProblem');
const modalRole = document.getElementById('modalRole');
const modalTools = document.getElementById('modalTools');
const modalLearned = document.getElementById('modalLearned');
const vhsToggle = document.getElementById('vhsToggle');
const cursorLight = document.querySelector('.cursor-light');
const reveals = document.querySelectorAll('.reveal');

const reelItems = [
  {
    title: 'Memory Log Mobile App',
    desc: 'Flutter, SQLite, maps, local storage, and user-centered mobile flows.',
    tag: 'MOBILE / UX'
  },
  {
    title: 'Desired Marketplace API',
    desc: 'Node.js and Express backend with REST endpoints, user flows, and API testing.',
    tag: 'BACKEND / REST'
  },
  {
    title: 'Member Database Web App',
    desc: 'Java, JSP, JDBC, MySQL, validation, MVC structure, and CRUD features.',
    tag: 'WEB / DATABASE'
  },
  {
    title: 'Power BI Real Estate Dashboard',
    desc: 'Data visuals for budget, location, property type, and decision-making filters.',
    tag: 'DATA / BI'
  },
  {
    title: 'Weather Dashboard UX Case Study',
    desc: 'Research, wireframes, high-fidelity UI, usability testing, and iteration.',
    tag: 'UX / FIGMA'
  }
];

const caseFiles = {
  memory: {
    tag: 'CASE 01 / MOBILE + UX',
    title: 'Memory Log Mobile App',
    summary: 'A mobile application designed to help users save personal memories with location-based features and offline access.',
    problem: 'Users need a simple way to capture meaningful personal moments, organize them, and access them later without relying completely on an internet connection.',
    role: 'I planned the app structure, designed the interface, implemented mobile navigation, and connected storage features to practical user flows.',
    tools: 'Flutter, SQLite, REST API concepts, maps/location features, mobile navigation, UI testing.',
    learned: 'I learned how local storage, navigation, and user-centered decisions work together in a mobile product.'
  },
  marketplace: {
    tag: 'CASE 02 / BACKEND',
    title: 'Desired Marketplace API',
    summary: 'A backend API for a marketplace-style application with structured routes and testing workflows.',
    problem: 'Marketplace apps need reliable backend routes for users, products, authentication concepts, and clean request/response handling.',
    role: 'I created API routes, tested endpoints, organized backend logic, and practiced documenting how the system would support a frontend.',
    tools: 'Node.js, Express, REST APIs, JSON, Thunder Client/Postman-style testing, backend routing.',
    learned: 'I learned how to structure backend endpoints and explain API behavior clearly to technical and non-technical audiences.'
  },
  database: {
    tag: 'CASE 03 / WEB + DATABASE',
    title: 'Member Database Web App',
    summary: 'A database-driven web application for storing, managing, updating, and viewing member information.',
    problem: 'Organizations need a reliable way to maintain member records with validation, data updates, and clear admin workflows.',
    role: 'I built the CRUD flow, connected the database, handled validation, and organized the application using MVC-style thinking.',
    tools: 'Java, JSP, JDBC, MySQL, CRUD, validation, MVC structure.',
    learned: 'I learned how frontend forms, backend logic, and relational databases connect in a full-stack workflow.'
  },
  powerbi: {
    tag: 'CASE 04 / DATA',
    title: 'Power BI Real Estate Dashboard',
    summary: 'A dashboard that helps compare real estate options using budget, location, property type, and visual filters.',
    problem: 'Housing decisions involve many variables, so users need a simple way to compare listings and understand patterns quickly.',
    role: 'I cleaned and organized the data, built dashboard visuals, added filters, and focused on making the insights easy to read.',
    tools: 'Power BI, data cleaning, charts, slicers, filters, dashboard storytelling.',
    learned: 'I learned how dashboards support practical decisions when the visuals are simple, focused, and connected to user goals.'
  },
  weather: {
    tag: 'CASE 05 / UX',
    title: 'Weather Dashboard UX Case Study',
    summary: 'A UX case study that explores how users view weather information and how the dashboard can be made clearer.',
    problem: 'Weather dashboards can become cluttered, making it difficult for users to quickly understand what matters most.',
    role: 'I worked through ideation, wireframes, high-fidelity screens, usability feedback, and final UI improvements.',
    tools: 'Figma, UX research, wireframes, prototyping, usability testing, visual design.',
    learned: 'I learned how research and usability testing can improve layout, hierarchy, and user confidence.'
  },
  workshop: {
    tag: 'CASE 06 / ANDROID',
    title: 'Workshop Registration Android App',
    summary: 'An Android app that guides users through a workshop registration flow with validation and summary screens.',
    problem: 'Registration forms need to be simple, clear, and reliable so users can complete tasks without confusion or missing information.',
    role: 'I built screens, validation logic, navigation, reusable components, and state handling for a clean registration experience.',
    tools: 'Kotlin, Jetpack Compose, ViewModel concepts, validation, navigation, Material UI.',
    learned: 'I learned how important form feedback, clean navigation, and state management are in mobile app development.'
  },
  creative: {
    tag: 'CASE 07 / CREATIVE TECHNOLOGY',
    title: '3D Logo Animation + Unity Game',
    summary: 'Creative technology projects using visual storytelling, motion, animation principles, and interactive media.',
    problem: 'Digital products often need more than function; they need visual identity, motion, and interaction to feel memorable.',
    role: 'I explored 3D branding, timing, animation principles, game logic, menus, and interactive design concepts.',
    tools: 'Blender, Unity, animation principles, interactive media, visual storytelling.',
    learned: 'I learned how motion and interaction can make digital experiences more engaging and memorable.'
  }
};

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-CA', { hour12: false });
  if (bootClock) bootClock.textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

function enterSite() {
  bootScreen?.classList.add('hide');
  document.body.classList.add('booted');
  localStorage.setItem('portfolioBooted', 'true');
}

startButton?.addEventListener('click', enterSite);

if (localStorage.getItem('portfolioBooted') === 'true') {
  document.body.classList.add('booted');
  bootScreen?.classList.add('hide');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

function setReel(index) {
  const item = reelItems[index];
  if (!item) return;
  screenContent.classList.add('swap');
  window.setTimeout(() => {
    screenTitle.textContent = item.title;
    screenDesc.textContent = item.desc;
    screenTag.textContent = item.tag;
    screenContent.classList.remove('swap');
  }, 160);
  controlButtons.forEach((button) => button.classList.remove('active'));
  controlButtons[index]?.classList.add('active');
}

controlButtons.forEach((button) => {
  button.addEventListener('click', () => setReel(Number(button.dataset.reel)));
});
setReel(0);

trackingSlider?.addEventListener('input', (event) => {
  const value = Number(event.target.value) / 240;
  document.documentElement.style.setProperty('--tracking-noise', value.toFixed(2));
});

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((button) => button.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    tapeCards.forEach((card) => {
      const categories = card.dataset.category || '';
      const shouldShow = selected === 'all' || categories.includes(selected);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

function openCase(projectKey) {
  const data = caseFiles[projectKey];
  if (!data) return;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalSummary.textContent = data.summary;
  modalProblem.textContent = data.problem;
  modalRole.textContent = data.role;
  modalTools.textContent = data.tools;
  modalLearned.textContent = data.learned;
  if (typeof caseModal.showModal === 'function') {
    caseModal.showModal();
  } else {
    caseModal.setAttribute('open', '');
  }
}

tapeCards.forEach((card) => {
  card.querySelector('.open-case')?.addEventListener('click', () => openCase(card.dataset.project));
});

modalClose?.addEventListener('click', () => caseModal.close());
caseModal?.addEventListener('click', (event) => {
  const rect = caseModal.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (clickedOutside) caseModal.close();
});

function toggleVhs() {
  document.body.classList.toggle('no-vhs');
  const off = document.body.classList.contains('no-vhs');
  vhsToggle.classList.toggle('off', off);
  vhsToggle.textContent = off ? 'CLEAN' : 'VHS';
}

vhsToggle?.addEventListener('click', toggleVhs);
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'v') toggleVhs();
});

document.addEventListener('pointermove', (event) => {
  if (!cursorLight) return;
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();
