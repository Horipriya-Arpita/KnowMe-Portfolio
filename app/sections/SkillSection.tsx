"use client";
import { Button } from "@mui/material";
import SkillBadge from "@/components/skill-badge";
import {
  Braces,
  Code,
  FileCode,
  Server,
  Palette,
  Database,
  Layers,
  Workflow,
  GitBranch,
  Boxes,
  Cloud,
  PenTool,
} from "lucide-react";

export default function SkillSection() {
  return (
    <>
      <section id="skills" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <Code className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          My Technical Expertise
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <SkillBadge name="React" icon={Braces} />
          <SkillBadge name="Next.js" icon={FileCode} />
          <SkillBadge name="TypeScript" icon={FileCode} />
          <SkillBadge name="Node.js" icon={Server} />
          <SkillBadge name="Tailwind CSS" icon={Palette} />
          <SkillBadge name="JavaScript" icon={Braces} />
          <SkillBadge name="HTML/CSS" icon={Code} />
          <SkillBadge name="MongoDB" icon={Database} />
          <SkillBadge name="PostgreSQL" icon={Database} />
          <SkillBadge name="GraphQL" icon={Layers} />
          <SkillBadge name="Redux" icon={Workflow} />
          <SkillBadge name="Git" icon={GitBranch} />
          <SkillBadge name="Docker" icon={Boxes} />
          <SkillBadge name="AWS" icon={Cloud} />
          <SkillBadge name="Figma" icon={PenTool} />
        </div>
      </section>
    </>
  );
}
