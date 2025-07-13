import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../../sidebar.types'

import cls from './MenuItem.module.scss'

interface Props {
	item: ISidebarItem
}
export function MenuItem({ item }: Props) {
	return (
		<li key={`${item.link}-${item.label}`}>
			<Link
				href={item.link}
				className={cn(cls.menuItem)}
			>
				<item.icon className={cls.icon}/>
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <div className={'horizontal-divider'} />}
		</li>
	)
}
