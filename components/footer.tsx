import Link from "next/link"

const footerLinks = {
  products: [
    { label: "General Surgery", href: "#" },
    { label: "Orthopedic", href: "#" },
    { label: "Cardiovascular", href: "#" },
    { label: "Neurosurgical", href: "#" },
    { label: "Laparoscopic", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Quality", href: "#quality" },
    { label: "Certifications", href: "#" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Contact Sales", href: "#contact" },
    { label: "Request Quote", href: "#" },
    { label: "Download Catalog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14,2 14,8 20,8" />
                  <path d="M12 18v-6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">Lakshmi Gayatri Surgicals</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Precision surgical instruments trusted by medical professionals worldwide. Quality, innovation, and reliability since 2003.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>123 Medical Drive, Suite 100</p>
              <p>Healthcare City, HC 12345</p>
              <p className="pt-2">
                <a href="mailto:info@lgsurgicals.com" className="hover:text-foreground">
                  info@lgsurgicals.com
                </a>
              </p>
              <p>
                <a href="tel:+1-800-SURGERY" className="hover:text-foreground">
                  +1-800-SURGERY
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lakshmi Gayatri Surgicals. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
