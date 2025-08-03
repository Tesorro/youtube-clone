import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/heading/Heading'
import { VideoGrid } from '@/ui/video-grid/VideoGrid'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

// ISR (статика + ревалидация)
export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video Games',
	description: 'Video Games',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video Games'
	}
}

export default async function VideoGamesPage() {
	const { data } = await videoService.getVideoGamesVideos()
	const videos = data.videos

	return (
		<>
			<section>
				<Heading Icon={Gamepad2}>Video Games</Heading>
				<VideoGrid videos={videos} />
			</section>
		</>
	)
}
