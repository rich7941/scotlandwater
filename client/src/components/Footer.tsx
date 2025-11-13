import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      {/* Top Footer Section */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left - Logo and Badges */}
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="ScotWater logo" 
              className="h-16 w-auto"
            />
            <div className="flex flex-wrap items-center gap-8">
              <img src="/wicc_logo.png" alt="WICC logo" className="h-16 w-auto" />
              <img src="/watertrust_logo.png" alt="WaterTrust logo" className="h-8 w-auto" />
              <img src="/waterseal_logo.png" alt="WaterSeal logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Right - Contact CTA */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold mb-4">Want to talk to someone?</h3>
            <p className="mb-4">Call us 24/7, 365 days a year</p>
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
            <p className="text-sm mt-4 text-gray-300">
              *We may record calls to help improve our service to you.
            </p>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-6">
            Wherever you are in Scotland, ScotWater will come to the rescue
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Edinburgh</h4>
              <p className="text-sm text-gray-300">Hudson House</p>
              <p className="text-sm text-gray-300">8 Albany Street</p>
              <p className="text-sm text-gray-300">Edinburgh, EH1 3QB</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Glasgow</h4>
              <p className="text-sm text-gray-300">2 West Regent Street</p>
              <p className="text-sm text-gray-300">Glasgow, G2 1RW</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Aberdeen</h4>
              <p className="text-sm text-gray-300">7 Albert Street</p>
              <p className="text-sm text-gray-300">Aberdeen, AB25 1XX</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Main Pages</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                <Link href="/reviews" className="hover:text-gray-300 transition-colors">Reviews</Link>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/services/lead-pipe-replacement" className="hover:text-gray-300 transition-colors">Lead Pipe Replacement</Link>
                <Link href="/services/water-supply-pipe-renewals" className="hover:text-gray-300 transition-colors">Water Supply Pipe Renewals</Link>
                <Link href="/services/water-supply-pipe-installations" className="hover:text-gray-300 transition-colors">Water Supply Pipe Installations</Link>
                <Link href="/services/water-supply-pipe-repairs" className="hover:text-gray-300 transition-colors">Water Supply Pipe Repairs</Link>
                <Link href="/services/water-main-installations" className="hover:text-gray-300 transition-colors">Water Main Installations</Link>
                <Link href="/services/water-main-renewals" className="hover:text-gray-300 transition-colors">Water Main Renewals</Link>
                <Link href="/services/water-main-repairs" className="hover:text-gray-300 transition-colors">Water Main Repairs</Link>
                <Link href="/services/water-leak-detection" className="hover:text-gray-300 transition-colors">Water Leak Detection</Link>
                <Link href="/services/impact-moling" className="hover:text-gray-300 transition-colors">Impact Moling</Link>
              </nav>
            </div>

            {/* Help & Advice */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Help & Advice</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/help-advice/water-leaks" className="hover:text-gray-300 transition-colors">Water Leaks</Link>
                <Link href="/help-advice/lead-pipe-replacement-scheme" className="hover:text-gray-300 transition-colors">Lead Pipe Replacement Scheme</Link>
                <Link href="/help-advice/lead-pipe-in-scotland" className="hover:text-gray-300 transition-colors">Lead Pipe in Scotland</Link>
                <Link href="/help-advice/lead-pipe-landlords" className="hover:text-gray-300 transition-colors">Lead Pipe Landlords</Link>
                <Link href="/help-advice/lead-pipe-replacement" className="hover:text-gray-300 transition-colors">Lead Pipe Replacement</Link>
                <Link href="/help-advice/water-filter" className="hover:text-gray-300 transition-colors">Water Filter</Link>
                <Link href="/help-advice/impact-moling-prices-2025-scotland" className="hover:text-gray-300 transition-colors">Impact Moling Prices 2025</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
            <a href="mailto:hello@scotwater.co.uk" className="flex items-center justify-center gap-2 hover:text-gray-300">
              <Mail className="h-5 w-5" />
              <span>hello@scotwater.co.uk</span>
            </a>
            <a href="tel:08002062778" className="flex items-center justify-center gap-2 hover:text-gray-300">
              <Phone className="h-5 w-5 scale-x-[-1]" />
              <span>24/7 Customer Service 0800 206 2778</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0F2847] py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div className="text-center md:text-left">
              <p className="mb-2">A <strong>STANDARD & GENERAL</strong> company</p>
              <p>Registered in England and Wales | Company No 15480293</p>
              <p className="text-xs mt-2">
                Disclaimer: ScotWater is an independent water services company and is not affiliated with Scottish Water, the national water supplier in Scotland.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and conditions</Link>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Copyright © ScotWater 2025. Registered office: Hudson House, 8 Albany Street, Edinburgh, EH1 3QB.
          </p>
        </div>
      </div>
    </footer>
  );
}
