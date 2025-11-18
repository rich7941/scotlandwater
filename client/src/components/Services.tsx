export default function Services() {
  const services = [
    {
      image: "/service_lead_pipe_replacement.jpeg",
      title: "Lead Pipe Replacement"
    },
    {
      image: "/service_lead_pipe_scheme.png",
      title: "Lead Pipe Replacement Scheme"
    },
    {
      image: "/service_water_supply_installation.jpeg",
      title: "Water Supply Pipe Installations"
    },
    {
      image: "/service_water_supply_repair.png",
      title: "Water Supply Pipe Repair"
    },
    {
      image: "/service_water_main_installation.jpeg",
      title: "Water Main Installations"
    },
    {
      image: "/service_water_main_repair.jpeg",
      title: "Water Main Repairs"
    },
    {
      image: "/service_leak_detection.jpeg",
      title: "Water Leak Detection"
    },
    {
      image: "/service_impact_moling.jpeg",
      title: "Impact Moling"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] text-center mb-12">
          ScotWater's Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1B3A6B] text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
