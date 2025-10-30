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
    branch: { es: "Psicoacústica", en: "Psychoacoustics" },
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
    degree: { es: "Ingeniería de Sonido", en: "Sound Engineering Degree" },
    institution: { es: "Universidad Nacional de Tres de Febrero", en: "Universidad Nacional de Tres de Febrero" },
    years: "2016 - 2025",
    description: {
      es: "La Ingeniería de Sonido aborda el estudio del fenómeno sonoro y las ondas mecánicas, cubriendo desde su producción hasta su recepción. La formación incluye investigación y emprendedorismo, con enfoque en tres áreas: Ciencias de la Grabación, Electrónica de Audio, y Acústica y Electroacústica, abarcando técnicas de registro, diseño de equipamiento y tratamiento acústico.",
      en: "Sound Engineering is concerned with the study of sound phenomena and mechanical waves, covering everything from their production to their reception. The programme includes research and entrepreneurship, focusing on three areas: Recording Sciences, Audio Electronics, and Acoustics and Electroacoustics, covering recording techniques, equipment design and acoustic treatment.",
    },
  },
  {
    id: 2,
    degree: { es: "Técnico de Grabación y Sonido", en: "Recording and Sound Technician" },
    institution: { es: "Universidad Nacional de Tres de Febrero", en: "Universidad Nacional de Tres de Febrero" },
    years: "2016 - 2022",
    description: {
      es: "Técnico especializado en grabación y sonido, con capacidad para operar equipamiento en vivo, en estudios de grabación y masterización, y en emisoras de radio y TV. Habilidad en la calibración de sistemas de reamplificación y en el diseño, instalación y mantenimiento de sistemas electroacústicos para sonorización en diversos entornos.",
      en: "Technician specialising in recording and sound, with the ability to operate equipment live, in recording and mastering studios, and in radio and television stations. Skilled in the calibration of reamplification systems and in the design, installation, and maintenance of electroacoustic sound systems in diverse environments.",
    },
  },
  {
    id: 3,
    degree: { es: "Técnico Electricista con Orientación en Electrónica Industrial", en: "Electrical Technician with Orientation in Industrial Electronics" },
    institution: { es: "Escuela Provincial de Enseñanza Técninca 11", en: "Escuela Provincial de Enseñanza Técninca 11" },
    years: "2010 - 2015",
    description: {
      es: "Formación técnica en electricidad con especialización en electrónica industrial, abarcando instalación, mantenimiento y reparación de sistemas eléctricos, así como la comprensión y manejo de circuitos electrónicos industriales. Adquirí habilidades prácticas en el uso de herramientas y equipos, junto con un enfoque en la seguridad y eficiencia energética.",
      en: "Technical training in electricity with a specialisation in industrial electronics, covering the installation, maintenance and repair of electrical systems, as well as the understanding and handling of industrial electronic circuits. I acquired practical skills in the use of tools and equipment, along with a focus on safety and energy efficiency.",
    },
  },
]

