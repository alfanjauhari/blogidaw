import { useState, useEffect } from 'react';
import { NextPage, GetStaticProps, GetStaticPropsResult } from 'next';
import fs from 'fs';
import path from 'path';
import { getAllPosts } from '../utils/blog';
import Link from 'next/link';
import config from '../config';
import { useRouter } from 'next/router';
import moment from 'moment';
import Head from '../comps/Head';

interface InitialProps {
  posts: Array<any>
}

interface IGetPost {
  title: string;
  slug: string;
  date: string;
  draft: boolean;
  content?: string;
}

let allPosts: Array<IGetPost> = [];
const postsPerPage = 5;

const Home: NextPage<InitialProps> = ({ posts }) => {
  const router = useRouter();
  const [getPosts, setPosts] = useState([]);
  const [nextPosts, setNextPosts] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);

  const slicePosts = (start, end): void => {
    const slicedPosts = posts.slice(start, end);
    allPosts = [...allPosts, ...slicedPosts];
    setPosts(allPosts);
  }

  const showMore = (): void => {
    slicePosts(nextPosts, nextPosts + postsPerPage);
    setNextPosts(nextPosts + postsPerPage);
  }

  useEffect(() => {
    allPosts = [];
    setPosts([]);
    slicePosts(0, postsPerPage);

    if(posts) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <Head title="Alfan Jauhari" />
      <article className="flex flex-col">
        {getPosts.map(post => (
          <div className="flex flex-col first:mt-0 mt-8" key={post.slug}>
            <Link href={'read/' + post.slug}>
              <a href={'read/' + post.slug}>
                <h1 className="font-bold text-2xl">{post.title}</h1>
              </a>
            </Link>
            <p className="text-gray-600 mt-3">
              {post.excerpt}
            </p>
            <div className="flex justify-between mt-4">
              <p className="uppercase font-bold text-indigo-800">{moment(post.date).fromNow()}</p>
              <Link href={'read/' + post.slug}>
                <a href={'read/' + post.slug} className="px-4 py-1 border border-indigo-600 text-indigo rounded hover:bg-indigo-600 hover:text-white duration-300">
                  Baca
                </a>
              </Link>
            </div>
          </div>
        ))}
        <button className={allPosts.length == posts.length ? 'hidden' : 'border border-indigo-600 px-6 py-2 mt-4 mx-auto w-full md:w-1/3 lg:w-1/4 font-semibold hover:bg-indigo-600 hover:text-white duration-300 focus:outline-none'} onClick={showMore}>Load More</button>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'draft',
    'date',
    'description',
    'excerpt'
  ]);

  return {
    props: {
      posts
    }
  }
}

export default Home;