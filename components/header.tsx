'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Legal',
    href: '/legal',
    children: [
      { label: 'Legal Hub', href: '/legal' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Acceptable Use Policy', href: '/acceptable-use' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'SLA', href: '/service-level-agreement' },
      { label: 'DPA', href: '/dpa' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="font-medium tracking-wide">Enterprise PMS Software Solutions &mdash; Company No. 17069019</span>
          <a
            href="tel:+447424488818"
            className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3 h-3" />
            +44 (0)7424 488818
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-darker/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-border'
            : 'bg-surface-darker border-b border-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative">
                <Image
                  src="/mcol-logo.jpg"
                  alt="MCOL LTD Logo"
                  width={44}
                  height={44}
                  className="rounded-sm object-cover"
                />
              </div>
              <div>
                <div className="text-base font-bold text-foreground tracking-wider leading-none">
                  MCOL <span className="text-primary">LTD</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 tracking-wide">PMS Solutions</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded transition-colors ${
                        pathname.startsWith('/legal') || pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onMouseEnter={() => setLegalOpen(true)}
                      onMouseLeave={() => setLegalOpen(false)}
                      aria-expanded={legalOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-xl shadow-black/40 overflow-hidden transition-all duration-200 ${
                        legalOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      onMouseEnter={() => setLegalOpen(true)}
                      onMouseLeave={() => setLegalOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-b border-border last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity tracking-wide"
              >
                Get a Demo
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-foreground p-2 rounded transition-colors hover:bg-muted"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded hover:bg-muted transition-colors"
                      onClick={() => setLegalOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${legalOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {legalOpen && (
                      <div className="pl-4 mt-1 flex flex-col gap-1 border-l border-border ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded hover:bg-muted transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                      pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-3 pt-3 border-t border-border">
                <Link
                  href="/contact"
                  className="block bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold rounded text-center hover:opacity-90 transition-opacity"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
