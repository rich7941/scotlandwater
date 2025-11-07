import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WaterMainRepairs() {
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
      quote: "Just a quick note to thank you for all your efforts from resolving the water supply leak. You went above and beyond and your efforts really were appreciated.",
      name: "Tom Williams",
      location: "Dundee"
    },
    {
      quote: "Hopefully we will never have the need for your services again, but we would be happy to recommend you to anyone who does.",
      name: "Chris Snowden",
      location: "Dunfermline"
    },
    {
      quote: "Other Watersafe businesses were unable to help us, so it was a relief when you said you could. By Thursday evening, the leak was fixed, and we wouldn't even be able to tell that workmen had been there.",
      name: "David Bale",
      location: "Fort William"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="/water-main-repairs-hero.webp"
            alt="Water main repair in Scotland"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-4">
            <p className="text-sm uppercase tracking-wider mb-2">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold">Water Main Repairs Scotland</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Water Main Repair Specialists in Scotland</h2>
            
            <p className="text-gray-700 mb-4">
              Welcome to ScotWater, Scotland's leading water main repair specialists. We provide expert services for all types of underground water leaks and water main replacement and repair projects, ensuring efficient and high-quality solutions for our clients.
            </p>

            <p className="text-gray-700 mb-4">
              With extensive expertise in water main leaks, our services include:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Water main repairs</li>
              <li>Water main leak detection</li>
              <li>Water main replacement</li>
            </ul>

            <p className="text-gray-700 mb-8">
              Our skilled teams can handle any task, no matter the size or complexity.
            </p>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">What Causes Water Mains to Leak?</h3>

            <p className="text-gray-700 mb-6">
              Do you have a leaking water main and want to prevent further problems by identifying the cause? Our engineers can assess and fix the issue while finding a long-term solution to prevent similar breakages or leaks in the future.
            </p>

            <p className="text-gray-700 mb-6">
              Some of the most common causes of burst water mains include:
            </p>

            {/* Pipe Age & Material */}
            <div className="bg-gray-50 border-l-4 border-[#7c3aed] p-6 mb-6">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">Pipe Age & Material</h4>
              <p className="text-gray-700">
                Older water main pipes are more prone to corrosion, and if installed before the 1980s, they may be made of cast iron. While once the standard in utilities, cast iron is less durable and cannot expand and contract with changing temperatures as effectively as modern materials. This can lead to water main pipes cracking and leaking over time.
              </p>
            </div>

            {/* Water Pressure Changes */}
            <div className="bg-gray-50 border-l-4 border-[#7c3aed] p-6 mb-6">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">Water Pressure Changes</h4>
              <p className="text-gray-700">
                Extreme surges in water pressure can put water mains under considerable strain. If the water pressure exceeds the capability of the system, the extra force can damage pipes, leading to cracks, leaks, or even a complete rupture. Ruptured pipes can result in water damage, costly repairs, and higher water bills due to increased water usage.
              </p>
            </div>

            {/* Excavation Work */}
            <div className="bg-gray-50 border-l-4 border-[#7c3aed] p-6 mb-6">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">Excavation Work</h4>
              <p className="text-gray-700">
                Excavation work by contractors or property owners can accidentally damage water mains with digging equipment or machinery. Such contact can cause ruptures in your water mains, leading to significant damage.
              </p>
            </div>

            {/* Temperature Changes */}
            <div className="bg-gray-50 border-l-4 border-[#7c3aed] p-6 mb-6">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">Temperature Changes</h4>
              <p className="text-gray-700">
                Temperature changes can severely impact the integrity of water mains. During cold weather, the ground can freeze and subsequently expand, placing additional pressure on underground pipes. This can lead to cracks or even bursts if the material of the pipe is unable to withstand the contraction and expansion caused by the freezing and thawing cycles. Conversely, in hot weather, the ground may shift as it dries out, which can also cause movement and stress on water mains. Such temperature-induced stress makes regular maintenance and monitoring essential to prevent leaks and ensure the longevity of the water infrastructure.
              </p>
            </div>

            {/* Heavy Vehicles */}
            <div className="bg-gray-50 border-l-4 border-[#7c3aed] p-6 mb-8">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">Heavy Vehicles</h4>
              <p className="text-gray-700">
                Heavy vehicles can pose significant risks to the integrity of water mains, especially those that are shallowly buried. The immense weight of trucks, buses, and other large machinery can exert pressure on the soil above these pipes, leading to soil compaction. This increased pressure can deform or crack the water mains beneath, particularly if they are made from materials that are less flexible or if they are already weakened by age or corrosion. Moreover, the vibration caused by heavy traffic can lead to shifts in the soil that may disturb the pipes' alignment, exacerbating the risk of leaks or bursts. Regular assessment of water main routes under heavily trafficked areas is crucial to ensure their durability and to plan for necessary reinforcements or rerouting.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">ScotWater Water Main Repairs</h3>

            <p className="text-gray-700 mb-4">
              At ScotWater, we have decades of experience tackling even the most disastrous water main emergencies.
            </p>

            <p className="text-gray-700 mb-8">
              When your water main breaks, you need someone who appreciates the scale of the emergency and knows how to fix it as quickly and effectively as possible. Using innovative methods of leak detection, testing, and trenchless repairs, our engineers will fix your problem in the most long-lasting and non-invasive way. Where necessary, we also have the skills and equipment to carry out full water main replacements.
            </p>

            <h4 className="text-xl font-bold text-[#1e3a5f] mb-4">24-Hour Emergency Service</h4>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-700 mb-4">
                We understand that water leaks can be highly disruptive, whether it's a slow leak or a sudden burst water main. Scottish Water may alert you to an underground leak, or you may notice water leaking from your driveway. Water main leaks can cause flooding and costly damage. ScotWater is on hand to fix the problem fast.
              </p>
              <p className="text-gray-700">
                As water main specialists, our experienced engineers are always ready to deliver the best service using advanced tools and technology to examine your water main and fix the problem efficiently. That's why ScotWater is always available when you need us most. Our rapid response team can be on-site quickly, working to provide effective solutions with minimal disruption.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Contact ScotWater</h3>

            <p className="text-gray-700 mb-6">
              When water mains burst, you must act fast. For reliable, professional, and timely water main repair services across Scotland, trust ScotWater to deliver exceptional results.
            </p>

            <p className="text-gray-700 mb-8">
              ScotWater can carry out water main repairs across Scotland and provide you with a free quotation for the repair. To get a free quote for your water main repair, please call us on 0800 206 2778 or email hello@scotwater.co.uk to schedule a free consultation and learn how we can help with your water main needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-[#7c3aed] hover:bg-[#6d28d9]">
                <Phone className="mr-2 h-5 w-5" />
                0800 206 2778
              </Button>
              <Button size="lg" variant="outline" className="border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white">
                <Mail className="mr-2 h-5 w-5" />
                hello@scotwater.co.uk
              </Button>
            </div>
          </div>
        </section>

        {/* Want to Talk Section */}
        <section className="bg-[#7c3aed] py-16 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Want to talk to someone?</h2>
            <p className="text-xl mb-8">Call us 24/7, 365 days a year</p>
            <Button size="lg" className="bg-[#fbbf24] text-black hover:bg-[#f59e0b] font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call 0800 206 2778
            </Button>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">
              What to expect from ScotWater – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-600 mb-12 italic">
              Here's how we'll get your house feeling like home again.
            </p>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <p className="text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <p className="text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <p className="text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <p className="text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white border-l-4 border-[#7c3aed] p-6 shadow-sm">
                  <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
                  <p className="font-bold text-[#1e3a5f]">{review.name}</p>
                  <p className="text-gray-600">{review.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">You may be interested in</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1e3a5f] hover:text-[#7c3aed] transition-colors">
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
