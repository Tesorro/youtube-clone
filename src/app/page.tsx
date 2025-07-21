import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

import cls from './home.module.scss'

// ISR (статика + ревалидация)
export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Youtube clone',
	description: 'Best video platform',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Youtube'
	}
}

export default async function Home() {
	const { data } = await videoService.getTrendingVideos()

	const trendingVideos = data.slice(0, 6)
	return (
		<>
			<section className={cls.content}>
				<section>
					<Heading Icon={Flame}>Trending</Heading>
					<div className={cls.videoItemsContainer}>
						{trendingVideos.length &&
							trendingVideos.map(video => (
								<VideoItem
									key={video.id}
									video={video}
									Icon={Flame}
								/>
							))}
					</div>
				</section>
				<Explore />
			</section>
		</>
	)
}
