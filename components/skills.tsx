"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "MATLAB", icon: "📊" },
  { name: "AutoCAD", icon: "📐" },
  { name: "EASE", icon: "🔊" },
  { name: "CadnaA", icon: "🎵" },
  { name: "Office", icon: "📄" },
  { name: "LaTeX", icon: "📝" },
  { name: "ProTools", icon: "🎚️" },
  { name: "Arta", icon: "📈" },
  { name: "Smaart", icon: "🎛️" },
  { name: "Audacity", icon: "🎧" },
]

export function Skills() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const content = {
    es: { title: "Habilidades" },
    en: { title: "Skills" },
  }

  const nextSkill = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length)
  }

  const prevSkill = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)
  }

  const visibleSkills = isMobile ? 3 : 5

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{content[language].title}</h2>

        {isMobile ? (
          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon" onClick={prevSkill} className="shrink-0">
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex gap-4 overflow-hidden">
                {skills.slice(currentIndex, currentIndex + visibleSkills).map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex flex-col items-center justify-center bg-card rounded-lg p-6 shadow-sm min-w-[100px]"
                  >
                    <span className="text-4xl mb-3">{skill.icon}</span>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" size="icon" onClick={nextSkill} className="shrink-0">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center bg-card rounded-lg p-8 shadow-sm min-w-[160px] shrink-0"
                >
                  <span className="text-5xl mb-4">{skill.icon}</span>
                  <span className="text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
