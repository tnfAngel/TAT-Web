import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: process.env.NEXT_OUTPUT,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'www.tenerifeairporttransfers.es',
				protocol: 'https',
				pathname: '/wp-content/uploads/2022/05/admin-ajax.png'
			}
		]
	},

	async redirects() {
		return [];
	}
};

let configExport = nextConfig;

if (process.env.NODE_ENV === 'production') {
	console.log('Loaded production config');
	configExport = million.next(nextConfig, { auto: true });
}

export default configExport;
