"use client";
import CompetitionCard from "@/components/competition-card";
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
          
          <CompetitionCard
            title="ICPC Orbitax SUST SWE Technovent 2023"
            description="Participated in ICPC Orbitax SUST SWE Technovent Powered by DSI,
            Orbitax and Cefalo. I was a dedicated volunteer at this event."
          />
          <CompetitionCard
            title="National Girls' Programming Contest 2022"
            description="Participated in 6th National Girls' Programming Contest NGPC 2022
            hosted by Daffodil International University, Powered By BDosn, ICT
            Bangladesh."
          />

          <CompetitionCard
            title="Ada lovelace Programming Competition 2022"
            description="Participated in Ada lovelace Programming Competition 2022 hosted by
            University of Asia Pacific, Dhaka, organized by BDosn."
          />

          <CompetitionCard
            title="BdApps National Hackathon 2022"
            description="Participated in BdApps National Hackathon 2022 Regional Round in Sylhet,
            Organized by SWE Society, SUST, Powered by Robi. Our idea got short-listed
            among numerous teams."
          />
        </div>
      </section>
    </>
  );
}
