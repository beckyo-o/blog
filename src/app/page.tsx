"use client";
// import BlogTab from "@/comps/BlogTab";
import entriesData from "@/entries/entry.json";

const openBlog = (id: number) => {
  window.location.href = `/entry/${id}`;
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-5xl font-mono text-sm lg:flex'>
        <p className='left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          <code className='font-mono font-bold'>Goal:&nbsp;</code>
          Focus on the home page, including tabs.
        </p>
      </div>
      <div className='px-6 py-24 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl font-semibold tracking-tight sm:text-5xl'>Becky's really cool blog!</h2>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {entriesData.map((entry) => (
            <a
              href={`/entry/${entry.id}`}
              className='text-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            >
              <div className='group relative'>
                <h2 className='mt-3 text-2xl font-medium'>
                  {entry?.title} {""}
                  <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-sm transition-colors duration-300'>{entry?.date}</span>
                </h2>
                <div className='mt-5 text-sm leading-6 opacity-50'>
                  <p className='line-clamp-3'>{entry?.content}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
