import React from 'react';
import { NextSeo } from 'next-seo';

const PageLayout = ({ children, frontMatter }) => {
  return (
    <section>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <h1 className="text-center text-2xl font-bold">{frontMatter.title}</h1>
      <hr className="border border-gray-300 my-6" />
      <div className="mt-4 post-content">{children}</div>
    </section>
  );
};

export default PageLayout;
