"use client";

import { User } from "lucide-react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <User className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer creating impactful digital solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
              Enthusiastic Full Stack Software Engineer with a strong interest
              in AI integration and modern web technologies. Experienced in both
              frontend and backend development, dedicated to collaborative
              development and building intelligent, high-impact products.
            </p>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              {`I'm `}constantly learning and exploring new technologies to stay
              at the forefront of the industry. My goal is to create digital
              experiences that not only look great but also provide real value
              to users.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glow-button">
                <a href="/Horipriya-Arpita-CV.pdf" download="Horipriya-Arpita-CV.pdf" className="glow-button-content inline-flex items-center gap-2">
                  Download CV <Download className="h-4 w-4" />
                </a>
              </div>
              <div className="glow-button">
                <button className="glow-button-content">
                  Chat With Me <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="glow-circle w-64 h-64 md:w-80 md:h-80">
              <div className="glow-circle-background">
                <div className="glow-circle-content">
                  <Image
                    src="/about.png"
                    width={240}
                    height={240}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
