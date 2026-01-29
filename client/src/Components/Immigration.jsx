

// components/Newsletter.jsx
import react, { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Immigration News</h2>
          <p className="text-xl mb-8">Get the latest updates on visa rules, processing times, and immigration opportunities</p>
          
          {subscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg animate-fadeIn">
              <p className="font-bold">Thank you for subscribing!</p>
              <p>You'll receive our next immigration update newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button 
                type="submit" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="mt-6 text-blue-200">We respect your privacy and never share your information</p>
        </div>
      </div>
    </section>
  );
};


const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                IP
              </div>
              <h2 className="text-2xl font-bold">Immigration<span className="text-blue-400">Pro</span></h2>
            </div>
            <p className="text-gray-400 mb-6">Your trusted partner for global immigration solutions. We make your dreams of studying, working, or settling abroad a reality.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Study Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Work Permit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Permanent Residency</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Business Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Family Sponsorship</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Countries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Canada Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">USA Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UK Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Australia Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Germany Immigration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-400">123 Immigration Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-400">info@immigrationpro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ImmigrationPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};



const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      country: "Canada PR",
      content: "ImmigrationPro made my Canadian dream come true. Their guidance through the Express Entry process was exceptional. I got my PR in just 8 months!",
      image: "RK"
    },
    {
      name: "Priya Sharma",
      country: "USA Student Visa",
      content: "I was confused about the entire visa process, but the team at ImmigrationPro handled everything professionally. Now I'm pursuing my Master's at NYU.",
      image: "PS"
    },
    {
      name: "Arun Patel",
      country: "Australia Work Visa",
      content: "The documentation support was incredible. They helped me secure a work visa for Australia with my family. Highly recommended!",
      image: "AP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Hear from people who achieved their immigration dreams with our help</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300 animate-fadeIn"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-300">{testimonial.country}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:-translate-y-1">
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};



const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    age: '',
    education: '',
    experience: '',
    country: '',
    language: ''
  });
  
  const [result, setResult] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate eligibility check
    const score = Math.floor(Math.random() * 100);
    setResult(score);
  };

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-900 text-white p-10">
              <h2 className="text-3xl font-bold mb-6">Check Your Eligibility</h2>
              <p className="mb-6">Find out which immigration programs you qualify for in just 60 seconds</p>
              
              {result !== null ? (
                <div className="text-center py-6">
                  <div className="text-5xl font-bold mb-2">{result}%</div>
                  <p className="text-xl mb-4">Eligibility Score</p>
                  <p className="mb-6">
                    {result >= 70 
                      ? "Congratulations! You have a high chance of qualifying for multiple immigration programs." 
                      : result >= 40 
                        ? "You may qualify for some immigration programs. Contact us for detailed assessment."
                        : "Your chances seem low based on this preliminary assessment. Contact us for alternative options."
                    }
                  </p>
                  <button 
                    onClick={() => setResult(null)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2">Age</label>
                    <select 
                      name="age" 
                      value={formData.age} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select Age</option>
                      <option value="18-24">18-24</option>
                      <option value="25-32">25-32</option>
                      <option value="33-40">33-40</option>
                      <option value="41+">41+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Education Level</label>
                    <select 
                      name="education" 
                      value={formData.education} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select Education</option>
                      <option value="highschool">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Work Experience</label>
                    <select 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Preferred Country</label>
                    <select 
                      name="country" 
                      value={formData.country} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Language Proficiency</label>
                    <select 
                      name="language" 
                      value={formData.language} 
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select Proficiency</option>
                      <option value="basic">Basic</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="fluent">Fluent/Native</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Check Eligibility
                  </button>
                </form>
              )}
            </div>
            
            <div className="md:w-1/2 bg-gray-800 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Why Check Eligibility?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Save time by focusing on programs you qualify for</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Understand your chances before investing time and money</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Discover alternative immigration pathways</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white">Get personalized recommendations based on your profile</span>
                </li>
              </ul>
              
              <div className="mt-10 p-6 bg-blue-900 rounded-lg">
                <h4 className="text-white font-bold mb-2">Need Detailed Assessment?</h4>
                <p className="text-blue-200 mb-4">Our immigration experts provide comprehensive profile evaluation</p>
                <button className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



import { useEffect } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Discuss your immigration goals with our experts in a detailed one-on-one session",
      icon: "🗣",
      details: "We analyze your profile, understand your aspirations, and recommend the best immigration pathways for your specific situation."
    },
    {
      step: "02",
      title: "Profile Evaluation",
      description: "Comprehensive assessment of your eligibility and documentation",
      icon: "📊",
      details: "Our experts evaluate your qualifications, work experience, language proficiency, and other factors to determine your eligibility score."
    },
    {
      step: "03",
      title: "Document Preparation",
      description: "We help you gather and prepare all required documents",
      icon: "📋",
      details: "We provide checklist, templates, and guidance for collecting and preparing all necessary documentation for your application."
    },
    {
      step: "04",
      title: "Application Submission",
      description: "We handle the entire application process for you",
      icon: "📤",
      details: "Our team completes and submits your application with careful attention to detail and compliance with all requirements."
    },
    {
      step: "05",
      title: "Visa Approval",
      description: "Celebrate your visa approval with our ongoing support",
      icon: "✅",
      details: "We guide you through the final steps and provide post-approval support for a smooth transition to your new country."
    }
  ];

  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-blue-400 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-indigo-400 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-blue-300 rounded-full filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our <span className="text-blue-600">Application Process</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A streamlined, hassle-free journey to your immigration goals with expert guidance at every step</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Steps navigation */}
          <div className="lg:w-1/3 bg-white rounded-2xl shadow-xl p-6 sticky top-24">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Application Journey</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeStep === index ? 'bg-blue-100 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${activeStep === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {step.step}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step content */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                {steps[activeStep].icon}
              </div>
              <div className="ml-6">
                <span className="text-blue-600 font-semibold">Step {steps[activeStep].step}</span>
                <h3 className="text-2xl font-bold text-gray-800">{steps[activeStep].title}</h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">{steps[activeStep].details}</p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                What to Expect
              </h4>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li>Detailed consultation with our immigration experts</li>
                <li>Personalized strategy based on your profile</li>
                <li>Clear timeline and process explanation</li>
                <li>Document checklist tailored to your case</li>
              </ul>
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                onClick={() => setActiveStep(activeStep > 0 ? activeStep - 1 : steps.length - 1)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Previous Step
              </button>
              
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${activeStep === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                    onClick={() => setActiveStep(index)}
                  ></button>
                ))}
              </div>
              
              <button 
                className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                onClick={() => setActiveStep(activeStep < steps.length - 1 ? activeStep + 1 : 0)}
              >
                Next Step
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Begin your immigration process today with our expert guidance and personalized support</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300">
              Download Checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};





