'use client'
import BlogTab from '@/comps/BlogTab'
import entriesData from '@/entries/entry.json'

export default function EntriesPage() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left'>

        {entriesData.map((entry) => (
          <BlogTab
            id={entry.id}
            bod={entry.content}
          />
        ))}
        
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            placehold
          </p>
        </a>

      </div>
    </main>
  );
}
