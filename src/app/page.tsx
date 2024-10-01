'use client'
import BlogTab from '@/comps/BlogTab'
import entriesData from '@/entries/entry.json'

const openBlog = (id: number) => {
  window.location.href = `/entry/${id}`
};

export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>

        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Becky's really cool blog!
        </p>

      </div>
      <h1 className='font-mono text-2xl font-semibold tracking-wide lg:tracking-widest sm:tracking-tight'>
        BECKYYYY
      </h1>

      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>

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
