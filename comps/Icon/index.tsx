const Icon = ({ type }) => {
	switch (type) {
		case 'facebook':
			return (
				<svg
		      width={20}
		      height={20}
		      viewBox="0 0 24 24"
		      fill="none"
		      stroke="currentColor"
		      strokeWidth={2}
		      strokeLinecap="round"
		      strokeLinejoin="round"
		      className="prefix__feather prefix__feather-facebook"
		    >
		      <title>Facebook</title>
		      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
		    </svg>
			)
		
		case 'twitter':
			return (
				<svg
		      width={20}
		      height={20}
		      viewBox="0 0 24 24"
		      fill="none"
		      stroke="currentColor"
		      strokeWidth={2}
		      strokeLinecap="round"
		      strokeLinejoin="round"
		      className="prefix__feather prefix__feather-twitter"
		    >
		      <title>Twitter</title>
		      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
		    </svg>
			)

		case 'github':
			return (
				<svg
		      width={20}
		      height={20}
		      viewBox="0 0 24 24"
		      fill="none"
		      stroke="currentColor"
		      strokeWidth={2}
		      strokeLinecap="round"
		      strokeLinejoin="round"
		      className="prefix__feather prefix__feather-github"
		    >
		    	<title>Github</title>
		      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
		    </svg>
			)

		case 'gitlab':
			return (
				<svg
			    width={20}
			    height={20}
			    viewBox="0 0 24 24"
			    fill="none"
			    stroke="currentColor"
			    strokeWidth={2}
			    strokeLinecap="round"
			    strokeLinejoin="round"
			    className="prefix__feather prefix__feather-gitlab"
			  >
			    <title>Gitlab</title>
			    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
			  </svg>
			)

		default:
			return (
				<svg
		      width={20}
		      height={20}
		      viewBox="0 0 24 24"
		      fill="none"
		      stroke="currentColor"
		      strokeWidth={2}
		      strokeLinecap="round"
		      strokeLinejoin="round"
		      className="prefix__feather prefix__feather-instagram"
		    >
		      <title>Instagram</title>
		      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
		      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
		    </svg>
			)
			break;
	}
}

export default Icon;