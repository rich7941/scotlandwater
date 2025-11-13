import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPipeLandlords() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/lead-pipe-landlords-hero.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70"></div>
        </div>
        <div className="relative z-10 container text-center text-white">
          <p className="text-lg mb-2">Help & Advice</p>
          <h1 className="text-5xl font-bold">Lead Pipe Landlords</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Lead Pipe: A Guide for Landlords in Scotland</h2>
            <p className="text-lg text-gray-700 mb-4">
              As a landlord in Scotland, you have a legal obligation to ensure that your rental property provides a safe and healthy living environment for your tenants. One key part of this responsibility is making sure that the water supply is free from lead contamination.
            </p>
            <p className="text-lg text-gray-700">
              If your property was built before 1970 and has not been modernised, it may still contain lead pipe—particularly in the underground supply pipe or internal plumbing. Lead in drinking water is a serious health risk, and under The Repairing Standard, all privately rented homes must be free from lead pipes in the water supply system by 1 March 2024.
            </p>
          </div>
        </section>

        {/* Legal Obligations */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Legal Obligations for Landlords</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Repairing Standard forms part of the Housing (Scotland) Act 2006 and sets out the minimum physical standards for rented accommodation. From March 2024, it specifically requires that:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • There is no lead present in the pipe delivering drinking water to any part of the property, including kitchens and bathrooms.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Landlords must proactively replace any lead pipe within their ownership and control—this includes both the underground supply pipe and any internal pipes, joints, or fittings made of lead.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Evidence of compliance may be requested by local authorities, letting agents, or tenants.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Failure to meet these standards could lead to enforcement action, including a Repairing Standard Enforcement Order issued by the First-tier Tribunal for Scotland (Housing and Property Chamber).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arranging Replacement */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Arranging Lead Pipe Replacement as a Landlord</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you believe the property may contain lead pipes, the first step is to arrange a professional inspection. A plumber registered with a recognised scheme—such as WaterSafe, SNIPEF, or WIAPS—can assess the system and confirm whether lead is present.
            </p>
            <p className="text-lg text-gray-700 mb-8">Once confirmed:</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Replace All Lead Pipe</h3>
                  <p className="text-gray-700">
                    You must arrange for the full removal and replacement of lead pipe, from the external stop valve (if within your responsibility) right through to the internal plumbing leading to taps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Notify Scottish Water</h3>
                  <p className="text-gray-700">
                    Inform Scottish Water of your intention to replace the private-side supply pipe. Once your section is upgraded, Scottish Water is legally required to assess and, if necessary, replace the public-side lead pipe, known as the communication pipe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Provide Proof of Compliance</h3>
                  <p className="text-gray-700">
                    Upon completion, ensure you receive a certificate of compliance from the contractor. Keep this on file as part of your property compliance documentation. You may be asked to present this certificate during tenancy inspections or tribunal proceedings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Conduct a Water Test (Optional but Recommended)</h3>
                  <p className="text-gray-700">
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
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Planning and Communication with Tenants</h2>
            <p className="text-lg text-gray-700 mb-6">
              Lead pipe replacement can be disruptive, especially when internal works are required. Best practice for landlords includes:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Giving tenants reasonable notice of the works (at least 24 hours for access and ideally 48–72 hours).
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Explaining the purpose of the works and how they support health and safety.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Ensuring any interruption to water supply is kept to a minimum.
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <p className="text-gray-700">
                  • Providing bottled water or temporary arrangements during the works, particularly if tenants include young children or vulnerable individuals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Considerations */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Financial Considerations</h2>
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
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Summary for Landlords</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-bold text-[#1e3a8a] mb-2">No lead in supply pipe (from March 2024)</h3>
                <p className="text-gray-700 text-sm">Arrange inspection and replacement of any lead pipe</p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-bold text-[#1e3a8a] mb-2">Comply with Repairing Standard</h3>
                <p className="text-gray-700 text-sm">Maintain written evidence of compliance (e.g. certification)</p>
              </div>
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="font-bold text-[#1e3a8a] mb-2">Notify Scottish Water</h3>
                <p className="text-gray-700 text-sm">Ensure communication pipe is checked and replaced if needed</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-8">
              By addressing lead pipe now, you not only meet legal standards but also safeguard your tenants' health and improve the value of your property. Lead-free plumbing is fast becoming an expectation—not just a requirement—and your early action demonstrates responsibility and professionalism as a landlord.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Need Help with Lead Pipe Replacement?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact ScotWater today for professional lead pipe replacement services and compliance support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Phone className="mr-2 h-5 w-5" />
                0800 206 2778
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
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
