const ServicesPage = () => {
  return (
    <div className="page-content">
      <section className="services-section">
        <div className="services-header">
          <h1>What We Do</h1>
          <p>Clear solutions for specific problems. No ambiguity.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>AI Automations</h3>
            <p className="service-subtitle">n8n / Make / custom pipelines</p>
            
            <div className="service-details">
              <div className="problem">
                <h4>Problem it solves</h4>
                <p>Repetitive manual tasks that eat up your team's time and create errors.</p>
              </div>
              
              <div className="audience">
                <h4>Who it's for</h4>
                <p>Small teams drowning in copy-paste work, data entry, and manual reporting.</p>
              </div>
              
              <div className="exclusions">
                <h4>What isn't included</h4>
                <p>Complex enterprise integrations, ML model training, or systems requiring dedicated DevOps teams.</p>
              </div>
            </div>
          </div>
          
          <div className="service-card">
            <h3>Custom AI Interfaces</h3>
            <p className="service-subtitle">Simple UIs for non-technical users</p>
            
            <div className="service-details">
              <div className="problem">
                <h4>Problem it solves</h4>
                <p>Powerful AI tools that your team can't use because they're too technical or complex.</p>
              </div>
              
              <div className="audience">
                <h4>Who it's for</h4>
                <p>Businesses with AI capabilities that need their non-technical staff to actually use them.</p>
              </div>
              
              <div className="exclusions">
                <h4>What isn't included</h4>
                <p>Building the underlying AI models, enterprise-grade security systems, or mobile apps.</p>
              </div>
            </div>
          </div>
          
          <div className="service-card">
            <h3>Internal Tools & Dashboards</h3>
            <p className="service-subtitle">Build what you actually need</p>
            
            <div className="service-details">
              <div className="problem">
                <h4>Problem it solves</h4>
                <p>Off-the-shelf tools that don't quite fit your workflow, forcing workarounds and inefficiency.</p>
              </div>
              
              <div className="audience">
                <h4>Who it's for</h4>
                <p>Companies with unique processes that waste hours daily working around generic software limitations.</p>
              </div>
              
              <div className="exclusions">
                <h4>What isn't included</h4>
                <p>Full-scale ERP systems, customer-facing products, or anything requiring extensive user testing.</p>
              </div>
            </div>
          </div>
          
          <div className="service-card">
            <h3>Consulting & Prototyping</h3>
            <p className="service-subtitle">We test before you commit</p>
            
            <div className="service-details">
              <div className="problem">
                <h4>Problem it solves</h4>
                <p>Uncertainty about whether a technical solution will actually work before investing thousands.</p>
              </div>
              
              <div className="audience">
                <h4>Who it's for</h4>
                <p>Decision makers who need proof of concept before budgeting larger projects.</p>
              </div>
              
              <div className="exclusions">
                <h4>What isn't included</h4>
                <p>Full project management, team training, or long-term strategic planning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage