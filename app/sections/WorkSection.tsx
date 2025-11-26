'use client'
// import { Button } from "@mui/material";
import { Briefcase } from "lucide-react";
import WorkExperience from "@/components/work-experience";


export default function WorkSection(){
    return (
        <>
        <section id="work" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Work Experience</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My Professional Journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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