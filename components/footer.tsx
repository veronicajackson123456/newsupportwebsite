import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const services = [
  'PMS Software Solutions',
  'System Integration & Setup',
  'Technical Support & Maintenance',
  'Staff Training & Onboarding',
  'Data Migration & Integration',
  'Compliance & Security',
  'Cloud Deployment & Backup',
  'Consulting & Optimization',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Legal Hub', href: '/legal' },
]

const legalLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-surface-darker text-foreground">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/mcol-logo.jpg"
                alt="MCOL LTD Logo"
                width={44}
                height={44}
                className="rounded-sm object-cover"
              />
              <div>
                <div className="text-base font-bold tracking-wider">
                  MCOL <span className="text-primary">LTD</span>
                </div>
                <div className="text-xs text-muted-foreground tracking-wide mt-0.5">PMS Solutions</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enterprise-grade Property Management System solutions, integration, and 24/7 support for hotels and hospitality businesses across the UK.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+447424488818"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                +44 (0)7424 488818
              </a>
              <a
                href="mailto:info@mcol.online"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                info@mcol.online
              </a>
              <div className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              | Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              | Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              | Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-foreground font-medium">MCOL LTD</span>. All Rights Reserved. Company No. 17069019
          </p>
          <p className="text-primary font-medium tracking-wide uppercase text-[10px]">
            Enterprise PMS Software Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
