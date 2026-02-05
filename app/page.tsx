import type { Metadata } from "next"
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import TripwireGrid from '@/components/TripwireGrid'
import ProcessBlock from '@/components/ProcessBlock'
import CTASection from '@/components/CTASection'
 
export const metadata: Metadata = {
  title: "Home | BASALT SYSTEMS"
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