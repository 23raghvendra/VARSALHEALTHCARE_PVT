export default function QualitySection() {
  return (
    <section id="quality" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Our Quality Commitment</h2>
          <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-8 text-center">
            At Varsal Healthcare, quality isn&apos;t just a department—it&apos;s a culture that permeates every aspect of our operations. We adhere to the highest standards in healthcare product development and manufacturing.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Certifications & Compliance</h3>
              <p className="text-gray-700 mb-4">
                All our products meet or exceed international regulatory requirements, including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>ISO 13485:2016 Medical Device Quality Management</li>
                <li>FDA Approval (where applicable)</li>
                <li>CE Marking for European Compliance</li>
                <li>MDSAP (Medical Device Single Audit Program)</li>
                <li>GDPR Compliance for Data Protection</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Our Quality Process</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive quality assurance process includes:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Rigorous raw material testing</li>
                <li>In-process quality checks at every production stage</li>
                <li>Final product validation and verification</li>
                <li>Post-market surveillance and continuous improvement</li>
                <li>Regular internal and external audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

