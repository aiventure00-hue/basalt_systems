const TermsOfUsePage = () => {
  return (
    <div className="page-content">
      <section className="legal-section">
        <div className="legal-content">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="legal-section-content">
            <h2>Services</h2>
            <p>
              We provide AI automation services, custom interfaces, internal tools, and consulting as described on our website. 
              All services are subject to availability and our current pricing.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Payment</h2>
            <p>
              For products, payment is required before delivery. For services, payment terms are agreed upon before work begins. 
              All prices are in EUR as specified.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Refunds</h2>
            <p>
              Digital products are non-refundable once delivered. For services, refunds are handled on a case-by-case basis 
              depending on work completed and project status.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Client Responsibilities</h2>
            <p>
              Clients are responsible for providing accurate information, timely feedback, and necessary access to systems 
              required for service delivery.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Limitation of Liability</h2>
            <p>
              Our liability is limited to the amount paid for our services. We are not responsible for indirect or consequential damages.
            </p>
          </div>
          
          <div className="legal-section-content">
            <h2>Contact</h2>
            <p>
              For questions about these terms, please contact us through our website contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfUsePage