import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPipeLandlords() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/lead-pipe-landlords-hero.webp)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Lead Pipe Landlords</h1>
        </div>
      </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Lead Pipe: A Guide for Landlords in England</h2>
            <p className="text-lg text-gray-700 mb-4">
              As a landlord in England, you have a legal obligation to ensure that your rental property provides a safe and healthy living environment for your tenants. One key part of this responsibility is making sure that the water supply is free from lead contamination.
            </p>
            <p className="text-lg text-gray-700">
              If your property was built before 1970 and has not been modernised, it may still contain lead pipe—particularly in the underground supply pipe or internal plumbing. Lead in drinking water is a serious health risk, and under The Repairing Standard, all privately rented homes must be free from lead pipes in the water supply system by 1 March 2024.
            </p>
          </div>
        </section>

        {/* Legal Obligations */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Legal Obligations for Landlords</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Repairing Standard forms part of the Housing (England) Act 2006 and sets out the minimum physical standards for rented accommodation. From March 2024, it specifically requires that:
            </p>
            <div className="space-y-4">
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • There is no lead present in the pipe delivering drinking water to any part of the property, including kitchens and bathrooms.
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Landlords must proactively replace any lead pipe within their ownership and control—this includes both the underground supply pipe and any internal pipes, joints, or fittings made of lead.
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Evidence of compliance may be requested by local authorities, letting agents, or tenants.
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Failure to meet these standards could lead to enforcement action, including a Repairing Standard Enforcement Order issued by the First-tier Tribunal for England (Housing and Property Chamber).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arranging Replacement */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Arranging Lead Pipe Replacement as a Landlord</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you believe the property may contain lead pipes, the first step is to arrange a professional inspection. A plumber registered with a recognised scheme—such as WaterSafe, SNIPEF, or WIAPS—can assess the system and confirm whether lead is present.
            </p>
            <p className="text-lg text-gray-700 mb-8">Once confirmed:</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Replace All Lead Pipe</h3>
                  <p className="text-lg text-gray-700">
                    You must arrange for the full removal and replacement of lead pipe, from the external stop valve (if within your responsibility) right through to the internal plumbing leading to taps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Notify Scottish Water</h3>
                  <p className="text-lg text-gray-700">
                    Inform Scottish Water of your intention to replace the private-side supply pipe. Once your section is upgraded, Scottish Water is legally required to assess and, if necessary, replace the public-side lead pipe, known as the communication pipe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Provide Proof of Compliance</h3>
                  <p className="text-lg text-gray-700">
                    Upon completion, ensure you receive a certificate of compliance from the contractor. Keep this on file as part of your property compliance documentation. You may be asked to present this certificate during tenancy inspections or tribunal proceedings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Conduct a Water Test (Optional but Recommended)</h3>
                  <p className="text-lg text-gray-700">
                    After the replacement, consider testing the water supply to confirm that lead levels are within safe regulatory limits. This offers peace of mind for both you and your tenants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning and Communication */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Planning and Communication with Tenants</h2>
            <p className="text-lg text-gray-700 mb-6">
              Lead pipe replacement can be disruptive, especially when internal works are required. Best practice for landlords includes:
            </p>
            <div className="space-y-4">
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Giving tenants reasonable notice of the works (at least 24 hours for access and ideally 48–72 hours).
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Explaining the purpose of the works and how they support health and safety.
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Ensuring any interruption to water supply is kept to a minimum.
                </p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  • Providing bottled water or temporary arrangements during the works, particularly if tenants include young children or vulnerable individuals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Considerations */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Financial Considerations</h2>
            <p className="text-lg text-gray-700 mb-4">
              While landlords are responsible for the private-side pipe, financial support may be available in some areas through local authority grant schemes or interest-free loans. These are more likely in cases where several neighbouring properties are replacing lead pipes at the same time, or in areas of known historic contamination.
            </p>
            <p className="text-lg text-gray-700">
              Always check with your local council's environmental health department to explore options.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Summary for Landlords</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="font-bold text-[#1B3A6B] mb-2">No lead in supply pipe (from March 2024)</h3>
                <p className="text-lg text-gray-700 text-sm">Arrange inspection and replacement of any lead pipe</p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Comply with Repairing Standard</h3>
                <p className="text-lg text-gray-700 text-sm">Maintain written evidence of compliance (e.g. certification)</p>
              </div>
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Notify Scottish Water</h3>
                <p className="text-lg text-gray-700 text-sm">Ensure communication pipe is checked and replaced if needed</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-8">
              By addressing lead pipe now, you not only meet legal standards but also safeguard your tenants' health and improve the value of your property. Lead-free plumbing is fast becoming an expectation—not just a requirement—and your early action demonstrates responsibility and professionalism as a landlord.
            </p>
          </div>
        </section>

        {/* Want to Talk Section */}
        <section className="bg-[#1B3A6B] text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Want to talk to someone?</h2>
                <p className="text-lg">Call us 24/7, 365 days a year</p>
              </div>
              <Button 
                size="lg"
                className="bg-[#F9E45C] text-[#1B3A6B] hover:bg-[#F9E45C]/90 text-xl font-bold px-8 py-6 h-auto"
                asChild
              >
                <a href="tel:08003167322" className="flex items-center gap-3">
                  0800 316 7322
                  <Phone className="h-6 w-6 scale-x-[-1]" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-4">
              What to expect from English Water – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
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
                <p className="text-lg text-center text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-pink-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step2_couple_quote.jpeg" 
                    alt="Step 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-[#1B3A6B] rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/what-to-expect-van.png" 
                    alt="Step 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-orange-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step4_woman_water.jpeg" 
                    alt="Step 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-8">
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
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  I was impressed by the professionalism of the entire team. From the initial phone call to the completion of the water main repair, every step was handled with expertise and care. A truly first-class service.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">James Thompson</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">London</p>
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
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  What a fantastic team! The engineers were not only skilled but also incredibly friendly and approachable. They answered all my questions and made what could have been a stressful situation very easy.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">Michael Davies</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">Birmingham</p>
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
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  We are delighted with the outcome. The new water main has significantly improved our water pressure, and the work was completed with impressive speed and precision. Thank you, English Water, for a job well done.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">David Wilson</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">Manchester</p>
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe Replacement
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe Replacement Scheme
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/lead-pipe-in-england" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/lead-pipe-in-scotland-hero.webp" 
                  alt="Lead Pipe in England" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe in England
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Supply Pipe Installations
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/water-leaks" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-leaks.webp" 
                  alt="Water Leaks" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Leaks
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/water-filter" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-filter.webp" 
                  alt="Water Filter" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Filter
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>
    </div>
  );
}
