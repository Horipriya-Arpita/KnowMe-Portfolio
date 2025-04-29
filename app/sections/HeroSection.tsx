'use client'
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

export default function HeroSection(){
    return (
        <>
        <section className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-purple-500">
              Horipriya Das Arpita
            </div>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-8">Full Stack Developer</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            We build exceptional digital experiences that combine stunning design with powerful functionality. Let's
            create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-navy-900 border border-purple-500/30 hover:bg-navy-800 text-white px-6 py-6">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outlined" className="border-purple-500/30 text-white hover:bg-navy-800 px-6 py-6">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
        </>
    )
}