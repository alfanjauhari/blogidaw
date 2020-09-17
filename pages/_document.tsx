import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ComponentClass } from 'react';
import config from '../config';

class MyDocument extends Document<ComponentClass> {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return {...initialProps};
	}

	render() {
		return (
			<Html lang="id">
				<Head>
					<meta charSet="utf-8" />
		      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		      <meta name="theme-color" content={config.themeColor} />
		      <meta name="mobile-web-app-capable" content="yes" />
		      <meta name="apple-mobile-web-app-title" content={config.title} />
		      <meta name="apple-mobile-web-app-capable" content="yes" />
		      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
		      <meta name="msapplication-TileColor" content={config.themeColor} />
		      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
		      <meta name="theme-color" content={config.themeColor} />
		      <meta name="google-site-verification" content={config.googleVerification} />
		      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
		      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
		      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
		      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
		      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
		      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
		      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
		      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
		      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
		      <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
		      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
		      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
		      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
		      <link rel="manifest" href="/manifest.json" />
		      <link href="/manifest.json" rel="manifest" />
					<link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytic}`}></script>
	        <script dangerouslySetInnerHTML={{
	          __html: `
	            window.dataLayer = window.dataLayer || [];
	            function gtag(){dataLayer.push(arguments);}
	            gtag('js', new Date());
	            gtag('config', ${config.googleAnalytic});
	          `
	        }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument;