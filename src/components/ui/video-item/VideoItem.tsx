import { Check, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform-date'
import { transformViewsCount } from '@/utils/transform-views-count'

import type { IVideo } from '@/types/video.types'

import cls from './VideoItem.module.scss'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div className={cls.videoItem}>
			<div className={cls.videoItem__preview}>
				<Link
					href={PAGE.VIDEO(video.slug)}
					className={cls.thumbnailLink}
				>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
						className={cls.videoItem__thumbnail}
					/>
				</Link>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className={cls.videoItem__channelLink}
				>
					<Image
						src={video.channel.avatarUrl}
						width={30}
						height={30}
						alt={video.channel.name}
						className={cls.videoItem__channelAvatar}
					/>
				</Link>
			</div>
			<div className={cls.videoItem__meta}>
				<div className={cls.videoItem__stats}>
					{Icon && <Icon className={cls.videoItem__icon} />}
					<span className={cls.videoItem__views}>{transformViewsCount(video.viewsCount)}</span>
				</div>
				<div className={cls.videoItem__date}>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className={cls.videoItem__title}>
				<Link
					href={PAGE.VIDEO(video.slug)}
					className={cls.videoItem__titleLink}
				>
					{video.title}
				</Link>
			</div>
			<div className={cls.videoItem__channel}>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className={cls.videoItem__channelNameLink}
				>
					<span className={cls.videoItem__channelName}>{video.channel.user.name}</span>
					<span className={cls.videoItem__verified}>
						<Check className={cls.videoItem__check} />
					</span>
				</Link>
			</div>
		</div>
	)
}
