
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
    <div className="bg-gradient-to-b from-navy-900 to-navy-800 border border-navy-700 rounded-xl overflow-hidden max-w-md transition-all duration-300 hover:border-purple-500/40">
      <div className="p-4 flex flex-col gap-2">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          <h4 className="text-base font-semibold text-gray-200">{title}</h4>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}