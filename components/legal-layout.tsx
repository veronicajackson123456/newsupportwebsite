import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-primary pt-14 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/legal" className="hover:text-primary-foreground transition-colors">Legal</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground font-medium" aria-current="page">{title}</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance leading-tight">
              {title}
            </h1>
            <p className="mt-3 text-primary-foreground/75 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Legal Documents</h2>
                <nav aria-label="Legal pages navigation">
                  <ul className="space-y-1">
                    {legalPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            page.label === title
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Box */}
                <div className="mt-8 p-5 bg-muted rounded-xl border border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-2">Need help?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    If you have questions about our legal policies, please contact us directly.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
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
                    <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact Footer */}
              <div className="mt-14 p-8 bg-muted rounded-2xl border border-border">
                <h2 className="text-xl font-bold text-foreground mb-2">Contact Us</h2>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  If you have any questions about this document or our practices, please reach out.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">Email</span>
                    <a href="mailto:info@mcol.online" className="text-primary hover:underline">info@mcol.online</a>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-0.5">Phone</span>
                    <a href="tel:+447424488818" className="text-primary hover:underline">+44(0)7424 488818</a>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-foreground block mb-0.5">Registered Address</span>
                    <span className="text-muted-foreground">72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG</span>
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
