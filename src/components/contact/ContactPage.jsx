import React, { useState } from 'react';
import { 
  Mail, Phone, Clock, ArrowRight, CheckCircle, Send, 
  Shield, FileText, MessageSquare, AlertCircle, Users,
  Briefcase, Globe, HelpCircle, ChevronDown, Star,
  Award, Zap, Lock, Coffee, Cpu   
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import JeevanDevLogo from '../Home/JeevanDevLogo';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "We respond to all inquiries within 12 business hours. For urgent matters, please mention 'URGENT' in your message subject."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free 30-minute consultation to discuss your project requirements, goals, and provide initial recommendations."
    },
    {
      question: "What information should I provide?",
      answer: "Include your project goals, timeline, budget range, and any specific requirements. The more details, the better we can assist."
    },
    {
      question: "Is my information confidential?",
      answer: "Absolutely. All project discussions are covered by confidentiality. We sign NDAs upon request before detailed discussions."
    },
    {
      question: "What happens after I submit the form?",
      answer: "You'll receive a confirmation email, and one of our project consultants will reach out to schedule a consultation call."
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites, web applications, e-commerce solutions",
      icon: Globe
    },
    {
      title: "Mobile Development",
      description: "iOS and Android apps, cross-platform solutions",
      icon: Briefcase
    },
    {
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, design systems",
      icon: Award
    },
    {
      title: "Cloud Solutions",
      description: "Cloud migration, DevOps, infrastructure management",
      icon: Zap
    },
    {
      title: "AI Automation",
      description: "Chatbots, workflow automation, AI integrations, smart systems",
      icon: Cpu
    }
  ];

  const policies = [
    {
      title: "Consultation Policy",
      items: [
        "Free 30-minute initial consultation",
        "Follow-up meetings require signed agreement",
        "Technical discovery calls available"
      ]
    },
    {
      title: "Confidentiality",
      items: [
        "NDA available upon request",
        "All discussions are strictly confidential",
        "Data protected under Indian IT Act"
      ]
    },
    {
      title: "Response Commitment",
      items: [
        "12-hour response guarantee",
        "Monday-Saturday, 9AM-7PM IST",
        "Emergency contact available"
      ]
    },
    {
      title: "Project Process",
      items: [
        "Requirement analysis",
        "Proposal & estimation",
        "Development & testing",
        "Deployment & support"
      ]
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8">
                <CheckCircle size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Thank You!</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Your message has been sent successfully.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">What happens next?</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "You'll receive a confirmation email shortly",
                  "Our team will review your project details",
                  "We'll contact you within 12 business hours",
                  "Schedule a free consultation call",
                  "Discuss your project in detail"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] sm:text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
              >
                Send Another Message
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <div className="fixed inset-0 opacity-60">
        <div className="fixed inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      <div className="relative z-10">
        <Navbar />
      
        <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Header with Stats */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b16848] rounded-full mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-sm text-white font-medium">24/7 Support Available</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b2b45] mb-3 sm:mb-4">
              Let's Work Together
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
              Have a project in mind? We're here to turn your ideas into reality. 
              Share your requirements and we'll get back to you within 12 hours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="p-4 sm:p-5 md:p-6 border border-[#b16848] rounded-xl hover:border-black transition-colors group backdrop-blur-sm bg-white/80">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#b16848] group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Email Us</h3>
                  <a href="mailto:contact@sampcoreai.com" className="text-gray-600 hover:text-black text-xs sm:text-sm break-all">
                    contact@sampcoreai.com
                  </a>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2">24h response guarantee</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 border border-[#b16848] rounded-xl hover:border-black transition-colors group backdrop-blur-sm bg-white/80">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#b16848] group-hover:text-white transition-colors flex-shrink-0">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Call / WhatsApp</h3>
                  <a href="tel:+918770753546" className="text-gray-600 hover:text-black text-xs sm:text-sm">
                    +91 87707 53546
                  </a>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2">Mon-Sat, 9AM-7PM IST</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 border border-[#b16848] rounded-xl hover:border-black transition-colors group backdrop-blur-sm bg-white/80 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#b16848] group-hover:text-white transition-colors flex-shrink-0">
                  <Coffee size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Free Consultation</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">30-min no obligation call</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2">Schedule anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Left Side - Detailed Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Services */}
              <div className="border border-[#b16848] rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm bg-white/80">
                <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#b16848] flex items-center gap-2">
                  <Briefcase size={18} className="sm:w-5 sm:h-5" />
                  Services We Offer
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-2 sm:gap-3">
                      <service.icon size={14} className="sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-xs sm:text-sm">{service.title}</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="border border-[#b16848] rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm bg-white/80">
                <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#b16848] flex items-center gap-2">
                  <Star size={18} className="sm:w-5 sm:h-5" />
                  Why Choose Us
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "5+ years of industry experience",
                    "Expert team of developers & designers",
                    "Transparent communication",
                    "Flexible engagement models",
                    "Post-delivery support",
                    "Competitive pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <CheckCircle size={12} className="sm:w-3.5 sm:h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="border border-[#b16848] rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm bg-white/80">
                <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#b16848] flex items-center gap-2">
                  <Shield size={18} className="sm:w-5 sm:h-5" />
                  Our Commitments
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {policies.map((policy, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2">{policy.title}</h3>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {policy.items.map((item, i) => (
                          <li key={i} className="text-[10px] sm:text-xs text-gray-500 flex items-start gap-1.5 sm:gap-2">
                            <span className="text-black">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <div className="border border-[#b16848] rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm bg-white/80">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-[#b16848]">Send Your Requirements</h2>
                <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
                  Fill in the details below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Personal Info */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
{/* Project Details */}
<div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
  <div>
    <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Service Required *</label>
    <div className="relative">
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm bg-white appearance-none cursor-pointer pr-8 sm:pr-10"
      >
        <option value="">Select a service</option>
        <option value="web">Web Development</option>
        <option value="mobile">Mobile Development</option>
        <option value="uiux">UI/UX Design</option>
        <option value="cloud">Cloud Solutions</option>
        <option value="consulting">IT Consulting</option>
        <option value="other">Other</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 pointer-events-none">
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  </div>
  <div>
    <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Budget Range</label>
    <div className="relative">
      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm bg-white appearance-none cursor-pointer pr-8 sm:pr-10"
      >
        <option value="">Select budget range</option>
        <option value="<5k">Less than $5,000</option>
        <option value="5k-10k">$5,000 - $10,000</option>
        <option value="10k-25k">$10,000 - $25,000</option>
        <option value="25k-50k">$25,000 - $50,000</option>
        <option value=">50k">$50,000+</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 pointer-events-none">
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  </div>
</div>

<div>
  <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Timeline</label>
  <div className="relative">
    <select
      name="timeline"
      value={formData.timeline}
      onChange={handleChange}
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm bg-white appearance-none cursor-pointer pr-8 sm:pr-10"
    >
      <option value="">Select expected timeline</option>
      <option value="<1month">Less than 1 month</option>
      <option value="1-3months">1-3 months</option>
      <option value="3-6months">3-6 months</option>
      <option value=">6months">6+ months</option>
      <option value="flexible">Flexible / Not sure</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 pointer-events-none">
      <ChevronDown size={16} className="text-gray-400" />
    </div>
  </div>
</div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#b16848] rounded-lg focus:outline-none focus:border-black transition-colors text-xs sm:text-sm resize-none"
                      placeholder="Please describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-4 bg-[#b16848] text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#b16848] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-xs text-gray-400 text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                    Your information is secure and will never be shared.
                  </p>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-6 sm:mt-7 md:mt-8 border border-[#b16848] rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm bg-white/80">
                <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#b16848] flex items-center gap-2">
                  <HelpCircle size={18} className="sm:w-5 sm:h-5" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-2 sm:pb-3 last:pb-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between text-left gap-2"
                      >
                        <span className="text-xs sm:text-sm font-medium">{faq.question}</span>
                        <ChevronDown 
                          size={14} 
                          className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaq === index ? 'mt-1.5 sm:mt-2 max-h-40' : 'max-h-0'
                        }`}
                      >
                        <p className="text-[10px] sm:text-xs text-gray-500">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <JeevanDevLogo />
      </div>
    </div>
  );
};

export default ContactPage;