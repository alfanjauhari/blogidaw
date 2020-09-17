import config from '../../config';
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';
import Icon from '../Icon';

const Layout = ({ children }) => {
  const router = useRouter();
  const path: Array<string> = router.asPath.split('?');

	return (
		<main className="py-10 px-6 lg:px-24 flex flex-col md:flex-row md:justify-between">
			<aside className="w-full md:w-1/3 lg:w-1/5 mb-6">
        <img className="rounded-full w-16" src={config.authorProfile} alt={config.author} />
        <h1 className="text-lg font-bold mt-4">
          {config.title}
        </h1>
        <p className="mt-2 text-gray-600">
          {config.description}
        </p>
        <div className="mt-6 flex flex-col">
          {config.menu.map(menu => (
            <Link href={menu.path} key={menu.path}>
              <a href={menu.path} className={path[0] === menu.path ? 'first:mt-0 mt-2 text-indigo-600 underline' : 'first:mt-0 mt-2 text-indigo-600'}>{menu.title}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap -mx-1 mt-2">
          {config.socials.map(social => (
            <a href={social.url} className="mx-1 mt-2 p-2 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white duration-300" key={social.type}>
              <Icon type={social.type} />
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          Copyright {config.title} - {new Date().getFullYear()}
        </p>
      </aside>

      <section id="content" className="w-full md:w-4/6 lg:w-4/5 ml-0 md:ml-6 lg:ml-10">
      	{children}
      </section>
    </main>
	)
}

export default Layout;