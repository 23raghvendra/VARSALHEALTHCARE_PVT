import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProductsList from "@/components/sections/products/ProductsList";
import OperationsSection from "@/components/sections/products/OperationsSection";
import QualitySection from "@/components/sections/products/QualitySection";
import bg_image from '@/Assets/Probanner/PHOTO-2025-05-04-14-41-59.jpg';

export const metadata = {
  title: 'Products',
  description: 'Explore Varsal Healthcare\'s innovative pharmaceutical products including gynecology, orthopedic, and surgical solutions. Quality-assured medicines for better health outcomes.',
  keywords: ['pharmaceutical products', 'gynecology medicines', 'orthopedic products', 'surgical products', 'healthcare solutions', 'Varsal medicines'],
  openGraph: {
    title: 'Our Products - Varsal Healthcare',
    description: 'Discover innovative healthcare products in gynecology, orthopedic, and surgical categories from Varsal Healthcare.',
    url: '/products',
    type: 'website',
  },
  alternates: {
    canonical: '/products',
  },
}

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Our Products" 
          subtitle="Discover Varsal Healthcare's innovative solutions for modern healthcare challenges"
          bgImage={bg_image}
        />
        <ProductsList />
        <OperationsSection />
        {/* <QualitySection /> */}
      </div>
      <Footer />
    </div>
  );
}

