import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Brain,
  Sparkles,
  Zap,
  Clock,
  DollarSign,
  BarChart3,
  Code,
  MessageSquare,
  FileText,
  Bot,
  Layers,
  Info,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { UserJourney } from "@/components/user-journey"
import { ComparisonTable } from "@/components/comparison-table"
import { CTASection } from "@/components/cta-section"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navbar */}
      <nav className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Model Match
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/mockup">
            <Button variant="outline" className="hidden md:flex border-primary/20 text-primary hover:bg-primary/10">
              Try Demo
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 text-white">Get Started</Button>
        </div>
      </nav>

      {/* Disclaimer Banner */}
      <div className="bg-slate-800/80 border-b border-slate-700 py-2 mb-4">
        <div className="container">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Info size={16} className="text-amber-400" />
            <p>This is a demo site. All statistics, models, and data shown are for demonstration purposes only.</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <section className="py-12 bg-slate-900/50 backdrop-blur-sm">
        <div className="container">
          <p className="text-center text-slate-400 mb-8">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-slate-400 opacity-70 hover:opacity-100 transition-opacity">
              <svg className="h-8 w-auto" viewBox="0 0 124 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16 8 8 0 010-16z" />
                <path d="M36 5h4v14h-4V5zm12 0h-4v14h4v-4.5l1.8 1.8L54 19h5l-6-6 5-5h-4.8L48 11V5zm24 0h-4v14h4v-4.5l1.8 1.8L78 19h5l-6-6 5-5h-4.8L72 11V5zm-36 0h4v14h-4V5z" />
              </svg>
            </div>
            <div className="text-slate-400 opacity-70 hover:opacity-100 transition-opacity">
              <svg className="h-8 w-auto" viewBox="0 0 124 24" fill="currentColor">
                <path d="M24 0H0v24h24V0zm8 5h4v14h-4V5zm36 0h4v14h-4v-4.5l1.8 1.8L74 19h5l-6-6 5-5h-4.8L68 11V5zm24 0h-4v14h4v-4.5l1.8 1.8L98 19h5l-6-6 5-5h-4.8L92 11V5zm-36 0h4v14h-4V5z" />
              </svg>
            </div>
            <div className="text-slate-400 opacity-70 hover:opacity-100 transition-opacity">
              <svg className="h-8 w-auto" viewBox="0 0 124 24" fill="currentColor">
                <path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0zm32 5h4v14h-4V5zm36 0h4v14h-4v-4.5l1.8 1.8L98 19h5l-6-6 5-5h-4.8L92 11V5zm-36 0h4v14h-4V5z" />
              </svg>
            </div>
            <div className="text-slate-400 opacity-70 hover:opacity-100 transition-opacity">
              <svg className="h-8 w-auto" viewBox="0 0 124 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm56 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S74.627 0 68 0zm-28 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S46.627 0 40 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Choose Model Match?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Stop wasting time on the wrong AI models. Our intelligent matching technology finds the optimal AI for
              your specific use case, budget, and performance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-primary" />}
              title="Intelligent Model Matching"
              description="Our proprietary algorithm analyzes your specific requirements and matches you with the perfect AI model for your use case."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title="Instant Deployment"
              description="Deploy your selected AI model with a single click. No complex setup or technical knowledge required."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-cyan-500" />}
              title="Time-Saving Workflow"
              description="What used to take days of research and testing now takes minutes with our streamlined process."
            />
            <FeatureCard
              icon={<DollarSign className="w-6 h-6 text-green-500" />}
              title="Cost Optimization"
              description="Find the most cost-effective model for your needs. Stop overpaying for features you don't use."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-purple-500" />}
              title="Performance Analytics"
              description="Track and analyze your AI model's performance with comprehensive dashboards and insights."
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6 text-pink-500" />}
              title="Multi-Model Comparison"
              description="Compare different AI models side-by-side to make informed decisions based on your specific criteria."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              User Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              How ModelMatch AI Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our simple three-step process takes you from describing your needs to deploying the perfect AI model in
              minutes.
            </p>
          </div>

          <UserJourney />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Use Cases
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Perfect For Every AI Need
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              ModelMatch AI helps teams across industries find and deploy the right AI models for their specific use
              cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Customer Support</h3>
              <p className="text-slate-400 mb-4">
                Deploy AI chatbots that understand your products and provide accurate, helpful responses to customer
                inquiries.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                  Chatbots
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                  Support Automation
                </Badge>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-amber-500/10 w-fit">
                <FileText className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Document Analysis</h3>
              <p className="text-slate-400 mb-4">
                Extract key information from legal documents, contracts, and reports with high accuracy and efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20">
                  Legal Tech
                </Badge>
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20">
                  Information Extraction
                </Badge>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-green-500/10 w-fit">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Code Generation</h3>
              <p className="text-slate-400 mb-4">
                Boost developer productivity with AI assistants that help write, review, and optimize code across
                languages.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                  Developer Tools
                </Badge>
                <Badge variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                  Code Assistance
                </Badge>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-purple-500/10 w-fit">
                <Bot className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Content Creation</h3>
              <p className="text-slate-400 mb-4">
                Generate high-quality marketing copy, product descriptions, and creative content tailored to your brand
                voice.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                  Marketing
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                  Content Generation
                </Badge>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-pink-500/10 w-fit">
                <BarChart3 className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Data Analysis</h3>
              <p className="text-slate-400 mb-4">
                Transform raw data into actionable insights with AI models that identify patterns and trends
                automatically.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-pink-500/10 text-pink-400 hover:bg-pink-500/20">
                  Business Intelligence
                </Badge>
                <Badge variant="secondary" className="bg-pink-500/10 text-pink-400 hover:bg-pink-500/20">
                  Predictive Analytics
                </Badge>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4 p-3 rounded-lg bg-cyan-500/10 w-fit">
                <Layers className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Solutions</h3>
              <p className="text-slate-400 mb-4">
                Build specialized AI applications for your unique business challenges with our expert guidance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20">
                  Enterprise AI
                </Badge>
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20">
                  Custom Development
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Model Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Model Comparison
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Find Your Perfect AI Match
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Compare leading AI models across key metrics to find the one that best fits your specific requirements.
            </p>
          </div>

          <ComparisonTable />

          {/* Disclaimer tooltip */}
          <div className="flex justify-center mt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1 text-xs text-slate-500 cursor-help">
                    <Info size={12} />
                    <span>About this data</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-800 border-slate-700 text-slate-200">
                  <p>All model comparison data is simulated for demonstration purposes.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have found their perfect AI model match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ModelMatch AI saved us weeks of research and testing. We found the perfect AI model for our customer support chatbot in minutes."
              author="Sarah Johnson"
              role="CTO, TechFlow"
              avatarUrl="/placeholder.svg?height=64&width=64"
            />
            <TestimonialCard
              quote="The cost optimization feature alone paid for itself in the first month. We're now using a model that's both better and more affordable."
              author="Michael Chen"
              role="Product Manager, DataSense"
              avatarUrl="/placeholder.svg?height=64&width=64"
            />
            <TestimonialCard
              quote="As a non-technical founder, ModelMatch AI made it possible for me to implement AI in my business without hiring expensive consultants."
              author="Emma Rodriguez"
              role="Founder, MarketBoost"
              avatarUrl="/placeholder.svg?height=64&width=64"
            />
          </div>

          {/* Testimonial disclaimer */}
          <div className="text-center mt-6 text-xs text-slate-500">
            <p>Testimonials shown are fictional and for demonstration purposes only.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose the plan that works best for your needs. All plans include our core model matching technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$49"
              description="Perfect for individuals and small teams just getting started with AI."
              features={["5 model matches per month", "Basic analytics", "Email support", "1 user"]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard
              title="Professional"
              price="$149"
              description="Ideal for growing businesses with multiple AI use cases."
              features={[
                "Unlimited model matches",
                "Advanced analytics",
                "Priority support",
                "5 team members",
                "Custom deployment options",
              ]}
              buttonText="Get Started"
              buttonVariant="default"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For organizations with complex AI needs and security requirements."
              features={[
                "Unlimited everything",
                "Dedicated account manager",
                "Custom integrations",
                "Unlimited team members",
                "SLA guarantees",
                "On-premise deployment",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    AI Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Model Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center p-2 rounded-lg bg-primary/20">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Model Match
              </span>
            </div>
            <p className="text-slate-400">© {new Date().getFullYear()} Model Match. All rights reserved.</p>
          </div>
          <div className="text-center mt-6 text-xs text-slate-500">
            <p>This is a demo website. Model Match is not a real product or company.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

