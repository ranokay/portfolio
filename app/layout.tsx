import '../global.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: {
		default: "ranokay's portfolio",
		template: "%s | ranokay's portfolio",
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
	children: ReactNode
}) => {
	return (
		<html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
			<body className={'bg-black'}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}

export default RootLayout
