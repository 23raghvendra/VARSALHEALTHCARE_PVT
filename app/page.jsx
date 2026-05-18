import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import IntroSection from "@/components/home/IntroSection";

export const metadata = {
  title: 'Varsal Healthcare - Innovative Healthcare for a Better Tomorrow',
  description: 'Varsal Healthcare is a leading pharmaceutical company providing innovative medical solutions in gynecology, orthopedic, and surgical products. Committed to patient-centered care and quality healthcare.',
  keywords: ['Varsal Healthcare', 'pharmaceutical company', 'healthcare innovation', 'medical solutions', 'gynecology', 'orthopedic', 'surgical products'],
  openGraph: {
    title: 'Varsal Healthcare - Innovative Healthcare for a Better Tomorrow',
    description: 'Leading pharmaceutical company providing breakthrough medical solutions and patient-centered care.',
    url: '/',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <HeroSection />
        <StatsSection />
        <IntroSection />
      </div>
      <Footer />
    </div>
  );
}
