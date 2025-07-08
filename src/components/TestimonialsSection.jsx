import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Lenskart",
      logo: "L",
      position: "VP - Retail Operations",
      quote: "Airtel Intelligence helped us identify 25% more profitable locations, resulting in ₹50Cr additional revenue in the first year.",
      logoColor: "bg-blue-600"
    },
    {
      company: "HDFC Bank",
      logo: "H",
      position: "Head - Branch Expansion",
      quote: "The platform's demographic insights reduced our site selection time by 60% while improving branch performance by 35%.",
      logoColor: "bg-blue-600"
    },
    {
      company: "Reliance Trends",
      logo: "R",
      position: "Director - Store Planning",
      quote: "Street-level analytics helped us avoid 15 poor-performing locations, saving ₹30Cr in potential losses.",
      logoColor: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what our enterprise clients say about transforming their location strategy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.logoColor} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.company}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;