import type { IChannel } from "./channel.types"

export interface IVideo {
  id: string
  title: string
  slug: string
  description: string
  thumbnailUrl: string
  videoFileName: string
  viewsCount: number
  isPublic: boolean
  channel: IChannel
  createdAt: string
}

export interface IVideoApiResponse {
  videos: IVideo[];
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}
