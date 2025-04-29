"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import Button from '@mui/material/Button';
import GridBackground from "@/components/grid-background"
import GradientBlur from "@/components/gradient-blur"
import EasterEgg from "@/components/easter-egg"

type Message = {
  id: number
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm John's AI assistant. How can I help you learn more about John?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showRupkothaStory, setShowRupkothaStory] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Check for easter egg trigger
    if (input.toLowerCase().includes("rupkotha")) {
      setShowRupkothaStory(true)
      // If window.checkEasterEgg exists (set by EasterEgg component), call it
      if ((window as any).checkEasterEgg) {
        ;(window as any).checkEasterEgg(input)
      }
    }

    setInput("")
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      let botResponse = ""

      if (input.toLowerCase().includes("rupkotha")) {
        botResponse = "You've discovered a secret! Check out the magical story that just appeared..."
      } else {
        const botResponses = [
          "John is a full-stack developer with 5 years of experience.",
          "John specializes in React, Next.js, and Node.js development.",
          "John has worked on e-commerce platforms, social media dashboards, and task management applications.",
          "John is based in New York and is available for freelance projects.",
          "John graduated with a Computer Science degree and has been coding since he was 15.",
          "Besides coding, John enjoys digital art and music in his free time.",
          "John has participated in several hackathons and won awards for his innovative solutions.",
        ]
        botResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      }

      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-navy-950 to-black text-white">
      <GridBackground />
      <GradientBlur />

      <div className="container mx-auto px-4 py-8 flex flex-col h-screen">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="contained" className="text-white hover:bg-navy-800 p-2">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-2xl font-bold ml-4">Chat with John's AI Assistant</h1>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 bg-navy-900/50 rounded-lg p-4 border border-navy-800">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-purple-600 text-white rounded-tr-none"
                    : "bg-navy-800 text-white rounded-tl-none"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-navy-800 text-white rounded-lg rounded-tl-none p-3">
                <div className="flex space-x-2">
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about John..."
            className="flex-1 px-4 py-3 bg-navy-900 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>

      {/* Easter Egg Content */}
      <EasterEgg triggerWord="rupkotha">
        <div className="prose prose-invert max-w-none">
          <h4 className="text-xl font-semibold mb-4 text-purple-300">The Tale of the Midnight Coder</h4>
          <p>
            Once upon a time, in a world where lines of code wove reality and pixels painted dreams, there lived a
            developer named John.
          </p>
          <p>
            By day, John crafted websites and applications that amazed clients and users alike. But few knew of his
            secret midnight adventures, when the screen's glow illuminated his face as he worked on a mysterious
            project.
          </p>
          <p>
            This project wasn't for money or fame. It was a digital realm where art and code merged—where music notes
            became visual patterns and drawings transformed into interactive experiences.
          </p>
          <p>
            Legend says that those who discover this hidden story might find traces of this magical project somewhere in
            John's portfolio. Perhaps in the spaces between pixels or in the whispers of algorithms...
          </p>
          <p className="italic text-purple-300">
            To continue your journey, look for the stars that don't belong, and press the keys that heroes know.
          </p>
        </div>
      </EasterEgg>
    </main>
  )
}
