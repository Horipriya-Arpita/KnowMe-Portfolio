"use client";
// import { Button } from "@mui/material";
import SkillBadge from "@/components/skill-badge";
import {
  Braces,
  Code,
  FileCode,
  Server,
  Database,
  Layers,
  Workflow,
  GitBranch,
  Boxes,
  Cloud,
} from "lucide-react";

export default function SkillSection() {
  return (
    <>
      <section id="skills" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My Technical Expertise
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {/* Languages */}
          <SkillBadge name="C" icon={Code} />
          <SkillBadge name="C++" icon={Code} />
          <SkillBadge name="Java" icon={Code} />
          <SkillBadge name="JavaScript" icon={Braces} />
          <SkillBadge name="Python" icon={Code} />
          <SkillBadge name="SQL" icon={Database} />

          {/* Frontend Technologies */}
          <SkillBadge name="React.js" icon={Braces} />
          <SkillBadge name="Next.js" icon={FileCode} />

          {/* Backend Technologies */}
          <SkillBadge name="Node.js" icon={Server} />
          <SkillBadge name="Express.js" icon={Server} />

          {/* Databases */}
          <SkillBadge name="MySQL" icon={Database} />
          <SkillBadge name="Prisma" icon={Database} />

          {/* AI/ML Technologies */}
          <SkillBadge name="LangChain.js" icon={Layers} />
          <SkillBadge name="Flowise" icon={Workflow} />
          <SkillBadge name="Hugging Face" icon={Cloud} />
          <SkillBadge name="OpenCV" icon={Code} />

          {/* Tools */}
          <SkillBadge name="Git" icon={GitBranch} />
          <SkillBadge name="GitHub" icon={GitBranch} />
          <SkillBadge name="Postman" icon={Server} />
          <SkillBadge name="Firebase" icon={Cloud} />
          <SkillBadge name="Shopify Polaris" icon={Boxes} />
        </div>
      </section>
    </>
  );
}
