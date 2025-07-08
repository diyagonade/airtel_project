import React from 'react';
import { Users, Database, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className=" py-16 px-0 bg-gray-900 leading-normal"> {/* ⬅️ added leading-normal for consistent text flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="space-y-4 text-white">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">400M+ Users Network</h3>
            <p className="text-gray-300 leading-relaxed">Airtel offers unmatched location intelligence from a network of 400M+ users across India.</p>
          </div>

          <div className="space-y-4 text-white">
            <Database className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">First-Party Telco Data</h3>
            <p className="text-gray-300 leading-relaxed">Built on first-party telco data, Airtel provides credible and scalable location insights with clear provenance and consistency.</p>
          </div>

          <div className="space-y-4 text-white">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobility Intelligence</h3>
            <p className="text-gray-300 leading-relaxed">Mobility intelligence identifies footfall patterns and location demand clusters, powered by telecom-grade infrastructure.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
