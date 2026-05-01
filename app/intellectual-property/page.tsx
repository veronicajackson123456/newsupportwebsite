import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Intellectual Property Policy | MCOL LTD',
  description: 'Review MCOL LTD\'s Intellectual Property Policy covering ownership of software, content, trademarks, and licensing arrangements.',
}

export default function IntellectualPropertyPage() {
  return (
    <LegalLayout
      title="Intellectual Property Policy"
      lastUpdated="1 May 2026"
      description="This Intellectual Property (IP) Policy outlines the ownership and rights to intellectual property created by, licensed to, or used by MCOL LTD in connection with our services. This policy covers software, content, trademarks, patents, and other intellectual property rights."
      sections={[
        {
          title: 'MCOL LTD Intellectual Property',
          content: (
            <>
              <p>
                All intellectual property developed by MCOL LTD prior to or independent of customer engagement, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Software platforms, tools, and applications</li>
                <li>Website content and design</li>
                <li>Documentation and knowledge base materials</li>
                <li>Standard templates, processes, and methodologies</li>
                <li>Pre-existing intellectual property and trade secrets</li>
              </ul>
              <p className="mt-3">
                These remain the exclusive property of MCOL LTD. Customers receive a limited license to use this IP solely to receive the contracted services. Any use beyond the scope of the service agreement requires written authorization and may be subject to additional licensing fees.
              </p>
            </>
          ),
        },
        {
          title: 'Customer Content Ownership',
          content: (
            <>
              <p>
                Customers retain all intellectual property rights to content they provide to MCOL LTD, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Documents, files, and data uploads</li>
                <li>Custom specifications and requirements</li>
                <li>Brand materials and creative assets</li>
                <li>Business information and proprietary data</li>
              </ul>
              <p className="mt-3">
                By providing content to MCOL LTD, customers grant us a limited license to use that content for the purposes of providing services. This license terminates upon service contract termination.
              </p>
            </>
          ),
        },
        {
          title: 'Custom Work and Deliverables',
          content: (
            <>
              <p>
                For custom development, integration, or consulting services, ownership of deliverables will be specified in the applicable Statement of Work (SOW). Generally:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">Custom Code:</strong> Ownership transfers to customer upon final payment, except for pre-existing MCOL LTD IP components embedded within the code</li>
                <li><strong className="text-foreground">Documentation:</strong> Customers own technical documentation created specifically for their project</li>
                <li><strong className="text-foreground">General Methodologies:</strong> MCOL LTD retains rights to general processes, methodologies, and lessons learned</li>
              </ul>
              <p className="mt-3">
                Specific terms for custom work are determined in the SOW. If not specified in the SOW, ownership of custom deliverables shall be jointly owned by MCOL LTD and the customer.
              </p>
            </>
          ),
        },
        {
          title: 'Third-Party Intellectual Property',
          content: (
            <>
              <p>
                MCOL LTD may use third-party software, components, and services in providing our services. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Open-source software licensed under applicable open-source licenses</li>
                <li>Commercial third-party components and libraries</li>
                <li>Licensed content and services from third-party providers</li>
              </ul>
              <p className="mt-3">
                Customers agree to comply with third-party license terms. A list of significant third-party components and their licenses is available upon request. MCOL LTD is not liable for third-party IP infringement claims unless we breach applicable license terms.
              </p>
            </>
          ),
        },
        {
          title: 'Trademarks and Branding',
          content: (
            <>
              <p>
                MCOL LTD, its logos, and service names are trademarks of MCOL LTD. Customers may use MCOL LTD trademarks only:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>To identify themselves as a customer of MCOL LTD services</li>
                <li>With prior written permission from MCOL LTD</li>
                <li>In accordance with MCOL LTD brand guidelines</li>
              </ul>
              <p className="mt-3">
                Unauthorized use of MCOL LTD trademarks is prohibited and may result in legal action. All goodwill associated with MCOL LTD trademarks remains with MCOL LTD.
              </p>
            </>
          ),
        },
        {
          title: 'Feedback and Suggestions',
          content: (
            <>
              <p>
                If customers provide unsolicited feedback, suggestions, or ideas regarding MCOL LTD services ("Feedback"), MCOL LTD may:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Use Feedback for any purpose without compensation or attribution</li>
                <li>Develop products or services based on Feedback</li>
                <li>Modify or publicly communicate Feedback</li>
              </ul>
              <p className="mt-3">
                By submitting Feedback, customers waive all intellectual property rights to that Feedback. MCOL LTD is not obligated to use, implement, or acknowledge Feedback.
              </p>
            </>
          ),
        },
        {
          title: 'IP Infringement',
          content: (
            <>
              <p>
                If anyone claims that MCOL LTD services infringe their intellectual property rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>MCOL LTD may modify, replace, or discontinue infringing services</li>
                <li>MCOL LTD may obtain rights permitting continued use</li>
                <li>If neither option is commercially reasonable, MCOL LTD may terminate the service and refund unused fees</li>
              </ul>
              <p className="mt-3">
                MCOL LTD is not liable for IP infringement claims based on: (1) customer-provided content, (2) modifications made outside MCOL LTD's control, or (3) use in combinations not recommended by MCOL LTD.
              </p>
            </>
          ),
        },
        {
          title: 'Confidentiality of Intellectual Property',
          content: (
            <>
              <p>
                Both MCOL LTD and customers agree to maintain confidentiality of each other's intellectual property and proprietary information. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Not disclosing proprietary information to third parties without permission</li>
                <li>Using proprietary information only for authorized purposes</li>
                <li>Implementing reasonable security measures to protect proprietary information</li>
                <li>Returning or destroying proprietary information upon request</li>
              </ul>
              <p className="mt-3">
                This confidentiality obligation survives termination of the service contract indefinitely.
              </p>
            </>
          ),
        },
        {
          title: 'License Restrictions',
          content: (
            <>
              <p>
                Customers may not:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Reverse engineer, decompile, or disassemble MCOL LTD software</li>
                <li>Remove or modify copyright, trademark, or license notices</li>
                <li>Sublicense, sell, rent, lease, or lend MCOL LTD software or services</li>
                <li>Use MCOL LTD services to create competing products</li>
                <li>Extract or aggregate MCOL LTD data for unauthorized purposes</li>
                <li>Use MCOL LTD IP in marketing without permission</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Attribution and Notices',
          content: (
            <p>
              Customers agree to include appropriate copyright and license notices in any distributions or public disclosures of code or materials created using MCOL LTD services. Failure to include proper attribution may result in license termination and legal action.
            </p>
          ),
        },
        {
          title: 'Policy Modifications',
          content: (
            <p>
              MCOL LTD reserves the right to modify this Intellectual Property Policy with 30 days' notice. Modifications apply to new services and renewals. Existing contracts continue under current IP terms unless otherwise agreed in writing.
            </p>
          ),
        },
      ]}
    />
  )
}
