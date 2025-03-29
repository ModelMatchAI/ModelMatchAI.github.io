import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl: string
}

export function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
      <div className="mb-4 text-primary/60">
        <Quote className="w-8 h-8" />
      </div>
      <p className="text-slate-300 mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="mr-4 rounded-full overflow-hidden">
          <Image src={avatarUrl || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" />
        </div>
        <div>
          <h4 className="font-medium text-white">{author}</h4>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </Card>
  )
}

