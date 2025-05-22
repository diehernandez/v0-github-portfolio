"use client"

import { useState } from "react"
import { ArrowUpRight, Github, Linkedin, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-lg font-semibold">John Doe</span>
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
            <AvatarImage src="/placeholder.svg?height=112&width=112" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hi, I'm John Doe</h1>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>A full-featured online store with payment processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted mb-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>A productivity tool for organizing tasks and projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted mb-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Prisma</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>Real-time weather data visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md bg-muted mb-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>React</Badge>
                  <Badge>Chart.js</Badge>
                  <Badge>API Integration</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm py-1 px-3">HTML5</Badge>
                  <Badge className="text-sm py-1 px-3">CSS3</Badge>
                  <Badge className="text-sm py-1 px-3">JavaScript</Badge>
                  <Badge className="text-sm py-1 px-3">TypeScript</Badge>
                  <Badge className="text-sm py-1 px-3">React</Badge>
                  <Badge className="text-sm py-1 px-3">Next.js</Badge>
                  <Badge className="text-sm py-1 px-3">Tailwind CSS</Badge>
                  <Badge className="text-sm py-1 px-3">Redux</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm py-1 px-3">Node.js</Badge>
                  <Badge className="text-sm py-1 px-3">Express</Badge>
                  <Badge className="text-sm py-1 px-3">MongoDB</Badge>
                  <Badge className="text-sm py-1 px-3">PostgreSQL</Badge>
                  <Badge className="text-sm py-1 px-3">REST APIs</Badge>
                  <Badge className="text-sm py-1 px-3">GraphQL</Badge>
                  <Badge className="text-sm py-1 px-3">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm py-1 px-3">Git</Badge>
                  <Badge className="text-sm py-1 px-3">GitHub</Badge>
                  <Badge className="text-sm py-1 px-3">Docker</Badge>
                  <Badge className="text-sm py-1 px-3">AWS</Badge>
                  <Badge className="text-sm py-1 px-3">Vercel</Badge>
                  <Badge className="text-sm py-1 px-3">Netlify</Badge>
                  <Badge className="text-sm py-1 px-3">VS Code</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm py-1 px-3">Responsive Design</Badge>
                  <Badge className="text-sm py-1 px-3">UI/UX Principles</Badge>
                  <Badge className="text-sm py-1 px-3">Testing</Badge>
                  <Badge className="text-sm py-1 px-3">CI/CD</Badge>
                  <Badge className="text-sm py-1 px-3">Agile Methodology</Badge>
                  <Badge className="text-sm py-1 px-3">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>
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
                    href="mailto:john.doe@example.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>john.doe@example.com</span>
                  </a>
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/johndoe</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/johndoe</span>
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
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:john.doe@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
