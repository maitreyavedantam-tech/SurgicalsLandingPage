import { FileCheck, Microscope, Factory, BadgeCheck } from "lucide-react"

const standards = [
  {
    icon: FileCheck,
    title: "ISO 13485:2016",
    description: "Certified quality management system for medical device manufacturing.",
  },
  {
    icon: BadgeCheck,
    title: "CE Marking",
    description: "Full compliance with European health, safety, and environmental standards.",
  },
  {
    icon: Microscope,
    title: "Material Testing",
    description: "Comprehensive material analysis and composition verification.",
  },
  {
    icon: Factory,
    title: "GMP Certified",
    description: "Good Manufacturing Practice certified production facilities.",
  },
]

export function QualityCompliance() {
  return (
    <section id="quality" className="bg-foreground py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Quality & Compliance
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Committed to the Highest Standards
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Our manufacturing processes adhere to the most stringent international quality standards. Every instrument undergoes comprehensive testing and inspection before leaving our facility.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              From raw material selection to final sterilization compatibility testing, we maintain complete traceability and documentation for every product we manufacture.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <span className="text-sm font-medium text-primary-foreground">FDA Registered</span>
              </div>
              <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <span className="text-sm font-medium text-primary-foreground">ISO 9001:2015</span>
              </div>
              <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
                <span className="text-sm font-medium text-primary-foreground">MDR Compliant</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {standards.map((standard) => (
              <div
                key={standard.title}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <standard.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-primary-foreground">{standard.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
