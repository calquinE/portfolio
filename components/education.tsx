"use client"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const education = [
  {
    id: 1,
    degree: {
      es: "Ingeniería en Sonido",
      en: "Sound Engineering Degree",
    },
    institution: {
      es: "Universidad Nacional de Tres de Febrero",
      en: "National University of Tres de Febrero",
    },
    years: "2015 - 2020",
    description: {
      es: "Formación integral en acústica, electrónica, procesamiento digital de señales y producción musical.",
      en: "Comprehensive training in acoustics, electronics, digital signal processing and music production.",
    },
  },
  {
    id: 2,
    degree: {
      es: "Técnico en Audio Profesional",
      en: "Professional Audio Technician",
    },
    institution: {
      es: "Instituto de Audio y Acústica",
      en: "Institute of Audio and Acoustics",
    },
    years: "2013 - 2015",
    description: {
      es: "Especialización en grabación, mezcla y masterización en estudios profesionales.",
      en: "Specialisation in recording, mixing and mastering in professional studios.",
    },
  },
  {
    id: 3,
    degree: {
      es: "Certificación en Diseño Acústico",
      en: "Acoustic Design Certification",
    },
    institution: {
      es: "Asociación Argentina de Acústica",
      en: "Argentine Acoustics Association",
    },
    years: "2021",
    description: {
      es: "Certificación profesional en diseño y análisis acústico de espacios.",
      en: "Professional certification in acoustic design and analysis of spaces.",
    },
  },
]

export function Education() {
  const { language } = useLanguage()

  const content = {
    es: { title: "Formación Académica" },
    en: { title: "Education" },
  }

  return (
    <section id="education" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{content[language].title}</h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"}`}
            >
              <div className={`flex items-start gap-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>

                <div className={`flex-1 bg-card p-6 rounded-lg shadow-sm ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="text-sm text-muted-foreground mb-2">{item.years}</div>
                  <h3 className="text-xl font-bold mb-2">{item.degree[language]}</h3>
                  <p className="text-primary font-medium mb-3">{item.institution[language]}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
