import type { Metadata } from "next"
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import TripwireGrid from '@/components/TripwireGrid'
import ProcessBlock from '@/components/ProcessBlock'
import CTASection from '@/components/CTASection'
 
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description: "Architecting Autonomy - Deploy scalable intelligence with industrial-grade AI agents"
  }
}

export default function Page() {
  return (
    <div className="page-content">
      <Hero />
      <Marquee />
      <TripwireGrid />
      <ProcessBlock />
      <CTASection />
    </div>
  )
}