import type { AxiosResponse } from 'axios'
import cn from 'clsx'
import type { LucideIcon } from 'lucide-react'

import { SkeletonLoader } from '../skeleton-loader/SkeletonLoader'
import { VideoItem } from '../video-item/VideoItem'

import type { IVideo } from '@/types/video.types'

import cls from './VideoGrid.module.scss'

interface Props {
	isLoading?: boolean
	videos: IVideo[] | undefined
	className?: string
	Icon?: LucideIcon
	skeletonCount?: number
}

export function VideoGrid({ isLoading, videos, className, Icon, skeletonCount = 6 }: Props) {
	return (
		<div className={cn(cls.container, className)}>
			{isLoading ? (
				<SkeletonLoader count={skeletonCount} />
			) : Array.isArray(videos) && videos.length > 0 ? (
				videos.map(video => (
					<VideoItem
						key={video.id}
						video={video}
						Icon={Icon}
					/>
				))
			) : (
				<p>Videos not found</p>
			)}
		</div>
	)
}
