'use client'
import GitHubActivity from "@/components/github-activity";
import { Button } from "@mui/material";
import { GitBranch } from "lucide-react";

export default function GithubSection(){
    return (
        <>
        <section id="github" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <GitBranch className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">GitHub Activity</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">My Open Source Contributions</h3>

        <GitHubActivity />
      </section>
        </>
    )
}