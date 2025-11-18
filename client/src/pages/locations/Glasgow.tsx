import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Glasgow() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/glasgow-lead-pipe-hero.webp)' }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead Pipe Replacement<br />Glasgow
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Lead Pipe Replacement Services in Glasgow
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At ScotWater, we specialise in providing lead pipe replacement services across Glasgow. Given the health risks associated with lead contamination in water systems, it's crucial to ensure that your property's plumbing meets current safety standards. Our expert team is here to help you improve your water supply with our professional lead pipe replacement services.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">Lead Pipes</h3>
            <p className="text-gray-700 mb-4">
              Lead pipes are a common issue in homes built before 1970 across Glasgow. Over time, these lead pipes pose a significant health risk due to the potential for lead to leach into your drinking water. If your property in Glasgow still uses lead water pipes, lead pipe replacement is the safest solution to ensure clean, safe drinking water for your household.
            </p>
            <p className="text-gray-700 mb-6">
              At ScotWater, we provide professional lead pipe replacement services using advanced, trenchless technology (<Link href="/services/impact-moling" className="text-purple-600 hover:underline">impact moling</Link>) to minimise disruption while delivering long-lasting results. Our expert team operates across Glasgow, helping homeowners with lead pipe replacement to improve water quality.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Responsibilities: Who Owns Which Pipe?</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Scottish Water:</strong> Responsible for the water main and the communication pipe (from the main to the external stop tap).</li>
                <li><strong>Homeowners/Landlords:</strong> Responsible for the supply pipe (from the stop tap into the home) and all internal plumbing.</li>
                <li>In shared supply arrangements (e.g. tenements), responsibility is joint between all connected property owners.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">Lead Pipe Replacement Service - What to Expect</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Lead Pipe Inspection and Assessment</h4>
                <p className="text-gray-700">
                  We begin by carrying out a thorough inspection of your property to identify any lead pipes. Our skilled technicians assess the condition and layout of the existing lead pipes and recommend the best course of action for lead pipe replacement.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Safe and Disruption-Free Lead Pipe Replacement</h4>
                <p className="text-gray-700">
                  Once lead pipes are identified, we use advanced techniques to replace them with modern, durable materials. Our trenchless technology minimises digging and disruption to your property, ensuring a smooth and efficient replacement process.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Compliance with Water Safety Standards</h4>
                <p className="text-gray-700">
                  As a trusted water services provider in Glasgow, all our lead pipe replacement complies with current UK Water Regulations. We ensure that your new pipe meets the latest health and safety standards, giving you peace of mind about your drinking water.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">Regulation and Water Safety Standards in Glasgow</h3>
            <p className="text-gray-700 mb-4">
              In Glasgow, lead levels in drinking water are governed by the Water Supply (Water Quality) (Scotland) Regulations 2010, which set the current legal limit at 10 micrograms per litre (10 µg/L).
            </p>
            <p className="text-gray-700 mb-4">
              This reflects a significant improvement from earlier standards:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>50 µg/L in the late 1980s</li>
              <li>25 µg/L by 2003</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The long-term ambition is to reduce the limit as close to zero as possible, in line with WHO guidance. The WHO recommends a guideline value of 0.01 mg/L (10 µg/L) based on health risk, not practical implementation. Public health experts increasingly advocate adopting the EU's upcoming 5 µg/L standard, particularly for vulnerable populations like children and pregnant women.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Testing and Taking Action</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Water Testing:</strong> Free testing is available if lead pipes are suspected. A sample is taken from your cold kitchen tap.</li>
                <li><strong>Results:</strong> If lead exceeds 10 µg/l, or 5 µg/l from April 2025, Scottish Water may replace its section. You must replace your private section first.</li>
                <li><strong>Replacement:</strong> Use ScotWater to ensure compliance with Scottish plumbing byelaws.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">Landlord Legal Duties</h3>
            <p className="text-gray-700 mb-4">
              From March 2024, all privately rented homes in Glasgow must be free of lead in the drinking water supply. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Supply pipes</li>
              <li>Internal plumbing</li>
              <li>Lead-lined storage tanks</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Non-compliance can result in enforcement action under the Housing (Scotland) Act 2006.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">Why Replace Lead Pipes?</h3>
            <p className="text-gray-700 mb-4">
              Replacing lead pipes is essential to protect your household from potential health risks and improve the quality of your water supply. Here's why lead pipe replacement is important:
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Health Risks</h4>
                <p className="text-gray-700">
                  Lead can leach into drinking water from old lead pipes, posing serious health risks, particularly to young children and pregnant women. Lead exposure has been linked to developmental issues and other long-term health problems, making it critical to replace lead pipes as soon as possible.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Improved Water Quality</h4>
                <p className="text-gray-700">
                  Replacing lead pipes eliminates the risk of lead contamination, significantly improving the safety and quality of your drinking water. Many homeowners also notice an improvement in the taste and clarity of their water after the lead pipe replacement work.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Increased Property Value</h4>
                <p className="text-gray-700">
                  Modernising your plumbing system by replacing lead pipes can enhance the value of your property. Homes with updated lead-free water systems are more attractive to potential buyers and meet today's safety standards.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Mitigation While Awaiting Replacement</h3>
              <p className="text-gray-700 mb-4">
                While full pipe replacement is the only permanent solution, temporary steps can reduce exposure:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Use only cold water for drinking or cooking.</li>
                <li>Run taps for several minutes before use.</li>
                <li>Clean faucet aerators regularly.</li>
                <li>Use point-of-use filters certified for lead removal.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">The Dangers of Partial Lead Pipe Replacement</h3>
            <p className="text-gray-700 mb-6">
              Partial lead pipe replacement—replacing only the public or private section—can dislodge built-up lead particles and temporarily increase contamination. <Link href="/help-advice/lead-pipe-replacement" className="text-purple-600 hover:underline">Full lead pipe replacement</Link> of both sections is strongly advised to eliminate the risk.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">After Lead Pipe Replacement</h3>
            <p className="text-gray-700 mb-4">
              Once your lead pipe replacement is complete:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Flush your system by running all cold taps for 30 minutes.</li>
              <li>Remove and clean aerators.</li>
              <li>Avoid using kettles or ice makers during flushing.</li>
              <li>Notify Scottish Water for a follow-up inspection.</li>
            </ul>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Be Lead Aware and Take Action</h3>
              <p className="text-gray-700">
                Lead in drinking water remains a hidden but serious concern for older Scottish homes. If your property was built before 1970, it may still contain lead pipe. Don't wait—book a water test, inspect your plumbing, and arrange for <Link href="/help-advice/lead-pipe-replacement" className="text-purple-600 hover:underline">full lead pipe replacement</Link> if needed. By acting now, you protect your health, comply with new legal standards, and contribute to a safer water supply for all of Glasgow.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 mt-12">How to Start the Lead Pipe Replacement Process</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 1 – Contact ScotWater <a href="tel:08002062778" className="text-purple-600 hover:underline">0800 206 2778</a></h4>
                <p className="text-gray-700 mb-2">
                  Discuss your property's lead pipe replacement with ScotWater. We may ask:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Is it a single or shared supply?</li>
                  <li>When was the property built?</li>
                  <li>We'll confirm if the pipe is lead and explain next steps.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 2 – Hire ScotWater</h4>
                <p className="text-gray-700">
                  Hire ScotWater to do your private-side lead pipe replacement. If on a shared supply, we must work with neighbours and may need to submit proof of work (e.g. a completion certificate).
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 3 – Pipe Connection</h4>
                <p className="text-gray-700">
                  Once ScotWater completes your private side lead pipe replacement, Scottish Water will replace the lead communication pipe on the public highway free of charge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact ScotWater for Lead Pipe Replacement Across Glasgow
            </h2>
            <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
              At ScotWater, we're dedicated to helping homeowners and businesses across Glasgow eliminate the risks associated with lead pipes. Our professional lead pipe replacement services ensure your water supply is safe, reliable, and compliant with modern safety standards. If your property was built before 1970 or you suspect your water pipes may be made of lead, contact us today for a free, no-obligation lead pipe replacement quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5 scale-x-[-1]" />
                <a href="tel:08002062778">0800 206 2778</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:hello@scotwater.co.uk">hello@scotwater.co.uk</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-4">
              What to expect from ScotWater – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Here's how we'll get your house feeling like home again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="border-4 border-cyan-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step1_customer_service.jpeg" 
                    alt="Step 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-pink-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step2_couple_quote.jpeg" 
                    alt="Step 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-purple-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step3_van.png" 
                    alt="Step 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-orange-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step4_woman_water.jpeg" 
                    alt="Step 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* You may be interested in Section */}
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
              
              <a href="/services/water-supply-pipe-installations" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-supply-pipe-installations.webp" 
                  alt="Water Supply Pipe Installations" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                    Water Supply Pipe Installations
                  </h3>
                </div>
              </a>
              
              <a href="/services/water-main-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-main-leak-detection.webp" 
                  alt="Water Leak Detection" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                    Water Leak Detection
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
      </main>
    </div>
  );
}
