import CardDemo from '@/components/custom/CardDemo';
import Carousel from '@/components/custom/Carousel';

export default function Home() {
  return (
    <div>
      
      <Carousel />
     <p className='text-2xl my-3'><em className='border-b-2 border-b-black rounded-r-2xl'>Here are our few treks...</em></p> 
      <CardDemo />
      
    </div>
  );
}
