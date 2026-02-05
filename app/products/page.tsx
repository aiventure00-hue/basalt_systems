import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | BASALT SYSTEMS"
}

const ProductsPage = () => {
  return (
    <div className="page-content">
      <section className="products-section">
        <div className="intro">
          <p>Small, focused tools we use internally and occasionally release.</p>
        </div>
        
        <div className="products-grid">
          <div className="product-card">
            <h3>Automation Readiness Check</h3>
            <p className="outcome">Find out where AI automation saves you time this week</p>
            <p className="audience">For founders & ops leads</p>
            <p className="price">€9 / instant delivery</p>
            <button className="cta-button">→ Run the check</button>
          </div>
          
          <div className="product-card">
            <h3>API Integration Audit</h3>
            <p className="outcome">Discover which APIs are costing you money unnecessarily</p>
            <p className="audience">For developers & CTOs</p>
            <p className="price">€19 / instant delivery</p>
            <button className="cta-button">→ Start audit</button>
          </div>
          
          <div className="product-card">
            <h3>Performance Baseline</h3>
            <p className="outcome">Get your app's performance score and optimization roadmap</p>
            <p className="audience">For product teams</p>
            <p className="price">€29 / instant delivery</p>
            <button className="cta-button">→ Get baseline</button>
          </div>
        </div>
        
        <div className="services-divider">
          <p>Need something tailored or integrated into your business?</p>
          <a href="/services" className="services-link">View our services →</a>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage