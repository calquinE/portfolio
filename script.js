// State
let currentLanguage = "es"
let currentTheme = "light"
let currentSkillIndex = 0
let currentFilter = "all"

// Data
const skills = [
  { name: "Python", icon: "./img/skills/python.png" },
  { name: "MATLAB", icon: "./img/skills/matlab.png" },
  { name: "AutoCAD", icon: "./img/skills/autocad.png" },
  { name: "EASE", icon: "./img/skills/ease.png" },
  { name: "Smaart", icon: "./img/skills/smaart.png" }, 
  { name: "CadnaA", icon: "./img/skills/cadnaa.svg" },
  { name: "Office", icon: "./img/skills/office.png" },
  { name: "LaTeX", icon: "./img/skills/latex.png" },
  { name: "Multisim", icon: "./img/skills/multisim.webp" },
  { name: "Altium", icon: "./img/skills/altium.png" },
  { name: "ProTools", icon: "./img/skills/protools.png" },
  { name: "Audacity", icon: "./img/skills/audacity.svg" },
]

const projects = [
  {
    id: 1,
    title: { es: "Análisis Acústico de Sala de Conciertos", en: "Concert Hall Acoustic Analysis" },
    description: {
      es: "Estudio completo de las características acústicas de una sala de conciertos, incluyendo mediciones de tiempo de reverberación y respuesta en frecuencia.",
      en: "Comprehensive study of the acoustic characteristics of a concert hall, including reverberation time measurements and frequency response.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["EASE", "Arta", "Smaart"],
    image: "./img/proyectos/concert-hall-acoustics.jpg",
    link: "#",
    type: "pdf",
  },
  {
    id: 2,
    title: { es: "Procesador de Efectos Digital", en: "Digital Effects Processor" },
    description: {
      es: "Desarrollo de un procesador de efectos de audio en tiempo real utilizando algoritmos de DSP avanzados.",
      en: "Development of a real-time audio effects processor using advanced DSP algorithms.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Python", "MATLAB"],
    image: "./img/proyectos/digital-signal-processing.jpg",
    link: "#",
    type: "external",
  },
  {
    id: 3,
    title: { es: "Sistema de Sonido para Teatro", en: "Theatre Sound System" },
    description: {
      es: "Diseño e implementación de un sistema de refuerzo sonoro para un teatro de 500 butacas.",
      en: "Design and implementation of a sound reinforcement system for a 500-seat theatre.",
    },
    branch: { es: "Electroacústica", en: "Electroacoustics" },
    technologies: ["EASE", "AutoCAD"],
    image: "./img/proyectos/theatre-sound-system.jpg",
    link: "#",
    type: "pdf",
  },
  {
    id: 4,
    title: { es: "Análisis de Ruido Ambiental", en: "Environmental Noise Analysis" },
    description: {
      es: "Estudio de impacto acústico y mapeo de ruido para un proyecto de desarrollo urbano.",
      en: "Acoustic impact study and noise mapping for an urban development project.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["CadnaA", "AutoCAD"],
    image: "./img/proyectos/environmental-noise-mapping.jpg",
    link: "#",
    type: "pdf",
  },
  {
    id: 5,
    title: { es: "Plugin de Reverberación", en: "Reverb Plugin" },
    description: {
      es: "Desarrollo de un plugin VST de reverberación algorítmica con interfaz gráfica personalizada.",
      en: "Development of an algorithmic reverb VST plugin with custom graphical interface.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Python", "MATLAB"],
    image: "./img/proyectos/audio-plugin-interface.jpg",
    link: "#",
    type: "external",
  },
  {
    id: 6,
    title: { es: "Grabación de Álbum Musical", en: "Music Album Recording" },
    description: {
      es: "Grabación, mezcla y masterización de un álbum de música independiente en estudio profesional.",
      en: "Recording, mixing and mastering of an independent music album in a professional studio.",
    },
    branch: { es: "Audio", en: "Audio" },
    technologies: ["ProTools", "Audacity"],
    image: "./img/proyectos/recording-studio-session.png",
    link: "#",
    type: "external",
  },
]

const education = [
  {
    id: 1,
    degree: { es: "Ingeniería en Sonido", en: "Sound Engineering Degree" },
    institution: { es: "Universidad Nacional de Tres de Febrero", en: "National University of Tres de Febrero" },
    years: "2015 - 2020",
    description: {
      es: "Formación integral en acústica, electrónica, procesamiento digital de señales y producción musical.",
      en: "Comprehensive training in acoustics, electronics, digital signal processing and music production.",
    },
  },
  {
    id: 2,
    degree: { es: "Técnico en Audio Profesional", en: "Professional Audio Technician" },
    institution: { es: "Instituto de Audio y Acústica", en: "Institute of Audio and Acoustics" },
    years: "2013 - 2015",
    description: {
      es: "Especialización en grabación, mezcla y masterización en estudios profesionales.",
      en: "Specialisation in recording, mixing and mastering in professional studios.",
    },
  },
  {
    id: 3,
    degree: { es: "Certificación en Diseño Acústico", en: "Acoustic Design Certification" },
    institution: { es: "Asociación Argentina de Acústica", en: "Argentine Acoustics Association" },
    years: "2021",
    description: {
      es: "Certificación profesional en diseño y análisis acústico de espacios.",
      en: "Professional certification in acoustic design and analysis of spaces.",
    },
  },
]

const experience = [
  {
    id: 1,
    position: { es: "Ingeniero de Sonido Senior", en: "Senior Sound Engineer" },
    company: { es: "Estudio Sonoro", en: "Sonoro Studio" },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    period: { es: "Ene 2021 - Presente", en: "Jan 2021 - Present" },
    description: {
      es: "Responsable de la grabación, mezcla y masterización de proyectos musicales. Supervisión de sesiones de grabación y coordinación con artistas y productores.",
      en: "Responsible for recording, mixing and mastering music projects. Supervision of recording sessions and coordination with artists and producers.",
    },
  },
  {
    id: 2,
    position: { es: "Consultor en Acústica", en: "Acoustics Consultant" },
    company: { es: "Acústica Integral", en: "Integral Acoustics" },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    period: { es: "Mar 2019 - Dic 2020", en: "Mar 2019 - Dec 2020" },
    description: {
      es: "Diseño acústico de salas de conciertos, teatros y estudios de grabación. Realización de estudios de impacto acústico y mediciones in situ.",
      en: "Acoustic design of concert halls, theatres and recording studios. Acoustic impact studies and on-site measurements.",
    },
  },
  {
    id: 3,
    position: { es: "Técnico de Audio", en: "Audio Technician" },
    company: { es: "Producciones Live", en: "Live Productions" },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    period: { es: "Jun 2017 - Feb 2019", en: "Jun 2017 - Feb 2019" },
    description: {
      es: "Operación de sistemas de sonido en eventos en vivo. Montaje y configuración de equipos de audio profesional para conciertos y eventos corporativos.",
      en: "Operation of sound systems at live events. Assembly and configuration of professional audio equipment for concerts and corporate events.",
    },
  },
]

const contactInfo = [
  {
    icon: "mail",
    title: { es: "Correo electrónico", en: "Email" },
    value: "calco.epu@gmail.com",
    link: "mailto:calco.epu@gmail.com",
  },
  {
    icon: "linkedin",
    title: { es: "LinkedIn", en: "LinkedIn" },
    value: "Calquin Epullan - @calquin",
    link: "https://linkedin.com/in/calquin",
  },
  {
    icon: "github",
    title: { es: "GitHub", en: "GitHub" },
    value: "@calquinE",
    link: "https://github.com/calquinE",
  },
  {
    icon: "location",
    title: { es: "Ubicación", en: "Location" },
    value: "Buenos Aires, Argentina",
    link: null,
  },
]

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initNavigation()
  initTheme()
  initLanguage()
  initParticles()
  initSkills()
  initProjects()
  initEducation()
  initExperience()
  initContact()
})

