import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | BASALT SYSTEMS"
}

const AboutPage = () => {
  return (
    <div className="page-content">
      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          
          <div className="philosophy">
            <h2>Our Philosophy</h2>
            <p>
              We build painkillers, not features. Clarity trumps hype every time. 
              Our tools solve real problems that actually matter in production environments.
            </p>
            <p>
              If it doesn't save time, reduce complexity, or eliminate pain points, we don't build it.
            </p>
          </div>
          
          <div className="background">
            <h2>Who We Are</h2>
            <p>
              Senior frontend & automation engineers with real production experience. 
              We've built and scaled systems that handle millions of users, 
              and we know what actually works versus what just looks good on paper.
            </p>
          </div>
          
          <div className="role">
            <h2>Founded by Engineers</h2>
            <p>
              We're not consultants selling slideshows. We're practitioners who ship code, 
              automate processes, and solve problems that keep businesses running smoothly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage