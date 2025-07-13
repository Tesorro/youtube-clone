import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'

import cls from './Content.module.scss'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={cls.content}>
			<Header />
			<section className={cls.section}>{children}</section>
		</div>
	)
}
