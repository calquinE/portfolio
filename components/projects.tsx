"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
    image: "/concert-hall-acoustics.jpg",
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
    image: "/digital-signal-processing.jpg",
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
    image: "/theatre-sound-system.jpg",
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
    image: "/environmental-noise-mapping.jpg",
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
    image: "/audio-plugin-interface.jpg",
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
    image: "/recording-studio-session.png",
    link: "#",
    type: "external",
  },
]

export function Projects() {
  const { language } = useLanguage()
  const [selectedBranch, setSelectedBranch] = useState<string>("all")
  const [selectedTech, setSelectedTech] = useState<string>("all")

  const content = {
    es: {
      title: "Proyectos",
      all: "Todos",
      filterByBranch: "Filtrar por rama",
      filterByTech: "Filtrar por tecnología",
    },
    en: {
      title: "Projects",
      all: "All",
      filterByBranch: "Filter by branch",
      filterByTech: "Filter by technology",
    },
  }

  const branches = Array.from(new Set(projects.map((p) => p.branch[language])))
  const technologies = Array.from(new Set(projects.flatMap((p) => p.technologies)))

  const filteredProjects = projects.filter((project) => {
    const branchMatch = selectedBranch === "all" || project.branch[language] === selectedBranch
    const techMatch = selectedTech === "all" || project.technologies.includes(selectedTech)
    return branchMatch && techMatch
  })

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{content[language].title}</h2>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedBranch === "all" ? "default" : "outline"}
              onClick={() => setSelectedBranch("all")}
              size="sm"
            >
              {content[language].all}
            </Button>
            {branches.map((branch) => (
              <Button
                key={branch}
                variant={selectedBranch === branch ? "default" : "outline"}
                onClick={() => setSelectedBranch(branch)}
                size="sm"
              >
                {branch}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title[language]}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{project.title[language]}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {project.branch[language]}
                  </Badge>
                </div>
                <CardDescription className="text-sm">{project.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.type === "pdf" ? (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Ver PDF
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver proyecto
                      </>
                    )}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
