import { Facebook, Instagram, Mail, MapPin, Mountain, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    destinations: [
      { name: 'Kedarkantha Trek', href: '/treks/kedarkantha' },
      { name: 'Brahmatal Trek', href: '/treks/brahmatal' },
      { name: 'Roopkund Trek', href: '/treks/roopkund' },
      { name: 'Valley of Flowers', href: '/treks/valley-of-flowers' },
      { name: 'Har Ki Dun', href: '/treks/har-ki-dun' },
    ],
    adventures: [
      { name: 'Winter Treks', href: '/treks/winter' },
      { name: 'Summer Treks', href: '/treks/summer' },
      { name: 'Weekend Getaways', href: '/treks/weekend' },
      { name: 'High Altitude Expeditions', href: '/treks/expeditions' },
      { name: 'Custom Tours', href: '/custom-tours' },
    ],
    company: [
      { name: 'About 30°North', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Journal / Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cancellation Policy', href: '/cancellation' },
      { name: 'Safety Standards', href: '/safety' },
    ],
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-orange-600 p-2 rounded-lg group-hover:bg-orange-700 transition-colors">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">30°North</span>
            </Link>
            <p className="text-neutral-400 text-base leading-relaxed max-w-md">
              Discover the untamed beauty of the Himalayas. We craft unforgettable trekking experiences that challenge your spirit and soothe your soul.
            </p>

            <div className="flex flex-col gap-4 text-neutral-400 pt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span>Dehradun, Uttarakhand, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>explore@30degreenorth.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Join our expedition</h3>
              <p className="text-neutral-400 mb-6">Subscribe to get latest trek updates, seasonal offers, and mountain stories directly in your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4"
              //  onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-neutral-800 border-neutral-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600/50 placeholder:text-neutral-500 transition-all"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-orange-600/20">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-neutral-800">
          {/* Destinations Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase">Destinations</h3>
            <ul className="space-y-4">
              {footerLinks.destinations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adventures Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase">Trek Styles</h3>
            <ul className="space-y-4">
              {footerLinks.adventures.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-orange-500 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {currentYear} 30°North. All rights reserved. <br className="hidden md:block" />
            <span className="text-neutral-600 text-xs mt-1 block">Designed for explorers, by explorers.</span>
          </p>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110">
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;