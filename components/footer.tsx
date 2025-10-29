"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    es: {
      rights: "© 2025 Calquin Epullan. Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
    en: {
      rights: "© 2025 Calquin Epullan. All rights reserved.",
      backToTop: "Back to top",
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">{content[language].rights}</p>

          <Button onClick={scrollToTop} variant="outline" size="sm" className="gap-2 bg-transparent">
            {content[language].backToTop}
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
