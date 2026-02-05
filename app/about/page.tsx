import type { Metadata } from "next"
import ContentHeader from "@/components/ContentHeader"
import PersonnelSection from "@/components/PersonnelSection"
import ExperienceStats from "@/components/ExperienceStats"
import ValuesGrid from "@/components/ValuesGrid"
import Timeline from "@/components/Timeline"

export const metadata: Metadata = {
    title: "About | BASALT SYSTEMS"
}

const AboutPage = () => {
    return (
        <div>
            <ContentHeader 
                sectionTitle="/// CORE_DIRECTIVE"
                title="Built On<br/>Hard Logic."
                subtitle="Basalt Systems was forged to replace fragile workflows with industrial-grade autonomy. We don't write scripts; we architect infrastructure."
            />
            <PersonnelSection />
            <ExperienceStats />
            <ValuesGrid />
            <Timeline />
        </div>
    )
}

export default AboutPage