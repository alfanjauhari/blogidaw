import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import moment from 'moment';
import { NextSeo } from 'next-seo';
// eslint-disable-next-line
// @ts-ignore
import { frontMatter as posts } from './blog/**/*.mdx';

interface InitialProps {
  posts: Array<any>;
}

interface GetPostInterface {
  title: string;
  slug: string;
  date: string;
  draft: boolean;
  content?: string;
}

let allPosts: Array<GetPostInterface> = [];
const postsPerPage = 5;

const Home: NextPage<InitialProps> = () => {
  const [getPosts, setPosts] = useState([]);
  const [nextPosts, setNextPosts] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);

  const slicePosts = (start, end): void => {
    const slicedPosts = posts.slice(start, end);
    allPosts = [...allPosts, ...slicedPosts];
    setPosts(allPosts);
  };

  const showMore = (): void => {
    slicePosts(nextPosts, nextPosts + postsPerPage);
    setNextPosts(nextPosts + postsPerPage);
  };

  useEffect(() => {
    allPosts = [];
    setPosts([]);
    slicePosts(0, postsPerPage);

    if (posts) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <NextSeo title="Home" />
      <article className="flex flex-col">
        {getPosts.map(post => {
          // eslint-disable-next-line
          const slug = post.__resourcePath.replace('blog\\\\', '').replace('.mdx', '');

          return (
            <div className="flex flex-col first:mt-0 mt-8" key={post.slug}>
              <h1 className="font-bold text-2xl">
                <Link href={slug} passHref>
                  {post.title}
                </Link>
              </h1>
              <p className="text-gray-600 mt-3">{post.description}</p>
              <div className="flex justify-between mt-4">
                <p className="uppercase font-bold text-indigo-800">{moment(post.date).fromNow()}</p>
                <Link href={slug}>
                  <a
                    href={slug}
                    className="px-4 py-1 border border-indigo-600 text-indigo rounded hover:bg-indigo-600 hover:text-white duration-300"
                  >
                    Baca
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
        <button
          className={
            allPosts.length === posts.length
              ? 'hidden'
              : 'border border-indigo-600 px-6 py-2 mt-4 mx-auto w-full md:w-1/3 lg:w-1/4 font-semibold hover:bg-indigo-600 hover:text-white duration-300 focus:outline-none'
          }
          onClick={showMore}
          type="button"
        >
          Load More
        </button>
      </article>
    </>
  );
};

export default Home;
