import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Accessibility Statement | MCOL LTD',
  description: 'Review MCOL LTD\'s commitment to digital accessibility and our efforts to make our website and services accessible to all users.',
}

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      lastUpdated="1 May 2026"
      description="MCOL LTD is committed to ensuring digital accessibility for all users, including those with disabilities. This Accessibility Statement explains our efforts to comply with accessibility standards and describes accommodations available to users with disabilities."
      sections={[
        {
          title: 'Commitment to Accessibility',
          content: (
            <>
              <p>
                MCOL LTD is dedicated to providing an accessible and inclusive digital experience. We believe technology should be available and usable by everyone, regardless of ability. We continually work to improve accessibility across our website and services.
              </p>
              <p className="mt-3">
                Our goal is to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard for all digital properties and services.
              </p>
            </>
          ),
        },
        {
          title: 'Standards and Regulations',
          content: (
            <>
              <p>
                We comply with applicable accessibility regulations and standards including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines established by the World Wide Web Consortium (W3C)</li>
                <li><strong className="text-foreground">Section 508:</strong> Rehabilitation Act requirements for US federal agencies and their contractors</li>
                <li><strong className="text-foreground">EN 301 549:</strong> European accessibility standard for ICT products and services</li>
                <li><strong className="text-foreground">Equality Act 2010:</strong> UK legislation requiring reasonable accommodations for disabled users</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Accessibility Features',
          content: (
            <>
              <p>
                Our website and services include accessibility features such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">Keyboard Navigation:</strong> Full functionality accessible via keyboard without requiring a mouse</li>
                <li><strong className="text-foreground">Screen Reader Support:</strong> Compatible with major screen readers including NVDA, JAWS, and VoiceOver</li>
                <li><strong className="text-foreground">Text Alternatives:</strong> All images, videos, and multimedia content include descriptive alt text and captions</li>
                <li><strong className="text-foreground">Color Contrast:</strong> Text and visual elements meet WCAG AA contrast ratio requirements</li>
                <li><strong className="text-foreground">Resizable Text:</strong> Users can increase font size up to 200% without loss of functionality</li>
                <li><strong className="text-foreground">Focus Indicators:</strong> Clear visual indicators show keyboard focus on interactive elements</li>
                <li><strong className="text-foreground">Semantic Structure:</strong> Pages use proper HTML markup for document structure and navigation</li>
                <li><strong className="text-foreground">Form Accessibility:</strong> Forms include clear labels, error messages, and instructions</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Known Accessibility Issues',
          content: (
            <>
              <p>
                We are aware of the following accessibility limitations in our website and services. We are actively working to resolve these issues:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Some PDF documents may not be fully accessible; please contact us for alternative formats</li>
                <li>Third-party embeds (maps, videos) may have limited accessibility features</li>
                <li>Some interactive components may require specific assistive technology configurations</li>
              </ul>
              <p className="mt-3">
                We welcome reports of additional accessibility issues and appreciate your patience as we work to improve.
              </p>
            </>
          ),
        },
        {
          title: 'Browser and Assistive Technology Support',
          content: (
            <>
              <p>
                Our website is tested and compatible with:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">Web Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)</li>
                <li><strong className="text-foreground">Screen Readers:</strong> NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)</li>
                <li><strong className="text-foreground">Mobile:</strong> iOS VoiceOver, Android TalkBack</li>
                <li><strong className="text-foreground">Zoom Tools:</strong> Browser zoom, magnification software (up to 200%)</li>
              </ul>
              <p className="mt-3">
                If you experience compatibility issues with your specific configuration, please contact our accessibility team for assistance.
              </p>
            </>
          ),
        },
        {
          title: 'Accessibility for Services',
          content: (
            <>
              <p>
                MCOL LTD is committed to providing accessible services including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Alternative communication methods for support requests (phone, video relay)</li>
                <li>Accommodation for diverse working styles and communication needs</li>
                <li>Accessible documentation in multiple formats (PDF, Word, audio, Braille upon request)</li>
                <li>Reasonable accommodations during consultations and meetings</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Reporting Accessibility Issues',
          content: (
            <>
              <p>
                We welcome feedback on accessibility issues. Please report any problems:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-3">Accessibility Contact:</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Email:</span>
                    <br />
                    <a href="mailto:accessibility@mcol.online" className="text-primary hover:underline">accessibility@mcol.online</a>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Phone:</span>
                    <br />
                    <a href="tel:+447424488818" className="text-primary hover:underline">+44(0)7424 488818</a>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Via Contact Form:</span>
                    <br />
                    <a href="/contact" className="text-primary hover:underline">Visit our contact page</a>
                  </p>
                </div>
              </div>
              <p className="mt-4">
                When reporting accessibility issues, please include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Description of the accessibility barrier</li>
                <li>Page URL or specific feature affected</li>
                <li>Your browser and assistive technology (if used)</li>
                <li>Steps to reproduce the issue</li>
                <li>Preferred resolution or accommodation</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Response to Accessibility Concerns',
          content: (
            <p>
              We will respond to accessibility reports within 3 business days with an initial assessment. Complex issues may require further investigation. We will work with you to identify solutions and provide reasonable accommodations. Our goal is to resolve accessibility concerns promptly and thoroughly.
            </p>
          ),
        },
        {
          title: 'Continuous Improvement',
          content: (
            <>
              <p>
                MCOL LTD regularly:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Conducts accessibility audits and testing with users and assistive technologies</li>
                <li>Updates services to meet evolving accessibility standards</li>
                <li>Trains staff on accessibility principles and implementation</li>
                <li>Reviews and implements feedback from accessibility reports</li>
                <li>Maintains an accessibility roadmap with planned improvements</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Third-Party Content',
          content: (
            <p>
              While MCOL LTD strives to ensure accessibility of all content on our website, we cannot guarantee accessibility of third-party content, embedded services, or external links. We encourage all third parties to adhere to WCAG 2.1 Level AA standards. Please report inaccessible third-party content to our accessibility team.
            </p>
          ),
        },
        {
          title: 'Accessibility Policy Updates',
          content: (
            <p>
              This Accessibility Statement may be updated periodically to reflect improvements and changes to our services. We will notify users of significant updates. For the latest version and detailed accessibility information, please visit this page regularly or contact our accessibility team.
            </p>
          ),
        },
      ]}
    />
  )
}
