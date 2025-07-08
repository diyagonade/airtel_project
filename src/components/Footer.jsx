import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/Airtel.png" alt="Airtel" className="w-8 h-8" />
              <span className="text-xl font-bold">Airtel Intelligence</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your location strategy with AI-powered insights and comprehensive market intelligence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-mail w-5 h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-phone w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li><a href="/site-selection" className="hover:text-white transition-colors">Site Selection</a></li>
              <li><a href="/market-analysis" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="/demographics" className="hover:text-white transition-colors">Demographics</a></li>
              <li><a href="/competition" className="hover:text-white transition-colors">Competition</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-400">© 2025 Airtel Intelligence. All rights reserved.</p>
          <p className="text-gray-400">Powered by Airtel's location intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
