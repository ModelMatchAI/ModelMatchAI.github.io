import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "p-6 flex flex-col h-full transition-all",
        highlighted
          ? "bg-primary/10 border-primary scale-105 shadow-xl shadow-primary/20"
          : "bg-slate-800/50 border-slate-700 hover:border-primary/50",
      )}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== "Custom" && <span className="text-slate-400 ml-1">/month</span>}
        </div>
        <p className="text-slate-400">{description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={buttonVariant}
        className={cn(
          "w-full",
          buttonVariant === "outline" && "border-primary/50 text-primary hover:bg-primary/10",
          buttonVariant === "default" && highlighted && "bg-gradient-to-r from-primary to-pink-500 hover:opacity-90",
        )}
      >
        {buttonText}
      </Button>
    </Card>
  )
}

