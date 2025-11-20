export default function OperationsSection() {
  return (
    <section id="operations" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Our Operations</h2>
          <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-6">
            Varsal Healthcare operates state-of-the-art facilities across multiple countries, bringing together talented professionals from diverse backgrounds to create innovative healthcare solutions. Our operations span research and development, manufacturing, quality control, marketing, and distribution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 my-8 sm:my-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Research & Development</h3>
              <p className="text-gray-700">
                Our R&D centers house multidisciplinary teams working on next-generation healthcare technologies. We invest heavily in innovation to stay at the cutting edge of medical advancements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Manufacturing</h3>
              <p className="text-gray-700">
                Our manufacturing facilities adhere to the highest industry standards, ensuring that every product is made with precision, reliability, and safety in mind.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                We maintain rigorous quality control processes throughout our operations, meeting and exceeding international regulatory requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Global Distribution</h3>
              <p className="text-gray-700">
                Our efficient distribution network ensures that our healthcare solutions reach medical facilities and patients worldwide in a timely manner.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700">
            By integrating these operational aspects, we maintain a streamlined process from concept to delivery, ensuring that our healthcare solutions make a meaningful impact on healthcare providers and patients alike.
          </p>
        </div>
      </div>
    </section>
  );
}

