"use client";
import React, { FC } from "react";
import entries from "@/entries/entry.json";

export interface BlogTabProps {
  id: string;
  bod: string;
}

export const BlogTab: FC<BlogTabProps> = ({ id }) => {
  const entry = entries.find((entry: { id: string }) => entry.id === id);

  return (
    <a
      href={`/entry/${id}`}
      className="text-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div className="group relative">
        <h2 className="mt-3 text-2xl font-medium">
          {entry?.title} {""}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-sm transition-colors duration-300">
            {entry?.date}
          </span>
        </h2>
        <div className="mt-5 text-sm leading-6 opacity-50">
          <p className="line-clamp-3">{entry?.content}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogTab;
