import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      lines: [
        "Varsal Healthcare Pvt. Ltd. 901, Kamdhenu, Plot No. 12, Sector 30",
        "Sanpada, Navi Mumbai",
        "Maharashtra, India"
      ],
      iconWrap: "bg-rose-100 text-rose-700"
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [
        "Main Office: +91 93513 26329",
        "Mon - Sat: 9:00 AM - 5:00 PM",
        "Emergency: Available 24/7"
      ],
      iconWrap: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [
        "General: info@varsalhealthcare.com",
        "Support: support@varsalhealthcare.com",
        "Careers: careers@varsalhealthcare.com"
      ],
      iconWrap: "bg-sky-100 text-sky-700"
    },
  ];

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-xl">
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-blue-300/20 blur-2xl" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed break-words max-w-xl">
            We're here to help and answer any questions you might have. Reach out through your preferred channel and our team will respond promptly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <article
              key={index}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`flex-shrink-0 p-3 rounded-xl ${method.iconWrap}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {method.title}
                  </h3>
                  <div className="space-y-1.5">
                    {method.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-slate-600 text-sm leading-relaxed break-words">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Quick Response Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <h4 className="font-semibold text-amber-900 mb-1">Quick Response Guarantee</h4>
            <p className="text-amber-800 text-sm leading-relaxed break-words">
              We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

