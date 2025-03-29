"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Brain,
  Check,
  Code,
  FileText,
  Headphones,
  LightbulbIcon,
  MessageSquare,
  PlaneIcon as PaperPlane,
  PenLine,
  Rocket,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function MockupPage() {
  const [progress, setProgress] = useState(33)
  const [activeStep, setActiveStep] = useState(1)
  const [characterCount, setCharacterCount] = useState(0)
  const [useCaseText, setUseCaseText] = useState("")
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [showPlayground, setShowPlayground] = useState(false)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleTemplateClick = (template: string) => {
    setUseCaseText(template)
    setCharacterCount(template.length)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUseCaseText(e.target.value)
    setCharacterCount(e.target.value.length)
  }

  const handleFindModel = () => {
    if (useCaseText.trim().length === 0) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setShowRecommendations(true)
      setProgress(66)
      setActiveStep(2)
      setIsLoading(false)

      // Scroll to recommendations
      const recommendationsElement = document.getElementById("recommendations")
      if (recommendationsElement) {
        recommendationsElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 1500)
  }

  const handleDeployModel = () => {
    if (!selectedModel) {
      return
    }

    setIsDeploying(true)

    // Simulate API call
    setTimeout(() => {
      setShowPlayground(true)
      setProgress(100)
      setActiveStep(3)
      setIsDeploying(false)

      // Scroll to playground
      const playgroundElement = document.getElementById("playground")
      if (playgroundElement) {
        playgroundElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 1500)
  }

  // Update the getModelLogo function to use the new images
  const getModelLogo = (modelName: string) => {
    if (modelName === "GPT-4o") return "/images/gpt4o-logo.png"
    if (modelName === "Claude 3") return "/images/claude-logo.png"
    if (modelName === "Gemini Pro") return "/images/gemini-logo.png"
    return "/placeholder.svg?height=24&width=24"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 pb-16">
      <div className="container max-w-5xl px-4 py-8 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Model Match
            </span>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-2xl mx-auto mb-12">
          <Progress value={progress} className="h-2 mb-6" />
          <div className="flex justify-between">
            <div
              className={cn(
                "flex flex-col items-center transition-colors",
                activeStep >= 1 ? "text-primary" : "text-slate-500",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 mb-2 rounded-full transition-all",
                  activeStep >= 1
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-700/50 text-slate-400",
                )}
              >
                <LightbulbIcon size={20} />
              </div>
              <div className="text-sm font-medium">Define</div>
            </div>
            <div
              className={cn(
                "flex flex-col items-center transition-colors",
                activeStep >= 2 ? "text-primary" : "text-slate-500",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 mb-2 rounded-full transition-all",
                  activeStep >= 2
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-700/50 text-slate-400",
                )}
              >
                <Sparkles size={20} />
              </div>
              <div className="text-sm font-medium">Discover</div>
            </div>
            <div
              className={cn(
                "flex flex-col items-center transition-colors",
                activeStep >= 3 ? "text-primary" : "text-slate-500",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 mb-2 rounded-full transition-all",
                  activeStep >= 3
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-700/50 text-slate-400",
                )}
              >
                <Rocket size={20} />
              </div>
              <div className="text-sm font-medium">Deploy</div>
            </div>
          </div>
        </div>

        {/* Step 1: Define */}
        <Card className="relative mb-8 overflow-hidden border-l-4 border-primary bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all">
          <div className="absolute top-[-10px] right-5 text-[5rem] font-black text-white/[0.03] z-0">1</div>
          <div className="p-6 relative z-10">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-xl bg-primary">
                <LightbulbIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Define Your AI Use Case</h3>
            </div>
            <p className="mb-6 text-slate-300">
              Tell us what you're building. The more specific you are, the better our recommendation will be.
            </p>

            {/* Quick Templates */}
            <div className="flex gap-3 pb-3 mb-6 overflow-x-auto custom-scrollbar">
              <TemplateChip
                icon={<Headphones size={14} />}
                text="Customer Support Bot"
                template="I need to build a customer support chatbot that can answer questions about our products."
                onClick={handleTemplateClick}
                isActive={
                  useCaseText ===
                  "I need to build a customer support chatbot that can answer questions about our products."
                }
              />
              <TemplateChip
                icon={<FileText size={14} />}
                text="Legal Document Analysis"
                template="I need to summarize long legal documents quickly and extract key information."
                onClick={handleTemplateClick}
                isActive={
                  useCaseText === "I need to summarize long legal documents quickly and extract key information."
                }
              />
              <TemplateChip
                icon={<Code size={14} />}
                text="Code Assistant"
                template="I need code assistance for my development team to improve productivity."
                onClick={handleTemplateClick}
                isActive={useCaseText === "I need code assistance for my development team to improve productivity."}
              />
              <TemplateChip
                icon={<MessageSquare size={14} />}
                text="Sentiment Analysis"
                template="I need to analyze customer feedback and categorize sentiment."
                onClick={handleTemplateClick}
                isActive={useCaseText === "I need to analyze customer feedback and categorize sentiment."}
              />
              <TemplateChip
                icon={<PenLine size={14} />}
                text="Content Generation"
                template="I need to generate product descriptions based on specifications."
                onClick={handleTemplateClick}
                isActive={useCaseText === "I need to generate product descriptions based on specifications."}
              />
            </div>

            <div className="relative mb-6">
              <Textarea
                value={useCaseText}
                onChange={handleTextareaChange}
                placeholder="Describe what you're building in detail (e.g., I need an AI to summarize lengthy legal documents and extract key entities with high accuracy for our law firm)..."
                className="min-h-[120px] bg-slate-900/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-400"
              />
              <div
                className={cn(
                  "absolute bottom-2 right-3 text-xs px-2 py-1 rounded bg-slate-900/80",
                  characterCount > 450 ? "text-amber-400" : "text-slate-400",
                  characterCount > 500 ? "text-red-400" : "",
                )}
              >
                {characterCount}/500
              </div>
            </div>

            {/* Additional Parameters */}
            <div className="grid gap-6 mb-8 md:grid-cols-3">
              <div>
                <label className="block mb-2 font-medium text-slate-300">Budget Sensitivity</label>
                <Select defaultValue="balanced">
                  <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                    <SelectValue placeholder="Select budget sensitivity" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="critical" className="text-white">
                      Cost is critical
                    </SelectItem>
                    <SelectItem value="balanced" className="text-white">
                      Balanced cost-performance
                    </SelectItem>
                    <SelectItem value="performance" className="text-white">
                      Performance is priority
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-300">Response Speed</label>
                <Select defaultValue="standard">
                  <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                    <SelectValue placeholder="Select response speed" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="fast" className="text-white">
                      Ultra-fast required
                    </SelectItem>
                    <SelectItem value="standard" className="text-white">
                      Standard response time
                    </SelectItem>
                    <SelectItem value="slow" className="text-white">
                      Can tolerate slower responses
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-300">Input Size</label>
                <Select defaultValue="medium">
                  <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                    <SelectValue placeholder="Select input size" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="short" className="text-white">
                      Short inputs (&lt;1k tokens)
                    </SelectItem>
                    <SelectItem value="medium" className="text-white">
                      Medium inputs (1-10k tokens)
                    </SelectItem>
                    <SelectItem value="long" className="text-white">
                      Long inputs (&gt;10k tokens)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleFindModel}
                disabled={isLoading || useCaseText.trim().length === 0}
                className="flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Find My Perfect Model Match</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Step 2: Discover */}
        {showRecommendations && (
          <Card
            id="recommendations"
            className="relative mb-8 overflow-hidden border-l-4 border-pink-500 bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-500"
          >
            <div className="absolute top-[-10px] right-5 text-[5rem] font-black text-white/[0.03] z-0">2</div>
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-xl bg-pink-500">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Your AI Model Matches</h3>
              </div>
              <p className="mb-6 text-slate-300">
                Based on your requirements, here are the top model matches ranked by compatibility score.
              </p>

              <div className="grid gap-6 mb-8 md:grid-cols-3">
                <ModelCard
                  name="GPT-4o"
                  description="Conversational AI with robust natural language understanding and reasoning."
                  matchScore={95}
                  logoUrl="/images/gpt4o-logo.png"
                  features={["High accuracy", "Fast response time", "Scalable"]}
                  isSelected={selectedModel === "GPT-4o"}
                  onSelect={() => setSelectedModel("GPT-4o")}
                  tooltipText="GPT-4o is known for its conversational abilities and wide knowledge base."
                />
                <ModelCard
                  name="Claude 3"
                  description="Designed for clarity, safety, and helpful responses with excellent context handling."
                  matchScore={85}
                  logoUrl="/images/claude-logo.png"
                  features={["High safety standards", "Contextual understanding", "Versatile applications"]}
                  isSelected={selectedModel === "Claude 3"}
                  onSelect={() => setSelectedModel("Claude 3")}
                  tooltipText="Claude 3 is designed for clarity and safe, helpful responses."
                />
                <ModelCard
                  name="Gemini Pro"
                  description="Next-generation model built for performance, scalability, and multimodal capabilities."
                  matchScore={90}
                  logoUrl="/images/gemini-logo.png"
                  features={["Advanced capabilities", "High scalability", "Optimized for large inputs"]}
                  isSelected={selectedModel === "Gemini Pro"}
                  onSelect={() => setSelectedModel("Gemini Pro")}
                  tooltipText="Gemini Pro is a next-generation model built for performance and scalability."
                />
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleDeployModel}
                  disabled={isDeploying || !selectedModel}
                  variant="secondary"
                  className="px-8 bg-pink-500 hover:bg-pink-600 text-white"
                >
                  {isDeploying ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Deploying...</span>
                    </>
                  ) : (
                    <>
                      <Rocket size={16} className="mr-2" />
                      <span>Deploy Selected Model</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Playground */}
        {showPlayground && (
          <Card
            id="playground"
            className="relative mb-8 overflow-hidden border-l-4 border-cyan-500 bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-500"
          >
            <div className="absolute top-[-10px] right-5 text-[5rem] font-black text-white/[0.03] z-0">3</div>
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-xl bg-cyan-500">
                  <Rocket size={24} />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 bg-slate-700/50 rounded-lg">
                    <Image
                      src={selectedModel ? getModelLogo(selectedModel) : "/placeholder.svg?height=24&width=24"}
                      alt={`${selectedModel} Logo`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedModel} Playground</h3>
                </div>
              </div>
              <p className="mb-6 text-slate-300">
                Your model has been deployed and is ready to use. Try it out with different prompts and tasks.
              </p>

              <Tabs defaultValue="chat" className="mb-6">
                <TabsList className="bg-slate-700/50 mb-6">
                  <TabsTrigger
                    value="chat"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-300"
                  >
                    <MessageSquare size={16} className="mr-2" />
                    Chatbot
                  </TabsTrigger>
                  <TabsTrigger
                    value="summarize"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-300"
                  >
                    <FileText size={16} className="mr-2" />
                    Summarizer
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-300"
                  >
                    <Code size={16} className="mr-2" />
                    Code Assistant
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat">
                  <div className="p-4 mb-4 bg-slate-900/70 rounded-lg border border-slate-700 text-white">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-slate-200">
                          Hello! I'm your AI assistant powered by {selectedModel}. How can I help you today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Ask a question..."
                      className="min-h-[60px] bg-slate-900/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-400"
                    />
                    <Button className="flex-shrink-0">
                      <PaperPlane size={16} />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
                  >
                    Try Sample Prompt
                  </Button>
                </TabsContent>

                <TabsContent value="summarize">
                  <h5 className="mb-3 text-slate-200">
                    Paste text below and click "Summarize" to see a mock condensed output:
                  </h5>
                  <Textarea
                    placeholder="Paste your text here..."
                    className="mb-3 min-h-[120px] bg-slate-900/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-400"
                  />
                  <div className="flex gap-2 mb-4">
                    <Button>Summarize</Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
                    >
                      Try Sample Text
                    </Button>
                  </div>
                  <h6 className="mb-2 font-medium text-slate-200">Summary Output:</h6>
                  <div className="p-4 min-h-[80px] bg-slate-900/70 rounded-lg border border-slate-700 text-white whitespace-pre-wrap">
                    [Mock Summarized Text Here]
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <h5 className="mb-3 text-slate-200">
                    Enter or paste your code snippet below for a mock explanation or refactor:
                  </h5>
                  <Textarea
                    placeholder="Paste your code here..."
                    className="mb-3 min-h-[120px] bg-slate-900/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-400"
                  />
                  <div className="flex gap-2 mb-4">
                    <Button>Explain Code</Button>
                    <Button>Refactor Code</Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
                    >
                      Try Sample Code
                    </Button>
                  </div>
                  <h6 className="mb-2 font-medium text-slate-200">Code Assistant Output:</h6>
                  <div className="p-4 min-h-[80px] bg-slate-900/70 rounded-lg border border-slate-700 text-white whitespace-pre-wrap font-mono text-sm">
                    [Mock Explanation or Refactored Code Here]
                  </div>
                </TabsContent>
              </Tabs>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-center text-cyan-300">
                  This is a demo environment. In a production version, you would be interacting with the actual{" "}
                  {selectedModel} model.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Back to Home Button */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Landing Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface TemplateChipProps {
  icon: React.ReactNode
  text: string
  template: string
  onClick: (template: string) => void
  isActive: boolean
}

function TemplateChip({ icon, text, template, onClick, isActive }: TemplateChipProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 text-sm rounded-full border cursor-pointer whitespace-nowrap transition-all flex items-center gap-2",
        isActive
          ? "bg-primary text-white border-primary"
          : "bg-slate-700/50 text-slate-300 border-slate-700 hover:bg-slate-700 hover:border-slate-600",
      )}
      onClick={() => onClick(template)}
    >
      {icon}
      {text}
    </div>
  )
}

interface ModelCardProps {
  name: string
  description: string
  matchScore: number
  logoUrl: string
  features: string[]
  isSelected: boolean
  onSelect: () => void
  tooltipText: string
}

function ModelCard({
  name,
  description,
  matchScore,
  logoUrl,
  features,
  isSelected,
  onSelect,
  tooltipText,
}: ModelCardProps) {
  const getScoreColor = () => {
    if (matchScore >= 90) return "text-cyan-400 bg-cyan-500/10"
    if (matchScore >= 80) return "text-amber-400 bg-amber-500/10"
    return "text-slate-400 bg-slate-500/10"
  }

  const getProgressColor = () => {
    if (matchScore >= 90) return "bg-cyan-500"
    if (matchScore >= 80) return "bg-amber-500"
    return "bg-slate-500"
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className={cn(
              "border transition-all cursor-pointer overflow-hidden h-full",
              isSelected
                ? "border-2 border-primary bg-primary/5 shadow-lg shadow-primary/15"
                : "border-slate-700 bg-slate-800/50 hover:border-primary hover:translate-y-[-5px] hover:shadow-lg",
            )}
            onClick={onSelect}
          >
            <div className="flex items-center p-4 border-b border-slate-700 bg-slate-700/30">
              <div className="flex items-center justify-center w-10 h-10 mr-2 bg-slate-800 rounded-lg">
                <Image src={logoUrl || "/placeholder.svg"} alt={`${name} Logo`} width={24} height={24} />
              </div>
              <h5 className="text-lg font-medium text-white">{name}</h5>
            </div>
            <div className="p-4">
              <p className="mb-4 text-slate-300">{description}</p>
              <ul className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-cyan-500 mt-1" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={cn("inline-block px-3 py-1 text-sm font-semibold rounded-md", getScoreColor())}>
                    {matchScore}% Match
                  </span>
                  {isSelected && <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Selected</Badge>}
                </div>
                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full", getProgressColor())}
                    style={{ width: `${matchScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-800 border-slate-700 text-slate-200">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