// Navigation
function initNavigation() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navigation")
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Language dropdown
  const languageToggle = document.getElementById("language-toggle")
  const languageMenu = document.getElementById("language-menu")

  languageToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    languageMenu.classList.toggle("show")
  })

  document.addEventListener("click", () => {
    languageMenu.classList.remove("show")
  })
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Theme
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle")
  const moonIcon = themeToggle.querySelector(".moon-icon")
  const sunIcon = themeToggle.querySelector(".sun-icon")

  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark", currentTheme === "dark")
    moonIcon.classList.toggle("hidden", currentTheme === "dark")
    sunIcon.classList.toggle("hidden", currentTheme === "light")
  })
}

// Language
function initLanguage() {
  updateLanguage()
}

function setLanguage(lang) {
  currentLanguage = lang
  document.documentElement.lang = lang
  updateLanguage()
  document.getElementById("language-menu").classList.remove("show")
}

function updateLanguage() {
  // Update all elements with data-es and data-en attributes
  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`)
  })

  // Re-render dynamic content
  renderProjects()
  renderEducation()
  renderExperience()
  renderContact()
}

// Particles
function initParticles() {
  const particlesContainer = document.getElementById("particles")
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 5}s`
    particle.style.animationDuration = `${5 + Math.random() * 10}s`
    particlesContainer.appendChild(particle)
  }
}

// Skills
function initSkills() {
  // Desktop: Infinite carousel
  const skillsTrack = document.getElementById("skills-track")
  const doubledSkills = [...skills, ...skills]
  doubledSkills.forEach((skill) => {
    const card = createSkillCard(skill)
    skillsTrack.appendChild(card)
  })

  // Mobile: Static carousel
  const skillsMobileContainer = document.getElementById("skills-mobile-container")
  renderMobileSkills()

  document.getElementById("skills-prev").addEventListener("click", () => {
    currentSkillIndex = (currentSkillIndex - 1 + skills.length) % skills.length
    renderMobileSkills()
  })

  document.getElementById("skills-next").addEventListener("click", () => {
    currentSkillIndex = (currentSkillIndex + 1) % skills.length
    renderMobileSkills()
  })
}

