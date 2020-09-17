import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';
import path from 'path';

const pagesDirectory: string = path.join(process.cwd(), 'contents', 'pages');

export const readPagesDir = (): Array<string> => {
  return fs.readdirSync(pagesDirectory);
}

interface IGetPage {
  title: string;
  slug: string;
  draft: boolean;
  content?: string;
}

export const getPage = (slug: string, fields: Array<string> = []): IGetPage => {
  const realSlug: string = slug.replace('.md', '');
  const getFile: Buffer = fs.readFileSync(path.join(pagesDirectory, `${realSlug}.md`));
  const { data, content } = grayMatter(getFile);

  let items: IGetPage = {
    title: '',
    slug: '',
    draft: false,
  };

  fields.forEach((field: string) => {
    if(field === 'slug') {
      items['slug'] = realSlug;
    }

    if(field === 'content') {
      items['content'] = content;
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

export const getAllPages = (fields: Array<string> = []): Array<any> => {
  const pages: Array<IGetPage> = readPagesDir()
    .map(page => getPage(page, fields))
    .filter(page => page.draft !== true);

  return pages;
}

export const getPageContent = (content: string): string => {
  return marked(content);
}