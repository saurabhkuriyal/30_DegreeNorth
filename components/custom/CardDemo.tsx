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
              imageUrl="https://images.unsplash.com/photo-1709033726577-2b08495a6925?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
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
              imageUrl="https://images.unsplash.com/photo-1727870877068-9cf336c94ec1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              imageUrl="https://images.unsplash.com/photo-1630811031533-e698d4218e66?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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