function createSkillCard(skill) {
  const card = document.createElement("div")
  card.className = "skill-card"
  card.innerHTML = `
    <div class="skill-icon"><img src="${skill.icon}" alt="${skill.name} icon" /></div>
    <div class="skill-name">${skill.name}</div>
  `
  return card
}

function renderMobileSkills() {
  const container = document.getElementById("skills-mobile-container")
  container.innerHTML = ""
  const visibleSkills = 3
  for (let i = 0; i < visibleSkills; i++) {
    const index = (currentSkillIndex + i) % skills.length
    const card = createSkillCard(skills[index])
    container.appendChild(card)
  }
}

// Projects
function initProjects() {
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentFilter = btn.getAttribute("data-branch")
      renderProjects()
    })
  })

  renderProjects()
}

function renderProjects() {
  const grid = document.getElementById("projects-grid")
  grid.innerHTML = ""

  const filteredProjects = projects.filter((project) => {
    if (currentFilter === "all") return true
    return project.branch[currentLanguage] === currentFilter
  })

  filteredProjects.forEach((project) => {
    const card = document.createElement("div")
    card.className = "project-card"
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title[currentLanguage]}" class="project-image">
      <div class="project-header">
        <div class="project-title-row">
          <h3 class="project-title">${project.title[currentLanguage]}</h3>
          <span class="badge">${project.branch[currentLanguage]}</span>
        </div>
        <p class="project-description">${project.description[currentLanguage]}</p>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.technologies.map((tech) => `<span class="badge badge-outline">${tech}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer">
        <a href="${project.link}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
          ${
            project.type === "pdf"
              ? `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                   <polyline points="14 2 14 8 20 8"></polyline>
                   <line x1="16" y1="13" x2="8" y2="13"></line>
                   <line x1="16" y1="17" x2="8" y2="17"></line>
                   <polyline points="10 9 9 9 8 9"></polyline>
                 </svg>
                 Ver PDF`
              : `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                   <polyline points="15 3 21 3 21 9"></polyline>
                   <line x1="10" y1="14" x2="21" y2="3"></line>
                 </svg>
                 Ver proyecto`
          }
        </a>
      </div>
    `
    grid.appendChild(card)
  })
}

// Education
function initEducation() {
  renderEducation()
}

function renderEducation() {
  const timeline = document.getElementById("education-timeline")
  timeline.innerHTML = ""

  education.forEach((item) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"
    timelineItem.innerHTML = `
      <div class="timeline-icon">
        <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>
      <div class="timeline-content">
        <div class="timeline-year">${item.years}</div>
        <h3 class="timeline-degree">${item.degree[currentLanguage]}</h3>
        <p class="timeline-institution">${item.institution[currentLanguage]}</p>
        <p class="timeline-description">${item.description[currentLanguage]}</p>
      </div>
    `
    timeline.appendChild(timelineItem)
  })
}

// Experience
function initExperience() {
  renderExperience()
}

function renderExperience() {
  const list = document.getElementById("experience-list")
  list.innerHTML = ""

  experience.forEach((item) => {
    const experienceItem = document.createElement("div")
    experienceItem.className = "experience-item"
    experienceItem.innerHTML = `
      <div class="experience-icon">
        <svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </div>
      <div class="experience-content">
        <div class="experience-header">
          <div>
            <h3 class="experience-position">${item.position[currentLanguage]}</h3>
            <p class="experience-company">${item.company[currentLanguage]}</p>
          </div>
          <div class="experience-meta">
            <p>${item.period[currentLanguage]}</p>
            <p>${item.location[currentLanguage]}</p>
          </div>
        </div>
        <p class="experience-description">${item.description[currentLanguage]}</p>
      </div>
    `
    list.appendChild(experienceItem)
  })
}

// Contact
function initContact() {
  renderContact()
}

function renderContact() {
  const grid = document.getElementById("contact-grid")
  grid.innerHTML = ""

  const icons = {
    mail: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
             <polyline points="22,6 12,13 2,6"></polyline>
           </svg>`,
    linkedin: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                 <rect x="2" y="9" width="4" height="12"></rect>
                 <circle cx="4" cy="4" r="2"></circle>
               </svg>`,
    github: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
             </svg>`,
    location: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                 <circle cx="12" cy="10" r="3"></circle>
               </svg>`,
  }

  contactInfo.forEach((item) => {
    const card = document.createElement(item.link ? "a" : "div")
    card.className = "contact-card"
    if (item.link) {
      card.href = item.link
      card.target = "_blank"
      card.rel = "noopener noreferrer"
    }
    card.innerHTML = `
      <div class="contact-header">
        <div class="contact-icon">${icons[item.icon]}</div>
        <h3 class="contact-title">${item.title[currentLanguage]}</h3>
      </div>
      <p class="contact-value">${item.value}</p>
    `
    grid.appendChild(card)
  })
}
