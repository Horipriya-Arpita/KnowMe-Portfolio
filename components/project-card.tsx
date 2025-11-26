
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code,
  ExternalLink,
  Github,
  Music,
  Share2,
} from "lucide-react";

interface Feature {
  icon: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  features: Feature[];
}

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  features,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music size={18} />;
      case "brain":
        return <Brain size={18} />;
      case "code":
        return <Code size={18} />;
      case "share2":
        return <Share2 size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  return (
    <div
      className="relative h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative glow-border h-full overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl"
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <div className="glow-border-content bg-gradient-to-br from-card to-card/90 h-full flex flex-col">
          {/* GitHub link pill */}
          <div className="relative px-6 pt-6">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github size={12} className="mr-1" />
              GitHub
            </Link>
          </div>

          {/* Image */}
          <div className="px-6 pt-8 pb-4">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>

            {/* Description */}
            <p
              className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Feature Icons */}
            <div className="flex justify-start gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-xs text-muted-foreground/70 mt-1">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* GitHub repo link */}
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-all duration-300 group-hover:gap-2 gap-1"
            >
              View Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
