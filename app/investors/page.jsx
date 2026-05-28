import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import FoundersSection from "@/components/sections/investors/FoundersSection";
import { BreadcrumbSchema } from "@/components/common/JsonLd";

export const metadata = {
  title: 'Investor Relations',
  description: 'Access Varsal Healthcare investor information including financial reports, shareholder details, and company leadership. Explore investment opportunities in healthcare innovation.',
  keywords: ['investor relations', 'Varsal Healthcare investors', 'healthcare investment', 'shareholder information', 'company founders'],
  openGraph: {
    title: 'Investor Relations - Varsal Healthcare',
    description: 'Financial information, leadership team, and investment opportunities at Varsal Healthcare.',
    url: '/investors',
    type: 'website',
  },
  alternates: {
    canonical: '/investors',
  },
}

export default function Investors() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://varsalhealthcare.com' },
    { name: 'Investors', url: 'https://varsalhealthcare.com/investors' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <div className="flex-grow pt-16 bg-varsal-darkblue">
        <PageHeader 
          title="Investor Relations" 
          subtitle="Financial information, shareholder details, and annual reports"
        />
        <FoundersSection />
      </div>
      <Footer />
    </div>
  );
}

