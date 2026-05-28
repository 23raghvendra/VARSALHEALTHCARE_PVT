import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import VisionSection from "@/components/sections/about/VisionSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import { BreadcrumbSchema } from "@/components/common/JsonLd";

export const metadata = {
  title: 'About Us',
  description: 'Learn about Varsal Healthcare\'s mission, vision, and values. We are committed to innovation in healthcare, quality assurance, and patient-centered care.',
  keywords: ['about Varsal Healthcare', 'healthcare company', 'pharmaceutical mission', 'healthcare values', 'quality healthcare'],
  openGraph: {
    title: 'About Varsal Healthcare',
    description: 'Discover our mission to enhance quality of life through innovative medical solutions and patient-centered care.',
    url: '/about',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://varsalhealthcare.com' },
    { name: 'About Us', url: 'https://varsalhealthcare.com/about' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <div className="flex-grow">
        <VisionSection />
        <ValuesSection />
      </div>
      <Footer />
    </div>
  );
}

