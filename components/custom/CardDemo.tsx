"use client";

import { TravelCard } from "@/components/ui/card-7";
import { Mountain } from "lucide-react";
import { Toaster, toast } from "sonner";

// Demo component to showcase the TravelCard
export default function CardDemo() {
  const handleBooking = () => {
    toast.success("Booking initiated!", {
      description: "Redirecting to booking page...",
    });
  };

  return (
    <>
      {/* The Toaster component is required to display the notifications */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3"> 
        <div>
      <Toaster richColors />
      <div className="flex w-full items-center justify-center bg-background p-4">
        <TravelCard
          imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Misty mountains over a serene lake"
          logo={<Mountain className="h-6 w-6 text-white/80" />}
          title="Manhattan Green Camp"
          location="Cloud City, Atmosphere 78910, Planet Earth"
          overview="Discover nature where spacious campsites, scenic trails, and cozy campfires await. Perfect for families, friends, and solo adventurers."
          price={120}
          pricePeriod="Per Night"
          onBookNow={handleBooking}
          aria-label="Travel card for Manhattan Green Camp"
        />
      </div>
      </div>
       <div>
      <Toaster richColors />
      <div className="flex w-full items-center justify-center bg-background p-4">
        <TravelCard
          imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Misty mountains over a serene lake"
          logo={<Mountain className="h-6 w-6 text-white/80" />}
          title="Manhattan Green Camp"
          location="Cloud City, Atmosphere 78910, Planet Earth"
          overview="Discover nature where spacious campsites, scenic trails, and cozy campfires await. Perfect for families, friends, and solo adventurers."
          price={120}
          pricePeriod="Per Night"
          onBookNow={handleBooking}
          aria-label="Travel card for Manhattan Green Camp"
        />
      </div>
      </div>
       <div>
      <Toaster richColors />
      <div className="flex w-full items-center justify-center bg-background p-4">
        <TravelCard
          imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Misty mountains over a serene lake"
          logo={<Mountain className="h-6 w-6 text-white/80" />}
          title="Manhattan Green Camp"
          location="Cloud City, Atmosphere 78910, Planet Earth"
          overview="Discover nature where spacious campsites, scenic trails, and cozy campfires await. Perfect for families, friends, and solo adventurers."
          price={120}
          pricePeriod="Per Night"
          onBookNow={handleBooking}
          aria-label="Travel card for Manhattan Green Camp"
        />
      </div>
      </div>
      </div>
    </>
  );
}