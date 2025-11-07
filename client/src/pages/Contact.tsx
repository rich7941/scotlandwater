import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { toast } from "sonner";
import WhatToExpect from "@/components/WhatToExpect";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/contact-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-[#5B2C6F]/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact ScotWater</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Contact ScotWater, Scotland's water main experts
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            If you're experiencing issues with your water mains or need expert advice on water infrastructure, ScotWater is here to help. As Scotland's premier water main specialists, we provide reliable and efficient solutions tailored to your needs. Whether you need urgent repairs, maintenance, or a complete overhaul, our team of qualified professionals is ready to assist you. Reach out to us by phone 24/7, 365 days a year at{" "}
            <a href="tel:08002062778" className="text-[#1B3A6B] font-semibold hover:underline">0800 206 2778</a>, by email at{" "}
            <a href="mailto:hello@scotwater.co.uk" className="text-[#1B3A6B] font-semibold hover:underline">hello@scotwater.co.uk</a>, or by filling out the contact form on our website. We're committed to ensuring your water systems operate smoothly and efficiently.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-2 border-orange-400 focus:border-orange-500 h-12"
                />
              </div>
              <div>
                <Input
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-2 border-pink-400 focus:border-pink-500 h-12"
                />
              </div>
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-cyan-400 focus:border-cyan-500 h-12"
              />
            </div>

            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-2 border-pink-400 focus:border-pink-500 h-12"
              />
            </div>

            <div>
              <Input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="border-2 border-purple-400 focus:border-purple-500 h-12"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="border-2 border-orange-400 focus:border-orange-500 resize-none"
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-14 text-lg bg-[#1B3A6B] hover:bg-[#2A4A7B] text-white font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>

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
              className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
            >
              0800 206 2778
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            <img src="/waterseal-logo.png" alt="WaterSeal" className="h-16 object-contain" />
            <img src="/wicc-logo.png" alt="WICC" className="h-16 object-contain" />
            <img src="/watertrust-logo.png" alt="WaterTrust" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <WhatToExpect />

      {/* Customer Reviews Section */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-4">
            Here's what our happy customers have to say
          </h2>
          <div className="text-center mb-12">
            <a href="/reviews" className="text-[#5B2C6F] hover:underline font-semibold">
              View all reviews →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Just a quick note to thank you for all your efforts from resolving the water supply leak. You went above and beyond and your efforts really were appreciated."
              </p>
              <p className="font-bold text-[#1B3A6B]">Tom Williams</p>
              <p className="text-gray-600">Dundee</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Hopefully we will never have the need for your services again, but we would be happy to recommend you to anyone who does."
              </p>
              <p className="font-bold text-[#1B3A6B]">Chris Snowden</p>
              <p className="text-gray-600">Dunfermline</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Other Watersafe businesses were unable to help us, so it was a relief when you said you could. By Thursday evening, the leak was fixed, and we wouldn't even be able to tell that workmen had been there."
              </p>
              <p className="font-bold text-[#1B3A6B]">David Bale</p>
              <p className="text-gray-600">Fort William</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
            You may be interested in
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/services/lead-pipe-replacement" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
            
            <a href="/services/water-main-leak-detection" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-leak-detection.webp" 
                alt="Water Main Leak Detection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Water Main Leak Detection
                </h3>
              </div>
            </a>
            
            <a href="/services/water-supply-pipe-installations" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
            
            <a href="/services/impact-moling" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-impact-moling.webp" 
                alt="Impact Moling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
                  Impact Moling
                </h3>
              </div>
            </a>
            
            <a href="/help-advice/lead-pipe-replacement-scheme" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
            
            <a href="/services/water-main-installations" className="group block bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-installations.webp" 
                alt="Water Main Installations" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#5B2C6F] transition-colors">
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
