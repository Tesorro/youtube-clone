import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import cls from './Heading.module.scss'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
}

export function Heading({ Icon, children }: Props) {
	return (
		<div className={cls.heading}>
			{Icon && <Icon className={cls.heading__icon} />}
			<h2 className={cls.heading__text}>{children}</h2>
		</div>
	)
}
