import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaterFilter() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/water-filter-hero.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 container text-center text-white">
          <p className="text-lg mb-2">Help & Advice</p>
          <h1 className="text-5xl font-bold">Water Filter</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Water Filters to Remove Lead */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Water Filters to Remove Lead</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lead has continued to be used in domestic plumbing in the UK until it was finally banned in new installations in 1969. This means that any property built or renovated before 1970 may still contain lead pipes unless they have been replaced.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If flushing isn't practical or you're waiting for replacement works to begin, point-of-use water filters can be used as a temporary mitigation measure. These water filters are designed to remove both dissolved lead (in solution) and particulate lead (tiny flakes of metal) from drinking water.
              </p>
            </div>
          </div>
        </section>

        {/* Water Filters */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Water Filters</h2>
            <p className="text-gray-700 leading-relaxed">
              If you rely on tap water as your main source of hydration, it may be worth considering a kitchen water filter. These water filters help remove harmful substances like chlorine, lead, and pesticides—though their effectiveness depends on the specific type of water filter used. In addition to improving safety, water filters can also enhance the taste and, in some cases, the appearance of your drinking water.
            </p>
          </div>
        </section>

        {/* Can Water Filters Remove Lead? */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Can Water Filters Remove Lead?</h2>
            <p className="text-gray-700 leading-relaxed">
              Water filters are not a dependable solution for lead contamination caused by lead pipes. Even when water filters are certified, they may only reduce part of the lead content—not eliminate it entirely. Since there is no safe level of lead in drinking water, even small traces can be harmful, especially for young children and pregnant women. The only guaranteed way to remove lead from your water supply is to replace the lead pipes completely.
            </p>
          </div>
        </section>

        {/* What to Look for in a Lead Water Filter */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What to Look for in a Lead Water Filter</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When selecting a water filter, choose one that meets the following criteria:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Independent testing certification</h3>
                <p className="text-gray-700">
                  In the UK, this is typically approved by the Water Regulations Advisory Scheme (WRAS) or similar recognised bodies.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Multi-stage filtration</h3>
                <p className="text-gray-700">
                  The water filter should explicitly state that it removes both dissolved and particulate lead.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Cold-water use only</h3>
                <p className="text-gray-700">
                  Water filters must be used with cold water only, as hot water can cause more lead to dissolve and may damage the water filter unit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Water Filter Types */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Common Water Filter Types for Lead Removal</h2>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Under-sink water filters</h3>
                <p className="text-gray-700">
                  Installed beneath the kitchen sink and connected directly to the cold tap.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Tap-mounted water filters</h3>
                <p className="text-gray-700">
                  Easy to install directly on the end of the kitchen tap.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Jug water filters</h3>
                <p className="text-gray-700">
                  Convenient and portable, but not all are rated for lead removal—choose carefully based on certified performance claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance and Usage */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Maintenance and Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Always follow the manufacturer's instructions for installation and cartridge replacement. Regular maintenance is essential to ensure the water filter remains effective at reducing lead levels.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="font-semibold text-gray-900 mb-2">Note:</p>
              <p className="text-gray-700">
                Water filters are not a substitute for full pipe replacement. They are a temporary solution to reduce exposure while long-term remedial works are arranged.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Need Help with Water Filtration or Lead Pipe Replacement?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact ScotWater for expert advice and professional service
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                <Phone className="mr-2 h-5 w-5 scale-x-[-1]" />
                0800 206 2778
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                hello@scotwater.co.uk
              </Button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
