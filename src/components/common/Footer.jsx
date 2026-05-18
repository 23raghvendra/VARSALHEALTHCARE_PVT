import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/Assets/Logo/LOGO.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/about#vision", label: "Our Vision" },
      { href: "/about#values", label: "Our Values" },
      { href: "/careers", label: "Careers" },
    ],
    products: [
      { href: "/products", label: "All Products" },
      { href: "/products#gynecology", label: "Gynecology" },
      { href: "/products#orthopedic", label: "Orthopedic" },
      { href: "/products#surgical", label: "Surgical" },
    ],
    resources: [
      { href: "/investors", label: "Investor Relations" },
      { href: "/contact", label: "Contact Us" },
      { href: "/contact#partner", label: "Partner With Us" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const valuePoints = [
    "Research-driven formulations",
    "Quality-focused manufacturing",
    "Reliable healthcare partnerships",
  ];

  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_#00ADEF33,_transparent_42%),linear-gradient(135deg,_#001F60_0%,_#0033A0_45%,_#0066CC_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-12 pb-8">
        <div className="mb-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm lg:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Lets build healthier futures</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">Partner with Varsal for trusted, scalable healthcare solutions.</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-varsal-darkblue shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Talk to our team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                width={140}
                height={64}
                alt="Varsal Healthcare Logo"
                className="h-16 w-auto shadow-xl transition-transform duration-200"
                quality={75}
                loading="lazy"
              />
              <span className="text-lg font-semibold tracking-wide text-white/95">VARSAL HEALTHCARE</span>
            </Link>

            <p className="mt-5 max-w-md text-white/80 leading-relaxed">
              Enhancing quality of life through innovative pharmaceutical solutions and patient-centered care since 2020.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {valuePoints.map((point) => (
                <span key={point} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex items-center text-white/80 transition-colors hover:text-white">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <a href="mailto:info@varsalhealthcare.com" className="text-sm">
                  info@varsalhealthcare.com
                </a>
              </div>
              <div className="flex items-center text-white/80 transition-colors hover:text-white">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start text-white/80">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">Healthcare Plaza, Mumbai, India</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Response Time</p>
              <p className="mt-2 text-sm text-white/90">Business inquiries are typically addressed within 24-48 hours.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/70 md:text-left">© {currentYear} Varsal Healthcare Pvt Ltd. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/70 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 transition-colors hover:text-white">
                Terms of Use
              </Link>
              <Link href="/sitemap.xml" className="text-white/70 transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
