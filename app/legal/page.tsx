import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, Shield, Cookie, AlertCircle, Scale, FileLock2, FileKey, Landmark, Accessibility, ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Hub | MCOL LTD',
  description: 'Access all of MCOL LTD\'s legal documents including Terms & Conditions, Privacy Policy, Cookie Policy, Data Processing Agreement, SLA, and more.',
}

const legalDocs = [
  {
    title: 'Terms & Conditions',
    description: 'The rules and regulations governing your use of our website and services, including payment terms, intellectual property, confidentiality, and governing law.',
    href: '/terms',
    icon: FileText,
    updated: '4 November 2025',
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, store, and protect your personal data in compliance with UK GDPR and applicable data protection legislation.',
    href: '/privacy',
    icon: Shield,
    updated: '4 November 2025',
  },
  {
    title: 'Cookie Policy',
    description: 'A detailed explanation of the cookies and tracking technologies we use on our website and how you can manage your preferences.',
    href: '/cookies',
    icon: Cookie,
    updated: '4 November 2025',
  },
  {
    title: 'Acceptable Use Policy',
    description: 'The standards and restrictions that apply to all users accessing our website and services, including prohibited activities and enforcement.',
    href: '/acceptable-use',
    icon: AlertCircle,
    updated: '4 November 2025',
  },
  {
    title: 'Disclaimer',
    description: 'Important information about the limitations of the content on our website, including accuracy, professional advice, and liability exclusions.',
    href: '/disclaimer',
    icon: Scale,
    updated: '4 November 2025',
  },
  {
    title: 'Service Level Agreement',
    description: 'Defines our uptime commitments, support response time guarantees, service credits, and the scope of managed services for contracted clients.',
    href: '/service-level-agreement',
    icon: FileLock2,
    updated: '4 November 2025',
  },
  {
    title: 'Data Processing Agreement',
    description: 'Our formal GDPR-compliant DPA covering data controller and processor obligations, sub-processors, data subject rights, and security measures.',
    href: '/dpa',
    icon: FileKey,
    updated: '4 November 2025',
  },
  {
    title: 'Intellectual Property Policy',
    description: 'Covers ownership of software, branding, content, and user-generated data, along with licensing terms and intellectual property enforcement.',
    href: '/intellectual-property',
    icon: Landmark,
    updated: '4 November 2025',
  },
  {
    title: 'Accessibility Statement',
    description: 'Our commitment to digital accessibility, the standards we follow, known limitations, and how to request accessible formats or report issues.',
    href: '/accessibility',
    icon: Accessibility,
    updated: '4 November 2025',
  },
]

export default function LegalHubPage() {
  return (
    <>
      <Header />
      <main className="bg-surface-darker">
        {/* Hero */}
        <section className="bg-surface-darker border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground" aria-current="page">Legal</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Legal Hub</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance leading-none tracking-tight mb-6">
              LEGAL INFORMATION{' '}
              <span className="text-primary">&amp; DOCUMENTS</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              MCOL LTD is committed to transparency and full regulatory compliance. All of our legal documents are available below — covering how we handle your data, the terms under which we provide services, our accessibility commitments, and more.
            </p>
          </div>
        </section>

        {/* Legal Documents Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalDocs.map((doc) => {
                const Icon = doc.icon
                return (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="group flex flex-col bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-foreground group-hover:text-primary transition-colors text-base leading-snug">
                          {doc.title}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-0.5">Updated {doc.updated}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-3 transition-all uppercase tracking-wide">
                      Read Document
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground text-balance">
                Have a Legal Question?
              </h2>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Our team is happy to clarify any of our policies or data handling practices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-primary-foreground text-primary px-7 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity text-center uppercase tracking-wide"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:info@mcol.online"
                className="border border-primary-foreground text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:bg-primary-foreground/10 transition-colors text-center"
              >
                info@mcol.online
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
