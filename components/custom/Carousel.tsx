"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

type CarouselProps = {
    images?: string[];
    interval?: number; // ms
    className?: string;
};

const DEFAULT_IMAGES = [
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1920&auto=format&fit=crop",
];

export default function Carousel({
    images = DEFAULT_IMAGES,
    interval = 3000,
    className = "",
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // Swipe handling
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Timer for autoplay
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const length = images.length;

    // Next/Prev Logic
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % length);
    }, [length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    }, [length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Autoplay Effect
    useEffect(() => {
        if (isPlaying && !isHovered) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, interval);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, isHovered, interval, nextSlide]);

    // Touch Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            nextSlide();
        } else if (distance < -minSwipeDistance) {
            prevSlide();
        }

        // Reset
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div
            className={cn(
                "relative w-full h-[85vh] md:h-screen bg-black group overflow-hidden select-none",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Main Image Layer */}
            <div className="absolute inset-0 w-full h-full">
                {images.map((img, index) => (
                    <div
                        key={`slide-${index}`}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                    >
                        {/* 
                            Image Container with Keyframe Animation Support 
                            We simply transition scale for a "Ken Burns" effect when active.
                         */}
                        <div className={cn(
                            "relative w-full h-full transition-transform duration-[10000ms] ease-linear",
                            index === currentIndex ? "scale-110" : "scale-100"
                        )}>
                            <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="100vw"
                                quality={90}
                            />
                            {/* Subtle Overlay to make text/nav pop if needed, but keeping image clear */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls Info Layer */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-12 flex flex-col md:flex-row items-end justify-between gap-6">

                {/* Text/Caption Placeholder (Optional, can be removed if not needed) */}
                <div className="max-w-xl space-y-2 opacity-0 animate-fade-in-up" key={currentIndex}>
                    {/* You could add dynamic captions here in the future */}
                </div>

                {/* Controls Container */}
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">

                    {/* Indicators */}
                    <div className="flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={cn(
                                    "h-1 transition-all duration-500 rounded-full box-content border border-transparent bg-clip-padding",
                                    i === currentIndex ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/70"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95 hidden md:flex"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                        </button>

                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
