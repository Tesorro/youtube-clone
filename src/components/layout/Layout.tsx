'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

import cls from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)
	return (
		<main
			className={cn(cls.layout, {
				[cls.showedSidebar]: isShowedSidebar,
				[cls.hiddenSidebar]: !isShowedSidebar
			})}
		>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	)
}
