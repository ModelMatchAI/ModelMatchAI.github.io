import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Find Your Perfect AI Model?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with Model Match. Get started in
              minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

