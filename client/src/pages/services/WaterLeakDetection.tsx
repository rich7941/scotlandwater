import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";
import CustomerReviews from "@/components/CustomerReviews";
import RelatedServices from "@/components/RelatedServices";

export default function WaterLeakDetection() {
  const handleCallClick = () => {
    window.location.href = "tel:08002062778";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@scotwater.co.uk";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/water-leak-detection-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Leak Detection Scotland</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Underground Water Leak Detection Services in Scotland
          </h2>
          
          <p className="text-gray-700 text-lg mb-6">
            Water leaks can be both costly and inconvenient, and when left undetected or unresolved can lead to large water consumption charges, reduced water pressure, material damage, and, in critical situations, loss of business or production. A moderate water main leak of around 1 litre per second could add approximately £60,000 to your annual commercial water bill.
          </p>

          <p className="text-gray-700 text-lg mb-8">
            At ScotWater, we understand that where water appears on the surface may not actually be where the water main leak originates. Our highly trained water leak detection technicians use a range of advanced equipment to confirm the leak's exact location before any work begins.
          </p>

          {/* What's Included Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">
              What's Included in Our Water Leak Detection Site Survey
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li><strong>Mapping All Water Mains:</strong> We identify every water main supply on your site and establish distinct zones.</li>
              <li><strong>Recording Flow Rate and Average Daily Usage:</strong> Monitoring consumption helps us spot anomalies that might indicate water main leaks.</li>
              <li><strong>Flow and Pressure Testing:</strong> We conduct comprehensive checks to measure how efficiently water is moving through your water main system.</li>
              <li><strong>Acoustic Correlation and Ground Microphones:</strong> Sounding techniques help us pinpoint the exact location of water main leaks with high accuracy.</li>
            </ul>
            <p className="text-gray-700 text-lg mt-6">
              During these procedures, there is no disruption to your water mains or on-site operations. If any aspect of our work might affect your schedule, ScotWater is dedicated to being as flexible as possible. We're also available to work outside regular hours or at weekends to minimise downtime.
            </p>
          </div>

          {/* Techniques Section */}
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Techniques to Narrow Down and Locate Leaks</h3>
          <p className="text-gray-700 text-lg mb-6">
            Once we have established the survey zones, we employ various methods to further refine the search area, typically locating water main leaks to within half a metre. These methods include:
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">1. Leakage Detection</h4>
              <p className="text-gray-700 text-lg">
                Employing open sounding, correlation, pipe tracing, and ground microphones to detect underground water main leaks.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">2. Flow and Pressure Logging</h4>
              <p className="text-gray-700 text-lg">
                Data loggers are deployed, and then the recorded information is retrieved and analysed.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">3. Pressure Management Design and Installation</h4>
              <p className="text-gray-700 text-lg">
                Ensuring optimal pressure settings to reduce the likelihood of further water main leaks.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">4. Step Testing and Zero Pressure Testing</h4>
              <p className="text-gray-700 text-lg">
                Including data logging to confirm water main leaks and their impact on the network.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">5. Leakage-Controlled Areas</h4>
              <p className="text-gray-700 text-lg">
                Setting up and designing zones to monitor and isolate water main leaks.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5B2C6F] mb-2">6. Crisis Management</h4>
              <p className="text-gray-700 text-lg">
                Ongoing pressure checks, logging, and monitoring, as well as water balance analysis, to detect issues before they escalate.
              </p>
            </div>
          </div>

          {/* Why Choose ScotWater Section */}
          <div className="bg-[#5B2C6F]/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">
              Why Choose ScotWater for Water Leak Detection in Scotland?
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li><strong>Minimal Disruption:</strong> We plan our work around your operations, preventing unnecessary downtime during the water leak detection process.</li>
              <li><strong>Expert Technicians:</strong> Our water leak detection specialists are trained to use sophisticated equipment and techniques to swiftly locate and address leaks.</li>
              <li><strong>Cost Savings:</strong> Identifying and repairing water leaks early helps you avoid steep water bills and potential property damage.</li>
              <li><strong>Scotland-Focused:</strong> As a Scottish company, we understand local regulations, geographical challenges, and weather conditions that can impact water mains.</li>
            </ul>
            <p className="text-gray-700 text-lg mt-6">
              If you are concerned about potential water leaks or you're experiencing unexplained rises in water costs, contact ScotWater for professional water leak detection services. Let us help you protect your property, conserve water, and save money.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
            Contact ScotWater for Water Leak Detection and Repairs in Scotland
          </h2>
          
          <p className="text-gray-700 text-lg mb-8">
            For reliable, professional, and timely water leak detection and water main repair services across Scotland, you can trust ScotWater to deliver.
          </p>

          <p className="text-gray-700 text-lg mb-8">
            ScotWater can carry out water leak detection across Scotland and provide you with a free quotation for the leak detection. To get a free quote for water leak detection, please call us or email us to schedule a free consultation and learn how we can help with your water leak detection needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              0800 206 2778
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-5 w-5" />
              hello@scotwater.co.uk
            </Button>
          </div>
        </div>
      </section>

      <WhatToExpect />
      <CustomerReviews />
      <RelatedServices />
    </div>
  );
}
 
