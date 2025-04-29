"use client"

import { useState, useEffect } from "react"
import { GitBranch, Star, GitCommit } from "lucide-react"

interface Repository {
  name: string
  description: string
  stars: number
  forks: number
  language: string
}

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export default function GitHubActivity() {
  // In a real implementation, you would fetch this data from GitHub API
  const [repos, setRepos] = useState<Repository[]>([
    {
      name: "awesome-project",
      description: "A collection of useful resources and tools",
      stars: 124,
      forks: 45,
      language: "JavaScript",
    },
    {
      name: "portfolio-website",
      description: "Personal portfolio website built with Next.js",
      stars: 87,
      forks: 23,
      language: "TypeScript",
    },
    {
      name: "react-components",
      description: "Reusable React components with TypeScript",
      stars: 56,
      forks: 12,
      language: "TypeScript",
    },
  ])

  // Generate mock contribution data
  const generateContributions = () => {
    const contributions: ContributionDay[] = []
    const today = new Date()

    for (let i = 0; i < 91; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - (90 - i))

      // Random contribution count with higher probability for lower values
      const rand = Math.random()
      let count = 0
      let level: 0 | 1 | 2 | 3 | 4 = 0

      if (rand > 0.6) {
        count = Math.floor(Math.random() * 3) + 1
        level = 1
      }
      if (rand > 0.75) {
        count = Math.floor(Math.random() * 5) + 3
        level = 2
      }
      if (rand > 0.9) {
        count = Math.floor(Math.random() * 7) + 5
        level = 3
      }
      if (rand > 0.95) {
        count = Math.floor(Math.random() * 10) + 8
        level = 4
      }

      contributions.push({
        date: date.toISOString().split("T")[0],
        count,
        level,
      })
    }

    return contributions
  }

  const [contributions, setContributions] = useState<ContributionDay[]>([])

  useEffect(() => {
    setContributions(generateContributions())
  }, [])

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-navy-800"
      case 1:
        return "bg-purple-900"
      case 2:
        return "bg-purple-700"
      case 3:
        return "bg-purple-500"
      case 4:
        return "bg-purple-400"
      default:
        return "bg-navy-800"
    }
  }

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "JavaScript":
        return "bg-yellow-400"
      case "TypeScript":
        return "bg-blue-500"
      case "Python":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  // Group contributions by week
  const weeks = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  return (
    <div className="bg-navy-900/50 rounded-lg border border-navy-800 p-6">
      <h4 className="text-xl font-semibold mb-6 flex items-center">
        <GitCommit className="mr-2 h-5 w-5 text-purple-500" />
        GitHub Activity
      </h4>

      <div className="mb-8">
        <h5 className="text-sm font-medium text-gray-300 mb-3">Contribution Activity (Last 3 Months)</h5>
        <div className="flex flex-wrap gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} hover:transform hover:scale-150 transition-all duration-200`}
                  title={`${day.date}: ${day.count} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end mt-2 text-xs text-gray-400">
          <span className="mr-1">Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-sm bg-navy-800"></div>
            <div className="w-2 h-2 rounded-sm bg-purple-900"></div>
            <div className="w-2 h-2 rounded-sm bg-purple-700"></div>
            <div className="w-2 h-2 rounded-sm bg-purple-500"></div>
            <div className="w-2 h-2 rounded-sm bg-purple-400"></div>
          </div>
          <span className="ml-1">More</span>
        </div>
      </div>

      <h5 className="text-sm font-medium text-gray-300 mb-3">Top Repositories</h5>
      <div className="space-y-4">
        {repos.map((repo, index) => (
          <div
            key={index}
            className="bg-navy-800 rounded-lg p-4 border border-navy-700 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <h6 className="font-semibold text-white">{repo.name}</h6>
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Star className="h-4 w-4 mr-1" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <GitBranch className="h-4 w-4 mr-1" />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{repo.description}</p>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-2`}></span>
              <span className="text-xs text-gray-400">{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
