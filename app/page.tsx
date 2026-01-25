import Blog from '@/components/custom/Blog';
import CardDemo from '@/components/custom/CardDemo';
import Carousel from '@/components/custom/Carousel';
import { NewBanner } from '@/components/custom/NewBanner';
import News from '@/components/custom/News';
export default function Home() {
  return (
    <div>

      <Carousel />
      <NewBanner />
      {/* Treks Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-4 md:px-8 mb-8 mt-20">
        <div>
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">Curated Adventures</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif mt-2">Explore our Signature Treks</h2>
        </div>
        <div className="hidden md:block w-1/3 h-px bg-stone-200 mb-3"></div>
      </div>
      <CardDemo />

      {/* Stories Header */}
      <div className="flex flex-col items-center text-center mt-24 mb-12 px-4">
        <span className="w-px h-12 bg-orange-500 mb-6"></span>
        <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif mb-4">The Journal</h2>
        <p className="text-stone-500 italic font-light">"Stories from the trail, told by those who walked them."</p>
      </div>
      <News />
      <Blog />

    </div >
  );
}
