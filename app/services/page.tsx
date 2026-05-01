'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Services() {
  const serviceCategories = [
    {
      title: 'PMS Software Solutions',
      icon: '💻',
      description: 'Enterprise-grade property management systems tailored for your operations.',
      items: [
        'Cloud-based PMS platform with real-time data synchronization',
        'Multi-property portfolio management and central dashboard',
        'Channel management and online distribution',
        'Guest management and CRM integration',
        'Customizable workflows and automation',
      ],
    },
    {
      title: 'System Integration & Setup',
      icon: '🔗',
      description: 'Seamless integration with your existing infrastructure and third-party systems.',
      items: [
        'API integration with booking engines and distribution channels',
        'Accounting software and financial system integration',
        'Payment gateway and POS system connectivity',
        'Data migration from legacy systems',
        'Custom workflow automation and connectivity',
      ],
    },
    {
      title: 'Technical Support & Maintenance',
      icon: '🛠️',
      description: '24/7 dedicated support to keep your systems running smoothly.',
      items: [
        '24/7 technical support with guaranteed response times',
        'Regular system maintenance and updates',
        'Performance monitoring and optimization',
        'Security patches and compliance updates',
        'Incident response and disaster recovery',
      ],
    },
    {
      title: 'Staff Training & Onboarding',
      icon: '👨‍🏫',
      description: 'Comprehensive training to maximize adoption and productivity.',
      items: [
        'Customized on-site and remote training programs',
        'Role-based training for different team members',
        'Documentation and video tutorials',
        'Ongoing support and best practices guidance',
        'Train-the-trainer programs for your team leads',
      ],
    },
    {
      title: 'Data Migration & Integration',
      icon: '📊',
      description: 'Smooth transition from your current system with minimal disruption.',
      items: [
        'Complete data audit and validation',
        'Migration planning and execution',
        'Data mapping and cleansing',
        'Historical data import and reconciliation',
        'Parallel testing and validation processes',
      ],
    },
    {
      title: 'Compliance & Security',
      icon: '🔒',
      description: 'Enterprise-level security and regulatory compliance for your data.',
      items: [
        'GDPR and data protection compliance',
        'PCI DSS compliance for payment processing',
        'Regular security audits and penetration testing',
        'Data encryption and access controls',
        'Audit trails and compliance reporting',
      ],
    },
    {
      title: 'Cloud Deployment & Backup',
      icon: '☁️',
      description: 'Reliable cloud infrastructure with automated backups and redundancy.',
      items: [
        'Scalable cloud hosting with 99.5% uptime SLA',
        'Automated daily backups and disaster recovery',
        'Geographic redundancy and failover protection',
        'Real-time data synchronization across locations',
        'Load balancing for optimal performance',
      ],
    },
    {
      title: 'Consulting & Optimization',
      icon: '📈',
      description: 'Strategic guidance to maximize ROI and operational efficiency.',
      items: [
        'Business process optimization and workflow design',
        'System configuration best practices',
        'Performance analytics and reporting',
        'Change management and adoption strategies',
        'Continuous improvement roadmaps',
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">🏨</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our PMS Services
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl flex items-center gap-2">
              <span className="text-3xl">✨</span>
              Complete Property Management Solutions
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              MCOL LTD provides comprehensive PMS software solutions designed specifically for property managers, hotels, and hospitality businesses. Whether you need a complete system implementation or specialized support services, we have the expertise to help you succeed.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="text-5xl">🚀</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Implement or Upgrade Your PMS?
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let MCOL LTD guide you through a seamless implementation with comprehensive support at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>📅</span> Schedule Demo
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>💬</span> Get a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
