import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
              Trusted by 500+ Hospitals Worldwide
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Precision Surgical Instruments for{" "}
              <span className="text-primary">Medical Excellence</span>
            </h1>
            
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Delivering uncompromising quality and innovation to medical professionals worldwide. Our surgical instruments are engineered for precision, durability, and safety.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2">
                Explore Our Instruments
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl">
              <div className="flex h-full flex-col items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="h-full w-full max-w-xs text-primary/20"
                >
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M100 40 L100 160 M40 100 L160 100"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <rect x="85" y="50" width="30" height="100" rx="4" fill="currentColor" opacity="0.3" />
                  <rect x="90" y="45" width="20" height="15" rx="2" fill="currentColor" opacity="0.5" />
                  <path
                    d="M95 150 L100 165 L105 150"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Precision Engineered Instruments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
