import NextHead from 'next/head';
import { ReactNode } from 'react';
import config from '../../config';

interface InitialProps {
	title: string;
	description?: string;
	keywords?: Array<string>;
	canonical?: string;
	image?: string;
	children?: ReactNode;
}

const Head = ({ title, description, keywords, canonical, image, children }: InitialProps) => {
	return (
		<NextHead>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{title}</title>
			<meta name="description" content={description ? description : config.description} />
      <meta name="keywords" content={keywords ? keywords.join(',') : config.keywords.join(',')} />
      <meta name="robots" content="index, nofollow" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={canonical ? canonical : config.url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description ? description : config.description} />
      <meta name="twitter:image" content={image ? image : config.thumbnail} />
      <meta name="twitter:creator" content={config.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description ? description : config.description} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:url" content={canonical ? canonical : config.url} />
      <meta property="og:image" content={image ? image : config.thumbnail} />
      {children}
		</NextHead>
	)
}

export default Head;