import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import PartnerSection from "@/components/sections/contact/PartnerSection";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="text-white py-16 bg-varsal-darkblue">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        <PartnerSection />
      </div>
      <Footer />
    </div>
  );
}

