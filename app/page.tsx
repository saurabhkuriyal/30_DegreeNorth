import CardDemo from '@/components/custom/CardDemo';
import Carousel from '@/components/custom/Carousel';

export default function Home() {
  return (
    <div>
      
      <Carousel />
     <p className='text-2xl'><em>Here are our few treks</em></p> 
      <CardDemo />
      
    </div>
  );
}
