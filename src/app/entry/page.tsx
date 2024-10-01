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
      </div>
    </main>
  );
}
