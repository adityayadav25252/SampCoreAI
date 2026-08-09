import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full text-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 sm:mb-10 border-b-2 border-[#b9643b] pb-6 sm:pb-8 gap-6 lg:gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
              <span className="text-[#1b2c46]">GET IN </span>
              <span
                className="text-transparent inline-block"
                style={{ WebkitTextStroke: '2px #b9643b' }}
              >
                TOUCH
              </span>
            </h1>
           
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-xs tracking-[3px] uppercase text-[#b9643b] border-b-2 border-[#b9643b] pb-2">
              Available 24/7
            </span>
             <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-lg">
              Have a project in mind? Let's collaborate and bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10">
          {/* LEFT SIDE - Contact Info */}
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            style={{ border: '1px solid #b9643b' }}
          >
            <p className="text-xs tracking-[3px] uppercase text-[#b9643b] border-b border-[#b9643b] pb-2 mb-6">
              Reach Us Directly
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#b9643b] pb-3 gap-1 sm:gap-0">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:contact@sampcoreai.com"
                  className="font-semibold hover:text-[#b9643b] transition-colors break-all sm:break-normal"
                >
                  contact@sampcoreai.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#b9643b] pb-3 gap-1 sm:gap-0">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+918770753546"
                  className="font-semibold hover:text-[#b9643b] transition-colors"
                >
                  +91 8770753546
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Response Time
                </span>
                <span className="font-semibold text-[#b9643b]">
                  Within 24 hrs
                </span>
              </div>
            </div>

            {/* Social Links (Optional) */}
            <div className="mt-8 pt-6 border-t border-[#b9643b]/30">
              <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-semibold hover:text-[#b9643b] transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            style={{ border: '1px solid #b9643b' }}
          >
            <p className="text-xs tracking-[3px] uppercase border-b border-[#b9643b] pb-2 mb-6">
              Send Us A Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Name <span className="text-[#b9643b]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className={`w-full font-semibold bg-transparent border-b focus:border-black outline-none py-2 transition-colors ${
                    errors.name ? "border-red-500" : "border-[#b9643b]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Email <span className="text-[#b9643b]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={`w-full font-semibold bg-transparent border-b focus:border-black outline-none py-2 transition-colors ${
                    errors.email ? "border-red-500" : "border-[#b9643b]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full font-semibold bg-transparent border-b border-[#b9643b] focus:border-black outline-none py-2 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Message <span className="text-[#b9643b]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className={`w-full font-semibold bg-transparent border-b focus:border-black outline-none py-2 min-h-[80px] sm:min-h-[90px] resize-y transition-colors ${
                    errors.message ? "border-red-500" : "border-[#b9643b]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2 gap-4 sm:gap-0">
                <p className="text-xs text-gray-400 order-2 sm:order-1">
                  <span className="text-[#b9643b]">*</span> Required fields
                </p>
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs sm:text-sm tracking-widest font-semibold w-full sm:w-auto order-1 sm:order-2"
                >
                  Send Message
                </button>
              </div>

              {sent && (
                <div className="animate-fadeIn">
                  <p className="text-sm text-center sm:text-right pt-3 border-t border-green-500 text-green-600 font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

       
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}