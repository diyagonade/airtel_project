import React, { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: date
    }));
  };

  const isFormValid = () => {
    return formData.name && formData.company && formData.email && formData.phone && formData.selectedDate;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      setShowModal(false);
    }
  };
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expand Smarter.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Grow Faster.
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Insights as a Service by Airtel turns telco-scale data into powerful location intelligence.
              </h2>
              <h3 className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Whether you're expanding retail, targeting high-value customers, or optimizing media spends, our AI-powered platform helps you pinpoint the best location, markets, and cities to drive business impact.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 font-semibold flex items-center justify-center group">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#E3E5FF] text-black px-8 py-4 rounded-xl hover:bg-[#D1D4FF] transition-colors duration-200 font-semibold"
              >
                Book a Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/3.png" alt="Location Intelligence Platform" className="w-full h-96 object-cover" />
              <div className="absolute top-12 right-8 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="text-xs font-semibold text-gray-900">Footfall: 15K/day</div>
                <div className="text-xs text-gray-600">Demographics: A+</div>
              </div>
              <div className="absolute bottom-32 left-8 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="text-xs font-semibold text-gray-900">ROI: 24%</div>
                <div className="text-xs text-gray-600">Competition: Low</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6 text-blue-600">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Schedule Your Demo</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-500">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">Select a convenient date and time for your personalized demo</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" 
                    placeholder="Company name" 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" 
                  placeholder="your.email@company.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" 
                  placeholder="+91 98765 43210" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Date</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Wed, Jul 9', 'Thu, Jul 10', 'Fri, Jul 11', 'Mon, Jul 14', 'Tue, Jul 15', 'Wed, Jul 16', 'Thu, Jul 17', 'Fri, Jul 18', 'Mon, Jul 21', 'Tue, Jul 22'].map((date) => (
                    <button 
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className={`p-3 text-sm rounded-lg border transition-all ${
                        formData.selectedDate === date 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{date}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isFormValid() 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;