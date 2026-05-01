'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Server,
  Link2,
  HeadphonesIcon,
  GraduationCap,
  Database,
  Shield,
  Cloud,
  BarChart3,
  Star,
  Quote,
} from 'lucide-react'

const marqueeItems = [
  'PMS Software Solutions',
  'System Integration',
  'Technical Support',
  'Staff Training',
  'Data Migration',
  'Compliance & Security',
  'Cloud Deployment',
  'Consulting & Optimization',
  'Guest Management',
  'Channel Management',
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Properties Supported' },
  { value: '50+', label: 'Integrations Delivered' },
  { value: '99.5%', label: 'Uptime Guarantee' },
]

const services = [
  {
    icon: Server,
    tag: 'Core Platform',
    title: 'PMS Software Solutions',
    description:
      'Enterprise-grade cloud-based Property Management Systems with real-time data synchronization, multi-property dashboard management, channel integration, and fully customizable workflows built for hotels, serviced apartments, and property portfolios of any scale.',
  },
  {
    icon: Link2,
    tag: 'Connectivity',
    title: 'System Integration & Setup',
    description:
      'Seamless API connectivity with booking engines, OTAs, accounting platforms, payment gateways, POS systems, and third-party hospitality tools. We handle every layer of your technology stack — from data mapping to go-live — with zero disruption to your operations.',
  },
  {
    icon: HeadphonesIcon,
    tag: '24/7 Support',
    title: 'Technical Support & Maintenance',
    description:
      'Around-the-clock dedicated technical support with guaranteed SLA response times. Our team proactively monitors your system, applies security patches, performs routine maintenance, and responds rapidly to incidents so your property never loses productivity.',
  },
  {
    icon: GraduationCap,
    tag: 'Enablement',
    title: 'Staff Training & Onboarding',
    description:
      'Structured, role-based training programs delivered on-site or remotely. From front desk to management, our onboarding ensures every team member is fully confident and productive from day one, with detailed documentation and train-the-trainer support.',
  },
  {
    icon: Database,
    tag: 'Migration',
    title: 'Data Migration & Integration',
    description:
      'Comprehensive migration planning and execution from any legacy PMS. We audit, cleanse, map, and reconcile historical data with a parallel testing process to ensure accuracy, continuity, and zero data loss during your transition.',
  },
  {
    icon: Shield,
    tag: 'Compliance',
    title: 'Compliance & Security',
    description:
      'GDPR and PCI DSS compliance built into every layer of our platform. Regular security audits, penetration testing, role-based access controls, end-to-end data encryption, and full audit trails keep your guests\' data protected and your business compliant.',
  },
  {
    icon: Cloud,
    tag: 'Infrastructure',
    title: 'Cloud Deployment & Backup',
    description:
      'Scalable cloud infrastructure with geographic redundancy, automated daily backups, real-time failover, and load balancing for peak performance. Our 99.5% uptime SLA means your reservations system is always available when you need it most.',
  },
  {
    icon: BarChart3,
    tag: 'Strategy',
    title: 'Consulting & Optimization',
    description:
      'Strategic technology consulting to help you maximize ROI and operational efficiency. We analyze your workflows, recommend best-practice configurations, build custom analytics dashboards, and create continuous improvement roadmaps aligned to your growth plans.',
  },
]

const whyChoose = [
  {
    title: 'Flexible & Tailored',
    description: 'We tailor every implementation to your specific property type, size, and workflow requirements — from boutique hotels to enterprise portfolios.',
  },
  {
    title: 'UK-Based Expertise',
    description: 'Our team understands the UK hospitality market, local compliance requirements, and the nuances that matter to your business and your guests.',
  },
  {
    title: 'Expert Execution',
    description: 'Experienced PMS consultants and engineers deliver every project with precision, professionalism, and minimal disruption to your day-to-day operations.',
  },
  {
    title: 'Continuous Optimization',
    description: 'We fine-tune your system post-launch with performance reviews, regular updates, and ongoing advisory support to ensure sustained peak performance.',
  },
]

