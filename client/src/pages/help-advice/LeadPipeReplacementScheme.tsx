import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPipeReplacementScheme() {
  const services = [
    {
      title: "Lead Pipe Replacement",
      image: "/service-lead-pipe-replacement.webp",
      link: "/services/lead-pipe-replacement",
    },
    {
      title: "Water Leak Detection",
      image: "/service-water-main-leak-detection.webp",
      link: "/services/water-leak-detection",
    },
    {
      title: "Water Supply Pipe Installations",
      image: "/service-water-supply-pipe-installations.webp",
      link: "/services/water-supply-pipe-installations",
    },
    {
      title: "Impact Moling",
      image: "/service-impact-moling.webp",
      link: "/services/impact-moling",
    },
    {
      title: "Water Leaks",
      image: "/service-water-leaks.webp",
      link: "/help-advice/water-leaks",
    },
    {
      title: "Water Main Installations",
      image: "/service-water-main-installations.webp",
      link: "/services/water-main-installations",
    },
  ];

  const reviews = [
    {
      name: "Paul Strachan",
      location: "Glasgow",
      text: "I had a water leak at my property and ScotWater came out within an hour to fix it. They were very professional and the work was completed to a high standard.",
    },
    {
      name: "Jonathan Godfrey",
      location: "Edinburgh",
      text: "ScotWater replaced my lead pipes and the service was excellent. They kept me informed throughout the process and the work was completed on time.",
    },
    {
      name: "Gordan Christie",
      location: "Aberdeen",
      text: "I would highly recommend ScotWater for any water main work. They are professional, reliable and offer great value for money.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/lead-pipe-replacement-scheme-hero.webp')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Help & Advice</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead Pipe Replacement Scheme Scotland
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
              Lead Pipe Replacement Scheme Scotland: Ensuring Safer Water for Scottish Homes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Access to clean, safe drinking water is a fundamental necessity for every household. In Scotland, thousands of older properties still rely on outdated lead piping, which can pose serious health risks due to lead contamination. The Lead Pipe Replacement Scheme in Scotland is designed to help homeowners replace outdated lead pipes with modern, safer alternatives.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Lead pipes were commonly used in properties built before 1970. Over time, lead can leach into the water supply, especially if the water is acidic or soft, leading to potentially harmful health effects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This lead pipe replacement scheme focuses on encouraging property owners to modernize their plumbing systems by replacing old lead pipes with materials such as copper or plastic, which comply with current safety standards.
            </p>
          </div>
        </section>

        {/* How the Scheme Works */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              How the Lead Pipe Replacement Scheme Works
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Under the Lead Pipe Replacement Scheme in Scotland, homeowners are encouraged to:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  1. Identify Lead Water Supply Pipes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Check for a lead water supply pipe in older properties, particularly if your house was built before 1970.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Signs include dull grey pipes that are soft and can be easily scratched to reveal shiny metal underneath.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  2. Consult Professionals
                </h3>
                <p className="text-gray-700">
                  Contact a certified contractor, such as ScotWater, to assess your home and determine whether you have a lead water supply pipe.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  3. Replace Your Lead Water Supply Pipe
                </h3>
                <p className="text-gray-700">
                  ScotWater will safely replace your lead water supply pipe with approved materials.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  4. Replace Your Lead Communication Pipe
                </h3>
                <p className="text-gray-700">
                  Scottish Water will then replace your lead water communication pipe at their expense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Benefits of Replacing Lead Pipes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Replacing lead pipes offers numerous advantages, including:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Health Protection
                </h3>
                <p className="text-gray-700">
                  Reducing exposure to lead ensures the safety of your family.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Increased Property Value
                </h3>
                <p className="text-gray-700">
                  Modern plumbing systems are more attractive to potential buyers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Improved Water Pressure and Flow
                </h3>
                <p className="text-gray-700">
                  Upgrading your pipes can enhance water delivery to your home.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Long-Term Savings
                </h3>
                <p className="text-gray-700">
                  Modern pipes are more durable and less likely to leak and cause damage or need repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Identifying Lead Pipes */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Identifying Lead Pipe in Your Home
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may have lead pipes if your property was built before 1970. To check:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>Locate your internal stop tap (usually under the kitchen sink).</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>Examine the pipe feeding it—lead pipes are dull grey, soft, and reveal shiny metal when scratched.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If your supply pipe resembles this material, you likely have lead pipe. Scottish Water can arrange a free test and visual inspection to confirm.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Next Steps if Lead Pipes Are Found
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Replace Lead Pipes
                </h3>
                <p className="text-gray-700">
                  Engage a qualified plumber to replace any identified lead pipes with approved materials like copper or plastic.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Inform Scottish Water
                </h3>
                <p className="text-gray-700">
                  If lead is found in the communication pipe, Scottish Water will replace it free of charge upon confirmation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Seek Financial Assistance
                </h3>
                <p className="text-gray-700">
                  Some local councils offer grants or assistance schemes to help with the cost of replacing lead pipes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  Regular Testing
                </h3>
                <p className="text-gray-700">
                  After replacement, consider periodic water testing to ensure lead levels remain within safe limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scottish Water's Commitment */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">
              Scottish Water's Commitment to Reducing Lead
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Scottish Water does not use lead in its water mains or treatment processes. However, to mitigate risks from legacy lead plumbing, it:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>Treats water with orthophosphate to coat the inside of pipes and reduce lead leaching.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>Offers free water testing where lead contamination is suspected.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>Replaces lead communication pipes at no cost once the property owner has replaced their private lead supply pipe.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span>As of 1 April 2025, Scottish Water has begin replacing its section of lead pipe if water tests show lead levels above 5 µg/l.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="bg-[#1e3a5f] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Contact ScotWater for Lead Pipe Replacement in Scotland
              </h2>
              <p className="mb-6 text-gray-200">
                If you suspect your property has lead pipes or need assistance with the Lead Pipe Replacement Scheme, contact ScotWater today for expert advice and professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4 scale-x-[-1]" />
                  0800 206 2778
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  hello@scotwater.co.uk
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Want to Talk Section */}
        <section className="bg-[#5B2C6F] text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Want to talk to someone?</h2>
                <p className="text-lg">Call us 24/7, 365 days a year</p>
              </div>
              <Button 
                size="lg"
                className="bg-[#F9E45C] text-[#1B3A6B] hover:bg-[#F9E45C]/90 text-xl font-bold px-8 py-6 h-auto"
                asChild
              >
                <a href="tel:08002062778" className="flex items-center gap-3">
                  0800 206 2778
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
                <p className="text-gray-700 mb-4 min-h-[120px]">
                  I just wanted to say the guys who did the work yesterday were very good. They were professional and clearly knew what they were doing.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">Paul Strachan</p>
                  <p className="text-gray-600 text-sm mb-2">Glasgow</p>
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
                <p className="text-gray-700 mb-4 min-h-[120px]">
                  Thanks for carrying out the works it was a very smooth process and the guys were really nice and friendly.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">Jonathan Godfrey</p>
                  <p className="text-gray-600 text-sm mb-2">Edinburgh</p>
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
                <p className="text-gray-700 mb-4 min-h-[120px]">
                  We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">Gordan Christie</p>
                  <p className="text-gray-600 text-sm mb-2">Aberdeen</p>
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
        <section className="py-16 bg-white">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-12">
              You may be interested in
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
