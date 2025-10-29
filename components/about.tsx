"use client"

import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "Sobre mí",
      description:
        "Ingeniero de Sonido con amplia experiencia en grabación, mezcla y masterización. Mi formación abarca desde la electrónica y acústica hasta el procesamiento digital de señales, permitiéndome abordar proyectos desde una perspectiva técnica y artística integral. Me apasiona crear experiencias sonoras inmersivas y trabajar en la intersección entre la tecnología y el arte.",
    },
    en: {
      title: "About Me",
      description:
        "Sound Engineer with extensive experience in recording, mixing and mastering. My background ranges from electronics and acoustics to digital signal processing, allowing me to approach projects from a comprehensive technical and artistic perspective. I am passionate about creating immersive sound experiences and working at the intersection of technology and art.",
    },
  }

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{content[language].title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center text-balance">
          {content[language].description}
        </p>
      </div>
    </section>
  )
}
