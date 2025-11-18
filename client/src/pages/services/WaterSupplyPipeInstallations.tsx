import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function WaterSupplyPipeInstallations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/water-supply-pipe-installations-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-[#1B3A6B]/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg mb-2">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold">Water Supply Pipe Installations Scotland</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Water Supply Pipe Installation Specialists in Scotland
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            ScotWater is Scotland's trusted expert in water supply pipe installation services. With years of experience and a commitment to excellence, we deliver reliable, efficient, and high-quality water systems to homes and businesses across the country. Whether you need to upgrade outdated infrastructure or install a brand-new water supply system, we are here to provide a seamless and stress-free solution.
          </p>

          {/* Our Services Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">Our Services</h3>
          
          <div className="space-y-8 mb-12">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#5B2C6F]">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                1. Thorough Planning and Customised Design
              </h4>
              <p className="text-gray-700">
                We begin with a detailed site assessment, creating a tailored design plan to suit your property's specific requirements. This approach ensures an efficient and hassle-free water supply pipe installation process.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#5B2C6F]">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                2. Modern Installation and Replacement Techniques
              </h4>
              <p className="text-gray-700">
                Utilising advanced trenchless methods like impact moling, we minimise disruption to your property. Our techniques reduce the need for extensive excavation, ensuring the water supply pipe installation work is completed swiftly and with minimal impact on your surroundings.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#5B2C6F]">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                3. Compliance and Certification
              </h4>
              <p className="text-gray-700">
                As a trusted water industry contractor, all our water supply pipe installations adhere to the highest UK Water Regulations. Upon project completion, we provide certification to confirm the safety and compliance of your upgraded system.
              </p>
            </div>
          </div>

          {/* Why Choose ScotWater Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">Why Choose ScotWater?</h3>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Bespoke Solutions</h4>
                <p className="text-gray-700">
                  Every project is unique. Whether installing a new water system or replacing outdated infrastructure, we tailor our services to meet your property's specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Commitment to Excellence</h4>
                <p className="text-gray-700">
                  We deliver top-tier service with transparent processes, keeping you informed at every stage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Experienced Professionals</h4>
                <p className="text-gray-700">
                  Our team boasts extensive experience in water supply pipe and mains installation, handling projects of all sizes with precision and care.
                </p>
              </div>
            </div>
          </div>

          {/* Choose ScotWater Section */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Choose ScotWater for Water Supply Pipe Installations in Scotland
            </h3>
            <p className="text-lg mb-4">
              At ScotWater, we specialise in the expert installation and replacement of water supply pipes and mains. From initial planning to final certification, our services ensure a reliable and long-lasting water system for your home or business.
            </p>
            <p className="text-lg">
              ScotWater is proud to be Scotland's leading provider of water supply pipe installation services. Our commitment to innovation, quality, and customer care sets us apart from the competition. We understand the importance of having a reliable water supply system and work tirelessly to ensure your system meets the highest standards of performance and safety.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#5B2C6F] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="text-lg mb-6">
              ScotWater can carry out water supply pipe installations across Scotland and provide you with a free quotation for the installation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:08002062778"
                className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
              >
                0800 206 2778
                <Phone className="w-6 h-6 scale-x-[-1]" />
              </a>
              <a 
                href="mailto:hello@scotwater.co.uk"
                className="bg-white hover:bg-gray-100 text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl transition-colors"
              >
                hello@scotwater.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Want to Talk Section */}
      <div className="bg-[#5B2C6F] py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Want to talk to someone?</h2>
              <p className="text-xl">Call us 24/7, 365 days a year</p>
            </div>
            <a 
              href="tel:08002062778"
              className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
            >
              0800 206 2778
              <Phone className="w-6 h-6 scale-x-[-1]" />
            </a>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <WhatToExpect />

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
            Here's what our happy customers have to say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B2C6F]">
              <p className="text-gray-700 mb-4 italic">
                "I contacted this company to address a leak at our office, and they provided outstanding service from start to finish. The engineers were approachable and did a fantastic job, ensuring everything was tidy afterwards. I couldn't have asked for a better outcome."
              </p>
              <p className="font-bold text-[#1B3A6B]">Ben Wilson</p>
              <p className="text-gray-600 text-sm">Edinburgh</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B2C6F]">
              <p className="text-gray-700 mb-4 italic">
                "Highly recommend the ScotWater team. They were efficient, tidy, and extremely courteous throughout the process."
              </p>
              <p className="font-bold text-[#1B3A6B]">Jason Graham</p>
              <p className="text-gray-600 text-sm">Glasgow</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B2C6F]">
              <p className="text-gray-700 mb-4 italic">
                "From my initial phone call with David, I've been thoroughly impressed with this company. Paul, Thomas and Mark worked diligently all day, successfully locating and repairing the leak. They were all very friendly and professional."
              </p>
              <p className="font-bold text-[#1B3A6B]">Harry Barclay</p>
              <p className="text-gray-600 text-sm">Aberdeen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
            You may be interested in
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/services/lead-pipe-replacement" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-lead-pipe-replacement.webp" 
                alt="Lead Pipe Replacement" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Lead Pipe Replacement
                </h3>
              </div>
            </a>
            
            <a href="/services/water-main-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-leak-detection.webp" 
                alt="Water Main Leak Detection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Water Main Leak Detection
                </h3>
              </div>
            </a>
            
            <a href="/services/water-supply-pipe-renewals" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-supply-pipe-renewals.webp" 
                alt="Water Supply Pipe Renewals" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Water Supply Pipe Renewals
                </h3>
              </div>
            </a>
            
            <a href="/services/impact-moling" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-impact-moling.webp" 
                alt="Impact Moling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Impact Moling
                </h3>
              </div>
            </a>
            
            <a href="/help-advice/lead-pipe-replacement-scheme" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-lead-pipe-replacement-scheme.webp" 
                alt="Lead Pipe Replacement Scheme" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Lead Pipe Replacement Scheme
                </h3>
              </div>
            </a>
            
            <a href="/services/water-main-installations" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-installations.webp" 
                alt="Water Main Installations" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Water Main Installations
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
