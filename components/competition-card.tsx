
"use client"

import { Lightbulb } from "lucide-react"

interface CompetitionCardProps {
  title: string
  description: string
}

export default function CompetitionCard({
  title,
  description,
}: CompetitionCardProps) {
  return (
    <div className="glow-border max-w-md transition-all duration-300">
      <div className="glow-border-content bg-gradient-to-b from-card to-card/90 p-4 flex flex-col gap-2">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          <h4 className="text-base font-semibold text-foreground">{title}</h4>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}