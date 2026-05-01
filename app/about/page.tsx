import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  HeadphonesIcon,
  TrendingUp,
  Users,
} from 'lucide-react'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Properties Supported' },
  { value: '50+', label: 'Integrations Delivered' },
  { value: '99.5%', label: 'Uptime Guarantee' },
]

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: '99.5% uptime commitment backed by enterprise-grade cloud infrastructure with geographic redundancy and automatic failover.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'GDPR and PCI DSS compliant platform with end-to-end encryption, role-based access controls, and regular penetration testing.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Solutions architected to grow with your business — from a single boutique property to a multi-site enterprise portfolio.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Around-the-clock dedicated technical support with guaranteed SLA response times and a named account manager for every client.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuous platform development with quarterly feature releases, integration expansions, and emerging technology adoption.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build long-term relationships, not one-time transactions. Your success is our success — and we mean it.',
  },
]

const whyUs = [
  {
    icon: Globe,
    title: 'UK-Based Expertise',
    description: 'Our team is based in the UK and has deep understanding of the domestic hospitality market, UK compliance requirements, and the nuances that matter to British operators.',
  },
  {
    icon: CheckCircle2,
    title: 'End-to-End Delivery',
    description: 'From initial scoping and configuration to data migration, training, go-live, and ongoing support — we manage the entire journey so you can focus on running your property.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description: 'Every contracted client is assigned a dedicated account manager who knows your property, your team, and your goals — ensuring consistent, personalised service.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our clients consistently report reductions in manual workload, faster check-in times, improved OTA performance, and measurable increases in revenue through better rate management.',
  },
]

const timeline = [
  { year: '2014', title: 'Founded', description: 'MCOL LTD was established with a focus on delivering technology solutions to the UK hospitality sector.' },
  { year: '2016', title: 'First Enterprise PMS', description: 'Delivered our first multi-property enterprise PMS implementation for a regional hotel group, setting the standard for our methodology.' },
  { year: '2018', title: 'Integration Platform', description: 'Launched our proprietary integration platform, connecting PMS clients to over 30 OTAs, booking engines, and payment providers.' },
  { year: '2020', title: 'Cloud Migration', description: 'Migrated our entire client base to a fully cloud-native infrastructure, delivering improved reliability, performance, and security.' },
  { year: '2022', title: '200 Properties', description: 'Reached the milestone of supporting over 200 properties across the UK, from boutique hotels to large portfolio operators.' },
  { year: '2024', title: 'MCOL LTD Rebranded', description: 'Formally incorporated as MCOL LTD (Company No. 17069019), continuing our commitment to excellence in PMS solutions.' },
]

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* ── PAGE HERO ──────────────────────────────────────────── */}
        <section className="bg-surface-darker border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">About Us</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About MCOL LTD</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-none tracking-tight mb-6 text-balance">
              WE INNOVATE TECHNOLOGY{' '}
              <span className="text-primary">THAT POWERS</span>{' '}
              YOUR FUTURE
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              MCOL LTD is a UK-based enterprise technology partner specialising in Property Management System solutions for hotels, serviced apartments, and property management groups — combining deep sector expertise with long-term client partnerships.
            </p>
          </div>
        </section>

        {/* ── WHO WE ARE ───────────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6 text-balance">
                  YOUR RELIABLE PARTNER IN{' '}
                  <span className="text-primary">PMS & HOSPITALITY TECHNOLOGY</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  MCOL LTD was founded with a clear mission: to make enterprise-grade Property Management System technology accessible, reliable, and genuinely useful for hospitality businesses of every scale. Too many hotels and property managers were struggling with outdated systems, poor support, and disconnected technology stacks. We set out to change that.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Today, we support over 200 properties across the UK, delivering cloud-based PMS platforms, seamless integrations, structured training programmes, and dedicated 24/7 technical support. Our team of certified PMS consultants, integration engineers, and training specialists brings decades of combined hospitality and technology experience to every engagement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We don&apos;t just implement software and walk away. We build long-term partnerships — learning your business, understanding your goals, and working alongside your team to ensure you get maximum value from your investment in technology.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <div className="relative rounded-lg overflow-hidden border border-border mb-6">
                  <Image
                    src="/about-team.jpg"
                    alt="MCOL LTD team"
                    width={600}
                    height={420}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-card border border-border rounded-lg p-5 text-center">
                      <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ──────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 md:p-10 hover:border-primary/40 transition-colors">
                <div className="w-12 h-0.5 bg-primary mb-6" />
                <h2 className="text-2xl font-extrabold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver enterprise-grade PMS solutions and comprehensive support services that empower hospitality businesses to streamline operations, reduce costs, enhance guest satisfaction, and achieve sustainable long-term growth. We make complex technology simple, reliable, and genuinely valuable.
                </p>
              </div>
              <div className="bg-primary rounded-lg p-8 md:p-10">
                <div className="w-12 h-0.5 bg-primary-foreground/40 mb-6" />
                <h2 className="text-2xl font-extrabold text-primary-foreground mb-4">Our Vision</h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To be the most trusted PMS and hospitality technology partner in the UK — recognised not just for the quality of our software, but for the depth of our expertise, the reliability of our support, and the strength of our client relationships. When you choose MCOL LTD, you choose a partner for the long term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
                COST-EFFECTIVE <span className="text-primary">PMS SOLUTIONS</span> BUILT ON TRUST
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHY MCOL ─────────────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why MCOL LTD</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6 text-balance">
                  CONTACT <span className="text-primary">MCOL LTD</span> TODAY
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you&apos;re evaluating your first PMS, migrating from a legacy system, or looking for better support on your existing platform, our team is ready to help. Get in touch for a free consultation and discover why over 200 properties trust MCOL LTD.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {whyUs.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-5 bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPANY TIMELINE ─────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
                BUILDING EXCELLENCE <span className="text-primary">SINCE 2014</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="text-3xl font-extrabold text-primary mb-3">{item.year}</div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground text-balance">
                Ready to Transform Your Property Management?
              </h2>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Talk to our team today and discover how MCOL LTD can help your business grow.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-primary-foreground text-primary px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              Schedule a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
