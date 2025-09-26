'use client'
import { Button } from "@mui/material";
import { User } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection(){
    return (
        <>
        <section id="about" className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 text-purple-500" />
              <h2 className="text-2xl font-semibold">About Me</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate developer creating impactful digital solutions
            </h3>
            <p className="text-muted-foreground mb-6">
            Enthusiastic Full Stack Software Engineer with a strong interest in AI integration and
            modern web technologies. Experienced in both frontend and backend development, dedicated
            to collaborative development and building intelligent, high-impact products.
            </p>
            <p className="text-muted-foreground mb-6">
              {`I'm `}constantly learning and exploring new technologies to stay at the forefront of the industry. My goal
              is to create digital experiences that not only look great but also provide real value to users.
            </p>
            
              <div className="glow-button">
                <Button className="glow-button-content bg-primary/10 hover:bg-primary/20 text-foreground border-0">
                  Chat With Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
    )
}