'use client'

import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 (0)7424 488818',
    link: 'tel:+447424488818',
    description: 'Mon–Fri, 9am–6pm (urgent support 24/7)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mcol.online',
    link: 'mailto:info@mcol.online',
    description: 'We respond within 24 hours on business days',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG',
    description: 'Registered office — UK-based team',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9:00 AM – 6:00 PM',
    description: 'Critical support available 24/7 for contracted clients',
  },
]

const services = [
  'PMS Software Solutions',
  'System Integration & Setup',
  'Technical Support & Maintenance',
  'Staff Training & Onboarding',
  'Data Migration & Integration',
  'Compliance & Security',
  'Cloud Deployment & Backup',
  'Consulting & Optimisation',
]

const benefits = [
  { title: 'Fast Response', description: 'We respond to all new enquiries within 24 business hours, and urgent issues are handled immediately for contracted clients.' },
  { title: 'Free Consultation', description: 'Our initial discovery call is completely free with no obligation — we want to understand your needs before making any recommendations.' },
  { title: 'Tailored Solutions', description: 'Every proposal we produce is customised to your specific property type, size, existing technology stack, and operational requirements.' },
  { title: 'Proven Track Record', description: 'Trusted by over 200 properties across the UK, with a track record of on-time, on-budget deliveries and long-term client retention.' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    propertyType: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSubmitMessage('Thank you for your message. We will be in touch within 24 business hours.')
      setFormData({ fullName: '', email: '', phone: '', companyName: '', propertyType: '', service: '', message: '' })
      setTimeout(() => setSubmitMessage(''), 8000)
    } catch {
      setSubmitMessage('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-muted border border-border rounded text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'

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
              <span className="text-foreground">Contact</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-none tracking-tight mb-6 text-balance">
              LET&apos;S TALK ABOUT{' '}
              <span className="text-primary">YOUR PMS NEEDS</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Whether you&apos;re evaluating your first Property Management System, looking to migrate from a legacy platform, or need better support for your existing setup — our team is ready to help.
            </p>
          </div>
        </section>

        {/* ── CONTACT INFO CARDS ───────────────────────────────────── */}
        <section className="bg-surface-mid py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.label} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="text-foreground text-sm font-medium hover:text-primary transition-colors block mb-1">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm font-medium mb-1">{info.value}</p>
                    )}
                    <p className="text-muted-foreground text-xs">{info.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FORM + BENEFITS ──────────────────────────────────────── */}
        <section className="bg-surface-darker py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Send a Message</p>
                <h2 className="text-3xl font-extrabold text-foreground mb-8 text-balance">
                  WE INNOVATE TECHNOLOGY{' '}
                  <span className="text-primary">THAT POWERS YOUR FUTURE</span>
                </h2>

                {submitMessage && (
                  <div className="bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded text-sm mb-6">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+44 (0)XXXX XXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your property or company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select property type</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Serviced Apartments">Serviced Apartments</option>
                        <option value="Holiday Park">Holiday Park</option>
                        <option value="Hostel">Hostel</option>
                        <option value="B&B / Guesthouse">B&B / Guesthouse</option>
                        <option value="Property Management Group">Property Management Group</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your property, current system, and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 uppercase tracking-wide"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form you agree to our{' '}
                    <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{' '}
                    and{' '}
                    <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>.
                  </p>
                </form>
              </div>

              {/* Sidebar benefits */}
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Work With Us</p>
                <h2 className="text-2xl font-extrabold text-foreground mb-8 text-balance">
                  WHAT TO EXPECT <span className="text-primary">FROM MCOL LTD</span>
                </h2>
                <div className="space-y-6 mb-10">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-foreground text-sm mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick contact box */}
                <div className="bg-primary rounded-lg p-6">
                  <h3 className="font-bold text-primary-foreground mb-2">Need Immediate Help?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-5 leading-relaxed">
                    For urgent technical support or same-day enquiries, call our team directly.
                  </p>
                  <a
                    href="tel:+447424488818"
                    className="flex items-center gap-2 text-primary-foreground font-bold text-sm hover:gap-4 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +44 (0)7424 488818
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </a>
                  <div className="border-t border-primary-foreground/20 my-4" />
                  <a
                    href="mailto:info@mcol.online"
                    className="flex items-center gap-2 text-primary-foreground font-bold text-sm hover:gap-4 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    info@mcol.online
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
