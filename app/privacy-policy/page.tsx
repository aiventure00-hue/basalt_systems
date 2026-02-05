import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | BASALT SYSTEMS"
}

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you contact us through our contact form or use our services. This may include your name, email address, and information about your business needs. All data collection follows minimal collection principles and is limited to what is necessary for service delivery."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to respond to your inquiries, provide our services, and improve our offerings. We do not sell your personal information to third parties. Data processing is limited to specific, explicit purposes and we maintain strict data processing agreements with any service providers."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted using AES-256 standards both in transit and at rest. Access to personal data is restricted to authorized personnel only."
    },
    {
      title: "Data Retention",
      content: "Personal information is retained only as long as necessary for the purposes for which it was collected, unless a longer retention period is required or permitted by law. Automated deletion protocols ensure data is removed according to our retention schedules."
    },
    {
      title: "Your Rights",
      content: "Under GDPR and applicable data protection laws, you have the right to access, correct, update, or request deletion of your personal information. You may also object to processing or request data portability. All requests are processed within 30 days."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us through our secure contact form. All data protection inquiries are handled by our designated Data Protection Officer."
    }
  ];

  return (
    <LegalPage
      title="Privacy Protocol"
      subtitle="System-wide data protection and privacy governance framework for all BASALT SYSTEMS operations and client interactions."
      sections={sections}
      lastUpdated={new Date().toLocaleDateString()}
    />
  )
}

export default PrivacyPolicyPage