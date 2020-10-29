import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const NotFound = () => {
  return (
    <>
      <NextSeo title="Page Not Found" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Page Not Found</h1>
        <Link href="/">
          <a href="/" className="px-8 py-3 rounded bg-black hover:bg-gray-900 duration-300 text-white mt-4">
            Back to Home!
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
