import cn from 'clsx'
import type { CSSProperties } from 'react'

import cls from './SkeletonLoader.module.scss'

interface Props {
	count?: number
	style?: CSSProperties
	className?: string
	variant?: 'default' | 'circle' | 'text' // Опциональные варианты
}

export function SkeletonLoader({ count = 1, className = '', style, variant = 'default' }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={cn(
						cls.skeleton,
						variant === 'circle' && cls['skeleton--circle'],
						variant === 'text' && cls['skeleton--text'],
						className
					)}
					style={style}
				/>
			))}
		</>
	)
}
