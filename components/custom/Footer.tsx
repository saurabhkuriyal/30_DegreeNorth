import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  // Data structure for cleaner code and easier maintenance
  const footerLinks = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: 'License', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0B1120] text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Section (Tagline & Socials) - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-400 text-sm leading-6 max-w-xs">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">X (Twitter)</span>
                {/* Lucide "Twitter" icon used here. If you specifically need the 'X' logo, 
                    you may need to import a custom SVG or ensure your lucide version supports it */}
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Section - Spans 4 columns on large screens */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Solutions Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Optional: Copyright Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-400 text-center xl:text-left">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;