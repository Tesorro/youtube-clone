import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import { VideoGrid } from '@/ui/video-grid/VideoGrid'
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
	const { data: trendingVideos } = await videoService.getTrendingVideos()
	return (
		<>
			<section className={cls.content}>
				{Array.isArray(trendingVideos) && trendingVideos.length > 0 ? (
					<section>
						<Heading Icon={Flame}>Trending</Heading>
						<VideoGrid
							videos={trendingVideos}
							Icon={Flame}
						/>
					</section>
				) : (
					<></>
				)}
				<Explore />
			</section>
		</>
	)
}
