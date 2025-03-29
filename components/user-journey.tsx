import { Brain, Rocket, Sparkles } from "lucide-react"

export function UserJourney() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-[28px] top-10 bottom-10 w-1 bg-gradient-to-b from-primary via-pink-500 to-cyan-500 hidden md:block"></div>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-4 md:mb-0 md:mr-6 shrink-0 z-10">
            <Brain className="w-6 h-6" />
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:ml-4 w-full">
            <h3 className="text-2xl font-bold mb-3 text-white">1. Define Your AI Use Case</h3>
            <p className="text-slate-400 mb-4">
              Tell us what you're building and what matters most to you. The more specific you are, the better our
              recommendation will be. Select from common templates or describe your unique needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">Describe Your Needs</h4>
                <p className="text-sm text-slate-400">Detail your specific AI requirements and constraints</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">Set Your Budget</h4>
                <p className="text-sm text-slate-400">Define cost parameters for optimal model selection</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">Specify Performance</h4>
                <p className="text-sm text-slate-400">Indicate speed, accuracy, and other key metrics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-500 text-white mb-4 md:mb-0 md:mr-6 shrink-0 z-10">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:ml-4 w-full">
            <h3 className="text-2xl font-bold mb-3 text-white">2. Discover Your AI Model Matches</h3>
            <p className="text-slate-400 mb-4">
              Our proprietary algorithm analyzes your requirements and matches you with the perfect AI models. Compare
              options side-by-side with detailed compatibility scores and performance metrics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">GPT-4o</h4>
                  <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    95% Match
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Cost</span>
                    <span className="text-slate-300">$$$</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Speed</span>
                    <span className="text-slate-300">Fast</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">Claude 3</h4>
                  <span className="text-sm font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    85% Match
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Cost</span>
                    <span className="text-slate-300">$$</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Speed</span>
                    <span className="text-slate-300">Medium</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">Gemini Pro</h4>
                  <span className="text-sm font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                    80% Match
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Cost</span>
                    <span className="text-slate-300">$</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Speed</span>
                    <span className="text-slate-300">Fast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row relative">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500 text-white mb-4 md:mb-0 md:mr-6 shrink-0 z-10">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:ml-4 w-full">
            <h3 className="text-2xl font-bold mb-3 text-white">3. Deploy & Optimize Your AI</h3>
            <p className="text-slate-400 mb-4">
              Deploy your selected AI model with a single click. Our platform handles all the technical details, so you
              can focus on using AI to solve your business challenges. Monitor performance and optimize as needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">One-Click Deploy</h4>
                <p className="text-sm text-slate-400">Instant setup with no technical knowledge required</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">Real-Time Analytics</h4>
                <p className="text-sm text-slate-400">Monitor usage, costs, and performance metrics</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-medium text-white mb-1">Continuous Optimization</h4>
                <p className="text-sm text-slate-400">Get recommendations to improve performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

