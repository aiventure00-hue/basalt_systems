import Image from 'next/image'
import Hero from '@/components/Hero'
 
export default function Page() {
  return (
    <div className="page-content">
      <Hero />
      <section className="home-section">
        <div className="value-prop">
          <h1>We design AI automations that quietly remove operational pain.</h1>
        </div>
        
        <div className="target-audience">
          <h2>Who it's for</h2>
          <div className="audience-grid">
            <div className="audience-item">Founders</div>
            <div className="audience-item">Ops teams</div>
            <div className="audience-item">Marketing</div>
            <div className="audience-item">Content teams</div>
            <div className="audience-item">Internal tools</div>
          </div>
        </div>
        
        <div className="what-we-do">
          <h2>What we actually do</h2>
          <p>
            We build simple automations that handle repetitive tasks so your team can focus on work that matters. 
            No complex enterprise software, no long implementations — just practical tools that save time immediately.
          </p>
        </div>
        
        <div className="how-it-works">
          <h2>How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discover</h3>
              <p>We find the repetitive tasks eating up your team's time</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Build</h3>
              <p>We create simple automations that solve the problem</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Hand-off</h3>
              <p>We train your team and ensure everything runs smoothly</p>
            </div>
          </div>
        </div>
        
        <div className="examples">
          <h2>Concrete examples</h2>
          <div className="examples-grid">
            <div className="example-card">
              <h3>Automated report generation</h3>
              <p className="result">→ saved 8 hours/week for marketing team</p>
            </div>
            <div className="example-card">
              <h3>Customer data sync</h3>
              <p className="result">→ eliminated 15 hours/month of manual entry</p>
            </div>
            <div className="example-card">
              <h3>Content scheduling workflow</h3>
              <p className="result">→ reduced publishing time by 60%</p>
            </div>
          </div>
        </div>
        
        <div className="primary-cta">
          <h2>Ready to stop wasting time on repetitive tasks?</h2>
          <div className="cta-buttons">
            <a href="/contact" className="cta-primary">👉 Describe your problem</a>
            <a href="/services" className="cta-secondary">View our services</a>
          </div>
        </div>
      </section>
    </div>
  )
}