"use client"
import React, { FC } from "react";
import entries from '@/entries/entry.json'

export interface BlogTabProps {
    id: string
    bod: string
}


export const BlogTab: FC<BlogTabProps> = ({
    id,
    bod,
}) => {

    const entry = entries.find((entry: { id: string }) => entry.id === id)
    const overflowed = bod.length > 106 ? bod.substring(0, 103) + "..." : bod

    return (
        <a href={`/entry/${id}`} className='text-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
            <h2 className='mb-3 text-2xl font-semibold'>
                {`Entry ${entry?.id}`} {''}
                <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-200'>
                    {entry?.date}
                </span>
            </h2>
            <p className='max-w-[30ch] text-sm opacity-50'>
                {overflowed}
            </p>
        </a>
    );
};


export default BlogTab;
