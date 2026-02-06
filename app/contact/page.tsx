import type { Metadata } from "next";
import ContentHeader from "@/components/ContentHeader";
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: "Contact | BASALT SYSTEMS"
}

const ContactPage = () => {
    return (
        <div>
            <ContentHeader 
              sectionTitle="/// COMMUNICATION_PROTOCOL"
              title="Initiate<br/>Contact"
              subtitle="Transmit your requirements through our secure channel. We analyze and respond within 48 hours."
            />
            <ContactForm />
        </div>
    )
}

export default ContactPage