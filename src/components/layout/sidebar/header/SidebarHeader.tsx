import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import cls from './SidebarHeader.module.scss'

export function SidebarHeader() {
	return (
		<div className={cls.sidebarHeader}>
			<button className={cls.burgerBtn}>
				<Menu />
			</button>
			<Link
				href={PAGE.HOME}
				className={cls.logoWrapper}
			>
				<SquarePlay
					className={cls.logo}
					size={29}
				/>
				<span className={cls.title}>Youtube clone</span>
			</Link>
		</div>
	)
}
