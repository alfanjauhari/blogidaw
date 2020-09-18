import { useEffect } from 'react';
import { getAllPages, getPage, getPageContent } from '../utils/page';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import config from '../config';
import Head from '../comps/Head';
import Prism from 'prismjs';
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

const Page: NextPage<{ page }> = ({ page }) => {
  const router = useRouter();

  useEffect(() => {
    Prism.highlightAll();
  }, [page]);

  console.log(page.content);

  return (
    <>
      <Head title={`${page.title} — ${config.title}`} description={page.description} canonical={config.url + page.slug} />
      <section>
        <h1 className="text-center text-2xl font-bold">{page.title}</h1>
        <hr className="border border-gray-300 my-6" />
        <div className="mt-4 post-content" dangerouslySetInnerHTML={{
          __html: page.content
        }}></div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllPages([
    'slug',
    'draft'
  ]);

  return {
    paths: pages.map(page => {
      return {
        params: {
          slug: page.slug,
        },
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = getPage(params.slug.toString(), [
    'title',
    'date',
    'draft',
    'description',
    'content'
  ]);

  const content = getPageContent(page.content);

  return {
    props: {
      page: {
        ...page,
        content
      }
    }
  }
}

export default Page;