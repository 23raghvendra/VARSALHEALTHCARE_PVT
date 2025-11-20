import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import FoundersSection from "@/components/sections/investors/FoundersSection";

export default function Investors() {
  return (
    <div className="flex flex-col min-h-screen">
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

