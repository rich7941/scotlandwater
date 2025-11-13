import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RelatedLinks from "@/components/RelatedLinks";
import { getRelatedLinksForHelpAdvice } from "@/data/relatedLinks";

export default function ImpactMolingPrices() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/impact-moling-prices-hero.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 container text-center text-white">
          <p className="text-lg mb-2">Help & Advice</p>
          <h1 className="text-5xl font-bold">Moling Prices in Scotland 2025</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* How Much Does Impact Moling Cost */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              How Much Does Impact Moling Cost Per Metre in Scotland?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The cost of moling per metre can vary depending on several factors, including the location, ground conditions, pipe diameter, and the overall length of the project but prices can be higher or lower depending on the complexity of the work and local market rates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When planning to replace your water supply pipe, it's essential to understand your responsibilities as a homeowner. Typically, you are responsible for the pipework running from your internal stop tap to your property boundary.
              </p>
            </div>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Factors Affecting the Cost of Impact Moling
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Ground Conditions</h3>
                <p className="text-gray-700">
                  Harder ground, such as clay or rocky soil, may require more time and specialised equipment, increasing costs.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Pipe Diameter</h3>
                <p className="text-gray-700">
                  Larger pipes may involve more labour and materials, raising the price.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Length of the Project</h3>
                <p className="text-gray-700">
                  Longer installations may benefit from economies of scale, reducing the per-metre cost.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Additional Services</h3>
                <p className="text-gray-700">
                  Pre-installation surveys, reinstatement of surfaces, or additional fittings may add to the overall cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Moling: A Cutting-Edge Solution */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Impact Moling: A Cutting-Edge Solution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We proudly employ impact moling as a revolutionary method for water supply pipe installations. This advanced technique uses a pneumatic cylinder to create a straight-line path from one pit to another, providing several key benefits:
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Minimal Disruption</h3>
                <p className="text-gray-700">
                  Fewer excavations are required, reducing the impact on your property, including concrete, tarmac, or flagged driveways.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Faster Completion</h3>
                <p className="text-gray-700">
                  Impact moling enables quicker project completion compared to traditional trenching methods, ensuring less disruption to your home or business.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Cost-Efficiency</h3>
                <p className="text-gray-700">
                  When ground conditions are favourable, moling significantly reduces the cost of installing new water pipes compared to traditional trench excavation, while still maintaining quality and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Does Impact Moling Work */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How Does Impact Moling Work?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Moling is a highly effective trenchless method for installing water supply and gas pipes. Our experienced engineers use advanced pneumatic impact moles (often called moles), powered by compressed air. These devices are launched from small excavation points, displacing soil and creating smooth boreholes in the desired direction, even in challenging ground conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once the boreholes are created, small-diameter pipes are carefully aligned and pulled through, eliminating the need for extensive trenching. This streamlined process ensures efficient installation of new water pipes, connecting seamlessly to the main water supply while minimising disruption to your property.
            </p>
          </div>
        </section>

        {/* Reasons to Replace */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Reasons to Replace a Water Supply Pipe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For homeowners in Scotland, there are several key reasons to consider replacing a main water pipe:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Lead or Iron Pipes</h3>
                <p className="text-gray-700">
                  Older homes may still have lead or iron pipes, which can pose health risks or cause corrosion, affecting water quality and reliability.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Water Leaks</h3>
                <p className="text-gray-700">
                  Leaks in the water supply pipe can lead to water wastage, property damage such as subsidence, and increased water bills, making replacement a necessary solution.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Insufficient Water Pressure</h3>
                <p className="text-gray-700">
                  Poor water pressure can disrupt daily activities and is often caused by ageing or damaged pipework, requiring an upgrade to ensure consistent flow.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Poor Water Quality</h3>
                <p className="text-gray-700">
                  Pipes in poor condition can introduce impurities into your water supply, affecting both taste and safety.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Home Renovations</h3>
                <p className="text-gray-700">
                  Projects that require relocating or upgrading the size of the water supply pipe for increased water flow provide an ideal opportunity to replace old pipes and future-proof your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Replace Lead Pipes */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Do Lead Water Supply Pipes Need to Be Replaced?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Although lead pipes haven't been used in over 40 years, many older properties still have lead water supply pipes. If your home is one of them, replacing these pipes with a modern water supply pipe is highly recommended to ensure safe drinking water free from lead contamination.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lead water pipes pose a significant health risk because traces of lead can leach into your drinking water, leading to potential lead poisoning. Prolonged exposure to lead in drinking water has been linked to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>High blood pressure</li>
              <li>Heart problems</li>
              <li>Abdominal pain</li>
              <li>Miscarriage or pregnancy complications</li>
              <li>Memory loss</li>
              <li>Developmental issues in children</li>
              <li>Low IQ</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Replacing your lead water supply pipe is a vital step in safeguarding your household's health and ensuring compliance with modern water quality standards if you are a landlord.
            </p>
          </div>
        </section>

        {/* Benefits of Replacing */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Benefits of Replacing Your Lead Water Supply Pipe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upgrading your water supply pipe offers several advantages:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Improved Energy Efficiency</h3>
                <p className="text-gray-700">
                  Enhanced water delivery to appliances reduces energy waste.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Increased Water Flow Rates</h3>
                <p className="text-gray-700">
                  Flexible, modern pipes provide better flow.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Better Water Quality</h3>
                <p className="text-gray-700">
                  Plastic pipes are non-contaminating, delivering cleaner water.
                </p>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-purple-600">
                <h3 className="font-semibold text-blue-900 mb-2">Environmentally Friendly</h3>
                <p className="text-gray-700">
                  With safer tap water, you can reduce reliance on bottled water, cutting plastic waste.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              Replacing lead water pipes in your home is essential for protecting your health, ensuring the purity of your drinking water, and preserving the value of your property. Lead is a hazardous substance that poses serious health risks, particularly to children and pregnant women, as it can lead to developmental issues and other medical conditions with prolonged exposure.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Contact ScotWater for Impact Moling Services Across Scotland
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              ScotWater is Scotland's trusted provider of trenchless moling solutions. To learn more about how our innovative methods can benefit your property or to receive a free, no-obligation quote, contact us today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                <Phone className="mr-2 h-5 w-5" />
                0800 206 2778
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                hello@scotwater.co.uk
              </Button>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <RelatedLinks 
          title="Related Help & Advice"
          links={getRelatedLinksForHelpAdvice('/help-advice/impact-moling-prices-2025-scotland', 3)}
        />
      </main>

      
    </div>
  );
}
