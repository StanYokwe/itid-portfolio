const loader = document.getElementById('loader');
const playIntro = document.getElementById('playIntro');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const cursorStar = document.getElementById('cursorStar');
const remoteButtons = document.querySelectorAll('[data-jump]');
const randomScene = document.getElementById('randomScene');
const filters = document.querySelectorAll('.chapter-filter');
const sceneCards = document.querySelectorAll('.scene-card');
const modal = document.getElementById('chapterModal');
const modalClose = document.getElementById('modalClose');
const modalPoster = document.getElementById('modalPoster');
const modalNumber = document.getElementById('modalNumber');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalProblem = document.getElementById('modalProblem');
const modalRole = document.getElementById('modalRole');
const modalTools = document.getElementById('modalTools');
const modalLearned = document.getElementById('modalLearned');
const motionToggle = document.getElementById('motionToggle');
const reveals = document.querySelectorAll('.reveal');

const chapterData = {
  memory: {
    number: '01',
    tag: 'SCENE 01 / MOBILE + UX',
    title: 'Memory Log Mobile App',
    summary: 'A mobile application designed to help users save personal memories with location-based features and offline access.',
    problem: 'Users need a simple way to capture meaningful personal moments, organize them, and access them later without relying completely on an internet connection.',
    role: 'I planned the app structure, designed the interface, implemented mobile navigation, and connected storage features to practical user flows.',
    tools: 'Flutter, SQLite, REST API concepts, maps/location features, mobile navigation, UI testing.',
    learned: 'I learned how local storage, navigation, and user-centered decisions work together in a mobile product.',
    poster: 'linear-gradient(135deg, #7adbff, #75dd66)'
  },
  marketplace: {
    number: '02',
    tag: 'SCENE 02 / BACKEND',
    title: 'Desired Marketplace API',
    summary: 'A backend API for a marketplace-style application with structured routes and testing workflows.',
    problem: 'Marketplace apps need reliable backend routes for users, products, authentication concepts, and clean request/response handling.',
    role: 'I created API routes, tested endpoints, organized backend logic, and practiced documenting how the system would support a frontend.',
    tools: 'Node.js, Express, REST APIs, JSON, Thunder Client/Postman-style testing, backend routing.',
    learned: 'I learned how to structure backend endpoints and explain API behavior clearly to technical and non-technical audiences.',
    poster: 'linear-gradient(135deg, #ff94ca, #ffe55e)'
  },
  database: {
    number: '03',
    tag: 'SCENE 03 / WEB + DATABASE',
    title: 'Member Database Web App',
    summary: 'A database-driven web application for storing, managing, updating, and viewing member information.',
    problem: 'Organizations need a reliable way to maintain member records with validation, data updates, and clear admin workflows.',
    role: 'I built the CRUD flow, connected the database, handled validation, and organized the application using MVC-style thinking.',
    tools: 'Java, JSP, JDBC, MySQL, CRUD, validation, MVC structure.',
    learned: 'I learned how frontend forms, backend logic, and relational databases connect in a full-stack workflow.',
    poster: 'linear-gradient(135deg, #8d73ff, #65d8ff)'
  },
  powerbi: {
    number: '04',
    tag: 'SCENE 04 / DATA',
    title: 'Power BI Real Estate Dashboard',
    summary: 'A dashboard that helps compare real estate options using budget, location, property type, and visual filters.',
    problem: 'Housing decisions involve many variables, so users need a simple way to compare listings and understand patterns quickly.',
    role: 'I cleaned and organized the data, built dashboard visuals, added filters, and focused on making the insights easy to read.',
    tools: 'Power BI, data cleaning, charts, slicers, filters, dashboard storytelling.',
    learned: 'I learned how dashboards support practical decisions when the visuals are simple, focused, and connected to user goals.',
    poster: 'linear-gradient(135deg, #62de89, #f4ff6b)'
  },
  weather: {
    number: '05',
    tag: 'SCENE 05 / UX',
    title: 'Weather Dashboard UX Case Study',
    summary: 'A UX case study that explores how users view weather information and how the dashboard can be made clearer.',
    problem: 'Weather dashboards can become cluttered, making it difficult for users to quickly understand what matters most.',
    role: 'I worked through ideation, wireframes, high-fidelity screens, usability feedback, and final UI improvements.',
    tools: 'Figma, UX research, wireframes, prototyping, usability testing, visual design.',
    learned: 'I learned how research and usability testing can improve layout, hierarchy, and user confidence.',
    poster: 'linear-gradient(135deg, #51c9ff, #f4fbff)'
  },
  workshop: {
    number: '06',
    tag: 'SCENE 06 / ANDROID',
    title: 'Workshop Registration Android App',
    summary: 'An Android app that guides users through a workshop registration flow with validation and summary screens.',
    problem: 'Registration forms need to be simple, clear, and reliable so users can complete tasks without confusion or missing information.',
    role: 'I built screens, validation logic, navigation, reusable components, and state handling for a clean registration experience.',
    tools: 'Kotlin, Jetpack Compose, ViewModel concepts, validation, navigation, Material UI.',
    learned: 'I learned how important form feedback, clean navigation, and state management are in mobile app development.',
    poster: 'linear-gradient(135deg, #ff9d2f, #ff5ba7)'
  },
  creative: {
    number: '07',
    tag: 'SCENE 07 / CREATIVE TECHNOLOGY',
    title: '3D Logo Animation + Unity Game',
    summary: 'Creative technology projects using visual storytelling, motion, animation principles, and interactive media.',
    problem: 'Digital products often need more than function; they need visual identity, motion, and interaction to feel memorable.',
    role: 'I explored 3D branding, timing, animation principles, game logic, menus, and interactive design concepts.',
    tools: 'Blender, Unity, animation principles, interactive media, visual storytelling.',
    learned: 'I learned how motion and interaction can make digital experiences more engaging and memorable.',
    poster: 'linear-gradient(135deg, #fb5cc7, #7847ff)'
  }
};

