import React, { useEffect, useState } from 'react';
import image6 from '../images/logo.jpg'
import {Menu,ChevronDown,ChevronRight,ArrowRightCircle,Phone,Mail }from 'lucide-react';


import AOS from "aos";
import "aos/dist/aos.css";
import { useStartTyping } from 'react-use';
const DigitalMarketing = () => {
    const menuItems = [
    "Our Services",
    "Our Products",
    "Our Work",
    "Industries",
    "The Agency",
  ];
  useEffect(()=>{
    AOS.init({duration:800});
  },[]);
   const [menuOpen, setMenuOpen] = useState(false);
  const services = [
    {
      title: "SEO Optimization",
      description: "Rank higher on search engines and attract organic traffic",
      icon: "📈",
      metrics: ["+250% Traffic", "Page 1 Ranking", "Local SEO", "Technical SEO"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms",
      icon: "💬",
      metrics: ["Content Strategy", "Community Management", "Paid Ads", "Analytics"]
    },
    {
      title: "PPC Advertising",
      description: "Get immediate results with targeted paid campaigns",
      icon: "🎯",
      metrics: ["Google Ads", "Facebook Ads", "Retargeting", "Conversion Tracking"]
    }
  ];
  const quickLinks = [
    'Brisbane Local SEO',
    'Website Design Brisbane',
    'Digital Marketing Brisbane',
    'SEO Brisbane',
    'Website Design Gold Coast',
    'SEO Gold Coast',
    'Who We Are',
    'What We Do',
    'Our Expertise',
    'Contact'
  ];
  const packages = [
    'Website Design Packages',
    'Business Website Package',
    'Search Engine Optimisation Packages',
    'Meta Ads Management Package',
    'Google Ads Management Packages',
    'Pay Per Lead',
    'Facebook Ads Services',
    'Digital Marketing Consultancy',
    'Social Media Marketing',
    'SEO Consultancy / Free SEO Audit',
    'AI Voice Automation',
    'Landing Pages',
    'PPC Management'
  ];

  const service = [
    'Website Design',
    'ECommerce Websites',
    'Service Website',
    'Branding & Logo Design',
    'Digital Marketing',
    'Search Engine Optimisation',
    'Google Ads Management',
    'Meta Ads Management',
    'Content Marketing',
    'Conversion Rate Optimization',
    'Managed Hosting',
    'Go High Level CRM',
    'Ai Agents/Automation Development',
    'White Label Marketing',
    'Lead Generation'
  ];

  const industries = [
    'Mortgage & Finance',
    'Automotive',
    'Construction & Building',
    'ECommerce',
    'Health & Medical',
    'NDIS',
    'Professional Services',
    'Trade',
    'Hospitality',
    'Lawyers & Immigration Agent',
    'NDIS Website Designs & Marketing'
  ];
  return (
    <>
    {/* Header */}
          <header className="w-full bg-[#f7f7f7] py-4" data-aos="slide-down">
            <div className="mx-auto max-w-7xl px-4">
              <nav className="flex items-center justify-between rounded-2xl bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <img
                    src={image6}
                    alt="Growth Flow Media"
                    className="h-12 sm:h-16 md:h-20 w-auto"
                  />
                </div>
    
                {/* Mobile Menu Button */}
                <button 
                  className="lg:hidden p-2"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Menu size={24} />
                </button>
    
                {/* Menu - Desktop */}
                <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700">
                  {menuItems.map((item, index) => (
                    <li key={index} className="group relative cursor-pointer">
                      <div className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                        {item}
                        <ChevronDown size={14} className="hidden sm:inline" />
                      </div>
    
                      {/* Dropdown */}
                      <div className="absolute left-0 top-8 hidden w-40 rounded-xl bg-white p-4 shadow-lg group-hover:block">
                        <p className="text-sm text-gray-600 hover:text-black">
                          Option 1
                        </p>
                        <p className="text-sm text-gray-600 hover:text-black">
                          Option 2
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
    
                {/* CTA Button */}
                <button className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28] whitespace-nowrap">
                  Get Started Now <span><ArrowRightCircle size={18} className='text-black'/></span>
                </button>
              </nav>
    
              {/* Mobile Menu */}
              {menuOpen && (
                <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg">
                  <ul className="space-y-3">
                    {menuItems.map((item, index) => (
                      <li key={index} className="py-2 border-b border-gray-100">
                        {item}
                      </li>
                    ))}
                    <li>
                      <button className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28]">
                        Get Started Now <ArrowRightCircle size={18} className='text-black'/>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          <span className="gradient-text">Digital Marketing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Drive targeted traffic, generate qualified leads, and maximize your ROI with our data-driven marketing strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-full">
            <img 
              src="/images/digital-marketing.jpg" 
              alt="Digital Marketing Analytics" 
              className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Approach</h3>
            <p className="text-gray-600 mb-6">
              We don't guess—we analyze. Our marketing strategies are built on real data and continuous optimization 
              to ensure maximum return on your investment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Client ROI Increase</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 service-card">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Marketing Methodology</h2>
          <p className="text-gray-600 mb-6">
            We combine cutting-edge technology with proven marketing strategies to deliver measurable results.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Strategy Development</h4>
              <p className="text-gray-600">Custom marketing plan based on your business goals</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Implementation</h4>
              <p className="text-gray-600">Multi-channel campaign execution across all platforms</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Optimization</h4>
              <p className="text-gray-600">Continuous testing and improvement based on performance data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 service-card">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="space-y-3">
              {service.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-700">{metric}</span>
                  <span className="text-blue-500 font-semibold">✓</span>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
 {/* Latest News Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 data-aos="slide-right"className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h2>
              <p data-aos="slide-up" className="text-orange-500 text-lg sm:text-xl mb-8 sm:mb-12" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Stay up To Date With The Latest From Growth Flow Media.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div data-aos="slide-right"className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className='h-40 w-full sm:w-80 border rounded-lg overflow-hidden'>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className=''>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      How Growth Flow Media Delivers High-Performance PPC Management in Brisbane
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">January 3, 2026</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      PPC management is becoming the foundation stone for the success of businesses in Brisbane. The instantaneous reach that it offers
                    </p>
                  </div>
                </div>

                <div data-aos="slide-right" className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className='h-40 w-full sm:w-80 border rounded-lg overflow-hidden'>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className=''>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Why Your Business Needs a Professional Website Design Agency in Brisbane
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">December 26, 2025</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Website Design Agency in Brisbane plays a crucial role in today's market, where your website is often the very first
                    </p>
                  </div>
                </div>
              </div>

              <button data-aos="slide-left"className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div data-aos="slide-left" className="bg-black border rounded-lg p-4 sm:p-6 lg:p-8 mt-8 md:mt-0">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <img
                  src={image6}
                  alt="Growth Flow Media"
                  className="h-12 sm:h-16 lg:h-20 w-auto"
                />
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
           
              
                 <input
                  type="tel"
                  placeholder="Preferd call back time"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
              </div>

              <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">How We May Help You?</p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-60 overflow-y-auto pr-2">
                {[
                  'Website Design',
    'ECommerce Websites',
    'Service Website',
    'Branding & Logo Design',
    'Digital Marketing',
    'Search Engine Optimisation',
    'Google Ads Management',
    'Meta Ads Management',
    'Content Marketing',
    'Conversion Rate Optimization',
    'Managed Hosting',
    'Go High Level CRM',
    'Ai Agents/Automation Development',
    'White Label Marketing',
    'Lead Generation'
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-3 bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer hover:bg-gray-800">
                    <input type="radio" name="service" className="w-4 h-4" />
                    <span className="text-black text-xs sm:text-sm">{option}</span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-orange-600 text-base sm:text-lg">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>
         {/* Footer */}
              <footer className="px-4 sm:px-6 py-8 sm:py-12" style={{background: 'linear-gradient(180deg, #1a1f2e 0%, #0a0e1a 100%)'}}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                  {/* Quick Links Column */}
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {quickLinks.map((link, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                          <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                          <span className="truncate">{link}</span>
                        </li>
                      ))}
                    </ul>
      
                    <div className="mt-6 sm:mt-10">
                      <ul className="space-y-2 sm:space-y-3">
                        {packages.map((pkg, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                            <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                            <span className="truncate">{pkg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
      
                  {/* Our Services Column */}
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.map((service, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                          <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                          <span className="truncate">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
      
                  {/* Industries Column */}
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Industries</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {industries.map((industry, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                          <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                          <span className="truncate">{industry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
      
                {/* Bottom Footer Links */}
                <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
                    <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Privacy Policy</a>
                    <span className="hidden sm:inline">|</span>
                    <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Terms & Conditions</a>
                    <span className="hidden sm:inline">|</span>
                    <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Sitemap</a>
                  </div>
                </div>
              </footer>
    </>
  );
};

export default DigitalMarketing;