import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import {
  Server,
  Link2,
  HeadphonesIcon,
  GraduationCap,
  Database,
  Shield,
  Cloud,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: Server,
    tag: 'Core Platform',
    title: 'PMS Software Solutions',
    subtitle: 'Expert Enterprise Platform',
    description:
      'Our cloud-based PMS is purpose-built for the modern hospitality industry, delivering real-time data synchronisation, multi-property management from a single dashboard, automated reservation workflows, and deep customisation to fit your exact operational model.',
    points: [
      'Cloud-based platform with real-time data synchronisation',
      'Multi-property portfolio management and central dashboard',
      'Channel management and OTA distribution',
      'Guest management, CRM, and loyalty integration',
      'Automated reservation workflows and rate management',
      'Fully customisable reporting and analytics suite',
    ],
  },
  {
    icon: Link2,
    tag: 'Connectivity',
    title: 'System Integration & Setup',
    subtitle: 'Easy & Fast Setup',
    description:
      'We connect your PMS to every layer of your technology stack — from global OTAs and booking engines to accounting platforms, payment gateways, and revenue management tools — using robust API integrations with zero disruption to your live operations.',
    points: [
      'API integration with all major OTAs and booking engines',
      'Accounting software integration (Xero, Sage, QuickBooks)',
      'Payment gateway and POS system connectivity',
      'Revenue management and rate shopping tool integration',
      'Data migration from legacy PMS platforms',
      'Custom API development for non-standard tools',
    ],
  },
  {
    icon: HeadphonesIcon,
    tag: '24/7 Support',
    title: 'Technical Support & Maintenance',
    subtitle: 'Always On, Always Ready',
    description:
      'Our dedicated support team is available around the clock to resolve critical issues, answer technical questions, and proactively monitor your system health. With guaranteed SLA response times and a dedicated account manager, you are never alone.',
    points: [
      '24/7 technical support with guaranteed SLA response times',
      'Dedicated account manager for all contracted clients',
      'Proactive system health monitoring and alerting',
      'Regular software updates, patches, and security releases',
      'Incident management and root cause analysis',
      'Disaster recovery planning and business continuity support',
    ],
  },
  {
    icon: GraduationCap,
    tag: 'Enablement',
    title: 'Staff Training & Onboarding',
    subtitle: 'Train-the-Trainer Approach',
    description:
      'A great PMS is only as powerful as the people using it. Our structured, role-based training programmes — delivered on-site or remotely — ensure every team member, from front desk to management, is confident and productive from day one.',
    points: [
      'Customised on-site and remote training delivery',
      'Role-based training for front desk, housekeeping, and management',
      'Comprehensive user documentation and video tutorials',
      'Train-the-trainer programme for internal champions',
      'Refresher sessions and new-starter onboarding',
      'Ongoing best-practice advisory and optimisation coaching',
    ],
  },
  {
    icon: Database,
    tag: 'Migration',
    title: 'Data Migration & Integration',
    subtitle: 'Zero Data Loss Guarantee',
    description:
      'Switching PMS providers can be daunting. Our structured migration methodology — covering data audit, cleansing, mapping, and parallel testing — ensures a smooth, accurate, and fully validated transition from your existing system with no data loss.',
    points: [
      'Full data audit and quality assessment',
      'Data cleansing, deduplication, and normalisation',
      'Field mapping and transformation to target schema',
      'Historical reservation and guest data import',
      'Parallel testing and reconciliation before go-live',
      'Post-migration validation and sign-off process',
    ],
  },
  {
    icon: Shield,
    tag: 'Compliance',
    title: 'Compliance & Security',
    subtitle: 'We Care About Your Data',
    description:
      'Security and compliance are embedded in every layer of our platform. From GDPR and PCI DSS to access controls and penetration testing, we ensure your guest data is protected and your business meets all relevant regulatory requirements.',
    points: [
      'GDPR compliance with full Data Processing Agreements',
      'PCI DSS Level 1 compliant payment processing',
      'Role-based access control and user permission management',
      'End-to-end encryption for all data in transit and at rest',
      'Regular penetration testing and vulnerability assessments',
      'Full audit trails and compliance reporting dashboards',
    ],
  },
  {
    icon: Cloud,
    tag: 'Infrastructure',
    title: 'Cloud Deployment & Backup',
    subtitle: '99.5% Uptime SLA',
    description:
      'Your PMS runs on enterprise-grade cloud infrastructure with geographic redundancy, automated daily backups, real-time failover, and load balancing — ensuring your reservations system is always available during peak periods and critical check-in times.',
    points: [
      'Scalable cloud hosting with 99.5% uptime SLA',
      'Automated daily backups with point-in-time recovery',
      'Geographic redundancy and automatic failover',
      'Real-time data replication across multiple data centres',
      'Load balancing for consistent peak-period performance',
      'Transparent uptime monitoring and status reporting',
    ],
  },
  {
    icon: BarChart3,
    tag: 'Strategy',
    title: 'Consulting & Optimisation',
    subtitle: 'Expert IT Consulting',
    description:
      'Beyond implementation, our consultants work with you on an ongoing basis to maximise your system ROI, streamline workflows, build custom analytics dashboards, and develop continuous improvement roadmaps aligned to your business growth objectives.',
    points: [
      'Business process analysis and workflow optimisation',
      'Custom analytics and revenue reporting dashboards',
      'System configuration best-practice reviews',
      'Change management and user adoption strategies',
      'Vendor evaluation and technology roadmap planning',
      'Quarterly performance reviews and improvement planning',
    ],
  },
]

