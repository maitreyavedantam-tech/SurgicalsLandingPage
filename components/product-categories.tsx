import Link from "next/link"
import { ArrowRight, Scissors, Bone, Heart, Brain, CircleDot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    icon: Scissors,
    title: "General Surgery",
    description: "Scalpels, forceps, retractors, and essential surgical tools for general procedures.",
    href: "#",
  },
  {
    icon: Bone,
    title: "Orthopedic Instruments",
    description: "Specialized tools for bone surgery, joint replacement, and trauma procedures.",
    href: "#",
  },
  {
    icon: Heart,
    title: "Cardiovascular Instruments",
    description: "Precision instruments for cardiac and vascular surgical procedures.",
    href: "#",
  },
  {
    icon: Brain,
    title: "Neurosurgical Instruments",
    description: "Ultra-fine instruments designed for delicate neurological operations.",
    href: "#",
  },
  {
    icon: CircleDot,
    title: "Laparoscopic Instruments",
    description: "Minimally invasive surgical tools for modern laparoscopic procedures.",
    href: "#",
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Surgical Instrument Range
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            From general surgery to specialized procedures, we offer a complete range of precision instruments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
