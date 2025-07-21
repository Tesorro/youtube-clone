import type { IVideo, IVideoApiResponse } from "@/types/video.types";
import axios from "axios";

class VideoService {

  getAll(searchTerm?: string | null) {
    return axios.get<IVideoApiResponse>('http://localhost:4200/api/videos', searchTerm ? {
      params: {
        searchTerm
      }
    } : {})
  }

  getTrendingVideos() {
    return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
  }
  getExploreVideos() {
    return axios.get<IVideoApiResponse>('http://localhost:4200/api/videos/explore')
  }
}

export const videoService = new VideoService();