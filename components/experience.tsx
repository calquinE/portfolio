"use client"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const experience = [
  {
    id: 1,
    position: {
      es: "Ingeniero de Sonido Senior",
      en: "Senior Sound Engineer",
    },
    company: {
      es: "Estudio Sonoro",
      en: "Sonoro Studio",
    },
    location: {
      es: "Buenos Aires, Argentina",
      en: "Buenos Aires, Argentina",
    },
    period: {
      es: "Ene 2021 - Presente",
      en: "Jan 2021 - Present",
    },
    description: {
      es: "Responsable de la grabación, mezcla y masterización de proyectos musicales. Supervisión de sesiones de grabación y coordinación con artistas y productores.",
      en: "Responsible for recording, mixing and mastering music projects. Supervision of recording sessions and coordination with artists and producers.",
    },
  },
  {
    id: 2,
    position: {
      es: "Consultor en Acústica",
      en: "Acoustics Consultant",
    },
    company: {
      es: "Acústica Integral",
      en: "Integral Acoustics",
    },
    location: {
      es: "Buenos Aires, Argentina",
      en: "Buenos Aires, Argentina",
    },
    period: {
      es: "Mar 2019 - Dic 2020",
      en: "Mar 2019 - Dec 2020",
    },
    description: {
      es: "Diseño acústico de salas de conciertos, teatros y estudios de grabación. Realización de estudios de impacto acústico y mediciones in situ.",
      en: "Acoustic design of concert halls, theatres and recording studios. Acoustic impact studies and on-site measurements.",
    },
  },
  {
    id: 3,
    position: {
      es: "Técnico de Audio",
      en: "Audio Technician",
    },
    company: {
      es: "Producciones Live",
      en: "Live Productions",
    },
    location: {
      es: "Buenos Aires, Argentina",
      en: "Buenos Aires, Argentina",
    },
    period: {
      es: "Jun 2017 - Feb 2019",
      en: "Jun 2017 - Feb 2019",
    },
    description: {
      es: "Operación de sistemas de sonido en eventos en vivo. Montaje y configuración de equipos de audio profesional para conciertos y eventos corporativos.",
      en: "Operation of sound systems at live events. Assembly and configuration of professional audio equipment for concerts and corporate events.",
    },
  },
]

export function Experience() {
  const { language } = useLanguage()

  const content = {
    es: { title: "Experiencia" },
    en: { title: "Experience" },
  }

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{content[language].title}</h2>

        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-16 pb-8 border-l-2 border-border last:border-l-0 last:pb-0">
              <div className="absolute left-0 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-accent-foreground" />
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{item.position[language]}</h3>
                    <p className="text-primary font-medium">{item.company[language]}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{item.period[language]}</p>
                    <p>{item.location[language]}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
