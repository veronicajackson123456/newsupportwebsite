import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react'

interface Section {
  title: string
  content: React.ReactNode
}

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  description: string
  sections: Section[]
}

const legalPages = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Acceptable Use Policy', href: '/acceptable-use' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Service Level Agreement', href: '/service-level-agreement' },
  { label: 'Data Processing Agreement', href: '/dpa' },
  { label: 'Intellectual Property Policy', href: '/intellectual-property' },
  { label: 'Accessibility Statement', href: '/accessibility' },
]

export default function LegalLayout({ title, lastUpdated, description, sections }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-surface-darker">
        {/* Hero */}
        <section className="bg-surface-darker border-b border-border py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/legal" className="hover:text-primary transition-colors">Legal</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground" aria-current="page">{title}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Legal Documents</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground text-balance leading-tight mb-3">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Legal Documents</h2>
                <nav aria-label="Legal pages navigation">
                  <ul className="space-y-1">
                    {legalPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                            page.label === title
                              ? 'bg-primary text-primary-foreground'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          {page.label === title && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Box */}
                <div className="mt-8 p-5 bg-card rounded-lg border border-border">
                  <h3 className="text-sm font-bold text-foreground mb-2">Need Help?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Questions about our legal policies? Our team is ready to help.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-primary text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <p className="text-muted-foreground leading-relaxed text-base mb-10 pb-8 border-b border-border">
                {description}
              </p>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <section key={index} id={`section-${index + 1}`}>
                    <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-3">
                      <span className="text-primary text-sm">{String(index + 1).padStart(2, '0')}.</span>
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact Footer */}
              <div className="mt-14 p-8 bg-card rounded-lg border border-border">
                <h2 className="text-lg font-bold text-foreground mb-2">Contact Us</h2>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  If you have any questions about this document or our data practices, please reach out to us directly.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">Email</span>
                      <a href="mailto:info@mcol.online" className="text-primary hover:underline">info@mcol.online</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">Phone</span>
                      <a href="tel:+447424488818" className="text-primary hover:underline">+44 (0)7424 488818</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">Registered Address</span>
                      <span className="text-muted-foreground">72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">Company No.</span>
                    <span className="text-muted-foreground">17069019</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
