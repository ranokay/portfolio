import '../global.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
	title: {
		default: "ranokay's portfolio",
		template: '%s | ranokay',
	},
	description:
		'Full-stack developer. I build websites, web apps, and mobile apps.',
	openGraph: {
		title: "ranokay's portfolio",
		description:
			'Full-stack developer. I build websites, web apps, and mobile apps.',
		url: baseURL,
		siteName: 'ranokay.oxystack.com',
		images: [
			{
				url: `${baseURL}/og.png`,
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
		title: 'ranokay_dev',
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
