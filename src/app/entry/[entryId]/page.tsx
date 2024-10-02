"use client"
import { notFound } from 'next/navigation';
import entries from '@/entries/entry.json';
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default async function EntryDetailPage({ params }: {
    params: { entryId: string }
}) {
    const entry = entries.find((entry: { id: string }) => entry.id === params.entryId); // Look for entry with id
    if (!entry) {
        notFound();
    }

    const nextEntry = String(Number(entry.id) + 1);
    const prevEntry = String(Number(entry.id) - 1);

    const nextEntryExists = entries.some((entry: { id: string }) => entry.id === nextEntry);
    const prevEntryExists = entries.some((entry: { id: string }) => entry.id === prevEntry);

    const nextEntryLink = nextEntryExists ? `/entry/${nextEntry}` : null;
    const prevEntryLink = prevEntryExists ? `/entry/${prevEntry}` : null;

    return (
        <main>
            <title>{entry.title}</title>
            <div className="relative">
                {nextEntryLink && (
                    <div className="group">
                        <a href={nextEntryLink} className="h-75 w-20 bg-neutral-800/30 fixed inset-y-40 right-5 flex items-center justify-center rounded-xl border border-neutral-700 transition-colors duration-200 hover:border-2 hover:dark:bg-neutral-700/30 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            <ChevronRightIcon className="text-gray-400 h-60 w-20 bg-neutral-700/30 group-hover:text-gray-100 rounded-lg mx-1" />
                        </a>
                    </div>
                )}
                {!nextEntryLink && (
                    <div className="">

                    </div>
                )}


                {prevEntryLink && (
                    <div className="group">
                        <a href={prevEntryLink} className="h-75 w-20 bg-neutral-800/30 fixed inset-y-40 left-5 flex items-center justify-center rounded-xl border border-neutral-700 transition-colors duration-200 hover:border-2 hover:dark:bg-neutral-700/30 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                            <ChevronLeftIcon className="text-gray-400 h-60 w-20 bg-neutral-700/30 group-hover:text-gray-100 rounded-lg mx-1" />
                        </a>
                    </div>
                )}
                {!prevEntryLink && (
                    <div className="">

                    </div>
                )}
            </div>


            <div className="max-w-3xl mx-auto min-h-screen justify-center p-10 bg-neutral-800/30 border border-neutral-600/40 rounded-lg">
                <h1 className="text-3xl font-bold mb-4 mt-5">
                    {entry.title}
                </h1>
                <p className="text-gray-600 mb-4 font-mono">
                    {entry.date}
                </p>
                <div className="">
                    <p className="font-sans leading-loose antialiased">
                        {entry.content}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 place-items-center h-56">
                    {entry.images.map((image: string) => (
                        <img src={image} alt='' width={200} height={200} className="py-10" />
                    ))}
                </div>
            </div>
        </main>
    );
}
