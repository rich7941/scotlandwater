import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPipeInScotland() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/lead-pipe-in-scotland-hero.webp)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/60" />
          </div>
          <div className="relative z-10 container text-center text-white">
            <p className="text-lg mb-2">Help & Advice</p>
            <h1 className="text-5xl font-bold">Lead Pipe in Scotland</h1>
          </div>
        </section>

        {/* What is Lead Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What is Lead?</h2>
            <p className="text-gray-700 mb-4">
              Lead is a toxic heavy metal that has been used in plumbing systems since Roman times. In fact, the word plumbing comes from the Latin word plumbum, meaning lead. For many centuries, lead pipe was favoured for plumbing due to its durability, flexibility, and ease of installation. It was commonly used for both internal plumbing and the pipe that connects a property to the mains supply.
            </p>
            <p className="text-gray-700 mb-4">
              Lead is a toxic heavy metal. Even in small amounts, it can be harmful if consumed over time. It is especially dangerous for unborn babies and children under the age of six, whose bodies and brains are still developing.
            </p>
            <p className="text-gray-700">
              The World Health Organization advises that there is no safe level of exposure to lead. For children, lead exposure can affect brain development and behaviour. Pregnant women are also at higher risk, as lead can cross the placenta and affect the unborn baby. In adults, lead exposure may contribute to high blood pressure and kidney issues.
            </p>
          </div>
        </section>

        {/* Why Is Lead in Drinking Water a Problem Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Is Lead in Drinking Water a Problem?</h2>
            <p className="text-gray-700 mb-4">
              Lead water pipes may no longer be installed in modern homes, but they remain embedded in Scotland's housing stock—especially in pre-1970s buildings. As long as lead pipes remain in place, there will be a risk, particularly in households with vulnerable residents.
            </p>
            <p className="text-gray-700 mb-4">
              Until every lead pipe in Scotland is removed, lead will continue to pose a measurable threat to public health. The only way to be certain your water is free from lead is to test it and, if necessary, replace the source.
            </p>
            <p className="text-gray-700 mb-4">
              It might not seem like a small amount of lead in drinking water could cause harm—but if consumed regularly over time, lead builds up in the body and can become dangerous.
            </p>
            <p className="text-gray-700 mb-4">
              Disturbance to lead pipes—such as during nearby roadworks or home renovations—can temporarily increase lead levels in your tap water. If you've had work done on or near your property, it is advisable to run your cold taps for 10 minutes to flush out any water that may have absorbed lead particles.
            </p>
            <p className="text-gray-700">
              To stay on the safe side, it's a good idea to run your cold water tap for at least two minutes before using the water for drinking or cooking—especially if the water has been sitting in the pipes overnight or after a long period of non-use.
            </p>
          </div>
        </section>

        {/* Understanding Lead Pipes in Scotland Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Lead Pipes in Scotland: History, Health Risks, and Removal Challenges</h2>
            <p className="text-gray-700 mb-4">
              Historically, lead was widely used across Scotland in various applications, including petrol, paint, and plumbing systems. Before the 1970s, it was standard practice to use lead pipes to connect homes to the public mains water supply, thanks to lead's malleability and resistance to corrosion. This practice continued until the health risks of lead exposure became widely recognised.
            </p>
            <p className="text-gray-700">
              In 1969, the use of lead pipes in new plumbing installations was officially banned in Scotland. However, many older properties—particularly those built before this date—may still contain lead pipes, especially in underground supply lines or internal plumbing that hasn't been modernised. As long as these legacy pipes remain in place, there is a risk that lead may leach into drinking water.
            </p>
          </div>
        </section>

        {/* How Lead Enters the Water Supply Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How Lead Enters the Water Supply</h2>
            <p className="text-gray-700 mb-6">
              Water sourced from Scottish reservoirs and treated at Scottish Water's works does not contain lead. There are no lead water mains in Scotland's public supply network. However, water can still become contaminated as it travels through private plumbing that contains lead.
            </p>
            <p className="text-gray-700 mb-4">Lead typically enters drinking water through:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Lead supply pipes (from the external stop valve into the home)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Lead communication pipes (from the public water main to the boundary)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Internal lead pipes within the property</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Old lead solder used to join copper pipes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Lead-lined storage tanks, common in older homes</span>
              </li>
            </ul>
            <p className="text-gray-700">
              The risk increases when water remains stagnant in lead pipes for several hours—such as overnight or during periods of low use—allowing lead to dissolve into the water. The longer the water stands still, the greater the amount of lead that can leach into it.
            </p>
          </div>
        </section>

        {/* Other Causes Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Other Causes of Lead in Drinking Water</h2>
            <p className="text-gray-700 mb-6">
              Disturbance to lead pipes—such as nearby roadworks, construction, or renovations—can temporarily increase lead levels. Vibrations or disruption can dislodge particles inside the pipe, causing short-term spikes in contamination. This is why it is advisable to run your cold tap for at least 10 minutes if work has taken place near your property.
            </p>
            <p className="text-gray-700">
              Even if your property no longer has lead pipes, lead may still enter the water supply through old fittings, solder joints, or tanks. These components can also contribute small but harmful amounts of lead.
            </p>
          </div>
        </section>

        {/* The Role of Water Hardness Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Role of Water Hardness</h2>
            <p className="text-gray-700">
              Lead dissolves more easily in soft water, which is common in many parts of Scotland. This makes Scottish homes particularly vulnerable to lead contamination, especially where old pipes remain in place. Soft water has fewer minerals, which means it provides less of a protective coating inside pipes that would otherwise reduce lead absorption.
            </p>
          </div>
        </section>

        {/* Naturally Occurring Lead Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Naturally Occurring Lead in Groundwater</h2>
            <p className="text-gray-700">
              Although rare, small amounts of naturally occurring lead can sometimes be found in Scottish groundwater—particularly in areas with a history of mining. For example, regions such as Leadhills and Wanlockhead in South Lanarkshire and Dumfries and Galloway have a long legacy of lead mining. These areas may experience localised lead contamination in soil and water, but this is not a widespread issue across Scotland.
            </p>
          </div>
        </section>

        {/* Who Is Most at Risk Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who Is Most at Risk from Lead Pipe?</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-bold text-blue-900 mb-2">Infants and children under 6</h3>
                <p className="text-gray-700">Brain development issues, learning difficulties, lower IQ</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-bold text-blue-900 mb-2">Pregnant women and unborn babies</h3>
                <p className="text-gray-700">Premature birth, low birth weight, developmental impairment</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-bold text-blue-900 mb-2">Adults (long-term exposure)</h3>
                <p className="text-gray-700">Kidney issues, high blood pressure, cognitive decline, reproductive harm</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Lead is tasteless, odourless, and invisible—so testing and replacement of lead pipe is the only way to be sure your water is safe. If your home was built before 1970, or you suspect lead pipes may be present, arrange a lead test and consider replacing affected sections without delay.
            </p>
            <p className="text-gray-700 mt-4 font-semibold">
              Protecting your household starts with awareness—and ends with action.
            </p>
          </div>
        </section>

        {/* The Bigger Issue Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Bigger Issue: Legacy Plumbing</h2>
            <p className="text-gray-700">
              Despite modern water systems being lead-free at the point of treatment, thousands of properties across Scotland still have legacy lead pipes underground or within the home—often without the homeowner even realising it. These hidden pipes remain the most common source of lead in Scottish drinking water today.
            </p>
          </div>
        </section>

        {/* Protecting Your Home Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Protecting Your Home from Lead Exposure</h2>
            <p className="text-gray-700 mb-4">
              To reduce the risk of lead in your drinking water, Scottish Water and public health authorities recommend:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Identifying and replacing any lead pipes, particularly in properties built before 1970</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Running the cold tap for two minutes before drinking or cooking, especially after long periods of non-use</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Testing your water if you suspect lead contamination</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span className="text-gray-700">Consulting with ScotWater</span>
              </li>
            </ul>
            <p className="text-gray-700">
              The only permanent solution is to replace all lead pipe—both underground and inside the property. Until then, simple precautionary measures can help reduce exposure.
            </p>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Need Help with Lead Pipe Identification or Replacement?</h2>
            <p className="text-gray-700 mb-8">
              Contact ScotWater today for expert advice and professional lead pipe replacement services across Scotland.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                <Phone className="mr-2 h-5 w-5 scale-x-[-1]" />
                0800 206 2778
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                <Mail className="mr-2 h-5 w-5" />
                hello@scotwater.co.uk
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                    Lead Pipe Replacement Scheme
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/lead-pipe-landlords" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-lead-pipe-landlords.webp" 
                  alt="Lead Pipe Landlords" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                    Lead Pipe Landlords
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
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
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                    Water Filter
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
