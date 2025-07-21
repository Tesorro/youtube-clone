'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/heading/Heading'
import { VideoGrid } from '@/ui/video-grid/VideoGrid'

import { videoService } from '@/services/video.service'

export function SearchClient() {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('term')

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getAll(searchTerm)
	})
	return (
		<section>
			<Heading Icon={Search}>Search term: {searchTerm}</Heading>
			<VideoGrid
				videos={data?.data.videos}
				isLoading={isLoading}
			/>
		</section>
	)
}
