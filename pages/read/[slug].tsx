import { useEffect, useRef } from 'react';
import { getAllPosts, getPost, getPostContent } from '../../utils/blog';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import moment from 'moment';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config';
import Head from '../../comps/Head';
import Prism from 'prismjs';
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

interface IGetPost {
  title: string;
  slug: string;
  date: string;
  draft: boolean;
  content?: string;
}

const ReadArticle: NextPage<{ post }> = ({ post }) => {
  const code = useRef();
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head title={`${post.title} — ${config.title}`} description={post.description} canonical={config.url + post.slug} image={post.image} />
      <section>
        <h1 className="text-center text-2xl font-bold">{post.title}</h1>
        <p className="mt-4 font-bold text-indigo-800 text-lg text-center">
          {moment(post.date).fromNow()}
        </p>
        <hr className="border border-gray-300 my-6" />
        <div className="mt-4 post-content" dangerouslySetInnerHTML={{
          __html: post.content
        }}></div>
        <div className="mt-6">
          <DiscussionEmbed
            shortname={config.disqusShortname}
            config={{
              url: post.slug,
              identifier: post.slug,
              title: post.title,
            }}
          />
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts([
    'slug',
    'draft'
  ]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPost(params.slug.toString(), [
    'title',
    'date',
    'draft',
    'description',
    'image',
    'content'
  ]);

  const content = getPostContent(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export default ReadArticle;