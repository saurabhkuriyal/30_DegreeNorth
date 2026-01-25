const posts = [
  {
    id: 1,
    title: 'The "Off-Leash" freedom my Husky desperately needed',
    href: '#', // Link to the specific trek page
    description:
      'Living in a Gurgaon apartment, Shadow never really gets to run. Watching him sprint across the Dayara meadows without a leash was the happiest moment of my life. The team knew exactly how to handle his energy.',
    date: 'Jan 16, 2026',
    datetime: '2026-01-16',
    category: { title: 'Dayara Bugyal', href: '#' },
    author: {
      name: 'Rohan Malhotra',
      role: 'Parent to "Shadow" (Husky)', // Crucial change: "Role" is now "Dog Parent"
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'My Shih Tzu’s first time in snow—and he loved it!',
    href: '#',
    description: 'I was terrified about the cold and the walking distance. But the team carried extra blankets, and the soft pine trails of Deoban were perfect for his little paws. We didn’t need boots at all!',
    date: 'Dec 10, 2025',
    datetime: '2025-12-10',
    category: { title: 'Chakrata / Deoban', href: '#' },
    author: {
      name: 'Aisha Verma',
      role: 'Mom to "Coco" (Shih Tzu)',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'I was worried about leopards, but their safety protocol is real',
    href: '#',
    description:
      'I almost cancelled the trip because of the wildlife news. But seeing the staff set up the solar perimeter lights and the night-watch guard gave me total peace of mind. Safest camping experience ever.',
    date: 'Feb 12, 2026',
    datetime: '2026-02-12',
    category: { title: 'Nag Tibba', href: '#' },
    author: {
      name: 'Vikram Singh',
      role: 'Dad to "Bruno" (Labrador)',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-white py-10 sm:py-15 rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">Our Testimonials</h2>
          <p className="mt-2 text-lg/8 text-gray-800">Be the part of our tribe.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-black">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-black hover:bg-gray-800"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-black group-hover:text-gray-800">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-black">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-black">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
