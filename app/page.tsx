import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { AboutUs } from "@/components/about-us"
import { ProductCategories } from "@/components/product-categories"
import { WhyChooseUs } from "@/components/why-choose-us"
import { QualityCompliance } from "@/components/quality-compliance"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustIndicators />
      <AboutUs />
      <ProductCategories />
      <WhyChooseUs />
      <QualityCompliance />
      <CallToAction />
      <Footer />
    </main>
  )
}