const Services = () => {
  const services = [
    {
      title: "Study Visa",
      description: "Pursue your education dreams in top universities across the globe with our expert guidance.",
      icon: "🎓",
      countries: ["USA", "Canada", "UK", "Australia"]
    },
    {
      title: "Work Permit",
      description: "Secure employment opportunities abroad with proper work authorization and documentation.",
      icon: "💼",
      countries: ["Germany", "USA", "Canada", "UAE"]
    },
    {
      title: "Permanent Residency",
      description: "Achieve your dream of settling permanently in your preferred country with our PR services.",
      icon: "🏠",
      countries: ["Canada", "Australia", "New Zealand", "USA"]
    },
    {
      title: "Business Visa",
      description: "Expand your business globally with our investor and business immigration programs.",
      icon: "📈",
      countries: ["UK", "USA", "Singapore", "Portugal"]
    },
    {
      title: "Tourist Visa",
      description: "Plan your dream vacation with our hassle-free tourist visa processing services.",
      icon: "✈",
      countries: ["Schengen", "UK", "USA", "Thailand"]
    },
    {
      title: "Family Sponsorship",
      description: "Reunite with your loved ones through our family sponsorship immigration services.",
      icon: "👨‍👩‍👧‍👦",
      countries: ["Canada", "USA", "Australia", "UK"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Immigration Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive immigration solutions tailored to your specific needs and aspirations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 animate-fadeIn"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.countries.map((country, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-yellow-400 opacity-20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 opacity-10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Pathway to <span className="text-yellow-400">Global Opportunities</span></h1>
            <p className="text-xl mb-8">Expert immigration guidance for students, professionals, and families seeking to study, work, or settle abroad.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Check Eligibility
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300">
                Our Services
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              {/* 3D Globe Component */}
              <div className="absolute inset-0 bg-blue-700 rounded-full shadow-2xl transform rotate-0 hover:rotate-6 transition-transform duration-700">
                <div className="absolute inset-4 bg-blue-600 rounded-full overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-blue-400 to-blue-800"></div>
                  <div className="absolute w-full h-1/2 bg-blue-500 bottom-0 rounded-t-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white opacity-20 rounded-full"></div>
                  <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-2/3 left-2/3 w-8 h-8 bg-red-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-yellow-400 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Floating documents around the globe */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-lg shadow-xl transform rotate-12 animate-float">
                <div className="absolute inset-2 bg-blue-100 rounded"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-lg shadow-xl transform -rotate-6 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="absolute inset-2 bg-yellow-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About ImmigrationPro</h2>
            <p className="text-gray-600 mb-6">
              ImmigrationPro is a leading immigration consultancy with over 15 years of experience helping 
              individuals and families achieve their dreams of living, working, and studying abroad.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of certified immigration consultants has successfully processed thousands of applications 
              with a success rate of over 95%. We pride ourselves on providing personalized service and 
              transparent guidance throughout your immigration journey.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Successful Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Covered</div>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Our Success Stories
            </button>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission & Values</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Integrity</h4>
                    <p className="text-gray-600">We provide honest advice and transparent processes with no hidden fees or false promises.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                    <p className="text-gray-600">Our consultants stay updated with the latest immigration laws and policies across countries.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personalized Service</h4>
                    <p className="text-gray-600">We understand that each case is unique and provide tailored solutions for every client.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const VisaCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      title: "Study Visa",
      description: "For students pursuing education abroad",
      icon: "🎓",
      eligibility: "Completed secondary education, admission letter from recognized institution, proof of funds",
      documents: "Academic transcripts, passport, financial documents, language test results, statement of purpose",
      process: "University application, receive offer, financial preparation, visa application, pre-departure briefing",
      fees: "Visa fee: $150-500, Service fee: $800-1500",
      timeline: "3-6 months processing time"
    },
    {
      title: "Work Permit",
      description: "For skilled professionals seeking employment abroad",
      icon: "💼",
      eligibility: "Job offer from employer, relevant qualifications and experience, meeting language requirements",
      documents: "Employment contract, educational certificates, resume, passport, medical insurance",
      process: "Job search, employer sponsorship, work permit application, biometrics, approval",
      fees: "Visa fee: $200-1000, Service fee: $1000-2000",
      timeline: "2-8 months processing time"
    },
    {
      title: "Permanent Residency",
      description: "For individuals seeking to settle permanently",
      icon: "🏠",
      eligibility: "Points-based assessment (age, education, experience, language skills), clean background",
      documents: "Identity documents, educational credentials, work experience proof, language test results, medical exams",
      process: "Eligibility assessment, expression of interest, invitation to apply, document submission, approval",
      fees: "Visa fee: $1000-2500, Service fee: $2000-4000",
      timeline: "6-24 months processing time"
    },
    {
      title: "Business Visa",
      description: "For entrepreneurs and investors",
      icon: "📈",
      eligibility: "Business plan, investment funds, relevant experience, clean background",
      documents: "Business plan, financial documents, passport, CV, investment proof",
      process: "Business concept development, investment preparation, application submission, interview, approval",
      fees: "Visa fee: $2000-5000, Service fee: $3000-6000",
      timeline: "6-18 months processing time"
    },
    {
      title: "Tourist Visa",
      description: "For short-term visits and tourism",
      icon: "✈",
      eligibility: "Proof of ties to home country, sufficient funds, travel itinerary",
      documents: "Passport, financial proof, travel insurance, accommodation details, return ticket",
      process: "Document preparation, application submission, biometrics, approval",
      fees: "Visa fee: $50-200, Service fee: $200-500",
      timeline: "2-8 weeks processing time"
    },
    {
      title: "Family Sponsorship",
      description: "For family reunification",
      icon: "👨‍👩‍👧‍👦",
      eligibility: "Relationship proof, sponsor meeting financial requirements, clean background",
      documents: "Relationship proof, sponsor financial documents, passport, medical exams",
      process: "Sponsorship application, relationship verification, principal application, approval",
      fees: "Visa fee: $1000-1500, Service fee: $1500-2500",
      timeline: "12-36 months processing time"
    }
  ];

  return (
    <section id="visa-categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visa & Immigration Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comprehensive range of immigration services tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`p-4 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === index ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-800 shadow-md hover:shadow-lg'}`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-semibold">{category.title}</div>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-4">{categories[activeCategory].icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{categories[activeCategory].title}</h3>
              <p className="text-gray-600">{categories[activeCategory].description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h4>
              <p className="text-gray-600 mb-6">{categories[activeCategory].eligibility}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Required Documents</h4>
              <p className="text-gray-600">{categories[activeCategory].documents}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h4>
              <p className="text-gray-600 mb-6">{categories[activeCategory].process}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Fees</h4>
                  <p className="text-gray-600">{categories[activeCategory].fees}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Timeline</h4>
                  <p className="text-gray-600">{categories[activeCategory].timeline}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 mr-4">
              Check Eligibility
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Download Checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const DocumentRequirements = () => {
  const [selectedCountry, setSelectedCountry] = useState('canada');
  const [selectedVisaType, setSelectedVisaType] = useState('study');
  
  const countries = [
    { value: 'canada', label: 'Canada' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' }
  ];
  
  const visaTypes = [
    { value: 'study', label: 'Study Visa' },
    { value: 'work', label: 'Work Permit' },
    { value: 'pr', label: 'Permanent Residency' },
    { value: 'tourist', label: 'Tourist Visa' }
  ];
  
  const documents = {
    canada: {
      study: [
        'Valid Passport',
        'Letter of Acceptance from Canadian institution',
        'Proof of financial support',
        'English/French language test results',
        'Statement of Purpose',
        'Passport-size photographs'
      ],
      work: [
        'Valid Passport',
        'Job offer from Canadian employer',
        'LMIA (if required)',
        'Educational credentials',
        'Work experience letters',
        'Language test results'
      ],
      pr: [
        'Valid Passport',
        'Language test results',
        'Educational Credential Assessment (ECA)',
        'Proof of work experience',
        'Police clearance certificate',
        'Medical examination results'
      ],
      tourist: [
        'Valid Passport',
        'Proof of financial support',
        'Travel itinerary',
        'Invitation letter (if applicable)',
        'Proof of ties to home country',
        'Travel insurance'
      ]
    },
    usa: {
      study: [
        'Valid Passport',
        'Form I-20',
        'Proof of financial support',
        'Academic transcripts',
        'English language test results',
        'DS-160 confirmation page'
      ],
      work: [
        'Valid Passport',
        'Form I-797 (Petition approval)',
        'Job offer letter',
        'Educational documents',
        'Resume/CV',
        'DS-160 confirmation page'
      ],
      pr: [
        'Valid Passport',
        'Form I-485',
        'Birth certificate',
        'Marriage certificate (if applicable)',
        'Financial documents',
        'Medical examination records'
      ],
      tourist: [
        'Valid Passport',
        'DS-160 confirmation page',
        'Travel itinerary',
        'Proof of financial capability',
        'Proof of ties to home country',
        'Recent photographs'
      ]
    }
  };

  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Document Requirements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find the complete checklist of documents needed for your visa application</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Select Country</label>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countries.map(country => (
                  <option key={country.value} value={country.value}>{country.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Visa Type</label>
              <select 
                value={selectedVisaType} 
                onChange={(e) => setSelectedVisaType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {visaTypes.map(visa => (
                  <option key={visa.value} value={visa.value}>{visa.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Required Documents for {countries.find(c => c.value === selectedCountry)?.label} {visaTypes.find(v => v.value === selectedVisaType)?.label}</h3>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Essential Documents Checklist</h4>
            <ul className="space-y-3">
              {(documents[selectedCountry]?.[selectedVisaType] || documents.canada.study).map((doc, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl text-blue-600 mb-4">📄</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Download Templates</h4>
              <p className="text-gray-600 mb-4">Get professionally designed templates for SOP, LOR, and CV</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
                Download
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl text-blue-600 mb-4">📤</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Document Upload</h4>
              <p className="text-gray-600 mb-4">Securely upload your documents for our experts to review</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
                Upload Files
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl text-blue-600 mb-4">🔍</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Document Verification</h4>
              <p className="text-gray-600 mb-4">Let our experts verify your documents before submission</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
                Verify Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const NewsUpdates = () => {
  const updates = [
    {
      title: "Canada Express Entry Draw #256",
      date: "October 15, 2023",
      description: "CRS score drops to 496 in latest draw with 4,500 invitations issued",
      category: "Express Entry",
      country: "Canada"
    },
    {
      title: "USA H-1B Visa Cap Reached for FY2024",
      date: "October 10, 2023",
      description: "USCIS announces H-1B cap reached for fiscal year 2024",
      category: "Work Visa",
      country: "USA"
    },
    {
      title: "Australia Increases Migration Intake",
      date: "October 5, 2023",
      description: "Australia announces plan to increase permanent migration intake to 195,000 this year",
      category: "Migration News",
      country: "Australia"
    },
    {
      title: "UK Health and Care Worker Visa Changes",
      date: "September 28, 2023",
      description: "New benefits and pathways for health and care workers coming to the UK",
      category: "Work Visa",
      country: "UK"
    },
    {
      title: "Germany Blue Card Threshold Lowered",
      date: "September 20, 2023",
      description: "Minimum salary requirement for EU Blue Card reduced to attract more skilled workers",
      category: "Work Visa",
      country: "Germany"
    },
    {
      title: "New Zealand Opens New Green List",
      date: "September 15, 2023",
      description: "17 new roles added to Green List for straight-to-residence pathway",
      category: "Migration News",
      country: "New Zealand"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay informed with the latest immigration news, policy changes, and application deadlines</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {update.country}
                  </span>
                  <span className="text-gray-500 text-sm">{update.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{update.category}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 mr-4">
            View All Updates
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};



const FeeCalculator = () => {
  const [formData, setFormData] = useState({
    country: '',
    visaType: '',
    familyMembers: '1'
  });
  
  const [estimatedFees, setEstimatedFees] = useState(null);
  
  const countries = [
    { value: 'canada', label: 'Canada', currency: 'CAD' },
    { value: 'usa', label: 'USA', currency: 'USD' },
    { value: 'uk', label: 'UK', currency: 'GBP' },
    { value: 'australia', label: 'Australia', currency: 'AUD' },
    { value: 'germany', label: 'Germany', currency: 'EUR' }
  ];
  
  const visaTypes = [
    { value: 'study', label: 'Study Visa' },
    { value: 'work', label: 'Work Permit' },
    { value: 'pr', label: 'Permanent Residency' },
    { value: 'business', label: 'Business Visa' },
    { value: 'tourist', label: 'Tourist Visa' }
  ];
  
  const feeStructure = {
    canada: {
      study: { government: 150, service: 800 },
      work: { government: 155, service: 1000 },
      pr: { government: 1325, service: 2000 },
      business: { government: 1575, service: 3000 },
      tourist: { government: 100, service: 200 }
    },
    usa: {
      study: { government: 185, service: 900 },
      work: { government: 190, service: 1100 },
      pr: { government: 1225, service: 2200 },
      business: { government: 2050, service: 3200 },
      tourist: { government: 160, service: 250 }
    },
    uk: {
      study: { government: 348, service: 850 },
      work: { government: 610, service: 1050 },
      pr: { government: 2389, service: 2100 },
      business: { government: 1364, service: 3100 },
      tourist: { government: 95, service: 220 }
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.country || !formData.visaType) {
      alert('Please select country and visa type');
      return;
    }
    
    const countryData = feeStructure[formData.country];
    if (!countryData) {
      alert('Fee data not available for selected country');
      return;
    }
    
    const visaData = countryData[formData.visaType];
    if (!visaData) {
      alert('Fee data not available for selected visa type');
      return;
    }
    
    const familyCount = parseInt(formData.familyMembers);
    const governmentFee = visaData.government * familyCount;
    const serviceFee = visaData.service * familyCount;
    const totalFee = governmentFee + serviceFee;
    
    setEstimatedFees({
      government: governmentFee,
      service: serviceFee,
      total: totalFee,
      currency: countries.find(c => c.value === formData.country)?.currency || 'USD'
    });
  };

  return (
    <section id="fees" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fee Calculator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Estimate the costs associated with your immigration process</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Fees</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Select Country</label>
                <select 
                  name="country"
                  value={formData.country} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.value} value={country.value}>{country.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Visa Type</label>
                <select 
                  name="visaType"
                  value={formData.visaType} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Visa Type</option>
                  {visaTypes.map(visa => (
                    <option key={visa.value} value={visa.value}>{visa.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Number of Family Members</label>
                <select 
                  name="familyMembers"
                  value={formData.familyMembers} 
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Calculate Fees
                </button>
              </div>
            </form>
          </div>
          
          {estimatedFees && (
            <div className="bg-gray-50 rounded-xl p-8 mb-12 animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Estimated Fees</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Government Fees</h4>
                  <div className="text-3xl font-bold text-blue-600">
                    {estimatedFees.currency} {estimatedFees.government}
                  </div>
                  <p className="text-gray-600 mt-2">Payable to the immigration authorities</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Service Fees</h4>
                  <div className="text-3xl font-bold text-blue-600">
                    {estimatedFees.currency} {estimatedFees.service}
                  </div>
                  <p className="text-gray-600 mt-2">Our professional service charges</p>
                </div>
                
                <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Total Estimated Cost</h4>
                  <div className="text-3xl font-bold text-blue-700">
                    {estimatedFees.currency} {estimatedFees.total}
                  </div>
                  <p className="text-gray-700 mt-2">Total investment for your immigration process</p>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Please Note:</h4>
                <p className="text-yellow-700">
                  This is an estimate only. Actual fees may vary based on your specific circumstances, 
                  additional services required, and changes in government fees. Additional costs such 
                  as language tests, medical examinations, and biometrics are not included.
                </p>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 mr-4">
              Download Detailed Fee Structure
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How long does the visa processing take?",
      answer: "Processing times vary depending on the country and visa type. Typically, student visas take 4-8 weeks, work permits 8-12 weeks, and permanent residency applications 6-24 months. We provide estimated timelines during your consultation based on your specific case."
    },
    {
      question: "Is IELTS mandatory for immigration?",
      answer: "For most English-speaking countries, language proficiency tests like IELTS are required for study, work, and permanent residency applications. However, some countries and visa categories may have exemptions based on your education background or nationality. We can advise you on the specific requirements for your situation."
    },
    {
      question: "What if my visa application gets rejected?",
      answer: "In case of rejection, we analyze the reasons for refusal and help you address the concerns in a subsequent application. We have a high success rate with appeal cases and reapplications. Our experts will guide you through the process of strengthening your application for better outcomes."
    },
    {
      question: "How much funds do I need to show for immigration?",
      answer: "Fund requirements vary by country and visa type. For example, Canada Express Entry requires around CAD $13,000 for a single applicant, while student visas typically require 1 year of tuition fees plus living expenses. We provide detailed financial guidance based on your target country and visa category."
    },
    {
      question: "Can I include my family in my application?",
      answer: "Yes, most immigration programs allow you to include your spouse and dependent children in your application. The process and requirements vary by country, and additional fees apply for each family member. We help you navigate family sponsorship options and requirements."
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "While we cannot guarantee approval (as final decisions rest with immigration authorities), we have a success rate of over 95%. Our thorough process ensures your application is complete, accurate, and presents your case in the best possible light to maximize your chances of approval."
    },
    {
      question: "How do I start the process with ImmigrationPro?",
      answer: "Starting is easy! Simply book a free consultation through our website, and one of our experts will assess your profile, discuss your options, and provide a clear roadmap for your immigration journey. We'll guide you through every step of the process."
    },
    {
      question: "What makes ImmigrationPro different from other consultancies?",
      answer: "Our 15+ years of experience, personalized approach, and high success rate set us apart. We assign a dedicated case officer to each client, provide regular updates, and offer comprehensive support from documentation to post-arrival guidance. Our transparent pricing with no hidden fees ensures you know exactly what to expect."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about immigration processes and our services</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {activeIndex === index && (
                  <div className="p-6 bg-white animate-fadeIn">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">Our immigration experts are ready to answer all your questions and provide personalized guidance</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 mr-4">
              Contact Us
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will contact you shortly!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch with our immigration experts for personalized guidance</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Country of Interest</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="study">Study Visa</option>
                    <option value="work">Work Permit</option>
                    <option value="pr">Permanent Residency</option>
                    <option value="business">Business Visa</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="family">Family Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-blue-100">123 Immigration Avenue, Suite 100<br />New York, NY 10001, USA</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-blue-100">info@immigrationpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-blue-100">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-700 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Emergency Support</h4>
                <p className="text-blue-100 mb-4">Need immediate assistance with your application?</p>
                <button className="w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3 transform hover:rotate-12 transition-transform duration-300">
            IP
          </div>
          <h1 className="text-2xl font-bold text-blue-800">Immigration<span className="text-blue-500">Pro</span></h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Process</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-full transition-colors duration-300">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Apply Now
          </button>
        </div>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600">Process</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-full">
                Login
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};



const App2 = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About/>
      <VisaCategories/>

     
      <EligibilityChecker />
      <DocumentRequirements/>
      <Process/>
      <NewsUpdates/>
      <FeeCalculator/>
      <Testimonials/>
     <FAQ/>
   
      <Newsletter />
        <Contact/>
      <Footer />
    </div>
  );
};

export default App2;
