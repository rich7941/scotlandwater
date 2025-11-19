import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function LeadPipeReplacement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/lead-pipe-replacement-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Lead Pipe Replacement Scotland</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Lead Pipe Replacement Services in Scotland
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At ScotWater, we specialise in providing lead pipe replacement services across Scotland, covering all major cities and towns like Edinburgh, Glasgow, Aberdeen, Dundee, and beyond. Given the health risks associated with lead contamination in water systems, it's crucial to ensure that your property's plumbing meets current safety standards. Our expert team is here to help you improve your water supply with our professional lead pipe replacement services.
          </p>

          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Lead Pipes</h3>
          <p className="text-lg text-gray-700 mb-4">
            Lead pipes are a common issue in homes built before 1970 across Scotland. Over time, these lead pipes pose a significant health risk due to the potential for lead to leach into your drinking water. If your property in Edinburgh, Glasgow, or anywhere else in Scotland still uses lead water pipes, lead pipe replacement is the safest solution to ensure clean, safe drinking water for your household.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            At ScotWater, we provide professional lead pipe replacement services using advanced, trenchless technology (impact moling) to minimise disruption while delivering long-lasting results. Our expert team operates across Scotland, helping homeowners with lead pipe replacement to improve water quality.
          </p>

          {/* Responsibilities Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Responsibilities: Who Owns Which Pipe?</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Scottish Water:</strong> Responsible for the water main and the communication pipe (from the main to the external stop tap).</li>
              <li><strong>Homeowners/Landlords:</strong> Responsible for the supply pipe (from the stop tap into the home) and all internal plumbing.</li>
              <li>In shared supply arrangements (e.g. tenements), responsibility is joint between all connected property owners.</li>
            </ul>
          </div>

          {/* What to Expect Section */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Lead Pipe Replacement Service - What to Expect</h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">1. Lead Pipe Inspection and Assessment</h4>
              <p className="text-gray-700">
                We begin by carrying out a thorough inspection of your property to identify any lead pipes. Our skilled technicians assess the condition and layout of the existing lead pipes and recommend the best course of action for lead pipe replacement.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">2. Safe and Disruption-Free Lead Pipe Replacement</h4>
              <p className="text-gray-700">
                Once lead pipes are identified, we use advanced techniques to replace them with modern, durable materials. Our trenchless technology minimises digging and disruption to your property, ensuring a smooth and efficient replacement process.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">3. Compliance with Water Safety Standards</h4>
              <p className="text-gray-700">
                As a trusted water services provider in Scotland, all our lead pipe replacement complies with current UK Water Regulations. We ensure that your new pipe meets the latest health and safety standards, giving you peace of mind about your drinking water.
              </p>
            </div>
          </div>

          {/* Regulation Section */}
          <div className="bg-[#5B2C6F]/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Regulation and Water Safety Standards in Scotland</h3>
            <p className="text-gray-700 text-lg mb-4">
              In Scotland, lead levels in drinking water are governed by the Water Supply (Water Quality) (Scotland) Regulations 2010, which set the current legal limit at <strong>10 micrograms per litre (10 µg/L)</strong>.
            </p>
            <p className="text-gray-700 text-lg mb-4">This reflects a significant improvement from earlier standards:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>50 µg/L in the late 1980s</li>
              <li>25 µg/L by 2003</li>
            </ul>
            <p className="text-gray-700">
              The long-term ambition is to reduce the limit as close to zero as possible, in line with WHO guidance. Public health experts increasingly advocate adopting the EU's upcoming 5 µg/L standard, particularly for vulnerable populations like children and pregnant women.
            </p>
          </div>

          {/* Testing and Taking Action */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Testing and Taking Action</h3>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Water Testing:</strong> Free testing is available if lead pipes are suspected. A sample is taken from your cold kitchen tap.</li>
            <li><strong>Results:</strong> If lead exceeds 10 µg/l, or 5 µg/l from April 2025, Scottish Water may replace its section. You must replace your private section first.</li>
            <li><strong>Replacement:</strong> Use ScotWater to ensure compliance with Scottish plumbing byelaws.</li>
          </ul>

          {/* Landlord Legal Duties */}
          <div className="bg-yellow-50 border-l-4 border-[#F4E04D] p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Landlord Legal Duties</h3>
            <p className="text-gray-700 text-lg mb-4">
              From March 2024, all privately rented homes in Scotland must be free of lead in the drinking water supply. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Supply pipes</li>
              <li>Internal plumbing</li>
              <li>Lead-lined storage tanks</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Non-compliance can result in enforcement action under the Housing (Scotland) Act 2006.
            </p>
          </div>

          {/* Why Replace Lead Pipes */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Why Replace Lead Pipes?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Replacing lead pipes is essential to protect your household from potential health risks and improve the quality of your water supply. Here's why lead pipe replacement is important:
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">1. Health Risks</h4>
              <p className="text-gray-700">
                Lead can leach into drinking water from old lead pipes, posing serious health risks, particularly to young children and pregnant women. Lead exposure has been linked to developmental issues and other long-term health problems, making it critical to replace lead pipes as soon as possible.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">2. Improved Water Quality</h4>
              <p className="text-gray-700">
                Replacing lead pipes eliminates the risk of lead contamination, significantly improving the safety and quality of your drinking water. Many homeowners also notice an improvement in the taste and clarity of their water after the lead pipe replacement work.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">3. Increased Property Value</h4>
              <p className="text-gray-700">
                Modernising your plumbing system by replacing lead pipes can enhance the value of your property. Homes with updated lead-free water systems are more attractive to potential buyers and meet today's safety standards.
              </p>
            </div>
          </div>

          {/* Mitigation Section */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Mitigation While Awaiting Replacement</h3>
          <p className="text-gray-700 text-lg mb-4">
            While full pipe replacement is the only permanent solution, temporary steps can reduce exposure:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Use only cold water for drinking or cooking.</li>
            <li>Run taps for several minutes before use.</li>
            <li>Clean faucet aerators regularly.</li>
            <li>Use point-of-use filters certified for lead removal.</li>
          </ul>

          {/* Dangers of Partial Replacement */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">The Dangers of Partial Lead Pipe Replacement</h3>
            <p className="text-gray-700">
              Partial lead pipe replacement—replacing only the public or private section—can dislodge built-up lead particles and temporarily increase contamination. <strong>Full lead pipe replacement of both sections is strongly advised</strong> to eliminate the risk.
            </p>
          </div>

          {/* After Replacement */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">After Lead Pipe Replacement</h3>
          <p className="text-gray-700 text-lg mb-4">Once your lead pipe replacement is complete:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Flush your system by running all cold taps for 30 minutes.</li>
            <li>Remove and clean aerators.</li>
            <li>Avoid using kettles or ice makers during flushing.</li>
            <li>Notify Scottish Water for a follow-up inspection.</li>
          </ul>

          {/* How to Start */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">How to Start the Lead Pipe Replacement Process</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-[#5B2C6F] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">Step 1 – Contact ScotWater 0800 206 2778</h4>
              <p className="text-gray-700 text-lg mb-3">Discuss your property's lead pipe replacement with ScotWater. We may ask:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Is it a single or shared supply?</li>
                <li>When was the property built?</li>
                <li>We'll confirm if the pipe is lead and explain next steps.</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#5B2C6F] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">Step 2 – Hire ScotWater</h4>
              <p className="text-gray-700">
                Hire ScotWater to do your private-side lead pipe replacement. If on a shared supply, we must work with neighbours and may need to submit proof of work (e.g. a completion certificate).
              </p>
            </div>
            <div className="bg-white border-2 border-[#5B2C6F] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">Step 3 – Pipe Connection</h4>
              <p className="text-gray-700">
                Once ScotWater completes your private side lead pipe replacement, Scottish Water will replace the lead communication pipe on the public highway free of charge.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Contact ScotWater for Lead Pipe Replacement Across Scotland</h3>
            <p className="text-lg mb-6">
              At ScotWater, we're dedicated to helping homeowners and businesses across Scotland eliminate the risks associated with lead pipes. Our professional lead pipe replacement services ensure your water supply is safe, reliable, and compliant with modern safety standards.
            </p>
            <p className="mb-6">
              If your property was built before 1970 or you suspect your water pipes may be made of lead, contact us today for a free, no-obligation lead pipe replacement quotation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:08002062778"
                className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1e3a8a] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
              >
                0800 206 2778
                <Phone className="w-6 h-6 scale-x-[-1]" />
              </a>
              <a 
                href="mailto:hello@scotwater.co.uk"
                className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-bold px-8 py-4 rounded-lg text-xl transition-colors"
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
              className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1e3a8a] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-8">
            Here's what our happy customers have to say
          </h2>

          {/* WaterTrust Rating Badge */}
          <div className="flex justify-center mb-12">
            <img 
              src="/watertrust_rating.jpeg" 
              alt="WaterTrust 5.0 rating - Named best overall company 2024" 
              className="h-24 w-auto"
            />
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-yellow-400 rounded-lg p-6 bg-white">
              <p className="text-gray-700 text-lg mb-4 min-h-[120px]">
                I just wanted to say the guys who did the work yesterday were very good. They were professional and clearly knew what they were doing.
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1e3a8a]">Paul Strachan</p>
                <p className="text-gray-700 text-lg text-sm mb-2">Glasgow</p>
                <div className="flex gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
            </div>
            <div className="border-4 border-pink-400 rounded-lg p-6 bg-white">
              <p className="text-gray-700 text-lg mb-4 min-h-[120px]">
                Thanks for carrying out the works it was a very smooth process and the guys were really nice and friendly.
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1e3a8a]">Jonathan Godfrey</p>
                <p className="text-gray-700 text-lg text-sm mb-2">Edinburgh</p>
                <div className="flex gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
            </div>
            <div className="border-4 border-green-400 rounded-lg p-6 bg-white">
              <p className="text-gray-700 text-lg mb-4 min-h-[120px]">
                We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond.
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1e3a8a]">Gordan Christie</p>
                <p className="text-gray-700 text-lg text-sm mb-2">Aberdeen</p>
                <div className="flex gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">
            You may be interested in
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/services/water-main-repairs" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-repairs.webp" 
                alt="Water Main Repairs" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Water Main Repairs
                </h3>
              </div>
            </a>
            
            <a href="/services/water-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-leak-detection.webp" 
                alt="Water Leak Detection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Water Leak Detection
                </h3>
              </div>
            </a>
            
            <a href="/services/water-supply-pipe-installations" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-supply-pipe-installations.webp" 
                alt="Water Supply Pipe Installations" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Water Supply Pipe Installations
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
