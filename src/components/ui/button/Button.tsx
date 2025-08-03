import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cls from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ isLoading, children, ...props }: Props) {
	return (
		<button
			className={cls.button}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
