import type { Metadata } from "next";
import ContentHeader from "@/components/ContentHeader";
import TempProductsGrid from "@/components/TempProductsGrid";
import TempServicesDivider from "@/components/TempServicesDivider";

export const metadata: Metadata = {
  title: "Products | BASALT SYSTEMS"
}

const ProductsPage = () => {
  const products = [
    {
      id: "automation-readiness",
      title: "Automation Readiness Check",
      outcome: "Find out where AI automation saves you time this week",
      audience: "For founders & ops leads",
      price: "€9 / instant delivery",
      ctaText: "Run the check"
    },
    {
      id: "api-integration",
      title: "API Integration Audit",
      outcome: "Discover which APIs are costing you money unnecessarily",
      audience: "For developers & CTOs",
      price: "€19 / instant delivery",
      ctaText: "Start audit"
    },
    {
      id: "performance-baseline",
      title: "Performance Baseline",
      outcome: "Get your app's performance score and optimization roadmap",
      audience: "For product teams",
      price: "€29 / instant delivery",
      ctaText: "Get baseline"
    }
  ];

  return (
    <div>
      <ContentHeader 
        sectionTitle="/// TEMP_PRODUCTS_SECTION"
        title="Product<br/>Catalog"
        subtitle="Temporary implementation of products showcase. All components marked with TEMP prefix will be replaced with final design when available."
      />
      <TempProductsGrid products={products} />
      <TempServicesDivider />
    </div>
  )
}

export default ProductsPage