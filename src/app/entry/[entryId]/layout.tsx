import { Inter } from "next/font/google";
import "@/app/globals.css";
import entries from "@/entries/entry.json";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { entryId: string };
}>) {
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
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <div className='relative'>
          {nextEntryLink && (
            <div className='group'>
              <a
                href={nextEntryLink}
                className='h-75 w-20 bg-neutral-800/30 fixed inset-y-40 right-5 flex items-center justify-center rounded-xl border border-neutral-700 transition-colors duration-200 hover:border-2 hover:dark:bg-neutral-700/30 transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
              >
                <ChevronRightIcon className='text-gray-400 h-60 w-20 bg-neutral-700/30 group-hover:text-gray-100 rounded-lg mx-1' />
              </a>
            </div>
          )}
          {!nextEntryLink && <div className=''></div>}

          {prevEntryLink && (
            <div className='group'>
              <a
                href={prevEntryLink}
                className='h-75 w-20 bg-neutral-800/30 fixed inset-y-40 left-5 flex items-center justify-center rounded-xl border border-neutral-700 transition-colors duration-200 hover:border-2 hover:dark:bg-neutral-700/30 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none'
              >
                <ChevronLeftIcon className='text-gray-400 h-60 w-20 bg-neutral-700/30 group-hover:text-gray-100 rounded-lg mx-1' />
              </a>
            </div>
          )}
          {!prevEntryLink && <div className=''></div>}
        </div>
      </body>
    </html>
  );
}
