import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import { Layout } from '@/components/layout/Layout'
import { Content } from '@/components/layout/content/Content'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

import './globals.scss'

const Suse = SUSE({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Youtube Clone',
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
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
