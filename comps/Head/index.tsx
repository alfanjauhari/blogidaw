import NextHead from "next/head";
import { ReactNode } from "react";
import config from "../../config";

interface InitialProps {
  title: string;
  description?: string;
  keywords?: Array<string>;
  canonical?: string;
  image?: string;
  type?: string;
  children?: ReactNode;
}

const Head = ({
  title,
  description,
  keywords,
  canonical,
  image,
  type,
  children,
}: InitialProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content={description ? description : config.description}
      />
      <meta
        name="keywords"
        content={keywords ? keywords.join(",") : config.keywords.join(",")}
      />
      <meta name="robots" content="index, nofollow" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={canonical ? canonical : config.url} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description ? description : config.description}
      />
      <meta
        name="twitter:image"
        content={
          image
            ? `${config.url}thumbnails/${image}`
            : `${config.url}${config.thumbnail}`
        }
      />
      <meta name="twitter:creator" content={config.author} />
      <meta property="og:type" content={type ? type : "website"} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description ? description : config.description}
      />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:url" content={canonical ? canonical : config.url} />
      <meta
        property="og:image"
        content={
          image
            ? `${config.url}thumbnails/${image}`
            : `${config.url}${config.thumbnail}`
        }
      />
      {children}
    </NextHead>
  );
};

export default Head;
