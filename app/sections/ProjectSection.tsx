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
            title="E-Commerce Platform"
            description="A full-featured online store with payment processing and inventory management."
            image="/project.jpg"
            githubUrl="https://github.com/username/ai-music-generator"
            features={[
              { icon: "music", label: "Audio" },
              { icon: "brain", label: "AI" },
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
          <ProjectCard
            title="Social Media Dashboard"
            description="Analytics dashboard for tracking engagement across multiple social platforms."
            image="/project.jpg"
            githubUrl="https://github.com/username/ai-music-generator"
            features={[
              { icon: "music", label: "Audio" },
              { icon: "brain", label: "AI" },
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
          <ProjectCard
            title="Task Management App"
            description="Collaborative project management tool with real-time updates."
            image="/project.jpg"
            githubUrl="https://github.com/username/ai-music-generator"
            features={[
              { icon: "music", label: "Audio" },
              { icon: "brain", label: "AI" },
              { icon: "code", label: "Open Source" },
              { icon: "share2", label: "Shareable" },
            ]}
          />
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-navy-900 border border-purple-500/30 hover:bg-navy-800 text-white px-6">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
