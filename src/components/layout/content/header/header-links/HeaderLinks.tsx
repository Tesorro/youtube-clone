import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import cls from './HeaderLinks.module.scss'

interface Props {}

export function HeaderLinks({}: Props) {
	return (
		<div className={cls.headerLinks}>
			<Link
				href={STUDIO_PAGE.UPLOAD_VIDEO}
				className={cls.headerLinks__link}
			>
				<PlusSquare className={cls.headerLinks__icon} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className={cls.headerLinks__link}
			>
				<LayoutGrid className={cls.headerLinks__icon} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className={cls.headerLinks__link}
			>
				<Bell className={cls.headerLinks__icon} />
			</Link>
		</div>
	)
}
