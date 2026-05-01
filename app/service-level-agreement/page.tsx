import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Service Level Agreement (SLA) | MCOL LTD',
  description: 'Review our Service Level Agreement outlining our commitment to uptime, support response times, and service guarantees for MCOL LTD customers.',
}

export default function SLAPage() {
  return (
    <LegalLayout
      title="Service Level Agreement"
      lastUpdated="1 May 2026"
      description="This Service Level Agreement (SLA) defines the level of service commitment that MCOL LTD provides to its customers. It outlines uptime guarantees, support response times, maintenance windows, and remedies for service failures. This SLA applies to all managed services and support contracts with MCOL LTD."
      sections={[
        {
          title: 'Service Level Definitions',
          content: (
            <>
              <p>
                MCOL LTD commits to maintaining the following service levels for our managed services:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">Service Availability:</strong> 99.5% monthly uptime for production systems (excludes scheduled maintenance)</li>
                <li><strong className="text-foreground">System Response Time:</strong> Average response time of less than 2 seconds for web-based services</li>
                <li><strong className="text-foreground">Data Backup:</strong> Daily automated backups with 30-day retention minimum</li>
                <li><strong className="text-foreground">Security Monitoring:</strong> 24/7 automated security monitoring and threat detection</li>
                <li><strong className="text-foreground">Incident Response:</strong> Initial response to critical incidents within 15 minutes, high priority within 1 hour</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Support Response Times',
          content: (
            <>
              <p>
                Our support team commits to the following response times based on severity:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted border border-border">
                      <th className="p-3 text-left font-semibold text-foreground">Severity</th>
                      <th className="p-3 text-left font-semibold text-foreground">Description</th>
                      <th className="p-3 text-left font-semibold text-foreground">Response Time</th>
                      <th className="p-3 text-left font-semibold text-foreground">Resolution Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-border">
                      <td className="p-3 text-foreground font-medium">Critical</td>
                      <td className="p-3 text-muted-foreground">Complete system outage or severe data loss</td>
                      <td className="p-3 text-foreground">15 minutes</td>
                      <td className="p-3 text-foreground">2 hours</td>
                    </tr>
                    <tr className="border border-border bg-muted/30">
                      <td className="p-3 text-foreground font-medium">High</td>
                      <td className="p-3 text-muted-foreground">Significant functionality impaired</td>
                      <td className="p-3 text-foreground">1 hour</td>
                      <td className="p-3 text-foreground">4 hours</td>
                    </tr>
                    <tr className="border border-border">
                      <td className="p-3 text-foreground font-medium">Medium</td>
                      <td className="p-3 text-muted-foreground">Partial functionality issue</td>
                      <td className="p-3 text-foreground">4 hours</td>
                      <td className="p-3 text-foreground">1 business day</td>
                    </tr>
                    <tr className="border border-border bg-muted/30">
                      <td className="p-3 text-foreground font-medium">Low</td>
                      <td className="p-3 text-muted-foreground">Minor issues or feature requests</td>
                      <td className="p-3 text-foreground">1 business day</td>
                      <td className="p-3 text-foreground">5 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          title: 'Scheduled Maintenance',
          content: (
            <>
              <p>
                MCOL LTD may perform scheduled maintenance on systems to ensure optimal performance and security. We commit to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Providing at least 7 days' notice for planned maintenance windows</li>
                <li>Scheduling maintenance during low-traffic periods, typically outside business hours</li>
                <li>Keeping maintenance windows to a maximum of 4 hours</li>
                <li>Notifying customers via email and displaying notifications on our status page</li>
                <li>Excluding scheduled maintenance from uptime calculations</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Service Credits',
          content: (
            <>
              <p>
                If MCOL LTD fails to meet the service availability commitment, customers may receive service credits as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">99.0% to 99.4% availability:</strong> 10% monthly service fee credit</li>
                <li><strong className="text-foreground">98.0% to 98.9% availability:</strong> 25% monthly service fee credit</li>
                <li><strong className="text-foreground">Below 98.0% availability:</strong> 50% monthly service fee credit</li>
              </ul>
              <p className="mt-3">
                Service credits are the exclusive remedy for failure to meet SLA commitments and are applied automatically to your account. Credits must be claimed within 30 days of the incident. Credits cannot be transferred or exchanged for cash.
              </p>
            </>
          ),
        },
        {
          title: 'Exclusions',
          content: (
            <p>
              The following events are excluded from SLA coverage: (1) customer-caused issues or misconfigurations; (2) third-party service failures; (3) force majeure events; (4) customer network or system issues; (5) attacks, viruses, or security breaches not caused by MCOL LTD; (6) denial of service attacks; and (7) issues arising from customer violation of our Acceptable Use Policy or Terms &amp; Conditions.
            </p>
          ),
        },
        {
          title: 'Monitoring and Reporting',
          content: (
            <>
              <p>
                MCOL LTD monitors service availability 24/7 using automated monitoring systems. Customers can view real-time service status at our status page. Monthly performance reports are provided to contract customers, including uptime statistics, incident summaries, and performance metrics.
              </p>
              <p className="mt-3">
                Customers may also contact our support team for detailed performance information or incident reports relevant to their services.
              </p>
            </>
          ),
        },
        {
          title: 'Escalation Procedure',
          content: (
            <>
              <p>
                For unresolved issues or SLA concerns:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Contact our support team with incident details and reference number</li>
                <li>For escalations, email support-escalation@mcol.online with "ESCALATION" in the subject line</li>
                <li>Management review is initiated within 1 business day</li>
                <li>Resolution or status update provided within 3 business days</li>
              </ul>
            </>
          ),
        },
        {
          title: 'SLA Modifications',
          content: (
            <p>
              MCOL LTD reserves the right to modify this SLA with 30 days' written notice to customers. Modifications will be effective for renewals and new contracts. Existing contracts will continue under current SLA terms unless otherwise agreed in writing.
            </p>
          ),
        },
      ]}
    />
  )
}
