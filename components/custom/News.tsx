import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { CalendarDays, MapPin } from 'lucide-react';

// 1. Define the shape of a Feature object
interface Feature {
  name: string
  description: string
  icon: React.ElementType
}

// 2. Apply the type to the array
const features: Feature[] = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function News() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">

              {/* The "Meta" Header - Like a real blog post */}
              <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="size-4 text-emerald-600" />
                  <span>Chakrata, 9,350 ft</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="size-4 text-emerald-600" />
                  <span>Field Notes</span>
                </div>
              </div>

              {/* The Story Headline */}
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                The Day the Leash Finally Came Off
              </h2>

              {/* The Narrative Body - Using "Prose" styling */}
              <div className="space-y-6 text-lg leading-8 text-gray-600 font-light">

                <p>
                  The silence hit us first. After seven hours of driving through the chaos of the plains, the engine finally cut out at the edge of the Deoban forest. There were no honking taxis, no crowded maggi points, and crucially—no other tourists.
                </p>

                <p>
                  I looked down at Bruno. Usually, on treks like Nag Tibba, I’d be reaching for his protective boots right now, worried about the sharp shale cutting his paws. But here, the ground was different.
                </p>

                {/* The Emotional Hook / "A-ha" Moment */}
                <div className="border-l-4 border-emerald-500 pl-6 py-2 italic text-gray-800 bg-gray-50 rounded-r-lg">
                  "It was an endless carpet of golden pine needles and soft moss. For the first time in his life, he didn't just walk—he floated."
                </div>

                <p>
                  We walked for hours under the massive ancient Deodars that blocked out the harsh afternoon sun. The air was cool, smelling of wet earth and resin. There was no anxiety about leopards lurking in the open, no stress about overheating. Just a boy and his dog, moving through a forest that felt like it was keeping a secret just for us.
                </p>

                <p>
                  By the time we set up camp, I realized something important: we weren't just trekking to reach a summit anymore. We were trekking to watch him be a dog again.
                </p>

              </div>

              {/* The Subtle "Call to Action" Button - soft and inviting */}
              <div className="mt-10">
                <a href="#" className="text-sm font-semibold leading-6 text-emerald-600 hover:text-emerald-500 flex items-center gap-2 group">
                  Read the full itinerary <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2432}
            height={1442}
            className="w-3xl object-cover order-first lg:order-none w-full h-full rounded-xl shadow-xl ring-1 ring-white/10 sm:w-full md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}


//  bg-gray-900