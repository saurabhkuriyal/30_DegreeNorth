"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl font-serif">
          We don&apos;t bite.
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          Whatever is on your mind—trek details, gear questions, or just sharing a story—we’re here to listen. Reach out!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          {/* Context */}
          <div className="relative rounded-3xl bg-orange-500 p-8 lg:p-10 shadow-2xl overflow-hidden group">
            {/* Decorative Circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-600 rounded-full blur-2xl opacity-40" />

            <h3 className="text-2xl font-bold text-white relative z-10 font-serif">Contact Information</h3>
            <p className="text-orange-50 mt-2 relative z-10">
              Prefer to talk? Give us a ring or drop by our basecamp.
            </p>

            <div className="mt-8 space-y-6 relative z-10">
              <div className="flex items-start gap-4 text-white">
                <Phone className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">call us</p>
                  <p className="text-orange-100">+91 987 654 3210</p>
                  <p className="text-orange-100 text-sm opacity-80">Mon-Fri from 8am to 5pm.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <MapPin className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Visit us</p>
                  <p className="text-orange-100 leading-relaxed">
                    30 Degree North Basecamp,<br />
                    123 Rajpur Road, Dehradun,<br />
                    Uttarakhand, India - 248001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <Mail className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Email us</p>
                  <p className="text-orange-100">hello@30degreenorth.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Map Placeholder or Additional Text */}
          <div className="rounded-3xl bg-white p-2 border border-zinc-200 shadow-sm h-64 overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637250631!2d77.94709420653634!3d30.32556461971701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1709664582312!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-zinc-100 shadow-xl">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-stone-50/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-stone-50/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-700">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                placeholder="Regarding Summer Treks..."
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-stone-50/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">Your Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us about the adventure you are planning..."
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-stone-50/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-zinc-800 hover:scale-[1.01] transition-all duration-300"
            >
              Send Message
              <Send className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
