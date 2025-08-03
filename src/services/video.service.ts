import { axiosBase } from "@/api/axios";
import type { IVideo, IVideoApiResponse } from "@/types/video.types";

class VideoService {

  private _VIDEOS = '/videos'

  getAll(searchTerm?: string | null) {
    return axiosBase.get<IVideoApiResponse>(this._VIDEOS, searchTerm ? {
      params: {
        searchTerm
      }
    } : {})
  }

  getTrendingVideos() {
    return axiosBase.get<IVideo[]>(`${this._VIDEOS}/trending`)
  }

  getVideoGamesVideos() {
    return axiosBase.get<IVideoApiResponse>(`${this._VIDEOS}/games`)
  }

  getExploreVideos() {
    return axiosBase.get<IVideoApiResponse>(`${this._VIDEOS}/explore`)
  }
}

export const videoService = new VideoService();