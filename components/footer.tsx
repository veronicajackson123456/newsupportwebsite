'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/mcol-logo.jpg" 
                alt="MCOL LTD Logo" 
                width={40} 
                height={40}
                className="rounded"
              />
              <h3 className="text-xl font-bold">MCOL LTD</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in growth, efficiency, and success. Delivering comprehensive business support services worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span>📎</span> Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>🏠</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>🛠️</span> Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>ℹ️</span> About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>📧</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span>📞</span> Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span className="mt-1">📱</span>
                <span>
                  <span className="font-semibold text-white">Phone:</span>
                  <br />
                  <a href="tel:+447424488818" className="hover:text-white transition-colors">
                    +44(0)7424488818
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1">✉️</span>
                <span>
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a href="mailto:info@mcol.online" className="hover:text-white transition-colors">
                    info@mcol.online
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                  Legal Hub
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-gray-400 hover:text-white transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/service-level-agreement" className="text-gray-400 hover:text-white transition-colors">
                  Service Level Agreement
                </Link>
              </li>
              <li>
                <Link href="/dpa" className="text-gray-400 hover:text-white transition-colors">
                  Data Processing Agreement
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="text-gray-400 hover:text-white transition-colors">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="flex items-start gap-2">
                <span className="text-lg mt-0.5">📍</span>
                <span>72 High Street, Easterton, Devizes, Wiltshire, SN10 4PG</span>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span className="text-lg">🏷️</span> Company No. 17069019
              </p>
            </div>
            <div className="md:text-right">
              <p>&copy; 2025 MCOL LTD. All rights reserved.</p>
              <p className="mt-2 text-xs">✨ Comprehensive Business Support Services</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
