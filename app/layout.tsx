import '../global.css'
import { Inter } from '@next/font/google'
import LocalFont from '@next/font/local'
import { Metadata } from 'next'
import { Analytics } from './components/analytics'

export const metadata: Metadata = {
	title: {
		default: 'ranokay.oxystack.com',
		template: '%s | ranokay.oxystack.com',
	},
	description: 'Software engineer at upstash.com and founder of planetfall.io',
	openGraph: {
		title: 'ranokay.oxystack.com',
		description:
			'Software engineer at upstash.com and founder of planetfall.io',
		url: 'https://ranokay.oxystack.com',
		siteName: 'ranokay.oxystack.com',
		images: [
			{
				url: 'https://ranokay.oxystack.com/og.png',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'ranokay',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
}
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const calSans = LocalFont({
	src: '../public/fonts/CalSans-SemiBold.ttf',
	variable: '--font-calsans',
})

const RootLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
				}`}
			>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
