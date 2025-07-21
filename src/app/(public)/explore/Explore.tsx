'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/heading/Heading'
import { VideoGrid } from '@/ui/video-grid/VideoGrid'

import { videoService } from '@/services/video.service'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})
	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<VideoGrid
				videos={data?.data.videos}
				isLoading={isLoading}
			/>
		</section>
	)
}
