import type { Metadata } from "next";
import ContentHeader from "@/components/ContentHeader";
import ModuleCatalog from "@/components/ModuleCatalog";
import BespokeSection from "@/components/BespokeSection";
import ServiceTable from "@/components/ServiceTable";
import LiveLog from "@/components/LiveLog";
import { modulesData } from "@/data/modules";

export const metadata: Metadata = {
    title: "Services | BASALT SYSTEMS"
}

const ServicesPage = () => {
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