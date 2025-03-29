import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Card>
  )
}

