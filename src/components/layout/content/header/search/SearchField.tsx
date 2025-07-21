'use client'

import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/config/public-page.config'

import cls from './SearchField.module.scss'

interface Props {}

export function SearchField({}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(PAGE.SEARCH(searchTerm))
		}
	}
	return (
		<div className={cls.searchField}>
			<input
				className={cls.searchField__input}
				type='search'
				placeholder='Type to search'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}
