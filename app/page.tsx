'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Award, Users, Zap, Shield, Globe } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'PMS Software Solutions',
      description: 'Enterprise-grade property management systems built for your business.',
      icon: '💻',
    },
    {
      title: 'System Integration & Setup',
      description: 'Seamless integration with your existing infrastructure and workflows.',
      icon: '🔗',
    },
    {
      title: 'Technical Support & Maintenance',
      description: '24/7 dedicated support to keep your systems running smoothly.',
      icon: '🛠️',
    },
    {
      title: 'Staff Training & Onboarding',
      description: 'Comprehensive training to maximize adoption and productivity.',
      icon: '👨‍🏫',
    },
  ]

  const features = [
    {
      title: 'Enterprise-Grade Reliability',
      description: '99.5% uptime guarantee with redundant infrastructure.',
      icon: Shield,
    },
    {
      title: '24/7 Technical Support',
      description: 'Expert support team available round the clock for critical issues.',
      icon: Award,
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your existing systems and workflows effortlessly.',
      icon: Zap,
    },
    {
      title: 'Data Security & Compliance',
      description: 'GDPR compliant with enterprise-level encryption and security.',
      icon: Shield,
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your operations without worrying about system limitations.',
      icon: Globe,
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 text-sm font-medium flex items-center gap-2">
                  <span className="text-lg">🏨</span>
                  Your PMS Software Partner
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Enterprise PMS Solutions for <span className="text-blue-600">Property Management</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Empower your team with intelligent property management systems designed for the modern hospitality and property management industry.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  MCOL LTD provides comprehensive PMS software solutions, integration services, and dedicated support for property managers, hotels, and hospitality businesses. Our enterprise-grade systems streamline operations, enhance guest experiences, and provide real-time insights across your portfolio.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  From small boutique properties to large enterprise portfolios, we deliver reliable, scalable solutions that integrate seamlessly with your existing infrastructure and grow with your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Get Free Consultation →
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Right Image with Badge */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/hero-business.jpg"
                    alt="Professional business team collaboration"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Quality Guaranteed Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                  <div className="bg-blue-600 rounded-full p-2">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">Expert solutions tailored for you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Choose <span className="text-blue-600">MCOL LTD</span> for Your PMS Needs
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Trusted by hospitality leaders and property managers for reliable, scalable, and secure property management solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon
                return (
                  <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-200 transition-all">
                    <div className="mb-4">
                      <IconComponent className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our PMS Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Complete solutions for modern property management.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-md mb-12 h-64 md:h-80">
              <Image
                src="/services-team.jpg"
                alt="MCOL LTD team working with clients"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center px-10">
                <div>
                  <p className="text-white text-2xl md:text-3xl font-bold max-w-sm leading-snug">
                    Trusted by hospitality and property management leaders
                  </p>
                  <p className="text-blue-100 mt-2 text-base max-w-xs">
                    Reliable. Scalable. Enterprise-grade.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Ready to Transform Your Property Management?
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto">
              Get in touch today for a free demo and discover how MCOL LTD can streamline your operations and enhance guest experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Schedule a Call
              </Link>
            </div>
            <div className="text-center space-y-2 text-blue-100">
              <p className="text-lg">
                <a href="tel:+447424488818" className="hover:text-white transition-colors">
                  +44(0)7424488818
                </a>
              </p>
              <p className="text-lg">
                <a href="mailto:info@mcol.online" className="hover:text-white transition-colors">
                  info@mcol.online
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
