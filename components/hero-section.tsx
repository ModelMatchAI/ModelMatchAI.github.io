"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/10 text-primary">
            AI Model Matching Platform
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent max-w-5xl">
            Find, Compare & Deploy the Perfect AI Model in Minutes
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl">
            Stop wasting time on the wrong models. Our intelligent matching technology finds the optimal AI for your
            specific use case, budget, and performance needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/mockup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 text-lg px-8">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
              <span className="text-slate-300">No technical skills required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
              <span className="text-slate-300">Deploy in minutes, not days</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
              <span className="text-slate-300">Save up to 70% on AI costs</span>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="aspect-[16/9] bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center p-2 mr-3 rounded-lg bg-primary/20">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Model Match Dashboard</h3>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 bg-slate-700/30 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Define Your Use Case</h4>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-600/50 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-600/50 rounded w-full"></div>
                      <div className="h-4 bg-slate-600/50 rounded w-2/3"></div>
                    </div>
                  </div>

                  <div className="col-span-1 bg-slate-700/30 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Discover AI Models</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-slate-600/30 rounded">
                        <div className="h-3 bg-primary/50 rounded w-1/4"></div>
                        <div className="h-3 bg-cyan-500/50 rounded w-1/6"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-600/30 rounded">
                        <div className="h-3 bg-primary/50 rounded w-1/3"></div>
                        <div className="h-3 bg-pink-500/50 rounded w-1/5"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-600/30 rounded">
                        <div className="h-3 bg-primary/50 rounded w-1/5"></div>
                        <div className="h-3 bg-purple-500/50 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 bg-slate-700/30 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Deploy & Monitor</h4>
                    <div className="space-y-3">
                      <div className="h-16 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded flex items-end">
                        <div className="h-1/3 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                        <div className="h-2/3 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                        <div className="h-1/2 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                        <div className="h-3/4 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                        <div className="h-1/3 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                        <div className="h-5/6 w-1/6 bg-green-500/50 rounded-sm mx-0.5"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-slate-600/50 rounded w-1/4"></div>
                        <div className="h-3 bg-slate-600/50 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

