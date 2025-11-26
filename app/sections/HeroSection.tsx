'use client'
import Navbar from "@/components/Navbar";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection(){
    return (
        <>
        <section id="hero" className="relative container mx-auto px-4 pt-32 pb-20">
          <Navbar/>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <div className="gradient-text">
              Horipriya Das Arpita
            </div>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-muted-foreground">Full Stack Developer</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We build exceptional digital experiences that combine stunning design with powerful functionality. {`Let's`}
            create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glow-button">
              <button className="glow-button-content">
                View My Work <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="glow-button">
              <a href="/Horipriya-Arpita-CV.pdf" download="Horipriya-Arpita-CV.pdf" className="glow-button-content inline-flex items-center gap-2">
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>
            <div className="glow-button">
              <button className="glow-button-content">
                Contact Me
              </button>
            </div>

          </div>
        </div>
      </section>
        </>
    )
}