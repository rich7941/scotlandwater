import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function WaterSupplyPipeRenewals() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/water-supply-pipe-renewals-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-[#1B3A6B]/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg mb-2">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold">Water Supply Pipe Renewals Scotland</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Professional Water Supply Pipe Renewal Services in Scotland
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            If you suspect that the water supply pipe on your property may need repairing or replacing, the ScotWater team is ready to help find the right solution for you. You may have noticed a leak, experienced low water flow or pressure, or you may be renovating and decide it's time to replace the old lead water supply pipe.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Replacing the water supply pipe could improve the poor flow. To discuss your current flow problems and get a free quote for replacement, please call us on <a href="tel:08002062778" className="text-[#5B2C6F] font-semibold hover:underline">0800 206 2778</a> or email us at <a href="mailto:hello@scotwater.co.uk" className="text-[#5B2C6F] font-semibold hover:underline">hello@scotwater.co.uk</a>.
          </p>

          {/* Lead Pipes Section */}
          <div className="bg-yellow-50 border-l-4 border-[#F4E04D] p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Lead Water Supply Pipes</h3>
            <p className="text-gray-700 mb-4">
              If your house was built before 1970 and hasn't been modernised, there's a good chance your water supply pipe may be made of lead.
            </p>
            <p className="text-gray-700 mb-4">
              For homes with lead water supply pipes, it's advisable to run the cold tap for a few moments before using the water to drink. This helps flush out any water that has settled in the water supply pipe, particularly if it has been standing for a long time, such as overnight or during a holiday, when the concentration of lead can increase. Flushing the water supply pipe reduces the lead concentration in the water you consume.
            </p>
            <p className="text-gray-700 font-semibold">
              It is important not to drink water from the hot tap, as the concentration of lead tends to be higher. This is because hot water dissolves lead more effectively than cold water.
            </p>
          </div>

          {/* Water Quality Regulations */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Water Quality and Safety Standards</h3>
          <p className="text-lg text-gray-700 mb-4">
            Water companies conduct regular checks to ensure that the water supply complies with government regulations. According to The Water Supply (Water Quality) Regulations 2016, the maximum allowable concentration of lead per litre is 10 micrograms however lead is a common toxic metal with <strong>no safe level of consumption</strong>. It is a totally preventable poison.
          </p>
          <div className="bg-[#5B2C6F]/10 p-6 rounded-lg mb-8">
            <p className="text-xl font-bold text-[#1B3A6B] mb-2">The safest water is lead-free water</p>
            <p className="text-gray-700">
              Replacing lead pipes is not just best practice—<strong>it is a legal requirement for rented properties in Scotland</strong>
            </p>
          </div>

          {/* Steps to Replace */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">The Steps to Replace Your Water Supply Pipe</h3>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
              <p className="text-gray-700">Hire ScotWater</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
              <p className="text-gray-700">Replace your private supply pipe</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
              <p className="text-gray-700">Notify Scottish Water, who will replace their communication pipe if it's made of lead</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
              <p className="text-gray-700">Flush your entire plumbing system after installation</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5B2C6F] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
              <p className="text-gray-700">Keep documentation (certificate of compliance, plumber invoice, and test results)</p>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Technical Requirements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#5B2C6F] font-bold">•</span>
                <span>Pipe must be buried 750mm–1350mm deep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5B2C6F] font-bold">•</span>
                <span>Ducting and insulation required at entry point</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5B2C6F] font-bold">•</span>
                <span>Sand/gravel backfill for first 250mm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5B2C6F] font-bold">•</span>
                <span>Trench left open at both ends for inspection</span>
              </li>
            </ul>
          </div>

          {/* Shared Supply */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Properties with Shared Water Supply</h3>
          <p className="text-lg text-gray-700 mb-4">
            Many older properties in Scotland share a water supply. In this case:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Coordination with neighbours is needed for full replacement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>You can request a separate supply pipe if preferred</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Local councils may offer grants or low-interest loans to help with costs</span>
            </li>
          </ul>

          {/* For Tenants */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">If You're a Tenant</h3>
            <p className="text-gray-700 mb-4">If you suspect lead pipes:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Ask your landlord to arrange testing and replacement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>You can request a water test from Scottish Water and share the results with your landlord</span>
              </li>
            </ul>
          </div>

          {/* After Work is Complete */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Once Work is Complete</h3>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Flush all cold water outlets for 30+ minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Remove and clean aerators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Avoid using kettles or filters during initial flush</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Request a follow-up test to confirm the water is lead-free</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5B2C6F] font-bold">•</span>
              <span>Keep all paperwork for future inspections, lettings, or sales</span>
            </li>
          </ul>

          {/* Action Steps */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">If Your Property Was Built Before 1970</h3>
            <p className="mb-4">Take these steps:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Check for lead pipes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Book a free water test from Scottish Water</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Speak to an approved plumber</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Replace your private supply pipe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Notify Scottish Water to replace their section</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4E04D] font-bold">✓</span>
                <span>Encourage neighbours to act if you share a supply</span>
              </li>
            </ul>
          </div>

          {/* Cost Savings */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">💡 Cost-Saving Tip</h3>
            <p className="text-gray-700">
              Replacing your old water supply pipe when areas are already exposed for other work can save you money in the long run, as it eliminates the need to re-expose the pipe for future repairs.
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Note:</strong> Full replacement is recommended for pipes longer than 30 metres.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#5B2C6F] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="text-lg mb-6">
              ScotWater can carry out water supply pipe renewals across Scotland and provide you with a free quotation for the renewal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:08002062778"
                className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
              >
                0800 206 2778
                <Phone className="w-6 h-6" />
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
              <Phone className="w-6 h-6" />
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
                "Just a quick note to thank you for all your efforts from resolving the water supply leak. You went above and beyond and your efforts really were appreciated."
              </p>
              <p className="font-bold text-[#1B3A6B]">Tom Williams</p>
              <p className="text-gray-600 text-sm">Dundee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B2C6F]">
              <p className="text-gray-700 mb-4 italic">
                "Hopefully we will never have the need for your services again, but we would be happy to recommend you to anyone who does."
              </p>
              <p className="font-bold text-[#1B3A6B]">Chris Snowden</p>
              <p className="text-gray-600 text-sm">Dunfermline</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B2C6F]">
              <p className="text-gray-700 mb-4 italic">
                "Other Watersafe businesses were unable to help us, so it was a relief when you said you could. By Thursday evening, the leak was fixed, and we wouldn't even be able to tell that workmen had been there."
              </p>
              <p className="font-bold text-[#1B3A6B]">David Bale</p>
              <p className="text-gray-600 text-sm">Fort William</p>
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
            
            <a href="/services/water-main-repairs" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Water Main Repairs
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
