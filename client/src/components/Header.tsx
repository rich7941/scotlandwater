import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#5B2C6F] text-white text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <img src="/scotland-flag.png" alt="Scotland flag" className="h-4 w-6" />
          <span>Scotland's No.1 Water Contractor</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#1B3A6B] text-white">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="ScotWater logo" 
                className="h-16 w-auto cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  Services <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  Help & Advice <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  Locations <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/reviews" className="hover:text-gray-300 transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-semibold">24/7 Call on</div>
                  <a href="tel:08002062778" className="hover:underline">
                    0800 206 2778
                  </a>
                </div>
              </div>
              <a 
                href="mailto:hello@scotwater.co.uk" 
                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">hello@scotwater.co.uk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
                <Link href="/help" className="hover:text-gray-300 transition-colors">
                  Help & Advice
                </Link>
                <Link href="/locations" className="hover:text-gray-300 transition-colors">
                  Locations
                </Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
                <Link href="/reviews" className="hover:text-gray-300 transition-colors">
                  Reviews
                </Link>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
                <div className="pt-4 border-t border-white/20">
                  <a href="tel:08002062778" className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5" />
                    <span>0800 206 2778</span>
                  </a>
                  <a href="mailto:hello@scotwater.co.uk" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>hello@scotwater.co.uk</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
