import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function Reviews() {
  const reviews = [
    {
      name: "Alex Bailey",
      location: "Paisley",
      text: "The workmen were exceptional. They were extremely helpful, courteous, hardworking and professional."
    },
    {
      name: "Laura Young",
      location: "East Kilbride",
      text: "As promised, it is very difficult to tell where the holes had been dug as they replaced everything, including the block paving, expertly."
    },
    {
      name: "Gordan James",
      location: "Aberdeen",
      text: "We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond."
    },
    {
      name: "Tom Williams",
      location: "Dundee",
      text: "Just a quick note to thank you for all your efforts from resolving the water supply leak. You went above and beyond and your efforts really were appreciated."
    },
    {
      name: "Chris Snowden",
      location: "Dunfermline",
      text: "Hopefully we will never have the need for your services again, but we would be happy to recommend you to anyone who does."
    },
    {
      name: "David Bale",
      location: "Fort William",
      text: "Other Watersafe businesses were unable to help us, so it was a relief when you said you could. By Thursday evening, the leak was fixed, and we wouldn't even be able to tell that workmen had been there."
    },
    {
      name: "Paul Strachan",
      location: "Glasgow",
      text: "I just wanted to say the guys who did the work yesterday were very good. They were professional and clearly knew what they were doing."
    },
    {
      name: "Jonathan Godfrey",
      location: "Edinburgh",
      text: "Thanks for carrying out the works it was a very smooth process and the guys were really nice and friendly."
    },
    {
      name: "Gordan Christie",
      location: "Aberdeen",
      text: "We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond."
    },
    {
      name: "James Anderson",
      location: "Kilmarnock",
      text: "Extremely polite and efficient, they quickly identified and repaired the leak, leaving my garden tidy upon departure. I am thoroughly satisfied with the service and highly recommend them."
    },
    {
      name: "John Campbell",
      location: "Inverness",
      text: "Truly exceptional service from start to finish. The project was promptly scheduled following an initial quote. The onsite team was expert and adept, handling the job superbly. They navigated challenges smoothly and ensured our complete satisfaction with the outcome. I enthusiastically recommend them."
    },
    {
      name: "Craig Stewart",
      location: "Perth",
      text: "Really pleasant staff, thank you so much."
    },
    {
      name: "Ben Wilson",
      location: "Edinburgh",
      text: "I contacted this company to address a leak at our office, and they provided outstanding service from start to finish. The engineers were approachable and did a fantastic job, ensuring everything was tidy afterwards. I couldn't have asked for a better outcome."
    },
    {
      name: "Jason Graham",
      location: "Glasgow",
      text: "Highly recommend the ScotWater team. They were efficient, tidy, and extremely courteous throughout the process."
    },
    {
      name: "Harry Barclay",
      location: "Aberdeen",
      text: "From my initial phone call with David, I've been thoroughly impressed with this company. Paul, Thomas and Mark worked diligently all day, successfully locating and repairing the leak. They were all very friendly and professional."
    },
    {
      name: "Clare Blackwood",
      location: "Aberdeen",
      text: "An adept and courteous company that handled a challenging task with exceptional skill and professionalism."
    },
    {
      name: "Joesph Archie",
      location: "Edinburgh",
      text: "Outstanding service, fast, professional, and highly efficient. The team did excellent work, impressively ensuring everything was neat before leaving. They stayed late to get our water back on. Many thanks for the great job."
    },
    {
      name: "Peter MacDonald",
      location: "Falkirk",
      text: "Absolutely stellar performance by the ScotWater team! They arrived on time, were incredibly professional, and efficiently resolved our issues. The work was completed to a high standard, and they made sure to leave our premises spotless. A heartfelt thank you to the team for restoring our water service and ensuring everything was perfect before they left."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/reviews-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Customer Reviews</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">
            Explore Some of Our Recent Customer Reviews
          </h2>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const borderColors = ['border-yellow-400', 'border-pink-400', 'border-green-400'];
              const borderColor = borderColors[index % 3];
              
              return (
                <div key={index} className={`border-4 ${borderColor} rounded-lg p-6 bg-white`}>
                  <p className="text-gray-700 mb-4 min-h-[100px]">
                    {review.text}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#1e3a8a]">{review.name}</p>
                    <p className="text-gray-600 text-sm mb-2">{review.location}</p>
                    <div className="flex gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
              className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1e3a8a] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
            >
              0800 206 2778
              <Phone className="w-6 h-6 scale-x-[-1]" />
            </a>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <WhatToExpect />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Lead Pipe Replacement
                </h3>
              </div>
            </a>
            
            <a href="/services/water-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-leak-detection.webp" 
                alt="Water Leak Detection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Water Leak Detection
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
                  Water Supply Pipe Installations
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-purple-600 transition-colors">
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
