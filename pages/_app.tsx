import { AppProps } from 'next/app';
import '../assets/hopscotch.css';
import '../assets/tailwind.css';
import Layout from '../comps/Layout';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
    	<Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;