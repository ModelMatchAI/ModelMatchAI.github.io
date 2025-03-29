"use client"

import { useState, useEffect } from "react"

export function CharacterCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const textarea = document.getElementById("useCaseInput") as HTMLTextAreaElement

    if (textarea) {
      const updateCount = () => {
        setCount(textarea.value.length)
      }

      textarea.addEventListener("input", updateCount)

      return () => {
        textarea.removeEventListener("input", updateCount)
      }
    }
  }, [])

  return (
    <div className="absolute bottom-2 right-4 text-sm text-gray-600 bg-gray-50/80 px-2 py-1 rounded">{count}/500</div>
  )
}

