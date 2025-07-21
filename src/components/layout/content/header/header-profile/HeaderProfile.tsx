import Image from 'next/image'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import cls from './HeaderProfile.module.scss'

interface Props {}

export function HeaderProfile({}: Props) {
	return (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className={cls.headerProfile}
		>
			<Image
				className={cls.headerProfile__link}
				src='/uploads/avatars/redgroup.jpg'
				alt='Profile'
				width={30}
				height={30}
			/>
		</Link>
	)
}
