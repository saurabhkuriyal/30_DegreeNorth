"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Mountain, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTrekDropdownOpen, setIsTrekDropdownOpen] = useState(false);

    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trek Sub-menu items
    const trekItems = [
        { name: "Summer Treks", href: "/treks/summer" },
        { name: "Winter Treks", href: "/treks/winter" },
        { name: "Himalayan Expeditions", href: "/treks/himalayan" },
        { name: "Weekend Getaways", href: "/treks/weekend" },
    ];

    return (
        <>
            {/* 
        Main Navbar Container 
        - When at top: Full width, translucent background.
        - When scrolled: Acts as a container but visual elements shift to center pill.
      */}
            <div
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out w-full",
                    !isScrolled
                        ? "py-4 px-4 md:px-8 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/5 dark:border-white/5"
                        : "pointer-events-none py-0 bg-transparent border-transparent delay-100"
                    // pointer-events-none when scrolled so we don't block clicks on the sides of the floating pill
                )}
            >
                <div
                    className={cn(
                        "max-w-7xl mx-auto flex items-center transition-all duration-700 ease-in-out",
                        isScrolled ? "justify-center" : "justify-between"
                    )}
                >
                    {/* LOGO - Left Side */}
                    {/* Hidden/Faded out when scrolled */}
                    <div
                        className={cn(
                            "flex items-center gap-2 font-bold text-2xl tracking-tighter transition-all duration-700 ease-in-out pointer-events-auto",
                            isScrolled
                                ? "opacity-0 -translate-x-10 absolute pointer-events-none"
                                : "opacity-100 translate-x-0 relative text-zinc-900 dark:text-white"
                        )}
                    >
                        <div className="bg-orange-500 p-1.5 rounded-lg">
                            <Mountain className="text-white w-6 h-6" />
                        </div>
                        <span>30°North</span>
                    </div>

                    {/* NAVIGATION - Right Side (Becomes Center Pill) */}
                    <nav
                        className={cn(
                            "flex items-center gap-1 transition-all duration-700 ease-in-out pointer-events-auto",
                            isScrolled
                                ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl mt-6 px-6 py-3 rounded-full border border-white/20 dark:border-zinc-800"
                                : "bg-transparent py-2"
                        )}
                    >
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-1">

                            {/* Trek Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsTrekDropdownOpen(true)}
                                onMouseLeave={() => setIsTrekDropdownOpen(false)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                        isScrolled ? "text-zinc-700 dark:text-zinc-200" : "text-black dark:text-white"
                                    )}
                                >
                                    Treks
                                    <ChevronDown
                                        className={cn(
                                            "w-4 h-4 transition-transform duration-200",
                                            isTrekDropdownOpen ? "rotate-180" : ""
                                        )}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={cn(
                                        "absolute top-full left-0 mt-2 w-56 p-2 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-100 dark:border-zinc-800 transform transition-all duration-200 origin-top-left",
                                        isTrekDropdownOpen
                                            ? "opacity-100 scale-100 translate-y-0 visible"
                                            : "opacity-0 scale-95 -translate-y-2 invisible"
                                    )}
                                >
                                    {trekItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 rounded-xl text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Other Links */}
                            {["About", "Blogs", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                        isScrolled ? "text-zinc-700 dark:text-zinc-200" : "text-black dark:text-white"
                                    )}
                                >
                                    {item}
                                </Link>
                            ))}

                            {/* Separator if scrolled (optional visual break) */}
                            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-2" />

                            {/* Auth Buttons */}
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                        isScrolled ? "text-zinc-700 dark:text-zinc-200" : "text-black dark:text-white"
                                    )}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 shadow-md",
                                        "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-orange-500/20"
                                    )}
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button - Visible only on mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Content (Full Screen Overlay) */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6 text-lg font-medium">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Explore</h3>
                        {trekItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-zinc-800 dark:text-zinc-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                    <div className="space-y-4">
                        {["About", "Blogs", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block text-zinc-800 dark:text-zinc-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto mb-8 space-y-3">
                        <Link
                            href="/login"
                            className="flex items-center justify-center w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className="flex items-center justify-center w-full py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewNavbar;
