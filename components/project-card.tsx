
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
      className="perspective relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon glow effect */}
      <div
        className={`absolute inset-0 rounded-xl neon-glow ${
          isHovered ? "animate-neon-flow" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 60%)",
          filter: "blur(15px)",
          transform: "scale(1.05)",
          transition: "opacity 0.5s ease-out",
        }}
      />

      <div
        className="relative glow-border overflow-hidden transition-all duration-500 ease-out preserve-3d"
        style={{
          transform: isHovered
            ? "translateY(-10px) rotateX(35deg)"
            : "translateY(0) rotateZ(0deg)",
        }}
      >
        <div className="glow-border-content bg-gradient-to-br from-card to-card/90">
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

          {/* Image - This section will tilt backward on hover */}
          <div
            className="px-6 pt-8 pb-4 transition-transform duration-500 ease-out preserve-3d origin-bottom"
            style={{
              transform: isHovered ? "rotateX(-15deg)" : "rotateX(0deg)",
            }}
          >
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>

            {/* Description */}
            <p
              className="text-muted-foreground mb-4 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Feature Icons */}
            <div className="flex justify-between mb-6">
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
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Check out GitHub repo
              <ArrowRight
                size={16}
                className="ml-1 transition-transform duration-300"
                style={{
                  transform: isHovered ? "translateX(3px)" : "translateX(0)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
