import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | MCOL LTD',
  description: 'Review our Data Processing Agreement outlining how MCOL LTD processes personal data in compliance with GDPR and other data protection regulations.',
}

export default function DPAPage() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      lastUpdated="1 May 2026"
      description="This Data Processing Agreement (DPA) governs how MCOL LTD processes personal data on behalf of customers in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This agreement applies to all services where MCOL LTD processes personal data as a data processor."
      sections={[
        {
          title: 'Definitions',
          content: (
            <>
              <p>
                In this DPA:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong className="text-foreground">Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
                <li><strong className="text-foreground">Data Controller:</strong> The customer or organisation that determines the purposes and means of processing personal data (typically you)</li>
                <li><strong className="text-foreground">Data Processor:</strong> MCOL LTD, which processes personal data on behalf of the controller</li>
                <li><strong className="text-foreground">Processing:</strong> Any operation performed on personal data, including collection, storage, access, and deletion</li>
                <li><strong className="text-foreground">Sub-processor:</strong> Third parties engaged by MCOL LTD to process personal data on our behalf</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Scope and Purpose',
          content: (
            <>
              <p>
                MCOL LTD processes personal data only:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>As instructed by the data controller in writing</li>
                <li>For the purposes specified in the applicable service agreement</li>
                <li>For the duration of the service contract</li>
                <li>In accordance with applicable data protection laws</li>
              </ul>
              <p className="mt-3">
                MCOL LTD shall not process personal data for any purpose other than providing the contracted services without separate written authorization from the data controller.
              </p>
            </>
          ),
        },
        {
          title: 'Data Controller Responsibilities',
          content: (
            <>
              <p>
                The data controller is responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Determining the lawful basis for processing personal data</li>
                <li>Obtaining necessary consents from data subjects</li>
                <li>Providing privacy notices to data subjects</li>
                <li>Ensuring personal data provided to MCOL LTD is accurate and lawfully obtained</li>
                <li>Complying with data subject rights requests</li>
                <li>Maintaining appropriate records of processing activities</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Data Processor Obligations',
          content: (
            <>
              <p>
                MCOL LTD commits to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Process personal data only on documented instructions from the controller</li>
                <li>Ensure confidentiality of personnel with access to personal data</li>
                <li>Implement appropriate technical and organisational security measures</li>
                <li>Restrict access to personal data to authorised personnel only</li>
                <li>Not retain, use, or disclose personal data except as instructed</li>
                <li>Cooperate with data subject rights requests (access, deletion, portability, etc.)</li>
                <li>Notify the controller without undue delay upon discovering a data breach</li>
                <li>Delete or return personal data at the end of the service contract</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Security Measures',
          content: (
            <>
              <p>
                MCOL LTD implements security measures including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Encryption of personal data in transit and at rest</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security audits and penetration testing</li>
                <li>Incident response and breach notification procedures</li>
                <li>Staff training on data protection and confidentiality</li>
                <li>Backup and disaster recovery procedures</li>
              </ul>
              <p className="mt-3">
                While MCOL LTD implements industry-standard security measures, no system is completely secure. The data controller remains responsible for assessing whether our security measures are adequate for their specific data.
              </p>
            </>
          ),
        },
        {
          title: 'Sub-processors',
          content: (
            <>
              <p>
                MCOL LTD may engage sub-processors to assist in providing services. We will:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Provide notice of sub-processors used in the applicable service agreement</li>
                <li>Ensure sub-processors are bound by equivalent data protection obligations</li>
                <li>Remain liable for sub-processor breaches</li>
                <li>Provide advance notice of any changes to sub-processors</li>
              </ul>
              <p className="mt-3">
                Data controllers may object to sub-processor changes on reasonable grounds related to data protection. Failure to object within 15 days constitutes acceptance.
              </p>
            </>
          ),
        },
        {
          title: 'International Data Transfers',
          content: (
            <>
              <p>
                If personal data is transferred outside the UK or EU, MCOL LTD will implement appropriate safeguards such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Standard Contractual Clauses (SCCs) as approved by the European Commission</li>
                <li>Binding Corporate Rules (BCRs) where applicable</li>
                <li>Adequacy decisions</li>
              </ul>
              <p className="mt-3">
                The data controller must approve the transfer mechanism before any international transfers occur.
              </p>
            </>
          ),
        },
        {
          title: 'Data Subject Rights',
          content: (
            <>
              <p>
                Data subjects have rights under GDPR and other laws including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Right of access to personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
              <p className="mt-3">
                MCOL LTD will cooperate with the data controller to fulfill data subject requests within legal timeframes. The data controller is responsible for verifying the data subject's identity and determining whether the request should be granted.
              </p>
            </>
          ),
        },
        {
          title: 'Data Breach Notification',
          content: (
            <>
              <p>
                Upon discovering a data breach, MCOL LTD will:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Notify the data controller without undue delay and no later than 72 hours</li>
                <li>Provide details of the breach and affected data</li>
                <li>Provide information on likely consequences</li>
                <li>Recommend mitigation measures</li>
                <li>Provide ongoing updates as the investigation progresses</li>
              </ul>
              <p className="mt-3">
                The data controller is responsible for notifying data protection authorities and affected individuals as required by law. MCOL LTD will provide reasonable assistance with notifications.
              </p>
            </>
          ),
        },
        {
          title: 'Audits and Compliance',
          content: (
            <p>
              MCOL LTD will permit the data controller and their auditors to audit our processing activities and verify compliance with this DPA upon reasonable notice. We maintain documentation of processing activities and security measures. Annual compliance certifications or audit reports are available upon request.
            </p>
          ),
        },
        {
          title: 'Data Deletion and Return',
          content: (
            <>
              <p>
                Upon termination of the service contract, MCOL LTD will, at the data controller's option:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Return all personal data to the data controller in a structured, commonly used format</li>
                <li>Securely delete all personal data from our systems</li>
                <li>Provide written confirmation of deletion upon request</li>
              </ul>
              <p className="mt-3">
                Data will be deleted within 30 days of contract termination unless legal obligations require us to retain it. MCOL LTD will delete backup copies within 90 days.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