const experience = [
  {
    id: 1,
    position: { es: "Práctica Profesional", en: "Senior Sound Engineer" },
    company: { es: "Instituto Superior de Otorrinolaringología (ISO)", en: "Instituto Superior de Otorrinolaringología (ISO)" },
    location: { es: "Ciudad Autónoma de Buenos Aires, Argentina", en: "Ciudad Autónoma de Buenos Aires, Argentina" },
    period: { es: "Sep 2024 - Nov 2024", en: "Sep 2024 - Nov 2024" },
    description: {
      es: "Participé activamente en la calibración acústica de sistemas de reproducción y optimización de software para pruebas de localización sonora en pacientes con implantes cocleares y normoyentes. También adquirí experiencia realizando pruebas auditivas y experimentos en entornos controlados, garantizando el cumplimiento de los protocolos éticos y de seguridad, lo que me permitió profundizar en el manejo de equipos especializados y en el análisis de datos de medición.",
      en: "I actively participated in the acoustic calibration of reproduction systems and software optimisation for sound localisation tests in patients with cochlear implants and normotensive patients. I also gained experience performing hearing tests and experiments in controlled environments, ensuring compliance with ethical and safety protocols, which allowed me to deepen my knowledge in the handling of specialised equipment and in the analysis of measurement data.",
    },
  },
  {
    id: 2,
    position: { es: "Pasantía", en: "Trainee" },
    company: { es: "Cooperativa de Energía Eléctrica de Zapala (CEEZ)", en: "Cooperativa de Energía Eléctrica de Zapala (CEEZ)" },
    location: { es: "Zapala, Neuquén, Argentina", en: "Zapala, Neuquén, Argentina" },
    period: { es: "Mar 2015 - Nov 2015", en: "Mar 2015 - Nov 2015" },
    description: {
      es: "Colaboré en la ejecución de proyectos de distribución eléctrica, desde la instalación de nuevas líneas hasta la ampliación de aquellas existentes. Asistí en el mantenimiento de estas redes, garantizando el correcto suministro en áreas residenciales y comerciales. También participé en la identificación y solución de fallas técnicas, así como en la supervisión de trabajos en campo.",
      en: "I collaborated in the execution of electricity distribution projects, from the installation of new lines to the extension of existing ones. I assisted in the maintenance of these networks, guaranteeing the correct supply in residential and commercial areas. I also participated in the identification and solution of technical failures.",
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
    value: "Zapala, Neuquén, Argentina",
    link: "https://maps.app.goo.gl/JkNjtDGG794SzYT8A",
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
let autoScrollInterval; // Controla el auto-scroll (ahora requestAnimationFrame)
let isPaused = false; // Para pausa en hover o drag
let currentTranslate = 0; // Posición actual (global)
let isDragging = false; // Para saber si estamos arrastrando
let startX = 0; // Posición inicial del mouse/touch

function initSkills() {
    const skillsTrack = document.getElementById("skills-track");
    const carousel = document.getElementById("skills-carousel");

    if (!skillsTrack || !carousel) {
        console.error("Elementos del carrusel no encontrados");
        return;
    }

    // Duplica los skills para infinito
    const doubledSkills = [...skills, ...skills];
    doubledSkills.forEach((skill) => {
        const card = createSkillCard(skill);
        skillsTrack.appendChild(card);
    });

    // Inicia auto-scroll suave
    startAutoScroll();

    // Pausa en hover (desktop)
    if (window.innerWidth >= 768) {
        carousel.addEventListener("mouseenter", () => {
            isPaused = true;
            carousel.style.cursor = "grab"
        });
        carousel.addEventListener("mouseleave", () => {
            isPaused = false;
        });
    }

    // Eventos para drag (desktop) y swipe (mobile)
    // Mouse events para desktop
    carousel.addEventListener("mousedown", (e) => {
        if (window.innerWidth >= 768) { // Solo desktop
            isDragging = true;
            isPaused = true;
            startX = e.clientX;
            carousel.style.cursor = "grabbing";
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging && window.innerWidth >= 768) {
            const deltaX = e.clientX - startX;
            currentTranslate += deltaX; // Mueve según el delta
            startX = e.clientX; // Actualiza startX para movimiento continuo
            // Limita para infinito: resetea si sale de rango
            if (currentTranslate > 0) {
                currentTranslate = -skillsTrack.scrollWidth / 2;
            } else if (Math.abs(currentTranslate) >= skillsTrack.scrollWidth / 2) {
                currentTranslate = 0;
            }
            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;
        }
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            isPaused = false;
            carousel.style.cursor = "grab";
        }
    });

    // Touch events para mobile (swipe/drag)
    carousel.addEventListener("touchstart", (e) => {
        isDragging = true;
        isPaused = true;
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (isDragging) {
            const deltaX = e.touches[0].clientX - startX;
            currentTranslate += deltaX;
            startX = e.touches[0].clientX;
            // Limita para infinito
            if (currentTranslate > 0) {
                currentTranslate = -skillsTrack.scrollWidth / 2;
            } else if (Math.abs(currentTranslate) >= skillsTrack.scrollWidth / 2) {
                currentTranslate = 0;
            }
            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;
        }
    });

    carousel.addEventListener("touchend", () => {
        isDragging = false;
        isPaused = false;
    });
}

function createSkillCard(skill) {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
        <div class="skill-icon"><img src="${skill.icon}" alt="${skill.name} icon" /></div>
        <div class="skill-name">${skill.name}</div>
    `;
    return card;
}

function startAutoScroll() {
    const skillsTrack = document.getElementById("skills-track");

    function animate() {
        if (!isPaused && !isDragging) {
            currentTranslate -= 0.4; // Velocidad
            if (Math.abs(currentTranslate) >= skillsTrack.scrollWidth / 2) {
                currentTranslate = 0; // Resetea para infinito
            }
            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;
        }
        autoScrollInterval = requestAnimationFrame(animate); // Llama al siguiente frame
    }
    animate(); // Inicia la animación
}

// Llama a initSkills cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initSkills);

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
