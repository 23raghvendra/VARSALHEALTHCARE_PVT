import Link from "next/link";
import Image from "next/image";
import logo from "@/Assets/Logo/LOGO.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { href: "/about#vision", label: "Vision" },
      { href: "/about#values", label: "Values" },
    ],
    operation: [
      { href: "/products", label: "Product" },
      { href: "/products#quality", label: "Quality" },
    ],
    investors: [
      { href: "/investors#shareholders", label: "Shareholder Info" },
      { href: "/investors#financials", label: "Financials" },
      { href: "/investors#annual-report", label: "Annual Report" },
    ],
    workWithUs: [
      { href: "/careers", label: "Careers" },
    ],
    quickLinks: [
      { href: "/contact", label: "Contact Us" },
      { href: "/contact#partner", label: "Partner With Us" },
    ],
  };

  return (
    <footer className="bg-varsal-darkblue text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Varsal Healthcare</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Operation</h3>
            <ul className="space-y-2">
              {footerLinks.operation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Investors</h3>
            <ul className="space-y-2">
              {footerLinks.investors.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Work With Us</h3>
            <ul className="space-y-2">
              {footerLinks.workWithUs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src={logo}
              width={100}
              height={48}
              alt="Varsal Healthcare Logo" 
              className="h-12 mb-2 mx-auto md:mx-0 rounded-[50%] shadow-lg"
              quality={75}
              loading="lazy"
            />
            <p className="text-sm text-gray-300">Enhancing Quality of Life</p>
          </div>
          <div className="text-sm text-gray-300">
            <p>© {currentYear} Varsal Healthcare. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <Link href="/privacy-policy" className="hover:text-varsal-lightblue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-varsal-lightblue transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
