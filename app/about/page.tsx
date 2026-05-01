'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      title: 'Reliability',
      description: '99.5% uptime commitment and enterprise-grade infrastructure.',
      icon: '✓',
    },
    {
      title: 'Security',
      description: 'GDPR compliant with enterprise-level encryption and data protection.',
      icon: '🔒',
    },
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business from small to enterprise portfolios.',
      icon: '📈',
    },
    {
      title: 'Support',
      description: '24/7 dedicated technical support with guaranteed response times.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Continuous platform improvements and latest hospitality technology.',
      icon: '💡',
    },
    {
      title: 'Partnership',
      description: 'We succeed when you succeed; your growth is our priority.',
      icon: '🎯',
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
                About MCOL LTD
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              MCOL LTD is a leading provider of enterprise Property Management System (PMS) solutions and services for hospitality and property management businesses. Our mission is to empower property managers, hotels, and accommodation providers with intelligent software and comprehensive support to streamline operations, enhance guest experiences, and drive profitability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-6">
              With extensive expertise in the hospitality and property management sectors, we deliver robust, scalable, and secure software solutions combined with dedicated technical support, training, and consulting services. From boutique properties to large enterprise portfolios, we partner with our clients to ensure their success.</p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🎯</span>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the most trusted PMS and property management technology partner globally, helping hospitality businesses operate with excellence, deliver exceptional guest experiences, and achieve sustainable growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🚀</span>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To deliver enterprise-grade PMS solutions and comprehensive support services that help property managers streamline operations, reduce costs, enhance guest satisfaction, and maximize profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose MCOL LTD
              </h2>
              <span className="text-5xl">⭐</span>
            </div>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The values that drive our commitment to your success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="text-5xl">🚀</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Property Management?
              </h2>
            </div>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's discuss how MCOL LTD can help you streamline operations and maximize your property portfolio&apos;s potential.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
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
