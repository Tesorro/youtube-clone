import type { IChannel } from "./channel.types";
import type { IWatchHistory } from "./history.types";

export interface IUser {
  id: string;
  createdAt: string;
  email: string;
  name?: string;
  password: string;
  updatedAt: string;
  verificationToken: string;
}

export interface IFullUser extends IUser {
  channel?: IChannel;
  subscriptions?: IChannel[];
  watchHistory?: IWatchHistory[];
}