const faqs = [
  {
    q: 'What types of properties does MCOL LTD support?',
    a: 'We support the full spectrum of hospitality businesses including independent hotels, boutique properties, serviced apartments, holiday parks, hostels, and large multi-site portfolios. Our PMS solutions scale from 5-room properties to enterprise-level operations with hundreds of units across multiple locations.',
  },
  {
    q: 'How long does a typical PMS implementation take?',
    a: 'Implementation timelines depend on your property size and complexity. A standard single-property implementation typically takes 4–8 weeks from contract to go-live. Multi-property or enterprise rollouts are phased over 3–6 months. We provide a detailed project plan at the outset so you always know what to expect.',
  },
  {
    q: 'Can you migrate data from our existing PMS?',
    a: 'Absolutely. We have migrated data from virtually every major PMS platform. Our team conducts a full data audit, maps all fields, cleanses inconsistencies, and runs parallel testing before the cutover. We guarantee no data loss during migration.',
  },
  {
    q: 'What integrations do you support?',
    a: 'We support integrations with all major OTAs (Booking.com, Expedia, Airbnb), channel managers, accounting software (Xero, Sage, QuickBooks), payment gateways (Stripe, Worldpay), POS systems, and revenue management tools. If you use a platform not on our standard list, our team can build a custom API integration.',
  },
  {
    q: 'What does your 24/7 support cover?',
    a: 'Our 24/7 support covers all critical system issues, check-in/check-out failures, reservation errors, payment processing problems, and integration outages. Non-critical requests are handled within 4 business hours. All contracted clients receive a dedicated account manager and priority support queue.',
  },
  {
    q: 'Is your platform GDPR compliant?',
    a: 'Yes. GDPR compliance is built into every layer of our platform architecture. We act as your Data Processor under a formal Data Processing Agreement, and provide full documentation to support your own compliance obligations. All guest data is encrypted in transit and at rest, with access controls and full audit trails.',
  },
]

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'General Manager',
    company: 'The Belmont Hotel',
    quote: 'MCOL LTD transformed our front-desk operations completely. The PMS implementation was smooth, the training was thorough, and the support team has been exceptional. Our check-in times dropped by 40% within the first month.',
  },
  {
    name: 'James Whitfield',
    role: 'Head of Operations',
    company: 'Parkview Properties Group',
    quote: 'We manage 12 properties and needed a system that could handle it all centrally. MCOL LTD delivered exactly that. The multi-property dashboard is outstanding and the data migration from our old system was flawless.',
  },
  {
    name: 'Priya Patel',
    role: 'Revenue Manager',
    company: 'City Stay Apartments',
    quote: 'The channel manager integration alone has saved us hours of manual work every day. OTA syncing is real-time and the reporting suite gives us exactly the insights we need to optimise our pricing strategy.',
  },
  {
    name: 'David Chen',
    role: 'IT Director',
    company: 'Serenade Hotel Collection',
    quote: 'From a technical standpoint, the MCOL LTD platform is robust, secure, and extremely well-documented. Their GDPR compliance documentation helped us satisfy our legal team in record time. Outstanding technical support.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-surface-darker overflow-hidden">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Trusted PMS Expertise
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-none tracking-tight mb-6 text-balance">
                  POWER YOUR{' '}
                  <span className="text-primary">PROPERTY</span>{' '}
                  WITH SMART PMS SOLUTIONS
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
                  MCOL LTD delivers enterprise-grade Property Management Systems, seamless integrations, and dedicated 24/7 support — helping hotels, serviced apartments, and property portfolios operate faster, smarter, and more profitably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Get a Free Demo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['GDPR Compliant', '99.5% Uptime SLA', '24/7 Support', 'PCI DSS Secure'].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border px-3 py-1 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — hero image */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl shadow-black/60">
                  <Image
                    src="/hero-pms.jpg"
                    alt="MCOL LTD property management system dashboard"
                    width={680}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/50 to-transparent" />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-lg p-4 shadow-xl">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Properties Supported</div>
                </div>
                <div className="absolute -top-5 -right-5 bg-primary rounded-lg p-4 shadow-xl">
                  <div className="text-2xl font-bold text-primary-foreground">10+</div>
                  <div className="text-xs text-primary-foreground/80 mt-0.5">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ──────────────────────────────────────────────── */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="flex">
            <div className="flex shrink-0 gap-8 animate-marquee items-center">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-primary-foreground text-sm font-semibold uppercase tracking-widest whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SNIPPET ────────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <Image
                    src="/about-team.jpg"
                    alt="MCOL LTD team"
                    width={600}
                    height={420}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-card border border-border rounded-lg p-5 text-center">
                      <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">About MCOL LTD</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6 text-balance">
                  WE INNOVATE TECHNOLOGY{' '}
                  <span className="text-primary">THAT POWERS</span>{' '}
                  YOUR FUTURE
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MCOL LTD is a UK-based enterprise technology partner specialising in Property Management System solutions for the hospitality industry. We combine deep sector expertise with cutting-edge software to help hotels, serviced apartments, and property groups streamline operations, maximise revenue, and deliver outstanding guest experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From initial consultation to post-launch support, our team of certified PMS consultants, integration engineers, and training specialists are with you at every step. We don&apos;t just implement software — we build long-term partnerships.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all"
                >
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance">
                  COST-EFFECTIVE{' '}
                  <span className="text-primary">PMS SOLUTIONS</span>{' '}
                  FOR EVERY PROPERTY TYPE
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-8 h-0.5 bg-primary mb-4" />
                    <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Comprehensive Services</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance">
                END-TO-END{' '}
                <span className="text-primary">PMS & HOSPITALITY</span>{' '}
                SOLUTIONS
              </h2>
            </div>

            {/* Services accordion style */}
            <div className="space-y-0 border border-border rounded-lg overflow-hidden">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="group flex gap-6 p-6 md:p-8 border-b border-border last:border-0 bg-card hover:bg-muted transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">{service.tag}</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View All Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────────── */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground leading-tight text-balance">
                Smart, Scalable PMS Solutions for the Modern Hospitality Business
              </h2>
              <p className="text-primary-foreground/80 text-sm mt-2">Get in touch with our team today for a free consultation and live demo.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-primary-foreground text-primary px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-wide whitespace-nowrap"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance">
                  FREQUENTLY{' '}
                  <span className="text-primary">ASKED</span>{' '}
                  QUESTIONS
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mt-6 mb-8">
                  We&apos;ve compiled answers to the most common questions about our PMS services, implementation timelines, and support. Still have questions? Our team is ready to help.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all">
                  Ask Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-2 divide-y divide-border border-t border-border">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="py-5">
                    <button
                      className="flex items-start justify-between w-full text-left gap-4"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      aria-expanded={openFaq === idx}
                    >
                      <span className="font-semibold text-foreground text-sm leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Happy Clients</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance">
                TESTIMONIALS{' '}
                <span className="text-primary">THAT SPEAK</span>{' '}
                FOR THEMSELVES
              </h2>
            </div>

            {/* Active testimonial */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="bg-card border border-border rounded-lg p-8 md:p-10 relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {testimonials[activeTestimonial].role} &mdash; {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`text-left p-4 rounded-lg border transition-all ${
                    idx === activeTestimonial
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card hover:border-muted-foreground'
                  }`}
                >
                  <div className="text-xs font-bold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate mt-0.5">{t.company}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