function playSite() {
  loader?.classList.add('hide');
  localStorage.setItem('dvdPortfolioEntered', 'true');
}

playIntro?.addEventListener('click', playSite);

if (localStorage.getItem('dvdPortfolioEntered') === 'true') {
  loader?.classList.add('hide');
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

remoteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.jump);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function openChapter(projectKey) {
  const data = chapterData[projectKey];
  if (!data) return;
  modalNumber.textContent = data.number;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalSummary.textContent = data.summary;
  modalProblem.textContent = data.problem;
  modalRole.textContent = data.role;
  modalTools.textContent = data.tools;
  modalLearned.textContent = data.learned;
  modalPoster.style.background = data.poster;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
}

sceneCards.forEach((card) => {
  const project = card.dataset.project;
  card.querySelector('button')?.addEventListener('click', (event) => {
    event.stopPropagation();
    openChapter(project);
  });
  card.addEventListener('click', () => openChapter(project));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openChapter(project);
    }
  });
});

modalClose?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((button) => button.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    sceneCards.forEach((card) => {
      const categories = card.dataset.category || '';
      const show = selected === 'all' || categories.includes(selected);
      card.classList.toggle('hidden', !show);
    });
  });
});

randomScene?.addEventListener('click', () => {
  const visibleCards = [...sceneCards].filter((card) => !card.classList.contains('hidden'));
  const selected = visibleCards[Math.floor(Math.random() * visibleCards.length)] || sceneCards[0];
  selected.scrollIntoView({ behavior: 'smooth', block: 'center' });
  selected.animate([
    { transform: 'scale(1) rotate(0deg)' },
    { transform: 'scale(1.08) rotate(-1deg)' },
    { transform: 'scale(1) rotate(0deg)' }
  ], { duration: 700, easing: 'ease-out' });
  window.setTimeout(() => openChapter(selected.dataset.project), 420);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.open) modal.close();
  const number = Number(event.key);
  if (number >= 1 && number <= 7) {
    const card = [...sceneCards].find((item) => item.dataset.project && item.querySelector('.scene-screen span')?.textContent === `0${number}`);
    if (card) openChapter(card.dataset.project);
  }
});

window.addEventListener('pointermove', (event) => {
  if (!cursorStar) return;
  cursorStar.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%) rotate(${event.clientX % 80}deg)`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((item) => observer.observe(item));

motionToggle?.addEventListener('click', () => {
  document.body.classList.toggle('reduce-motion');
  const reduced = document.body.classList.contains('reduce-motion');
  motionToggle.setAttribute('aria-pressed', String(reduced));
  motionToggle.textContent = reduced ? 'Motion On' : 'Reduce Motion';
});
