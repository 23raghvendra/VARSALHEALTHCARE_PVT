import { Shield, Award, CheckCircle, ClipboardCheck, FileCheck, Globe } from "lucide-react";

export default function QualitySection() {
  const certifications = [
    { name: "ISO 13485:2016", detail: "Medical Device Quality Management" },
    { name: "FDA Approval", detail: "Where applicable" },
    { name: "CE Marking", detail: "European Compliance" },
    { name: "MDSAP", detail: "Medical Device Single Audit Program" },
    { name: "GDPR Compliance", detail: "Data Protection" }
  ];

  const processes = [
    { icon: CheckCircle, text: "Rigorous raw material testing" },
    { icon: ClipboardCheck, text: "In-process quality checks at every production stage" },
    { icon: FileCheck, text: "Final product validation and verification" },
    { icon: Globe, text: "Post-market surveillance and continuous improvement" },
    { icon: Shield, text: "Regular internal and external audits" }
  ];

  return (
    <section id="quality" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-varsal-darkblue mb-4">Our Quality Commitment</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-varsal-lightblue to-varsal-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Varsal Healthcare, quality isn&apos;t just a department—it&apos;s a culture that permeates every aspect of our operations. We adhere to the highest standards in healthcare product development and manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Certifications */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-varsal-darkblue">Certifications & Compliance</h3>
              </div>
              <p className="text-gray-700 mb-6">
                All our products meet or exceed international regulatory requirements:
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <CheckCircle className="h-5 w-5 text-varsal-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{cert.name}</span>
                      <p className="text-sm text-gray-600">{cert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quality Process */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                  <ClipboardCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-varsal-darkblue">Our Quality Process</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our comprehensive quality assurance process includes:
              </p>
              <div className="space-y-4">
                {processes.map((process, index) => {
                  const IconComponent = process.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-green-100">
                        <IconComponent className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{process.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-varsal-blue via-varsal-lightblue to-varsal-blue p-8 md:p-10 rounded-2xl text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Quality You Can Trust</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our commitment to quality ensures that every product bearing the Varsal Healthcare name meets the highest standards of safety, efficacy, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

