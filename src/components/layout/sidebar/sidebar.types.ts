import type { LucideIcon } from "lucide-react";

export interface ISidebarItem {
  icon: LucideIcon,
  label: string,
  link: string,
  isBottomBorder?: boolean
}

export interface ISidebarSubscriptionItem extends Pick<ISidebarItem, 'label' | 'link'> {
  avatar: string,
  isOnLive?: boolean
  isRecentUpload?: boolean
}