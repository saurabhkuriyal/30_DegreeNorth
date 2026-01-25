"use client";

import { cn } from "@/lib/utils";
import {
    AlertTriangle,
    ArrowRight,
    Calendar,
    CheckCircle2,
    ChevronDown,
    HelpCircle,
    Info,
    MapPin,
    Mountain,
    Tent,
    ThumbsUp
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock Data for "Dayara Bugyal"
const TREK_DATA = {
    id: "dayara-bugyal",
    title: "Dayara Bugyal Trek",
    subtitle: "The Most Beautiful Meadows in India",
    location: "Uttarkashi, Uttarakhand",
    altitude: "11,181 ft",
    duration: "4 Days",
    difficulty: "Easy to Moderate",
    distance: "22 km",
    images: [
        "https://images.unsplash.com/photo-1544442069-97dded965a9f?q=80&w=1931&auto=format&fit=crop", // Meadow
        "https://images.unsplash.com/photo-1712677542808-51a7a0abd954?q=80&w=2118&auto=format&fit=crop", // Forest
        "https://images.unsplash.com/photo-1736914320929-a80ed9d7c3cc?q=80&w=2070&auto=format&fit=crop", // Peak
    ],
    description: "Dayara Bugyal is often considered one of the most breathtaking alpine meadows in India. Spanning over 28 sq km, this trek takes you through ancient oak forests, vast green pastures, and offers panoramic views of the Gangotri range, Bandarpoonch, and Black Peak. Perfect for beginners and pet owners alike, it offers high rewards for relatively moderate effort.",
    itinerary: [
        {
            day: 1,
            title: "Arrival at Raithal",
            desc: "Drive from Dehradun to the base village of Raithal. Enjoy a warm homestay experience and meet your guides.",
            alt: "7,400 ft"
        },
        {
            day: 2,
            title: "Trek to Gui Campsite",
            desc: "A gentle ascent through dense oak and rhododendron forests. The trail is well-marked and offers glimpses of the peaks.",
            alt: "9,500 ft"
        },
        {
            day: 3,
            title: "Gui to Dayara Top & Back",
            desc: "The highlight day. Walk on the endless undulating meadows (Bugyals). Reach the summit and soak in the 360-degree views before returning to camp.",
            alt: "11,181 ft"
        },
        {
            day: 4,
            title: "Descent to Raithal & Drive Back",
            desc: "A quick descent back to the village where transport awaits to take you back to Dehradun.",
            alt: "7,400 ft"
        }
    ],
    importantPoints: [
        "Water sources are limited on day 2, carry at least 2 liters.",
        "Temperatures can drop to -5°C at night, even in spring.",
        "Proper hiking shoes with ankle support are mandatory.",
        "No electricity at campsites; carry power banks."
    ],
    faqs: [
        { q: "Is this trek suitable for beginners?", a: "Yes, absolutely! It has a gradual incline and well-defined trails." },
        { q: "Can I bring my dog?", a: "Yes! Dayara Bugyal is one of our most pet-friendly treks due to the soft grass terrain." },
        { q: "What is the best time to visit?", a: "May-June for flowers/greenery, and Dec-Feb for snow." },
        { q: "Is network available?", a: "Jio and Airtel work intermittently up to Gui Campsite." }
    ]
};

const IMAGES = [
    "https://images.unsplash.com/photo-1712677542808-51a7a0abd954?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544442069-97dded965a9f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1761048163886-eefd0e08455e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736914320929-a80ed9d7c3cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function TrekDetailsPage() {
    const [interestedCount, setInterestedCount] = useState(128);
    const [hasLiked, setHasLiked] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const handleInterest = () => {
        if (hasLiked) {
            setInterestedCount(p => p - 1);
            setHasLiked(false);
        } else {
            setInterestedCount(p => p + 1);
            setHasLiked(true);
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 selection:bg-orange-200 pb-20">

            {/* 1. HERO SECTION */}
            <div className="relative h-[80vh] w-full group overflow-hidden">
                <Image
                    src={TREK_DATA.images[0]}
                    alt={TREK_DATA.title}
                    fill
                    className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 text-white">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-xs mb-2">
                                <MapPin className="w-4 h-4" /> {TREK_DATA.location}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-none tracking-tighter">
                                {TREK_DATA.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-light max-w-xl">
                                {TREK_DATA.subtitle}
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full md:w-auto">
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Altitude</p>
                                <p className="text-xl font-bold">{TREK_DATA.altitude}</p>
                            </div>
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Duration</p>
                                <p className="text-xl font-bold">{TREK_DATA.duration}</p>
                            </div>
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Grade</p>
                                <p className="text-xl font-bold">{TREK_DATA.difficulty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT MAIN COLUMN */}
                <div className="lg:col-span-2 space-y-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl">

                    {/* About */}
                    <section>
                        <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-2">
                            <Info className="w-5 h-5 text-orange-600" /> About the Trek
                        </h2>
                        <p className="text-stone-600 leading-relaxed text-lg font-light">
                            {TREK_DATA.description}
                        </p>
                    </section>

                    {/* Interactive Map (Placeholder Mockup) */}
                    <section>
                        <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-orange-600" /> Route Map
                        </h2>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 group cursor-pointer">
                            {/* Using a rough image to simulate map */}
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop"
                                alt="Illustrated Route Map"
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 sepia-[.5] filter"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-sm font-bold shadow-lg text-stone-800 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    Explore Interactive Route ↗
                                </span>
                            </div>

                            {/* Mock Route Points */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-bold text-stone-700 px-4">
                                <span className="bg-white/80 px-2 py-1 rounded">Raithal</span>
                                <span className="bg-white/80 px-2 py-1 rounded">Gui</span>
                                <span className="bg-white/80 px-2 py-1 rounded">Dayara Top</span>
                            </div>
                        </div>
                        <p className="text-xs text-stone-400 mt-2 italic text-center">*Click to view detailed 3D terrain map</p>
                    </section>

                    {/* Itinerary */}
                    <section>
                        <h2 className="text-2xl font-bold text-stone-900 font-serif mb-8 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-orange-600" /> Detailed Itinerary
                        </h2>
                        <div className="space-y-0 border-l-2 border-orange-200 ml-3">
                            {TREK_DATA.itinerary.map((day, idx) => (
                                <div key={idx} className="relative pl-8 pb-10 last:pb-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm" />
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                        <h3 className="text-xl font-bold text-stone-800">Day {day.day}: {day.title}</h3>
                                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                                            {day.alt}
                                        </span>
                                    </div>
                                    <p className="text-stone-600 leading-relaxed font-light">
                                        {day.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Important Points */}
                    <section className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h2 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-600" /> Must Know Before You Go
                        </h2>
                        <ul className="space-y-3">
                            {TREK_DATA.importantPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-stone-700">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section>
                        <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-orange-600" /> Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {TREK_DATA.faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border border-stone-200 rounded-xl overflow-hidden cursor-pointer hover:border-orange-200 transition-colors bg-stone-50/50"
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                >
                                    <div className="flex items-center justify-between p-4 bg-white">
                                        <h4 className="font-semibold text-stone-800">{faq.q}</h4>
                                        <ChevronDown className={cn("w-5 h-5 text-stone-400 transition-transform", activeFaq === i ? "rotate-180" : "")} />
                                    </div>
                                    <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", activeFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0")}>
                                        <p className="p-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 bg-stone-50">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* RIGHT SIDEBAR (Sticky) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 space-y-6">

                        {/* Action Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-stone-100 text-center">
                            <p className="text-stone-500 text-sm font-medium uppercase tracking-widest mb-4">Join the Adventure</p>

                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-stone-900">₹8,500</div>
                                    <div className="text-xs text-stone-400">per person</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                                    Book This Trek <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    onClick={handleInterest}
                                    className={cn(
                                        "w-full py-3 rounded-xl font-semibold border-2 transition-all flex items-center justify-center gap-2",
                                        hasLiked
                                            ? "border-orange-600 text-orange-600 bg-orange-50"
                                            : "border-stone-200 text-stone-600 hover:border-stone-900 hover:text-stone-900"
                                    )}
                                >
                                    <ThumbsUp className={cn("w-4 h-4", hasLiked && "fill-current")} />
                                    {hasLiked ? "Marked as Interested" : "I'm Interested"}
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-stone-100">
                                <div className="flex -space-x-2 justify-center mb-2 overflow-hidden">
                                    {IMAGES.map((image, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-300 relative overflow-hidden">
                                            <Image
                                                src={image}
                                                alt="user"
                                                fill
                                            />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-500">
                                        +{interestedCount - 4}
                                    </div>
                                </div>
                                <p className="text-xs text-stone-500">
                                    <span className="font-bold text-stone-800">{interestedCount} people</span> are interested in this trek.
                                </p>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-stone-900 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <Tent className="w-8 h-8 text-orange-500 mb-4" />
                                <h3 className="font-bold text-lg mb-2">Need Customization?</h3>
                                <p className="text-stone-400 text-sm mb-4">
                                    We customize treks for colleges, corporate groups, and large families.
                                </p>
                                <a href="/contact" className="text-orange-400 text-sm font-bold hover:text-orange-300 underline underline-offset-4">
                                    Request Callback
                                </a>
                            </div>
                            {/* Decorative BG */}
                            <Mountain className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
