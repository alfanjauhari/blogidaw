import React from 'react';
import { NextSeo } from 'next-seo';
import { DiscussionEmbed } from 'disqus-react';
import moment from 'moment';
import config from '../config';

const Layout = ({ children, frontMatter }) => {
  // eslint-disable-next-line
  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return (
    <section>
      <NextSeo title={frontMatter.title} description={frontMatter.description} canonical={`${config.url}${slug}`} />
      <h1 className="text-center text-2xl font-bold">{frontMatter.title}</h1>
      <p className="mt-4 font-bold text-indigo-800 text-lg text-center">{moment(frontMatter.date).fromNow()}</p>
      <hr className="border border-gray-300 my-6" />
      <div className="mt-4 post-content">{children}</div>
      <div className="mt-6">
        <DiscussionEmbed
          shortname={config.disqusShortname}
          config={{
            url: frontMatter.slug,
            identifier: frontMatter.slug,
            title: frontMatter.title
          }}
        />
      </div>
    </section>
  );
};

export default Layout;
