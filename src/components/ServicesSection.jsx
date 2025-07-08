import React from 'react';
import { Target, Users, BarChart3, Search, Eye, MapPin } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Expansion Planning",
      description: "Discover optimal streets, zones, and neighborhoods for new outlets using mobility, footfall, and demographic data.",
      image: "/3.png"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hyperlocal Audience Targeting",
      description: "Sharpen marketing by identifying high-potential micro-markets and engaging customers where they live, move, and shop.",
      image: "/2.png"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Location Performance Insights",
      description: "Benchmark outlet activity with localized metrics like traffic density, dwell time, and area affinity to improve operations.",
      image: "/1.png"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Competitive Intelligence",
      description: "Track competitor presence, store density, and whitespace to guide smarter market entry or repositioning strategies.",
      image: "/4.png"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Optimized Outdoor Media & Visibility",
      description: "Place billboards and DOOH campaigns in zones with high footfall and target-rich audiences.",
      image: "/5.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Service Coverage Optimization",
      description: "Identify underserved or oversaturated regions using geo-mapped traffic data to refine distribution or network strategy.",
      image: "/4.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Airtel Intelligence Can Do for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for every aspect of location intelligence and business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <div className="h-32 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;