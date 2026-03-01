import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function CallToAction() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Equip Your Practice with Instruments You Can Trust
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-primary-foreground/80">
              Join hundreds of healthcare facilities worldwide who trust Lakshmi Gayatri Surgicals for their surgical instrument needs. Contact us today to discuss your requirements.
            </p>
            
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2">
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
