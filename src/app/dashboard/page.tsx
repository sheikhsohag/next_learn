import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <div className="w-screen h-20 bg-gray-600 flex items-center justify-end pr-8">
      <ol className="flex gap-6 text-white">
        <Link href="/dashboard/about" className="cursor-pointer hover:text-xl duration-1000">about</Link>
        <Link href="/" className='cursor-pointer hover:text-xl duration-1000'>home</Link>
        <Link href="/dashboard/product" className="cursor-pointer hover:text-xl duration-1000">product</Link>
        <Link href="/dashboard/blog" className="cursor-pointer hover:text-xl duration-1000">blog</Link>
        <Link href="/dashboard/contact" className="cursor-pointer hover:text-xl duration-1000">contact</Link>
      </ol>
    </div>
  );
}

export default Page;
