import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | BASALT SYSTEMS"
}

const TermsOfUsePage = () => {
  const sections = [
    {
      title: "Services",
      content: "We provide AI automation services, custom interfaces, internal tools, and consulting as described on our website. All services are subject to availability and our current pricing. Service specifications are detailed in project agreements and SLAs."
    },
    {
      title: "Payment Terms",
      content: "For products, payment is required before delivery. For services, payment terms are agreed upon before work begins. All prices are in EUR as specified. Payment schedules follow milestone-based deliverables with 50% upfront and 50% upon completion standard."
    },
    {
      title: "Refunds",
      content: "Digital products are non-refundable once delivered. For services, refunds are handled on a case-by-case basis depending on work completed and project status. Refund requests must be submitted within 14 days of delivery with detailed justification."
    },
    {
      title: "Client Responsibilities",
      content: "Clients are responsible for providing accurate information, timely feedback, and necessary access to systems required for service delivery. Delays in client-provided resources may affect project timelines and costs."
    },
    {
      title: "Intellectual Property",
      content: "All custom code and solutions developed for clients remain client property upon final payment. BASALT SYSTEMS retains rights to reusable components and methodologies. Third-party licenses remain subject to original terms."
    },
    {
      title: "Limitation of Liability",
      content: "Our liability is limited to the amount paid for our services. We are not responsible for indirect or consequential damages. Service level agreements specify exact liability limits and remedy procedures."
    },
    {
      title: "Termination",
      content: "Either party may terminate services with 30 days written notice. Termination fees may apply based on work completed. All deliverables and data must be transferred upon termination according to exit protocols."
    },
    {
      title: "Contact",
      content: "For questions about these terms, please contact us through our website contact form. All contractual inquiries are handled by our legal department and response times follow our standard SLA."
    }
  ];

  return (
    <LegalPage
      title="Usage Protocol"
      subtitle="System governance and operational terms governing all engagements with BASALT SYSTEMS services and products."
      sections={sections}
      lastUpdated={new Date().toLocaleDateString()}
    />
  )
}

export default TermsOfUsePage