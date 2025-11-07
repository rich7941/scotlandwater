import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function ImpactMoling() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/impact-moling-hero.webp)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>
          </div>
          <div className="relative z-10 container text-center text-white">
            <p className="text-lg mb-2">Services</p>
            <h1 className="text-5xl font-bold">Impact Moling Scotland</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Impact Moling Specialists in Scotland</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              ScotWater offers professional Impact Moling services across Scotland, providing a precise, non-invasive solution for installing underground water supply pipes. This advanced trenchless technique allows us to work efficiently while preserving your property's landscaping and hardscapes, making it the ideal choice for water supply pipe installations and replacements.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">What is Impact Moling?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Impact Moling is a modern method of installing water supply pipes underground without the need for large trenches. By creating a tunnel beneath the surface, we can install new pipes with minimal disturbance to your property, reducing disruption and saving time.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">How Does Impact Moling Work?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Using a pneumatically driven tool, known as a soil displacement hammer or "mole," our equipment creates a narrow tunnel underground. This tunnel allows water pipes to be laid without extensive digging. Small launch and retrieval pits are excavated at strategic points, and the mole moves through the soil, leaving a clear path for the new pipe to be installed. This efficient process minimizes mess and keeps your property intact.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Why Choose Impact Moling Over Traditional Trenching Methods?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">1. Moling Creates Minimal Property Disruption</h4>
                <p className="text-gray-700">Avoid large-scale excavation with our trenchless moling techniques, which protect gardens, driveways, and other features.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">2. Moling is Fast and Reliable</h4>
                <p className="text-gray-700">Impact Moling speeds up the installation work, reducing project timelines compared to traditional excavation methods.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">3. Moling is Cost-Effective</h4>
                <p className="text-gray-700">Lower restoration and reinstatement costs from moling save you money.</p>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">4. Moling is Eco-Friendly</h4>
                <p className="text-gray-700">Trenchless installations reduce waste and protect the environment because moling requires less energy.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Key Benefits of Impact Moling</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">1. Moling Preserves Landscaping</h4>
                <p className="text-gray-700">Moling keeps your gardens and paved areas intact.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">2. Moling Reduces Downtime</h4>
                <p className="text-gray-700">Projects that are moled are completed faster with less disruption.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">3. Moling is Versatile</h4>
                <p className="text-gray-700">Moling is suitable for various ground conditions and property layouts.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">4. Moling is Accurate and Safe</h4>
                <p className="text-gray-700">Advanced moling tools ensure precision and protect existing utilities.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Our Impact Moling Process</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">Assessment and Planning</h4>
                  <p className="text-gray-700">We evaluate your site and map out underground utilities to ensure a safe installation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">Launch and Retrieval Pits</h4>
                  <p className="text-gray-700">Small pits are excavated at points of entry and exit for the moling tool.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">Moling and Installation</h4>
                  <p className="text-gray-700">The mole creates a tunnel, and the new water pipe is pulled through seamlessly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="font-bold text-lg text-[#1e3a8a] mb-2">Connection and Certification</h4>
                  <p className="text-gray-700">The new water supply pipe is connected to your system, and we provide a certificate confirming compliance with UK Water Regulations.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e3a8a] text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact ScotWater for Impact Moling in Scotland</h3>
              <p className="text-lg mb-4">
                For reliable, professional, and timely impact moling services across Scotland, you can trust ScotWater to deliver.
              </p>
              <p className="mb-6">
                ScotWater can carry out impact moling across Scotland and provide you with a free quotation for the moling work. To get a free quote for impact moling, please call us or email to schedule a free consultation and learn how we can help with your water main needs.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
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

        {/* Want to Talk Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Want to talk to someone?</h2>
            <p className="text-xl mb-6">Call us 24/7, 365 days a year</p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
              <Phone className="mr-2 h-5 w-5" />
              0800 206 2778
            </Button>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-4">
              What to expect from ScotWater – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-600 mb-12">Here's how we'll get your house feeling like home again.</p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-10 w-10 text-purple-600" />
                </div>
                <p className="text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💷</span>
                </div>
                <p className="text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👷</span>
                </div>
                <p className="text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <p className="text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <p className="text-gray-700 italic mb-4">
                  "I contacted this company to address a leak at our office, and they provided outstanding service from start to finish. The engineers were approachable and did a fantastic job, ensuring everything was tidy afterwards. I couldn't have asked for a better outcome."
                </p>
                <p className="font-bold text-[#1e3a8a]">Ben Wilson</p>
                <p className="text-gray-600">Edinburgh</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <p className="text-gray-700 italic mb-4">
                  "Highly recommend the ScotWater team. They were efficient, tidy, and extremely courteous throughout the process."
                </p>
                <p className="font-bold text-[#1e3a8a]">Jason Graham</p>
                <p className="text-gray-600">Glasgow</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <p className="text-gray-700 italic mb-4">
                  "From my initial phone call with David, I've been thoroughly impressed with this company. Paul, Thomas and Mark worked diligently all day, successfully locating and repairing the leak. They were all very friendly and professional."
                </p>
                <p className="font-bold text-[#1e3a8a]">Harry Barclay</p>
                <p className="text-gray-600">Aberdeen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">You may be interested in</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/services/lead-pipe-replacement" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement.webp" alt="Lead Pipe Replacement" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Lead Pipe Replacement</h3>
                </div>
              </a>

              <a href="/services/water-main-leak-detection" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-leak-detection.webp" alt="Water Main Leak Detection" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Water Main Leak Detection</h3>
                </div>
              </a>

              <a href="/services/water-supply-pipe-installations" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-supply-pipe-installations.webp" alt="Water Supply Pipe Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Water Supply Pipe Installations</h3>
                </div>
              </a>

              <a href="/services/water-supply-pipe-renewals" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-supply-pipe-renewals.webp" alt="Water Supply Pipe Renewals" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Water Supply Pipe Renewals</h3>
                </div>
              </a>

              <a href="/help-advice/lead-pipe-replacement-scheme" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement-scheme.webp" alt="Lead Pipe Replacement Scheme" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Lead Pipe Replacement Scheme</h3>
                </div>
              </a>

              <a href="/services/water-main-installations" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-installations.webp" alt="Water Main Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] hover:text-purple-600">Water Main Installations</h3>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
