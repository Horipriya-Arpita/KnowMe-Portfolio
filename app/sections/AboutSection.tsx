'use client'
import { Button } from "@mui/material";
import { User } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Award } from "lucide-react";
import JourneyMap from "@/components/journey-map";
import { Heart } from "lucide-react";
import MoodBoard from "@/components/mood-board";


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
            <p className="text-gray-300 mb-6">
            Enthusiastic Full Stack Software Engineer with a strong interest in AI integration and 
            modern web technologies. Experienced in both frontend and backend development, dedicated 
            to collaborative development and building intelligent, high-impact products.
            </p>
            <p className="text-gray-300 mb-6">
              I'm constantly learning and exploring new technologies to stay at the forefront of the industry. My goal
              is to create digital experiences that not only look great but also provide real value to users.
            </p>
            <Link href="/chat">
              <Button className="bg-navy-900 border-3 border-purple-500/30 hover:bg-navy-800 text-white">
                Chat With Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-navy-900 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Profile"
                  className="rounded-full w-56 h-56 md:w-64 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Journey Map */}
        {/* <div className="mt-16">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <Award className="mr-2 h-5 w-5 text-purple-500" />
            My Journey
          </h4>
          <JourneyMap />
        </div> */}

        {/* Mood Board */}
        {/* <div className="mt-16">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <Heart className="mr-2 h-5 w-5 text-purple-500" />
            My Aesthetic
          </h4>
          <MoodBoard />
        </div> */}
      </section>
        </>
    )
}