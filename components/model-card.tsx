"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ModelCardProps {
  name: string
  description: string
  matchScore: number
  logoUrl: string
}

export function ModelCard({ name, description, matchScore, logoUrl }: ModelCardProps) {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    // Remove selected class from all model cards
    document.querySelectorAll(".model-card").forEach((card) => {
      card.classList.remove("selected")
    })

    // Set this card as selected
    setIsSelected(true)

    // Save selected model's name and logo
    const modelName = name
    const logoIcon = `<img src="${logoUrl}" alt="${name} Logo" style="width:24px; height:24px;" />`

    // Store selected model data for later use
    window.selectedModel = {
      name: modelName,
      logoHTML: logoIcon,
    }
  }

  const getCompatibilityClass = () => {
    if (matchScore >= 90) return "bg-cyan-500/10 text-cyan-500"
    if (matchScore >= 80) return "bg-yellow-500/10 text-yellow-500"
    return "bg-gray-500/10 text-gray-500"
  }

  return (
    <Card
      className={cn(
        "model-card border transition-all cursor-pointer overflow-hidden",
        isSelected
          ? "border-2 border-primary shadow-lg shadow-primary/15"
          : "border-gray-300 hover:border-primary hover:translate-y-[-5px] hover:shadow-lg",
      )}
      onClick={handleClick}
    >
      <div className="flex items-center p-4 border-b bg-primary/5">
        <div className="flex items-center justify-center w-10 h-10 mr-2">
          <Image src={logoUrl || "/placeholder.svg"} alt={`${name} Logo`} width={24} height={24} />
        </div>
        <h5 className="text-lg font-medium">{name}</h5>
      </div>
      <div className="p-4">
        <p className="mb-2">{description}</p>
        <span className={cn("inline-block px-3 py-1 text-sm font-semibold rounded-md", getCompatibilityClass())}>
          {matchScore}% Match
        </span>
      </div>
    </Card>
  )
}

