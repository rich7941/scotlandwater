import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{backgroundImage: "linear-gradient(rgba(91, 44, 111, 0.7), rgba(91, 44, 111, 0.7)), url('/about-hero.webp')"}}
      >
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About ScotWater
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1B3A6B] mb-6">
              About ScotWater in Scotland
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              At ScotWater, we specialise in lead pipe replacement, water mains renewal, and water infrastructure services across Scotland, serving all cities and towns including Edinburgh, Glasgow, Aberdeen, Dundee, Paisley, East Kilbride, Livingston, Hamilton, Cumbernauld, Kirkcaldy, and beyond.
            </p>

            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              With years of hands-on experience in the water industry, we have developed the expertise required to handle a wide range of projects, from private lead pipe replacement to full-scale commercial water main installations.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">
              Our Expertise and Commitment
            </h3>

            <p className="text-lg mb-4 leading-relaxed text-gray-700">
              Our highly qualified team holds all the necessary certifications and credentials to provide efficient, safe, and professional services to every client. At ScotWater, we take pride in offering a complete in-house solution, including:
            </p>

            <ul className="list-disc list-inside mb-6 text-lg text-gray-700 space-y-2">
              <li>Lead Pipe Replacement</li>
              <li>Water Supply Pipe Repairs</li>
              <li>Water Supply Pipe Installations</li>
              <li>Water Main Repairs</li>
              <li>Water Main Installations</li>
              <li>Water Main Leak Detection</li>
            </ul>

            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              We ensure that every project is carried out with the highest standards of workmanship, safety, and minimal disruption to your property.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">
              Why Choose ScotWater?
            </h3>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">1. Qualified and Experienced:</strong> Our team is fully trained and certified to work on a variety of water infrastructure projects, ensuring compliance with all industry regulations.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">2. Reliable and Honest:</strong> We believe in transparency and integrity. You can trust us to deliver top-quality services, on time and within budget.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">3. Networked Across Scotland:</strong> With established partnerships and a strong network within the water and construction industry, we have access to additional resources for specialised services when required.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">4. Waterboard Approved:</strong> ScotWater's engineers are fully Waterboard Approved, meaning we are authorised to self-certify all our projects. This ensures that every lead pipe replacement and water infrastructure service we deliver complies with the latest UK Water Regulations and safety standards, providing our clients with peace of mind.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">5. Expertise:</strong> With years of experience in the water industry, our team has the skills and knowledge to handle lead pipe replacement projects of any size. We ensure that every job is completed to the highest standards.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">6. Tailored Solutions:</strong> We understand that every property is unique. Our approach is customised to suit your specific needs, whether it's a residential home or a commercial property.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">7. Latest Technology:</strong> Our use of trenchless pipe replacement technology ensures minimal disruption to your property. This method allows us to replace pipes quickly and efficiently, without the need for extensive excavation.
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="text-[#1B3A6B]">8. Commitment to Quality:</strong> We pride ourselves on providing transparent, high-quality services. From initial inspection to project completion, you'll be kept informed at every step, ensuring a stress-free experience.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              ScotWater can carry out water supply pipe and water main work across Scotland. To get a free quote please call us on{" "}
              <a href="tel:08002062778" className="text-[#5B2C6F] font-semibold hover:underline">
                0800 206 2778
              </a>{" "}
              or email{" "}
              <a href="mailto:hello@scotwater.co.uk" className="text-[#5B2C6F] font-semibold hover:underline">
                hello@scotwater.co.uk
              </a>{" "}
              to schedule a free consultation and learn how we can help with your water supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#5B2C6F] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to talk to someone?
          </h2>
          <p className="text-xl mb-8">Call us 24/7, 365 days a year</p>
          <Button 
            size="lg"
            className="bg-[#F7B32B] text-[#1B3A6B] hover:bg-[#F7B32B]/90 font-semibold text-xl px-8 py-6"
          >
            <a href="tel:08002062778">0800 206 2778</a>
          </Button>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1B3A6B] mb-8 text-center">
              What to expect from ScotWater – Your trusted water services expert
            </h2>
            
            <blockquote className="text-xl italic text-center mb-12 text-gray-600">
              Here's how we'll get your house feeling like home again.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B2C6F] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <p className="text-lg text-gray-700">
                  Call us 24/7, 365, at a time that suits you.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B2C6F] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <p className="text-lg text-gray-700">
                  You'll get a no-obligation quote straight away.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B2C6F] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <p className="text-lg text-gray-700">
                  Expert engineers will arrive and carry out the work.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B2C6F] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <p className="text-lg text-gray-700">
                  We'll give you a 25-year guarantee*.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
