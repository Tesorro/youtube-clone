import { HeaderLinks } from './header-links/HeaderLinks'
import { HeaderProfile } from './header-profile/HeaderProfile'
import { SearchField } from './search/SearchField'

import cls from './Header.module.scss'

export function Header() {
	return (
		<header className={cls.header}>
			<SearchField />
			<div className={cls.header__icons}>
				<HeaderLinks />
				<HeaderProfile />
			</div>
		</header>
	)
}
