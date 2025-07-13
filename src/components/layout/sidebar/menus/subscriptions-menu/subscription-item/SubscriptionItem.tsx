import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { ISidebarSubscriptionItem } from '../../../sidebar.types'

interface Props {
	item: ISidebarSubscriptionItem
}
export function SubscriptionItem({ item }: Props) {
	return (
		<li>
			<Link href={item.link}>
				{item.avatar && (
					<Image
						alt={item.label}
						src={item.avatar}
						width={30}
						height={30}
					/>
				)}
				<span>
					<span>{item.label}</span>
					{item.isOnLive && <Radio />}
					{item.isRecentUpload && <Dot />}
				</span>
			</Link>
		</li>
	)
}
