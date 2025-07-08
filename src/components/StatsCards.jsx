import React from 'react';
import { Target, Search, BarChart3, Zap, Map, Plus } from 'lucide-react';

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: <Target className="w-6 h-6" />,
      category: "Map-Based",
      title: "Rank cities based on demand potential",
      description: "Analyze demographic patterns, purchasing power, and market saturation to identify cities with the highest growth potential for your brand.",
      examples: [
        { city: "Mumbai", status: "High Demand", color: "bg-green-500", bgColor: "bg-green-100", hoverBg: "group-hover:bg-green-200" },
        { city: "Bangalore", status: "Medium", color: "bg-yellow-500", bgColor: "bg-yellow-100", hoverBg: "group-hover:bg-yellow-200" },
        { city: "Chennai", status: "Low", color: "bg-red-500", bgColor: "bg-red-100", hoverBg: "group-hover:bg-red-200" }
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      category: "Predictive", 
      title: "Discover best markets within a city",
      description: "Deep-dive into micro-markets using footfall analytics, competitor mapping, and customer behavior patterns to find optimal locations.",
      isFootfall: true
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      category: "Data-Rich",
      title: "Identify streets for the best ROI for your brand", 
      description: "Street-level analysis with customer density mapping, demographic profiling, and catchment area evaluation for maximum returns.",
      streets: [
        { name: "MG Road", density: "High", target: "Young Prof" },
        { name: "Brigade Road", density: "Medium", target: "Millennials" }
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      category: "AI-Powered",
      title: "Capture and evaluate properties faster",
      description: "Streamline property evaluation with integrated rent data, property images, and automated scoring based on location intelligence.",
      properties: [
        { type: "Prime Location", rent: "₹2.5L/month", score: "9.2/10", scoreColor: "text-green-600" },
        { type: "Good Location", rent: "₹1.8L/month", score: "7.5/10", scoreColor: "text-yellow-600" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What the Platform Can Do for You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore powerful capabilities that guide your location-based decisions with precision and intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {capability.category}
                  </span>
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {capability.description}
                </p>

                {/* Interactive Visualization */}
                <div className="mb-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 p-6 group-hover:from-blue-100 group-hover:to-teal-100 transition-all duration-500">
                  <div className="h-48 relative">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-500">
                      <div className="w-full h-full relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-2">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div 
                              key={i}
                              className="border border-blue-200 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                              style={{ animationDelay: `${i * 50}ms` }}
                            />
                          ))}
                        </div>
                        
                        {/* Grid Reference Lines */}
                        <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-400 opacity-50 group-hover:opacity-70 group-hover:h-1 transition-all duration-500" />
                        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gray-400 opacity-50 group-hover:opacity-70 group-hover:h-1 transition-all duration-500" />
                        <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gray-400 opacity-50 group-hover:opacity-70 group-hover:w-1 transition-all duration-500" />
                        <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-gray-400 opacity-50 group-hover:opacity-70 group-hover:w-1 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10">
                      {/* City Rankings */}
                      {capability.examples && (
                        <div className="space-y-3 p-4">
                          {capability.examples.map((example, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center space-x-3 transform group-hover:translate-x-2 transition-transform duration-500"
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              <div className={`w-3 h-3 ${example.color} rounded-full group-hover:scale-125 transition-transform duration-300`} />
                              <div className={`flex-1 ${example.bgColor} h-6 rounded flex items-center px-3 ${example.hoverBg} transition-colors duration-300`}>
                                <span className="text-xs font-medium">{example.city} - {example.status}</span>
                              </div>
                            </div>
                          ))}
                          
                          {/* Floating Indicators */}
                          <div className="absolute top-6 left-8 w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                          <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                          <div className="absolute bottom-8 left-16 w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                        </div>
                      )}

                      {/* Footfall Analysis */}
                      {capability.isFootfall && (
                        <>
                          <div className="absolute top-3 left-3 w-12 h-12 bg-red-400 rounded-full opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                          <div className="absolute top-6 right-6 w-8 h-8 bg-orange-400 rounded-full opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" style={{ transitionDelay: '100ms' }} />
                          <div className="absolute bottom-6 left-1/3 w-16 h-16 bg-green-400 rounded-full opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" style={{ transitionDelay: '200ms' }} />
                          
                          <div className="absolute bottom-3 right-3 bg-white p-2 rounded shadow text-xs group-hover:scale-105 transition-transform duration-300">
                            <Map className="w-3 h-3 inline mr-1" />
                            Footfall Density
                          </div>
                          
                          {/* Animated Dots */}
                          <div className="absolute top-9 left-9 w-1.5 h-1.5 bg-white rounded-full group-hover:animate-bounce" />
                          <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-white rounded-full group-hover:animate-bounce" style={{ animationDelay: '200ms' }} />
                          <div className="absolute bottom-12 left-1/2 w-1.5 h-1.5 bg-white rounded-full group-hover:animate-bounce" style={{ animationDelay: '400ms' }} />
                        </>
                      )}

                      {/* Street Analysis */}
                      {capability.streets && (
                        <div className="space-y-3 p-4">
                          {capability.streets.map((street, idx) => (
                            <div 
                              key={idx}
                              className="bg-white p-3 rounded-lg shadow transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              <div className="text-xs font-semibold">{street.name}</div>
                              <div className="text-xs text-gray-600">Density: {street.density} | TG: {street.target}</div>
                            </div>
                          ))}
                          
                          <div className="absolute top-6 left-6 w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                          <div className="absolute bottom-6 right-6 w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                        </div>
                      )}

                      {/* Property Evaluation */}
                      {capability.properties && (
                        <div className="space-y-3 p-4">
                          {capability.properties.map((property, idx) => (
                            <div 
                              key={idx}
                              className="bg-white p-3 rounded-lg shadow flex items-center space-x-3 transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              <div className="w-12 h-12 bg-gray-200 rounded group-hover:bg-gray-300 transition-colors duration-300" />
                              <div>
                                <div className="text-xs font-semibold">{property.type}</div>
                                <div className="text-xs text-gray-600">{property.rent}</div>
                                <div className={`text-xs ${property.scoreColor}`}>Score: {property.score}</div>
                              </div>
                            </div>
                          ))}
                          
                          <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-3">
                  <button className="flex items-center justify-between w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-sm font-medium text-gray-700">View Real-World Example</span>
                    <Plus className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PlatformCapabilities;