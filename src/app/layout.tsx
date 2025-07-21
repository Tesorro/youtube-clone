import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import { Layout } from '@/components/layout/Layout'
import { Content } from '@/components/layout/content/Content'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

import { Providers } from '@/providers/Providers'

import './globals.scss'

const Suse = SUSE({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		absolute: 'Youtube Clone',
		template: `%s | Youtube Clone`
	},
	description: 'Created by Tesorro'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={Suse.className}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
