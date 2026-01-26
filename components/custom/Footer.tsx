import { Facebook, Instagram, Mountain, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    destinations: [
      { name: 'Kedarkantha', href: '/treks/kedarkantha' },
      { name: 'Brahmatal', href: '/treks/brahmatal' },
      { name: 'Roopkund', href: '/treks/roopkund' },
      { name: 'Valley of Flowers', href: '/treks/valley-of-flowers' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Journal', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cancellation', href: '/cancellation' },
    ],
  };

  return (
    <footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Mountain className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold tracking-tight text-stone-900">30°North</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed">
              Crafting unforgettable Himalayan experiences since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.destinations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-stone-500 hover:text-orange-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-stone-500 hover:text-orange-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Compact) */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Stay Updated</h3>
            <p className="text-stone-500 text-sm mb-4">Latest treks & news.</p>
            <form className="flex flex-col gap-2"
            //  onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 transition-all placeholder:text-stone-400"
              />
              <button className="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>&copy; {currentYear} 30°North. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-stone-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;