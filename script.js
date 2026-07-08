const channelData = {
  about: {
    kicker: "Player Profile",
    title: "About Me",
    description: "I am a graduating IT Innovation & Design student at Conestoga College. My portfolio combines UX design, mobile development, web systems, databases, APIs, analytics, and creative technology. I enjoy building practical digital products that feel useful, polished, and easy to use.",
    tags: ["IT Innovation & Design", "Conestoga College", "UX", "Mobile", "Web", "Data"],
    notes: ["Focus: entry-level product, support, UX, web, and technical analyst roles.", "Portfolio style: a full-screen console menu where every channel opens a project or section."],
    actions: [
      { label: "View Skills", channel: "skills" },
      { label: "Contact Me", channel: "contact", secondary: true }
    ]
  },
  featured: {
    kicker: "Scene Selection",
    title: "Featured Projects",
    description: "These are the strongest academic projects to present first. They show a range of technical, design, database, API, mobile, and data skills instead of only one type of assignment.",
    tags: ["Case Studies", "Academic Projects", "Portfolio Ready"],
    notes: ["Best featured work: Memory Log App, Workshop Registration App, Marketplace API, Member Database Web App, Power BI Dashboard, and Weather UX Case Study.", "Each project page should include the problem, your role, tools, features, challenges, outcome, and what you learned."],
    actions: [
      { label: "Open Memory Log", channel: "memory" },
      { label: "Open API Project", channel: "api", secondary: true }
    ]
  },
  memory: {
    kicker: "Mobile App Channel",
    title: "Memory Log App",
    description: "A mobile app concept for saving and organizing personal memories with a clean mobile interface, local storage, and room for location-based features.",
    tags: ["Flutter", "SQLite", "REST APIs", "Mobile UI", "Navigation"],
    notes: ["Key features: create memory entries, save lists, map/location support, offline storage, and a simple user flow.", "What it proves: mobile app structure, user-centered design, data handling, and product thinking."],
    actions: [
      { label: "Add GitHub Link", href: "#" },
      { label: "Add Demo Video", href: "#", secondary: true }
    ]
  },
  workshop: {
    kicker: "Android App Channel",
    title: "Workshop Registration App",
    description: "An Android registration system built around form validation, navigation, summary screens, and a clean mobile experience for users signing up for workshops.",
    tags: ["Kotlin", "Jetpack Compose", "ViewModel", "Validation", "Material UI"],
    notes: ["Key features: registration form, input validation, navigation between screens, summary screen, and reusable UI components.", "What it proves: Android development foundations and the ability to turn a workflow into an app."],
    actions: [
      { label: "Add GitHub Link", href: "#" },
      { label: "Open Skills", channel: "skills", secondary: true }
    ]
  },
  api: {
    kicker: "Backend Channel",
    title: "Desired Marketplace API",
    description: "A backend API project for a marketplace-style system with endpoints for users, listings, login, registration, and testing through API clients.",
    tags: ["Node.js", "Express", "REST API", "Authentication", "Thunder Client"],
    notes: ["Key features: backend routes, request/response handling, login and registration logic, and API testing.", "What it proves: server-side thinking, endpoint design, and backend fundamentals."],
    actions: [
      { label: "Add GitHub Link", href: "#" },
      { label: "View Database Project", channel: "database", secondary: true }
    ]
  },
  database: {
    kicker: "Full-Stack Channel",
    title: "Member Database Web App",
    description: "A database-driven web application for managing member records with CRUD functionality and a structured backend-to-database connection.",
    tags: ["Java", "JSP", "JDBC", "MySQL", "CRUD", "MVC"],
    notes: ["Key features: add, view, update, and delete records; form handling; validation; and persistent database storage.", "What it proves: database design, backend connection logic, and full-stack web fundamentals."],
    actions: [
      { label: "Add GitHub Link", href: "#" },
      { label: "Open API Project", channel: "api", secondary: true }
    ]
  },
  powerbi: {
    kicker: "Data Channel",
    title: "Power BI Dashboard",
    description: "A real estate data dashboard focused on filtering, comparing, and visualizing property information in a way that supports practical decision-making.",
    tags: ["Power BI", "Data Visualization", "Filters", "Dashboards", "Business Analysis"],
    notes: ["Key features: slicers, charts, tables, price/budget views, and location-based comparisons.", "What it proves: turning raw data into insights and communicating information visually."],
    actions: [
      { label: "Add Dashboard Screenshots", href: "#" },
      { label: "Open Skills", channel: "skills", secondary: true }
    ]
  },
  weather: {
    kicker: "UX Channel",
    title: "Weather UX Case Study",
    description: "A UX design case study for a weather dashboard, covering ideation, wireframes, usability thinking, visual design, and a final interface direction.",
    tags: ["UX Research", "Figma", "Wireframes", "Prototype", "Usability Testing"],
    notes: ["Key process: define the problem, sketch concepts, build low/high fidelity screens, test the flow, and improve the final design.", "What it proves: you can explain your design decisions, not just show a finished screen."],
    actions: [
      { label: "Add Figma Prototype", href: "#" },
      { label: "View Featured Projects", channel: "featured", secondary: true }
    ]
  },
  skills: {
    kicker: "Bonus Features",
    title: "Skills",
    description: "A combined skill set across programming, product design, databases, analytics, and creative technology.",
    tags: ["Kotlin", "Flutter", "Java", "Node.js", "Express", "MySQL", "Power BI", "Figma", "GitHub", "Blender", "Unity"],
    notes: ["Technical: mobile apps, REST APIs, CRUD systems, data dashboards, validation, and database connections.", "Design: UX flows, wireframes, prototypes, visual systems, motion, and interactive interfaces."],
    actions: [
      { label: "Open Resume", channel: "resume" },
      { label: "Contact", channel: "contact", secondary: true }
    ]
  },
  resume: {
    kicker: "Download Channel",
    title: "Resume",
    description: "Add your resume PDF to the project folder and connect the button below to it. For GitHub Pages, place the PDF in an assets folder and link it as assets/Isaac-Wani-Resume.pdf.",
    tags: ["Resume", "PDF", "GitHub Pages"],
    notes: ["Recommended resume headline: Graduating IT Innovation & Design Student | UX, Mobile, Web & Data Projects.", "Update this channel after adding your latest resume PDF."],
    actions: [
      { label: "Replace With Resume PDF", href: "#" },
      { label: "Email Me", channel: "contact", secondary: true }
    ]
  },
  contact: {
    kicker: "Message Board",
    title: "Contact",
    description: "Replace the placeholder links with your real email, LinkedIn, and GitHub. This channel should make it easy for recruiters and interviewers to reach you quickly.",
    tags: ["Email", "LinkedIn", "GitHub", "Portfolio"],
    notes: ["Email: your.email@example.com", "LinkedIn: linkedin.com/in/your-profile", "GitHub: github.com/your-username"],
    actions: [
      { label: "Email", href: "mailto:your.email@example.com" },
      { label: "GitHub", href: "https://github.com/your-username", secondary: true }
    ]
  },
  "coming-soon": {
    kicker: "Empty Channel",
    title: "More Coming Soon",
    description: "Use this tile for a future capstone project, IT help desk ticketing system, booking system, or another interview-ready project.",
    tags: ["Capstone", "Future Project", "Interview Project"],
    notes: ["Strong next build: a full-stack booking system with login, admin dashboard, calendar, quotes, and email confirmation.", "Another strong build: IT help desk ticketing system with priorities, status updates, categories, and dashboards."],
    actions: [
      { label: "Open Featured Projects", channel: "featured" },
      { label: "Open Skills", channel: "skills", secondary: true }
    ]
  }
};

