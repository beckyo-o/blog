"use client";
import { notFound } from "next/navigation";
import entries from "@/entries/entry.json";

export default async function EntryDetailPage({ params }: { params: { entryId: string } }) {
  const entry = entries.find((entry: { id: string }) => entry.id === params.entryId); // Look for entry with id
  if (!entry) {
    notFound();
  }
  return (
    <main>
      <title>{entry.title}</title>
      <div className='max-w-3xl mx-auto min-h-screen justify-center p-10 dark:bg-neutral-700/30 border dark:border-neutral-600/40 rounded-lg'>
        <h1 className='text-2xl transition-colors duration-300 text-gray-400 hover:text-gray-300 font-bold mb-4 mt-4'>{entry.title}</h1>
        <p className='text-gray-600 mb-4 font-mono'>{entry.date}</p>
        <p className='font-sans leading-loose antialiased'>{entry.content}</p>
        <div className='grid grid-cols-1 gap-4 place-items-center'>
          {entry.images.map((image: string) => (
            <img
              src={image}
              alt=''
              className='py-10 h-auto max-w-full'
            />
          ))}
        </div>
      </div>
    </main>
  );
}
