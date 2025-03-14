'use client';

import AppWrapper from '@/components/general/AppWrapper';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		primary: '#0F2657',
		secondary: '#87CFE3',
		light: '#E4E5E6'
	}
};

const fonts = {
	heading: 'Inter, system-ui, sans-serif',
	body: 'Inter, system-ui, sans-serif'
};

const components = {
	Button: {
		variants: {
			primary: {
				bg: 'brand.primary',
				color: 'white',
				_hover: {
					bg: 'brand.primary',
					opacity: 0.9
				}
			},
			secondary: {
				bg: 'brand.secondary',
				color: 'brand.primary',
				_hover: {
					bg: 'brand.secondary',
					opacity: 0.9
				}
			},
			outline: {
				borderColor: 'white',
				color: 'white',
				_hover: {
					bg: 'white',
					color: 'brand.primary'
				}
			}
		}
	}
};

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false
};

const theme = extendTheme({
	colors,
	config,
	fonts,
	components,
	styles: {
		global: {
			body: {
				bg: 'white',
				color: 'gray.800'
			}
		}
	},
	shadows: {
		outline: `0 0 0 2px #ffffff10`
	}
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			style={{
				width: '100%',
				height: '100%',
				scrollBehavior: 'smooth',
				userSelect: 'none',
				WebkitTapHighlightColor: 'transparent'
			}}
		>
			<head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />

				<title>Tenerife Airport Transfers</title>
				<meta name='title' content='Tenerife Airport Transfers' />
				<meta name='description' content='Tenerife Airport Transfers' />

				<meta name='keywords' content='Tenerife Airport Transfers' />
				<meta name='theme-color' content='#0F2657' />
				<meta name='author' content='Tenerife Airport Transfers' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://tenerifeairporttransfers.es/' />
				<meta property='og:site_name' content='Tenerife Airport Transfers' />
				<meta property='og:title' content='Tenerife Airport Transfers' />
				<meta property='og:description' content='Tenerife Airport Transfers' />
				<meta
					property='og:image'
					content='https://www.tenerifeairporttransfers.es/wp-content/uploads/2022/05/admin-ajax.png'
				/>
				<meta property='og:keywords' content='Tenerife Airport Transfers' />

				<link
					rel='icon'
					type='image/x-icon'
					href='https://www.tenerifeairporttransfers.es/wp-content/uploads/2022/05/admin-ajax.png'
				/>

				<style>
					{`::-webkit-scrollbar{width:6px;z-index:100000}::-webkit-scrollbar-track{border-radius:10px}::-webkit-scrollbar-track:hover{background-color:#00000020}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#00000050}::-webkit-scrollbar-thumb:hover{background-color:#00000060}.cf-turnstile div{display:flex;}.app-drag{app-region:drag;}`}
				</style>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Tenerife Airport Transfers',
							url: 'https://tenerifeairporttransfers.es/'
						})
					}}
				/>
			</head>
			<body style={{ width: '100%', height: '100%' }}>
				<ColorModeScript initialColorMode={theme['config'].initialColorMode} />
				<ChakraProvider theme={theme}>
					<AppWrapper>{children}</AppWrapper>
				</ChakraProvider>
			</body>
		</html>
	);
}
