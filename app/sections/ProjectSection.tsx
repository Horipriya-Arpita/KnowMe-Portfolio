"use client";
import { useState } from "react";
import ProjectCard from "@/components/project-card";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Face Recognition System",
      description: "Full-stack web app with user registration and real-time identity verification using facial features. Features automated CSV attendance logging and duplicate prevention.",
      image: "/project.jpg",
      githubUrl: "https://github.com/Horipriya-Arpita",
      features: [
        { icon: "code", label: "Python" },
        { icon: "code", label: "OpenCV" },
      ],
    },
    {
      title: "AI Storybook Generator",
      description: "AI platform to generate illustrated children's books using Google Gemini and Hugging Face. Features AES-256 encryption, quota system, and multi-model fallback for high uptime.",
      image: "/project.jpg",
      githubUrl: "https://github.com/Horipriya-Arpita/AI-Kids-StoryBook-Generator",
      features: [
        { icon: "code", label: "Next.js 15" },
        { icon: "database", label: "MySQL" },
      ],
    },
    {
      title: "Dreamify Images",
      description: "Full-stack AI image generation app with secure NextAuth.js authentication and AES-256 key encryption. Integrated Hugging Face FLUX.1 model and Cloudinary for scalable storage.",
      image: "/project.jpg",
      githubUrl: "https://github.com/Horipriya-Arpita",
      features: [
        { icon: "code", label: "Next.js" },
        { icon: "cloud", label: "Cloudinary" },
      ],
    },
    {
      title: "Shahad's Agent",
      description: "AI Browser Extension with text highlight chat feature and Gmail summarization. Open source collaboration project with cross-browser support for Chrome and Firefox.",
      image: "/project.jpg",
      githubUrl: "https://github.com/Horipriya-Arpita",
      features: [
        { icon: "code", label: "Open Source" },
        { icon: "share2", label: "AI Chat" },
      ],
    },
    {
      title: "KnowMe Portfolio",
      description: "Personal portfolio with responsive design and AI assistant built using LangChain and vector store for interactive, conversational engagement.",
      image: "/project.jpg",
      githubUrl: "https://github.com/Horipriya-Arpita/KnowMe-Portfolio",
      features: [
        { icon: "code", label: "LangChain" },
        { icon: "share2", label: "AI Chat" },
      ],
    },
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <>
      <section id="projects" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal Projects & Creations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              features={project.features}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="glow-button inline-block">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glow-button-content inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects ({allProjects.length}) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
