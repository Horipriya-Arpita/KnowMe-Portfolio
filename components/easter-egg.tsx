"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface EasterEggProps {
  triggerWord: string
  children: React.ReactNode
}

export default function EasterEgg({ triggerWord, children }: EasterEggProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [catMode, setCatMode] = useState(false)

  // Check for the trigger word in localStorage on mount
  useEffect(() => {
    const easterEggState = localStorage.getItem("portfolioEasterEgg")
    if (easterEggState === "activated") {
      setIsVisible(true)
    }

    const catModeState = localStorage.getItem("portfolioCatMode")
    if (catModeState === "activated") {
      setCatMode(true)
    }
  }, [])

  // Listen for the Konami code
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ]
    let konamiIndex = 0

    const keyHandler = (e: KeyboardEvent) => {
      // Check for Konami code
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++

        if (konamiIndex === konamiCode.length) {
          setKonamiActivated(true)
          setCatMode(true)
          localStorage.setItem("portfolioCatMode", "activated")
          konamiIndex = 0

          // Show a notification
          const notification = document.createElement("div")
          notification.className = "fixed top-4 right-4 bg-purple-600 text-white p-4 rounded-lg shadow-lg z-50"
          notification.textContent = "🐱 Cat Mode Activated! 🐱"
          document.body.appendChild(notification)

          setTimeout(() => {
            document.body.removeChild(notification)
          }, 3000)
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => {
      window.removeEventListener("keydown", keyHandler)
    }
  }, [])

  // Function to check for trigger word in chat
  const checkForTrigger = (message: string) => {
    if (message.toLowerCase().includes(triggerWord.toLowerCase())) {
      setIsVisible(true)
      localStorage.setItem("portfolioEasterEgg", "activated")
    }
  }

  // Expose the check function to window so the chat component can use it
  useEffect(() => {
    ;(window as any).checkEasterEgg = checkForTrigger
  }, [triggerWord])

  if (!isVisible && !catMode) {
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
      <div className="bg-navy-900 border border-purple-500 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-purple-400">
            {catMode ? "🐱 Cat Mode Activated! 🐱" : "✨ You Found a Secret! ✨"}
          </h3>
          <button
            onClick={() => {
              setIsVisible(false)
              setCatMode(false)
              localStorage.removeItem("portfolioEasterEgg")
              localStorage.removeItem("portfolioCatMode")
            }}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {catMode ? (
          <div className="text-center">
            <img src="/placeholder.svg?height=300&width=300" alt="Cat" className="mx-auto mb-4 rounded-lg" />
            <p className="text-lg mb-4">Everything is better with cats! Enjoy your browsing with feline friends.</p>
            <button
              onClick={() => {
                setCatMode(false)
                localStorage.removeItem("portfolioCatMode")
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Turn Off Cat Mode
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
