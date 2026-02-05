import type { Metadata } from "next";
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact | BASALT SYSTEMS"
}

const ContactPage = () => {
  return (
    <div className="page-content">
      <section className="contact-section">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Let us know what problem you're trying to solve.</p>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactPage