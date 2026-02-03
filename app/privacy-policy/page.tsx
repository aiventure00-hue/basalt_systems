const PrivacyPolicyPage = () => {
  return (
    <div className="page-content">
      <section className="legal-section">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="legal-section-content">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you contact us through our contact form 
              or use our services. This may include your name, email address, and information about your business needs.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide our services, 
              and improve our offerings. We do not sell your personal information to third parties.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage