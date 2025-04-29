"use client"
import { MapPin } from 'lucide-react';

interface WorkExperienceProps {
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  logo?: string
}

export default function WorkExperience({
  company,
  position,
  duration,
  location,
  description,
  logo,
}: WorkExperienceProps) {
  return (
    <div className="mb-10 relative">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-navy-800 ml-4"></div>

      <div className="flex">
        {/* Timeline dot */}
        <div className="relative z-10">
          <div className="w-8 h-8 rounded-full bg-navy-800 border-2 border-purple-500 flex items-center justify-center">
            {logo ? (
              <img src={logo || "/placeholder.svg"} alt={company} className="w-4 h-4" />
            ) : (
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="ml-6 bg-navy-900/50 border border-navy-800 rounded-lg p-6 flex-1 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <h3 className="text-xl font-bold text-white">{position}</h3>
            <span className="text-purple-400 font-medium text-sm md:text-base">{duration}</span>
          </div>

          <h4 className="text-lg font-semibold text-gray-300 mb-2">{company}</h4>

          <div className="flex items-center text-gray-400 mb-4 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
