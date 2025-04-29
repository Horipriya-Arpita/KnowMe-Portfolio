// "use client"

// import { Award, Calendar, MapPin } from "lucide-react"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// interface CompetitionCardProps {
//   title: string
//   date: string
//   location: string
//   achievement: string
//   description: string
//   imageUrl?: string
// }

// export default function CompetitionCard({
//   title,
//   date,
//   location,
//   achievement,
//   description,
//   imageUrl,
// }: CompetitionCardProps) {
//   return (
//     <Card className="bg-navy-900/50 border-navy-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
//       <div className="relative">
//         <div className="h-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 flex items-center justify-center">
//           {imageUrl ? (
//             <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
//           ) : (
//             <Award className="h-12 w-12 text-purple-500/70" />
//           )}
//         </div>
//         {achievement && (
//           <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
//             {achievement}
//           </div>
//         )}
//       </div>

//       <CardContent className="p-6">
//         <h4 className="text-xl font-semibold mb-3">{title}</h4>

//         <div className="flex flex-col space-y-2 mb-4">
//           <div className="flex items-center text-gray-300 text-sm">
//             <Calendar className="h-4 w-4 mr-2 text-purple-500" />
//             <span>{date}</span>
//           </div>

//           <div className="flex items-center text-gray-300 text-sm">
//             <MapPin className="h-4 w-4 mr-2 text-purple-500" />
//             <span>{location}</span>
//           </div>
//         </div>

//         <p className="text-gray-300 text-sm">{description}</p>
//       </CardContent>
//     </Card>
//   )
// }
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