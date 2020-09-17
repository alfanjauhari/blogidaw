import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';

const postsDirectory: string = path.join(process.cwd(), 'contents', 'posts');

export const readPostsDir = (): Array<string> => {
  return fs.readdirSync(postsDirectory);
}

interface IGetPost {
  title: string;
  slug: string;
  date: string;
  draft: boolean;
  content?: string;
}

export const getPost = (slug: string, fields: Array<string> = []): IGetPost => {
  const realSlug: string = slug.replace('.md', '');
  const getFile: Buffer = fs.readFileSync(path.join(postsDirectory, `${realSlug}.md`));
  const { data, content, excerpt } = grayMatter(getFile, {
    excerpt_separator: '<!-- excerpt-end -->'
  });

  let items: IGetPost = {
    title: '',
    slug: '',
    date: '',
    draft: false,
  };

  fields.forEach((field: string) => {
    if(field === 'slug') {
      items['slug'] = realSlug;
    }

    if(field === 'content') {
      items['content'] = content;
    }

    if(field === 'excerpt') {
      items['excerpt'] = excerpt;
    }

    if(data[field]) {
      items[field] = data[field];
    }

    if(field === 'draft') {
      if(field) {
        return;
      }
    }
  });

  return items;
}

export const getAllPosts = (fields: Array<string> = []): Array<any> => {
  const posts: Array<IGetPost> = readPostsDir()
    .map(post => getPost(post, fields))
    .filter(post => post.draft !== true)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export const getPostContent = (content: string): string => {
  return marked(content);
}