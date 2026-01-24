import { ArrowRight, Heart, Leaf, Map, Mountain, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
// If button component doesn't exist, I will use standard button.
// Checking package.json, typically "components/ui" suggests potential shadcn presence but not explicitly listed in dependencies (though radix is there).
// To be safe I'll use standard elements with Tailwind classes if I'm not sure, but let's try to assume basic standard tags first or inline styles.

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="Trekking in key wilderness"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-black/60">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Escape the City. <span className="text-primary-foreground/90">Discover Nature.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light mb-8 drop-shadow-md">
            Journey with 30 DegreeNorth to the untouched peaks and valleys where adventure awaits.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-xl backdrop-blur-sm">
              Join Our Next Trek
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Reconnecting Souls with the <span className="text-blue-600 dark:text-blue-400">Wilderness</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started 30 DegreeNorth with a simple belief: modern life is loud, but nature speaks in silence. We curate trekking experiences that aren't just about reaching a summit, but about the journey within.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are a seasoned mountaineer or a first-time hiker, our goal is to provide safe, sustainable, and soul-stirring adventures that stay with you long after you return to the city.
            </p>

            <div className="pt-4 flex items-center gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Safety Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-500" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Fallback image or sidebar visual using simple gradient for now if specific asset not ready, 
                 but reusing the hero style or another block. Ideally would have second image.
                 I'll use a solid color block with pattern or a placeholder for now to be safe.*/}
            <div className="absolute inset-0 bg-stone-900 flex items-center justify-center group-hover:scale-105 transition duration-700">
              <Map className="w-32 h-32 text-stone-700 opacity-50" />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white">
                <p className="font-serif italic text-xl">"The mountains are calling and I must go."</p>
                <p className="mt-2 text-sm opacity-80">- John Muir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Travel With Us?</h2>
            <p className="text-muted-foreground">
              We don't just guide you; we walk with you. Here is what makes 30 DegreeNorth the preferred choice for adventurers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mountain className="w-8 h-8 text-blue-500" />,
                title: "Expert Guides",
                desc: "Our team consists of certified mountaineers and locals who know every trail, rock, and story of the mountains."
              },
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Personalized Care",
                desc: "Small groups, personal attention, and itineraries tailored to your pace and comfort levels."
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-500" />,
                title: "Sustainable Travel",
                desc: "We practice 'Leave No Trace' principles. We respect nature and ensure our treks preserve the ecosystem."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="bg-background-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Adventure CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 z-0">
          {/* Abstract minimalist background pattern */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to swap the subway for the summit?
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Book your next expedition with us and rediscover the thrill of the unknown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-stone-900 font-bold rounded-lg hover:bg-stone-200 transition text-lg flex items-center justify-center gap-2">
              Explore Our Treks <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
