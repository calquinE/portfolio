"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "Contacto",
      email: "Correo electrónico",
      location: "Ubicación",
    },
    en: {
      title: "Contact",
      email: "Email",
      location: "Location",
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: content[language].email,
      value: "carlos.alcaraz@email.com",
      link: "mailto:carlos.alcaraz@email.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Carlos Alcaraz",
      link: "https://linkedin.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@carlosalcaraz",
      link: "https://github.com",
    },
    {
      icon: MapPin,
      title: content[language].location,
      value: language === "es" ? "Buenos Aires, Argentina" : "Buenos Aires, Argentina",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{content[language].title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const CardWrapper = item.link ? "a" : "div"
            const cardProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {}

            return (
              <CardWrapper key={index} {...cardProps} className="block">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
