import CardDemo from '@/components/custom/CardDemo';
import Carousel from '@/components/custom/Carousel';
import { NewBanner } from '@/components/custom/NewBanner';
export default function Home() {
  return (
    <div>
      
      <Carousel />
      <NewBanner/>
     <p className='text-2xl my-3'><em className='border-b-2 border-b-black rounded-r-2xl'>Here are our few treks...</em></p> 
      <CardDemo />
      
    </div>
  );
}
