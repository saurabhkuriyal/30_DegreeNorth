"use client";

import { ArrowRight, Calendar, MapPin, Mountain, PawPrint, Quote, Shield, Tent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogStoryPage() {
    return (
        <div className="min-h-screen bg-stone-50 selection:bg-orange-200">

            {/* 1. IMMERSIVE HERO - The "Opening Scene" */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1712677542808-51a7a0abd954?q=80&w=2118&auto=format&fit=crop"
                    alt="Ancient Deodar Forest"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50" />

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-4 text-center">
                    <div className="flex items-center gap-3 text-white/80 mb-6 font-medium tracking-widest uppercase text-xs">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        <span>Deoban, Uttarakhand</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        <span>October 2025</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-stone-900 font-serif lowercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-stone-800 to-stone-950">
                        where the silence breathes.
                    </h1>
                    <p className="max-w-2xl text-stone-600 md:text-xl font-light leading-relaxed italic">
                        A story of ancient giants, shifting mists, and the day we realized the best journeys don't have a destination.
                    </p>
                </div>
            </section>

            {/* 2. THE NARRATIVE - Long form text */}
            <article className="max-w-3xl mx-auto px-6 py-20 md:py-32">

                {/* Intro */}
                <div className="space-y-8 text-lg md:text-xl text-stone-700 leading-relaxed font-light first-letter:text-7xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-3 first-letter:float-left">
                    <p>
                        The transition happens exactly six kilometers before you reach the Chakrata military cantonment. The air loses its humid grip, replaced by a sharp, resinous chill that smells faintly of pine needles and damp earth. After seven hours of battle with the plains of North India, we finally cut the engine.
                    </p>
                    <p>
                        There was no cheering, no "we made it" selfies. Just the silence. A silence so heavy it felt as if the forest was waiting for us to speak first. We didn't. We just walked.
                    </p>
                </div>

                {/* Mid-image: The forest atmosphere */}
                <div className="my-20 -mx-6 md:-mx-24 relative h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl skew-y-1">
                    <Image
                        src="https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Walking through the mist"
                        fill
                        className="object-cover -translate-y-10"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium border border-white/20">
                        Chasing the morning mist at 9,000 ft.
                    </div>
                </div>

                {/* The Experience Chapter */}
                <div className="space-y-12 py-10">
                    <h2 className="text-4xl font-bold font-serif text-stone-900 lowercase tracking-tighter">
                        the giants of deoban.
                    </h2>
                    <div className="space-y-8 text-lg text-stone-700 font-light leading-relaxed">
                        <p>
                            They call it Deoban—the forest of God. The trees here aren't just plants; they are ancient pillars of the sky. Deodars that have seen kingdoms rise and fall stand shoulder-to-shoulder, blocking out the sun so effectively that the ground is an endless carpet of golden needles and emerald moss.
                        </p>

                        <div className="bg-white p-8 md:p-12 rounded-[2rem] border-l-8 border-orange-500 shadow-xl my-12 relative overflow-hidden">
                            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-stone-50/50 -z-0" />
                            <p className="text-2xl font-serif text-stone-800 leading-snug relative z-10 italic">
                                "I looked at Bruno, our Labrador. For the first time, he wasn't pulling on the leash. He was sniffing a patch of wild clover, his eyes soft. He knew we were in a sacred space."
                            </p>
                        </div>

                        <p>
                            People often ask us what it's like to trek with pets in such remote areas. The answer isn't in the logistics, though we handle those with religious zeal. The answer is in the moment your dog realizes they aren't 'owned' anymore. They are companions—equal partners in the adventure.
                        </p>
                    </div>
                </div>

                {/* Feature Icons integrated into logic */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    {[
                        { icon: <Shield className="w-5 h-5" />, title: "the leopard-safe perimeter", text: "Silent solar sensors surround our tents, creating a bubble of safety while you sleep." },
                        { icon: <PawPrint className="w-5 h-5" />, title: "the soft-path policy", text: "Every trail we scout is chosen for its paw-friendly terrain. No shale, no sharp rocks." },
                        { icon: <Tent className="w-5 h-5" />, title: "4-season sanctuaries", text: "High-spec insulated tents that keep you and your pet warm at 10,000 feet." },
                        { icon: <Mountain className="w-5 h-5" />, title: "local heart", text: "Our guides are neighbors to these mountains, treating every trek like a homecoming." }
                    ].map((f, i) => (
                        <div key={i} className="group p-6 rounded-3xl border border-stone-200 hover:bg-white hover:shadow-lg transition-all">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                {f.icon}
                            </div>
                            <h4 className="font-bold text-stone-900 font-serif mb-2">{f.title}</h4>
                            <p className="text-sm text-stone-500 leading-relaxed font-light">{f.text}</p>
                        </div>
                    ))}
                </div>

                {/* The Night Chapter */}
                <div className="space-y-8 py-10">
                    <h2 className="text-4xl font-bold font-serif text-stone-900 lowercase tracking-tighter">
                        the night our world shrank.
                    </h2>
                    <div className="space-y-8 text-lg text-stone-700 font-light leading-relaxed">
                        <p>
                            As the sun dipped behind the Swargarohini peaks, the world turned a deep, bruised purple. We set up camp in a clearing that felt like the edge of the world. The temperature plummeted, but inside the tent, huddled in sleeping bags with Bruno sprawled across our feet, we were warmer than we'd ever been in a city apartment.
                        </p>
                        <p>
                            There's something transformative about eating a warm meal while looking at a sky that has no light pollution. The stars here don't just twinkle; they pulse.
                        </p>
                    </div>
                </div>
            </article>

            {/* Final Image: The wide view */}
            <section className="relative h-[60vh] w-full my-10 overflow-hidden md:rounded-[4rem] px-4 md:px-12">
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Looking at the peaks"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-12 left-12 max-w-lg">
                        <h3 className="text-3xl font-serif text-white lowercase tracking-tighter mb-4">the trek never really ends.</h3>
                        <p className="text-white/80 font-light italic">
                            You bring back the scent of cedar in your clothes, and the rhythm of the mountain in your pulse.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-32 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200 rounded-full text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-8">
                    Ready for your chapter?
                </div>
                <h2 className="text-5xl md:text-8xl font-bold text-stone-900 font-serif lowercase tracking-tighter mb-12">
                    blaze your own trail alongside us.
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        href="/treks"
                        className="group px-12 py-5 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 flex items-center gap-3"
                    >
                        Explore our Treks
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-12 py-5 border-2 border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all"
                    >
                        Talk to a Guide
                    </Link>
                </div>
            </section>

            {/* Footer Info */}
            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-xs font-medium uppercase tracking-[0.2em]">
                <span>written by arjun sharma</span>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-stone-900 transition-colors">Instagram</Link>
                    <Link href="#" className="hover:text-stone-900 transition-colors">Spotify Playlist</Link>
                </div>
                <span>© 2026 30°North journeys</span>
            </footer>

        </div>
    );
}