const processSteps = [
  { step: '01', title: 'Discovery & Scoping', description: 'We begin with a thorough discovery session to understand your property, team, and operational requirements — producing a detailed scope and project plan.' },
  { step: '02', title: 'System Configuration', description: 'Our engineers configure and customise your PMS to your exact workflows, rate structures, reporting needs, and integration requirements.' },
  { step: '03', title: 'Data Migration', description: 'All historical data is audited, cleansed, mapped, and migrated with parallel testing to guarantee accuracy before your go-live date.' },
  { step: '04', title: 'Training & Go-Live', description: 'We deliver comprehensive role-based training for your team, manage your go-live day, and remain on-site or on-call for the critical first week.' },
  { step: '05', title: 'Ongoing Support', description: 'Post-launch, you benefit from 24/7 technical support, regular system updates, and ongoing optimisation advisory from your dedicated account manager.' },
]

export default function Services() {
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
              <span className="text-foreground">Services</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-none tracking-tight mb-6 text-balance">
              INNOVATIVE PMS SOLUTIONS{' '}
              <span className="text-primary">FOR YOUR BUSINESS</span>{' '}
              SUCCESS
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              From initial implementation to ongoing optimisation, MCOL LTD delivers the complete spectrum of Property Management System services your hospitality business needs to operate efficiently, grow profitably, and delight your guests.
            </p>
          </div>
        </section>

        {/* ── SERVICES LIST ────────────────────────────────────────── */}
        <section className="bg-surface-mid py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Icon header panel */}
                    <div className="lg:col-span-1 bg-muted border-b lg:border-b-0 lg:border-r border-border p-8 flex flex-col items-center justify-center text-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">{service.tag}</div>
                        <div className="text-xs text-muted-foreground italic">{service.subtitle}</div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="lg:col-span-4 p-8">
                      <h2 className="text-xl font-bold text-foreground mb-3">{service.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── IMPLEMENTATION PROCESS ───────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
                OUR <span className="text-primary">IMPLEMENTATION</span> PROCESS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/40 transition-colors">
                    <div className="text-4xl font-extrabold text-primary/20 mb-4">{step.step}</div>
                    <h3 className="font-bold text-foreground text-sm mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                  </div>
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
                Ready to Implement or Upgrade Your PMS?
              </h2>
              <p className="text-primary-foreground/80 text-sm mt-2">Speak to our team for a free consultation and no-obligation demo.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-primary-foreground text-primary px-7 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-wide text-center"
              >
                Schedule Demo
              </Link>
              <Link
                href="/contact"
                className="border border-primary-foreground text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Get a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