const channels = [...document.querySelectorAll(".channel")];
const modal = document.querySelector("#channel-modal");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const modalDescription = document.querySelector("#modal-description");
const modalTags = document.querySelector("#modal-tags");
const modalActions = document.querySelector("#modal-actions");
const modalNotes = document.querySelector("#modal-notes");
const closeModal = document.querySelector(".modal-close");
const cursor = document.querySelector(".custom-cursor");
const ripple = document.querySelector(".tap-ripple");

let selectedIndex = 0;

function selectChannel(index) {
  selectedIndex = ((index % channels.length) + channels.length) % channels.length;
  channels.forEach((channel, i) => channel.classList.toggle("is-selected", i === selectedIndex));
  channels[selectedIndex].focus({ preventScroll: true });
}

function openChannel(key) {
  const data = channelData[key];
  if (!data) return;
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modalTags.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  modalNotes.innerHTML = data.notes.map(note => `<div class="note">${note}</div>`).join("");
  modalActions.innerHTML = data.actions.map(action => {
    const cls = action.secondary ? "action-link secondary" : "action-link";
    if (action.channel) {
      return `<button type="button" class="${cls}" data-open-channel="${action.channel}">${action.label}</button>`;
    }
    return `<a class="${cls}" href="${action.href}" target="_blank" rel="noreferrer">${action.label}</a>`;
  }).join("");
  modal.showModal();
}

