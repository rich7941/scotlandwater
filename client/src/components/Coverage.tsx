export default function Coverage() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Full Nationwide Coverage Across Scotland
            </h2>
            <p className="text-lg text-gray-700">
              Every day, ScotWater assists residential and commercial customers across 
              Scotland with water main repairs, installations, and lead pipe replacements.
            </p>
          </div>

          {/* Right Map */}
          <div className="flex justify-center">
            <img 
              src="/scotland_map.png" 
              alt="Our service area Scotland" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
