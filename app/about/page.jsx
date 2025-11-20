import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import VisionSection from "@/components/sections/about/VisionSection";
import ValuesSection from "@/components/sections/about/ValuesSection";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <VisionSection />
        <ValuesSection />
      </div>
      <Footer />
    </div>
  );
}

