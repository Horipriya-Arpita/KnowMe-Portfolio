'use client'
import { Button } from "@mui/material";
import { Briefcase } from "lucide-react";
import WorkExperience from "@/components/work-experience";


export default function WorkSection(){
    return (
        <>
        <section id="experience" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Work Experience</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">My Professional Journey</h3>

        <div className="ml-4">
          <WorkExperience
            company="Luminous Lab Ltd."
            position="Software Engineer, Intern"
            duration="Dec 2024 - Present"
            location="Dhaka, Bangladesh"
            description={[
              "Developed point activity and referral features for a Shopify app using Remix, Prisma, and MySQL during onboarding to Shopify app development.",
              "Built Bangla AI voice agent using LangChain, Flowise, and vector DBs, improved UI and backend for contact and tag management in an AI-driven voice platform.",
              "Designed and implemented frontend interfaces for a Next.js & TypeScript web template, and integrated REST APIs for dynamic data rendering.",
            ]}
          />

          
        </div>
      </section>
        </>
    )
}