import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../../sidebar.types'
import { MenuItem } from '../menu-item/MenuItem'

import cls from './SidebarMenu.module.scss'

interface Props {
	title?: string
	menu: ISidebarItem[]
}
export function SidebarMenu({ menu, title }: Props) {
	const pathname = usePathname()
	return (
		<nav className={cls.sidebarMenu}>
			{title && <div className={cls.title}>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.link}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
