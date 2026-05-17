import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full text-black
 "
    >
      <div className="max-w-6xl mx-auto  py-16 ">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 border-b-2 border-[#b9643b] pb-8 gap-8">
          <div className="max-w-2xl">

            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              <span className="text-[#1b2c46]"> GET IN </span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #b9643b' }}
              >
                TOUCH
              </span>
            </h1>

          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* LEFT SIDE */}
         <div className="rounded-3xl p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition" style={{border: '1px solid #b9643b'}}>

            <p className="text-xs tracking-[3px] uppercase text-[#b9643b] border-b  pb-2 mb-6">
              Reach Us Directly
            </p>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3 border-[#b9643b]">
                <span className="text-xs text-gray-500 uppercase ">
                  Email
                </span>

                <a
                  href="mailto:contact@sampcoreai.com"
                  className="font-semibold hover:underline "
                >
                contact@sampcoreai.com
                </a>
              </div>

              <div className="flex justify-between border-b pb-3 border-[#b9643b]">
                <span className="text-xs text-gray-500 uppercase">
                  Phone
                </span>

                <a
                  href="tel:+918770753546"
                  className="font-semibold hover:underline"
                >
                  +91 8770753546
                </a>
              </div>

              <div className="flex justify-between">
                <span className="text-xs text-gray-500 uppercase">
                  Response
                </span>

                <span className="font-semibold">
                  Within 24 hrs
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-3xl p-8 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 transition" style={{border: '1px solid #b9643b'}}>

            <p className="text-xs tracking-[3px] uppercase border-b pb-2 mb-6 border-[#b9643b]">
              Send Us A Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border-[#b9643b] font-semibold bg-transparent border-b  focus:border-black  outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full font-semibold bg-transparent border-b border-[#b9643b] focus:border-black  outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full font-semibold bg-transparent border-b  border-[#b9643b]   focus:border-black  outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project.."
                  required
                  className="w-full font-semibold bg-transparent border-b border-[#b9643b] focus:border-black  outline-none py-2 min-h-[90px]"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 border-2 border-black dark:border-white
                  bg-black text-white dark:bg-white dark:text-black
                  hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
                  transition uppercase text-sm tracking-widest"
                >
                  Send Message
                </button>
              </div>

              {sent && (
                <p className="text-sm text-right pt-3 border-t">
                  ✓ Message sent successfully.
                </p>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}