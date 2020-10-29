const config = {
  title: 'Blogidaw',
  subtitle: 'Static Site Generator (SSG) using TNT (TypeScript, Next JS, Tailwind CSS) Stack',
  author: 'Alfan Jauhari',
  thumbnail: 'icon-hd.png',
  url: 'https://blogidaw.vercel.app/',
  authorProfile: '/profile.jpg',
  description: 'Static Site Generator (SSG) using TNT (TypeScript, Next JS, Tailwind CSS) Stack',
  themeColor: '#ffffff',
  keywords: ['nextjs', 'ssg'],
  socials: [
    {
      type: 'facebook',
      url: 'https://facebook.com/#'
    },
    {
      type: 'github',
      url: 'https://github.com/#'
    },
    {
      type: 'gitlab',
      url: 'https://gitlab.com/#'
    },
    {
      type: 'instagram',
      url: 'https://instagram.com/#'
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/#'
    }
  ],
  menu: [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About Me'
    },
    {
      path: '/contact',
      title: 'Contact'
    }
  ],
  disqusShortname: 'YOUR_DISQUS_SHORTNAME',
  googleAnalytic: 'GOOGLE_ANALYTIC_CODE',
  googleVerification: 'GOOGLE_VERIFICATION_CODE'
};

export default config;