channels.forEach((channel, index) => {
  channel.addEventListener("mouseenter", () => {
    selectedIndex = index;
    channels.forEach((c, i) => c.classList.toggle("is-selected", i === selectedIndex));
  });
  channel.addEventListener("click", () => openChannel(channel.dataset.channel));
});

document.addEventListener("click", event => {
  const channelButton = event.target.closest("[data-open-channel], .home-button, .mail-button");
  if (!channelButton) return;
  const key = channelButton.dataset.openChannel || channelButton.dataset.channel;
  if (!key) return;
  if (modal.open) modal.close();
  setTimeout(() => openChannel(key), 90);
});

closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  const rect = modal.querySelector(".modal-frame").getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) modal.close();
});

document.addEventListener("keydown", event => {
  if (modal.open) return;
  const columns = window.matchMedia("(max-width: 780px)").matches ? 2 : window.matchMedia("(max-width: 1180px)").matches ? 3 : 4;
  if (event.key === "ArrowRight") { event.preventDefault(); selectChannel(selectedIndex + 1); }
  if (event.key === "ArrowLeft") { event.preventDefault(); selectChannel(selectedIndex - 1); }
  if (event.key === "ArrowDown") { event.preventDefault(); selectChannel(selectedIndex + columns); }
  if (event.key === "ArrowUp") { event.preventDefault(); selectChannel(selectedIndex - columns); }
  if (event.key === "Enter") { event.preventDefault(); openChannel(channels[selectedIndex].dataset.channel); }
});

document.querySelector(".side-arrow.right").addEventListener("click", () => selectChannel(selectedIndex + 1));
document.querySelector(".side-arrow.left").addEventListener("click", () => selectChannel(selectedIndex - 1));

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  document.querySelector("#clock").textContent = `${hours}:${minutes}`;
  document.querySelector("#ampm").textContent = ampm;
  document.querySelector("#date").textContent = `${days[now.getDay()]} ${now.getMonth() + 1}/${now.getDate()}`;
}
updateClock();
setInterval(updateClock, 1000 * 15);

function enableWiiCursor() {
  if (!cursor) return;

  const canHover = matchMedia("(hover: hover)").matches || matchMedia("(pointer:fine)").matches;
  if (!canHover) return;

  const moveCursor = event => {
    document.body.classList.add("cursor-active");
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };

  // pointermove is more reliable than mousemove across Chrome, Edge, and GitHub Pages previews.
  window.addEventListener("pointermove", moveCursor, { passive: true });
  window.addEventListener("mousemove", moveCursor, { passive: true });

  document.addEventListener("pointerover", event => {
    document.body.classList.toggle("cursor-hover", Boolean(event.target.closest("button, a, .channel, .action-link")));
  }, { passive: true });

  document.addEventListener("pointerdown", event => {
    document.body.classList.add("cursor-down");
    if (ripple) {
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      ripple.classList.remove("play");
      void ripple.offsetWidth;
      ripple.classList.add("play");
    }
  });

  document.addEventListener("pointerup", () => document.body.classList.remove("cursor-down"));
  document.addEventListener("pointercancel", () => document.body.classList.remove("cursor-down"));
}

enableWiiCursor();
selectChannel(0);
