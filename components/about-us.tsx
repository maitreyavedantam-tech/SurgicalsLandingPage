import { CheckCircle } from "lucide-react"

const features = [
  "Precision-engineered from high-grade German stainless steel",
  "Rigorous quality control at every manufacturing stage",
  "Designed in collaboration with leading surgeons",
  "Continuous innovation in instrument design",
]

export function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Crafting Surgical Excellence Since 2003
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              For over two decades, Lakshmi Gayatri Surgicals has been at the forefront of surgical instrument manufacturing. Our commitment to excellence drives us to create instruments that surgeons can rely on for every procedure.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              We combine traditional craftsmanship with modern precision engineering, using only the finest materials to ensure durability, reliability, and optimal performance in the operating room.
            </p>
            
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Partner Hospitals</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">2000+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Product Range</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Countries Served</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">99.8%</div>
                  <p className="mt-2 text-sm text-muted-foreground">Quality Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
