import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WaterMainRenewals() {
  const handleCall = () => {
    window.location.href = "tel:08002062778";
  };

  const handleEmail = () => {
    window.location.href = "mailto:hello@scotwater.co.uk";
  };

  const services = [
    {
      title: "Lead Pipe Replacement",
      image: "/service-lead-pipe-replacement.webp",
      link: "/services/lead-pipe-replacement"
    },
    {
      title: "Water Main Leak Detection",
      image: "/service-water-main-leak-detection.webp",
      link: "/services/water-main-leak-detection"
    },
    {
      title: "Water Supply Pipe Installations",
      image: "/service-water-supply-pipe-installations.webp",
      link: "/services/water-supply-pipe-installations"
    },
    {
      title: "Impact Moling",
      image: "/service-impact-moling.webp",
      link: "/services/impact-moling"
    },
    {
      title: "Lead Pipe Replacement Scheme",
      image: "/service-lead-pipe-replacement-scheme.webp",
      link: "/help-advice/lead-pipe-replacement-scheme"
    },
    {
      title: "Water Main Installations",
      image: "/service-water-main-installations.webp",
      link: "/services/water-main-installations"
    }
  ];

  const reviews = [
    {
      quote: "The workmen were exceptional. They were extremely helpful, courteous, hardworking and professional.",
      name: "Alex Bailey",
      location: "Paisley"
    },
    {
      quote: "As promised, it is very difficult to tell where the holes had been dug as they replaced everything, including the block paving, expertly.",
      name: "Laura Young",
      location: "East Kilbride"
    },
    {
      quote: "We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond.",
      name: "Gordan James",
      location: "Aberdeen"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/water-main-renewals-hero.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-sm uppercase tracking-wider mb-2">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold">Water Main Renewals Scotland</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Commercial Water Main Renewal Services by ScotWater
            </h2>
            
            <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                For businesses experiencing issues with commercial water mains, whether it's due to leaks, decreased water flow or pressure, or the need to upgrade outdated infrastructure, ScotWater is equipped to provide specialised commercial solutions. When modifying commercial water mains on your property, ScotWater has the experience to undertake modifications, repairs or replacements.
              </p>
            </div>

            {/* Factors Influencing Water Flow */}
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 mt-12">
              Factors Influencing Water Flow or Pressure in Commercial Settings
            </h3>
            
            <p className="text-gray-700 mb-6">
              The efficiency of water delivery to your commercial property is crucial and can be influenced by several factors related to your water main:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Diameter of the Water Main</h4>
                <p className="text-gray-700">Restricted water flow can result from narrower water mains, affecting operations.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Corrosion and Build-up</h4>
                <p className="text-gray-700">Particularly in older iron water mains, internal corrosion can significantly decrease the diameter, reducing flow.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Demand Variability</h4>
                <p className="text-gray-700">Peak business hours can drastically increase water usage, stressing the water system.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Length of the Water Main</h4>
                <p className="text-gray-700">Longer water mains may experience greater pressure drops, impacting water delivery across larger properties.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Leaks in the Water Main</h4>
                <p className="text-gray-700">These can lead to significant water loss and decreased operational efficiency.</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">Additional considerations include:</p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">System Pressure</h4>
                <p className="text-gray-700">The pressure from the municipal water supply directly impacts your flow rate.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Configuration of Water Main Fittings</h4>
                <p className="text-gray-700">Components like meters, stop taps, and bends are critical in managing the flow.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Integrity of the Water Main</h4>
                <p className="text-gray-700">Issues such as partial closures, blockages, or aging infrastructure can severely affect service quality.</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              Addressing these issues through water main renewal can lead to improved performance and reliability. For a consultation and free quote on commercial water main renewal, reach out to us.
            </p>

            {/* Renewal Techniques */}
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 mt-12">
              Commercial Water Main Renewal Techniques
            </h3>

            <p className="text-gray-700 mb-6">
              ScotWater recommends the most effective renewal techniques based on our extensive commercial expertise:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Open Cut Trenching</h4>
                <p className="text-gray-700">Ideal for accessible areas requiring full water main replacement. Our certified operators handle all aspects of trenching and pipe installation.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Butt Fusion and Electro Fusion Welding</h4>
                <p className="text-gray-700">These methods ensure a secure and seamless connection between new pipe sections, enhancing the main's integrity and function.</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-[#1e3a5f] mb-4">Advanced Trenchless Technologies</h4>
            <p className="text-gray-700 mb-6">Offer minimal disruption:</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#1e3a5f]">Directional Drilling:</span>
                  <span className="text-gray-700"> Bypasses surface obstacles, ideal for urban environments.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#1e3a5f]">Pneumatic and Hydraulic Bursting:</span>
                  <span className="text-gray-700"> Efficiently replaces old mains without extensive excavation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#1e3a5f]">Impact Moling:</span>
                  <span className="text-gray-700"> Offers a less invasive option for under roads or landscaped areas.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-[#1e3a5f]">Auger Boring and Steel Pipe Ramming:</span>
                  <span className="text-gray-700"> Effective for installing mains under existing structures.</span>
                </div>
              </div>
            </div>

            {/* Partner with ScotWater */}
            <div className="bg-[#1e3a5f] text-white p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Partner with ScotWater for Reliable Water Main Renewal Solutions
              </h3>
              <p className="mb-6">
                ScotWater is committed to providing state-of-the-art water main renewal services that minimise downtime and maximise efficiency for your business.
              </p>
              <p className="mb-6">
                ScotWater can carry out water main renewals across Scotland and provide you with a free quotation for the renewal. To get a free quote for your water main renewal, please call us on 0800 206 2778 or email hello@scotwater.co.uk to schedule a free consultation and learn how we can help with your water main needs.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 0800 206 2778
              </Button>
              <Button 
                onClick={handleEmail}
                size="lg"
                variant="outline"
                className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </section>

        {/* Want to Talk Section */}
        <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Want to talk to someone?</h2>
            <p className="text-xl mb-8">Call us 24/7, 365 days a year</p>
            <Button 
              onClick={handleCall}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              0800 206 2778
            </Button>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a5f] mb-4">
              What to expect from ScotWater – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Here's how we'll get your house feeling like home again.
            </p>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 border-4 border-purple-600">
                  <span className="text-3xl font-bold text-purple-600">1</span>
                </div>
                <p className="text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 border-4 border-purple-600">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                </div>
                <p className="text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 border-4 border-purple-600">
                  <span className="text-3xl font-bold text-purple-600">3</span>
                </div>
                <p className="text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 border-4 border-purple-600">
                  <span className="text-3xl font-bold text-purple-600">4</span>
                </div>
                <p className="text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                  <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
                  <p className="font-bold text-[#1e3a5f]">{review.name}</p>
                  <p className="text-gray-600">{review.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-12">
              You may be interested in
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#1e3a5f] group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
