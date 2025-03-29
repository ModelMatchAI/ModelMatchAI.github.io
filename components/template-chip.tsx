"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TemplateChipProps {
  text: string
  template: string
}

export function TemplateChip({ text, template }: TemplateChipProps) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    // Remove active class from all chips
    document.querySelectorAll(".template-chip").forEach((chip) => {
      chip.classList.remove("active")
    })

    // Set this chip as active
    setIsActive(true)

    // Update the textarea with the template text
    const textarea = document.getElementById("useCaseInput") as HTMLTextAreaElement
    if (textarea) {
      textarea.value = template

      // Update character count
      const charCount = document.querySelector(".character-count")
      if (charCount) {
        charCount.textContent = `${template.length}/500`
      }
    }
  }

  return (
    <div
      className={cn(
        "template-chip px-4 py-2 text-sm rounded-full border border-gray-300 cursor-pointer whitespace-nowrap transition-all",
        isActive ? "bg-primary text-white border-primary" : "bg-gray-100 hover:bg-gray-200 hover:border-gray-600",
      )}
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

