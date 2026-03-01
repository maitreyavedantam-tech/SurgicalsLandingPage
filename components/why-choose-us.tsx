import { Target, ShieldCheck, Stethoscope, Truck } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Unmatched Precision & Durability",
    description: "Every instrument is manufactured to exacting specifications, ensuring consistent performance across thousands of procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    description: "Multi-stage inspection process with rigorous testing protocols to guarantee the highest quality standards.",
  },
  {
    icon: Stethoscope,
    title: "Surgeon-Approved Designs",
    description: "Developed in collaboration with leading surgeons to ensure ergonomic design and optimal functionality.",
  },
  {
    icon: Truck,
    title: "Global Distribution Network",
    description: "Reliable worldwide delivery with dedicated support teams ensuring timely supply to healthcare facilities.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The PrecisionMed Advantage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            We set the standard for surgical instrument excellence through innovation, quality, and service.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="relative">
              {index < reasons.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <reason.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
