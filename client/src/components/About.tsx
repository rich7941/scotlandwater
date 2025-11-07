import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="bg-[#5B2C6F] text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About ScotWater
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            From residential lead pipe replacement to burst water main repairs, we're here 
            to help. We're proud to offer a 24-hour emergency response across Scotland, 
            using the latest technology combined with good old-fashioned expertise to 
            solve a wide range of problems.
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#5B2C6F] hover:bg-gray-100 font-semibold"
          >
            Find out more
          </Button>
        </div>
      </div>
    </section>
  );
}
