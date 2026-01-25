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
      <p className='text-2xl my-3'><em className='border-b-2 border-b-black rounded-r-xl'>Here are our few treks...</em></p>
      <CardDemo />
      <p className='text-2xl '><em className='border-b-2 border-b-black rounded-r-xl'>Look at our stories</em></p>
      <News />
      <Blog />

    </div >
  );
}
