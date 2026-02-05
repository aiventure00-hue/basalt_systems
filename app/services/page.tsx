import type { Metadata } from "next";
import ContentHeader from "@/components/ContentHeader";
import ModuleCatalog from "@/components/ModuleCatalog";
import BespokeSection from "@/components/BespokeSection";
import ServiceTable from "@/components/ServiceTable";
import LiveLog from "@/components/LiveLog";

export const metadata: Metadata = {
    title: "Services | BASALT SYSTEMS"
}

const ServicesPage = () => {
    const modulesData = [
        {
            id: "MODEL_B-1",
            price: "$199/MO",
            title: "Lead<br>Autopilot",
            description: "Autonomous ingestion node. Captures leads from forms, enriches data via Clearbit, and qualifies intent before routing to CRM.",
            imageUrl: "https://storage.googleapis.com/banani-generated-images/generated-images/363ef51b-6f9b-408e-b188-add68f1c0db2.jpg",
            imageAlt: "Schematic blueprint of a sales funnel mechanism"
        },
        {
            id: "MODEL_C-4",
            price: "$249/MO",
            title: "Content<br>Reactor",
            description: "Multi-channel distribution logic. Takes one input seed and propagates formatted assets to LinkedIn, Twitter, and Newsletter APIs.",
            imageUrl: "https://storage.googleapis.com/banani-generated-images/generated-images/89121008-4f20-4e2d-92d1-8b5c084c014a.jpg",
            imageAlt: "Schematic blueprint of network distribution nodes"
        },
        {
            id: "MODEL_S-9",
            price: "$149/MO",
            title: "Sentiment<br>Sentry",
            description: "Passive listening post. Monitors social frequencies for brand mentions and triggers alert protocols on negative sentiment spikes.",
            imageUrl: "https://storage.googleapis.com/banani-generated-images/generated-images/eec840b1-b967-42f1-94c3-e8728831cb62.jpg",
            imageAlt: "Schematic blueprint of radar scanning waves"
        }
    ]

    return (
        <div>
            <ContentHeader 
                sectionTitle="/// SYSTEM_MANIFEST"
                title="Available<br/>Architectures"
            />
            <ModuleCatalog 
                category="CATEGORY: TRIPWIRE_AUTOMATION"
                unitsCount="3 UNITS READY"
                modules={modulesData}
            />
            <BespokeSection />
            <ServiceTable />
            <LiveLog />
        </div>
    )
}

export default ServicesPage