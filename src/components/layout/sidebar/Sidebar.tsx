import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/sidebar-main-menu/SidebarMenu'
import { SubscriptionsMenu } from './menus/subscriptions-menu/SubscriptionsMenu'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

import cls from './Sidebar.module.scss'

export function Sidebar() {
	return (
		<aside className={cls.sidebar}>
			<SidebarHeader />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SubscriptionsMenu />
			<SidebarMenu
				title='MORE FROM YOUTUBE'
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}
