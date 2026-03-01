import { Shield, Award, Globe, Clock } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "ISO 13485:2016",
  },
  {
    icon: Award,
    title: "CE Marked",
    description: "European Conformity",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "50+ Countries",
  },
  {
    icon: Clock,
    title: "20+ Years",
    description: "Of Excellence",
  },
]

export function TrustIndicators() {
  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {indicators.map((indicator) => (
            <div key={indicator.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <indicator.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{indicator.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{indicator.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Committed to delivering medical-grade instruments that meet the highest international standards.
        </p>
      </div>
    </section>
  )
}
