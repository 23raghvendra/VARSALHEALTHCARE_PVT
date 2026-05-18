import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Mail, PhoneCall, TrendingUp, Users, Zap } from "lucide-react";
import contactBanner from "@/Assets/Contactus/lappy.jpg";

export const metadata = {
  title: 'Contact & Careers',
  description: 'Get in touch with Varsal Healthcare for product inquiries, partnerships, and career opportunities in healthcare innovation.',
  keywords: ['contact Varsal Healthcare', 'healthcare inquiries', 'pharmaceutical company contact', 'partnership opportunities', 'careers Varsal Healthcare'],
  openGraph: {
    title: 'Contact & Careers | Varsal Healthcare',
    description: 'Reach out to Varsal Healthcare for inquiries, partnerships, support, and career opportunities.',
    url: '/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  const quickContactCards = [
    {
      icon: PhoneCall,
      title: "Call for Immediate Assistance",
      detail: "+91 93513 26329",
    },
    {
      icon: Mail,
      title: "Email for Business Queries",
      detail: "info@varsalhealthcare.com",
    },
    {
      icon: Building2,
      title: "Corporate Office",
      detail: "Sanpada, Navi Mumbai",
    },
  ];

  const careerHighlights = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Work with teams building research-driven healthcare solutions that make measurable impact."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Grow in a team-first environment where cross-functional expertise drives better outcomes."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Build your career with continuous learning and opportunities to advance in global healthcare."
    }
  ];

  const careerReasons = [
    "Industry-leading innovation culture",
    "Strong quality and patient-first mindset",
    "Opportunities to contribute at global scale"
  ];

  const careerPath = [
    "Share your profile and area of expertise",
    "Connect with our hiring and functional teams",
    "Begin your journey with structured onboarding",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader
          title="Contact & Careers"
          subtitle="Reach us for product inquiries, partnerships, and meaningful career opportunities in healthcare innovation."
          bgImage={contactBanner}
        />

        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickContactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-varsal-light">
                      <Icon className="h-5 w-5 text-varsal-darkblue" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{card.title}</h3>
                    <p className="mt-1 text-lg font-semibold text-varsal-darkblue break-words">{card.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-slate-50/60">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-flex items-center rounded-full border border-varsal-lightblue/40 bg-varsal-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-varsal-darkblue">
                  Contact Desk
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-varsal-darkblue">Talk to Our Team</h2>
                <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-lg">
                  Whether you need product support, partnership discussions, or business assistance, our team is ready to respond quickly.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section id="careers" className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-300/60 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-green-800">
                  <BriefcaseBusiness className="h-3.5 w-3.5" /> Career Opportunities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-varsal-darkblue mt-4 mb-4">Build Your Career with Purpose</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join teams that combine scientific rigor, collaboration, and patient-first thinking to create measurable healthcare impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {careerHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 rounded-lg bg-varsal-lightblue/20 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-varsal-darkblue" />
                      </div>
                      <h3 className="text-xl font-semibold text-varsal-darkblue mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-varsal-darkblue mb-4">Why Join Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {careerReasons.map((reason) => (
                      <div key={reason} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 border border-gray-200">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-5">
                    For career inquiries, use the contact form and mention "Careers" in subject.
                  </p>
                </div>

                <aside className="lg:col-span-2 rounded-2xl border border-varsal-lightblue/30 bg-gradient-to-br from-varsal-darkblue to-varsal-blue p-6 text-white">
                  <h3 className="text-xl font-bold">Hiring Journey</h3>
                  <div className="mt-4 space-y-3">
                    {careerPath.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-lg bg-white/10 p-3 border border-white/20">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-varsal-darkblue mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-sm text-white/95 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact-form"
                    className="mt-5 inline-flex items-center justify-center w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-varsal-darkblue hover:bg-slate-100 transition-colors"
                  >
                    Apply via Contact Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </aside>
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-varsal-darkblue">Prefer Direct Assistance?</h3>
                    <p className="text-gray-600 mt-1">Our team can guide you to the right department for faster resolution.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href="tel:+919351326329" className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      <PhoneCall className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a href="mailto:info@varsalhealthcare.com" className="inline-flex items-center rounded-lg bg-varsal-darkblue px-4 py-2.5 text-sm font-semibold text-white hover:bg-varsal-blue transition-colors">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
}

