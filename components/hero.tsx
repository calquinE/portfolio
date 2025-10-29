"use client"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { language } = useLanguage()

  const content = {
    es: {
      greeting: "Hola, soy",
      name: "Calquin Epullan",
      title: "Ingeniero de Sonido",
      subtitle: "Especializado en grabación, electrónica, acústica y procesamiento digital de señales",
    },
    en: {
      greeting: "Hello, I'm",
      name: "Calquin Epullan",
      title: "Sound Engineer",
      subtitle: "Specialising in recording, electronics, acoustics and digital signal processing",
    },
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-muted-foreground mb-4 text-lg">{content[language].greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{content[language].name}</h1>
        <h2 className="text-2xl md:text-3xl text-primary mb-6">{content[language].title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          {content[language].subtitle}
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  )
}
