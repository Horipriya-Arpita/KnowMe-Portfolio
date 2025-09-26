'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

export default function HeroSection(){
    return (
        <>
        <section className="relative container mx-auto px-4 pt-32 pb-20">
          <Navbar/>
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-purple-500">
              
            </div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-[#8037bf]">
              Horipriya Das Arpita
            </div>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-8">Full Stack Developer</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            We build exceptional digital experiences that combine stunning design with powerful functionality. {`Let's`}
            create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="glow-button">
              <Button variant="outlined" className="glow-button-content bg-primary/10 hover:bg-primary/20 text-foreground px-6 py-6 border-0">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="glow-button">
              <Button variant="outlined" className="glow-button-content text-foreground hover:bg-primary/10 px-6 py-6 border-0">
                Contact Me
              </Button>
            </div>

            <div className="glow-button">
              <button className="glow-button-content flex items-center px-3 py-3 text-primary-foreground font-bold bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition">
                Subscribe to Watch
              </button>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}