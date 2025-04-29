
import type { LucideIcon } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon: LucideIcon
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="bg-navy-900/70 border border-navy-800 hover:border-purple-500/30 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
      <Icon className="h-6 w-6 text-purple-500" />
      <span className="text-gray-200">{name}</span>
    </div>
  )
}
