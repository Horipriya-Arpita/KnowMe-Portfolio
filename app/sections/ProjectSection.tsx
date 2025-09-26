"use client";
import ProjectCard from "@/components/project-card";
import { Button } from "@mui/material";
import { ArrowRight, Briefcase } from "lucide-react";

export default function ProjectSection() {
  return (
    <>
      <section id="projects" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">My Recent Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI Storybook Generator"
            description="Generates chapter-wise stories with Gemini, creates images via Hugging Face and displays AI-generated storybooks with chapters."
            image="/project.jpg"
            githubUrl="https://github.com/Horipriya-Arpita/AI-Kids-StoryBook-Generator"
            features={[
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
          <ProjectCard
            title="AI-Enhanced Task Manager"
            description="A conversational AI-powered To-Do app with seamless CRUD operations via integrated API."
            image="/project.jpg"
            githubUrl="https://github.com/Horipriya-Arpita/To-Do-App-AI"
            features={[
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
          <ProjectCard
            title="KnowMe Portfolio"
            description="Knowme is a personal portfolio with a responsive design and an AI assistant built using LangChain and vector store for interactive, conversational engagement."
            image="/project.jpg"
            githubUrl="https://github.com/Horipriya-Arpita/KnowMe-Portfolio"
            features={[
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
          <ProjectCard
            title="Mentorship Management System"
            description="A full-stack app connecting mentors and mentees by skills, enabling profile creation, mentorship management, and skill tracking."
            image="/project.jpg"
            githubUrl="https://github.com/Horipriya-Arpita/Mentorship"
            features={[
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
        </div>
        <div className="mt-12 text-center">
          <div className="glow-button inline-block">
            <Button className="glow-button-content bg-primary/10 hover:bg-primary/20 text-foreground px-6 border-0">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
