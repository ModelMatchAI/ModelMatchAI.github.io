"use client"

import { useState, useEffect } from "react"
import { Brain, Rocket, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProgressSteps() {
  const [progress, setProgress] = useState(33)
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const recommendBtn = document.getElementById("recommendBtn")
    const deploySelectedBtn = document.getElementById("deploySelectedBtn")
    const recommendationCard = document.getElementById("recommendationCard")
    const playgroundCard = document.getElementById("playgroundCard")

    if (recommendBtn && recommendationCard) {
      recommendBtn.addEventListener("click", () => {
        recommendationCard.classList.remove("hidden")
        recommendationCard.scrollIntoView({ behavior: "smooth" })
        setProgress(66)
        setActiveStep(2)
      })
    }

    if (deploySelectedBtn && playgroundCard) {
      deploySelectedBtn.addEventListener("click", () => {
        playgroundCard.classList.remove("hidden")
        playgroundCard.scrollIntoView({ behavior: "smooth" })
        setProgress(100)
        setActiveStep(3)
      })
    }

    return () => {
      if (recommendBtn) {
        recommendBtn.removeEventListener("click", () => {})
      }
      if (deploySelectedBtn) {
        deploySelectedBtn.removeEventListener("click", () => {})
      }
    }
  }, [])

  return (
    <div className="w-4/5 max-w-2xl mx-auto mb-10">
      <div className="relative h-2 mb-5 overflow-hidden bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out bg-gradient-to-r from-primary to-pink-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div
          className={cn(
            "flex flex-col items-center w-1/3 transition-colors",
            activeStep >= 1 ? "text-primary" : "text-gray-600",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 mb-2 transition-all rounded-full",
              activeStep >= 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-300",
            )}
          >
            <Brain size={20} />
          </div>
          <div className="text-sm font-semibold">Define</div>
        </div>
        <div
          className={cn(
            "flex flex-col items-center w-1/3 transition-colors",
            activeStep >= 2 ? "text-primary" : "text-gray-600",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 mb-2 transition-all rounded-full",
              activeStep >= 2 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-300",
            )}
          >
            <Sparkles size={20} />
          </div>
          <div className="text-sm font-semibold">Discover</div>
        </div>
        <div
          className={cn(
            "flex flex-col items-center w-1/3 transition-colors",
            activeStep >= 3 ? "text-primary" : "text-gray-600",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 mb-2 transition-all rounded-full",
              activeStep >= 3 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-300",
            )}
          >
            <Rocket size={20} />
          </div>
          <div className="text-sm font-semibold">Deploy</div>
        </div>
      </div>
    </div>
  )
}

