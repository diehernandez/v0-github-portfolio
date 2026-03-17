"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/diehernandez.png" alt="diehernandez" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <span className="text-lg font-semibold">diehernandez</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="link"
              className={activeSection === "home" ? "font-bold" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              variant="link"
              className={activeSection === "projects" ? "font-bold" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              variant="link"
              className={activeSection === "skills" ? "font-bold" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Button>
            <Button
              variant="link"
              className={activeSection === "contact" ? "font-bold" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("home")}>
                  Home
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("projects")}>
                  Projects
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("skills")}>
                  Skills
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("contact")}>
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <Avatar className="h-28 w-28 mb-6">
            <AvatarImage src="https://github.com/diehernandez.png" alt="diehernandez" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hi, I'm diehernandez</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-[700px]">
            A passionate full-stack developer specializing in modern web technologies
          </p>
          <div className="flex gap-4">
            <Button onClick={() => scrollToSection("projects")}>View My Work</Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground gap-3">
            <span className="text-4xl">🚧</span>
            <p className="text-lg font-medium">En construcción</p>
            <p className="text-sm">Próximamente mis proyectos estarán aquí.</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground gap-3">
            <span className="text-4xl">🚧</span>
            <p className="text-lg font-medium">En construcción</p>
            <p className="text-sm">Próximamente mis habilidades estarán aquí.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:diehernandez@example.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>diehernandez@example.com</span>
                  </a>
                  <a
                    href="https://github.com/diehernandez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/diehernandez</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/diehernandez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/diehernandez</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <a href="https://github.com/diehernandez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/diehernandez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:diehernandez@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} diehernandez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
