import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
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
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/contact-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact ScotWater</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
            Contact ScotWater, Scotland's water main experts
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-4">
            If you're experiencing issues with your water mains or need expert advice on water infrastructure, ScotWater is here to help. As Scotland's premier water main specialists, we provide reliable and efficient solutions tailored to your needs. Whether you need urgent repairs, maintenance, or a complete overhaul, our team of qualified professionals is ready to assist you.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <Input
                    name="address"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your water main needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-12 text-base bg-[#5B2C6F] hover:bg-[#6B3C7F] text-white font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#5B2C6F] mt-1 flex-shrink-0 scale-x-[-1]" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm mb-1">24/7 Emergency Service</p>
                    <a href="tel:08002062778" className="text-xl font-bold text-[#5B2C6F] hover:underline">
                      0800 206 2778
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#5B2C6F] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:hello@scotwater.co.uk" className="text-[#5B2C6F] hover:underline">
                      hello@scotwater.co.uk
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#5B2C6F] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-4">Our Offices</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900">Edinburgh</h5>
                        <p className="text-gray-600 text-sm">Hudson House</p>
                        <p className="text-gray-600 text-sm">8 Albany Street</p>
                        <p className="text-gray-600 text-sm">Edinburgh, EH1 3QB</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900">Glasgow</h5>
                        <p className="text-gray-600 text-sm">2 West Regent Street</p>
                        <p className="text-gray-600 text-sm">Glasgow, G2 1RW</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900">Aberdeen</h5>
                        <p className="text-gray-600 text-sm">7 Albert Street</p>
                        <p className="text-gray-600 text-sm">Aberdeen, AB25 1XX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Trust Badges */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            <img src="/waterseal_logo.png" alt="WaterSeal" className="h-10 w-auto" />
            <img src="/wicc_logo.png" alt="WICC" className="h-24 w-auto" />
            <img src="/watertrust_logo.png" alt="WaterTrust" className="h-10 w-auto" />
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <WhatToExpect />

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-8">
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
                <p className="font-bold text-[#1e3a8a]">Paul Strachan</p>
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
                <p className="font-bold text-[#1e3a8a]">Jonathan Godfrey</p>
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
                <p className="font-bold text-[#1e3a8a]">Gordan Christie</p>
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
