"use client";
import CompetitionCard from "@/components/competition-card";
import { Button } from "@mui/material";
import { Award } from "lucide-react";

export default function CompetitionSection() {
  return (
    <>
      <section
        id="competitions"
        className="relative container mx-auto px-4 py-20"
      >
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Competitions & Events</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          My Achievements & Participations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <CompetitionCard
            title="ICPC Orbitax SUST SWE Technovent"
            date="January 2023"
            location="IICT, SUST"
            achievement="Participant"
            description="Developed an AI-powered solution for sustainable urban planning that won first place among 200+ international teams."
          /> */}

          {/* <CompetitionCard
            title="Ada lovelace Programming Competition 2022"
            date="July 2022"
            location="University of Asia Pacific, Dhaka"
            achievement="Participant"
            description="Delivered a keynote presentation on 'The Future of Frontend Development' to an audience of 500+ industry professionals."
          /> */}

          {/* <CompetitionCard
            title="National Girls' Programming Contest NGPC 2022"
            date="April 2022"
            location="DIU, Dhaka"
            achievement="Participant"
            description="Created an accessibility-focused web application that helps visually impaired users navigate websites more effectively."
          /> */}

          {/* <CompetitionCard
            title="BdApps National Hackathon 2022"
            date="March 2022"
            location="SUST, Sylhet"
            achievement="Top 5"
            description="Participated in workshops and networking events focused on emerging technologies and industry best practices."
          /> */}

          <CompetitionCard
            title="National High School Programming Contest 2016"
            description="Solved over 3500 problems in online judges."
          />
          <CompetitionCard
            title="National High School Programming Contest 2016"
            description="Solved over 3500 problems in online judges."
          />

          <CompetitionCard
            title="National High School Programming Contest 2016"
            description="Solved over 3500 problems in online judges."
          />

          <CompetitionCard
            title="National High School Programming Contest 2016"
            description="Solved over 3500 problems in online judges."
          />
        </div>
      </section>
    </>
  );
}
