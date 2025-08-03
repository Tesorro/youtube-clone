import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import cls from './Field.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	registration: UseFormRegisterReturn
}

export function Field({ label, error, registration, ...props }: Props) {
	return (
		<div className={cls.container}>
			<label>
				<span>{label}</span>
				<input
					className={cn(cls.input, { [cls.error]: error })}
					{...registration}
					{...props}
				/>
			</label>
			{error && <span className={cls.errorMessage}>{error}</span>}
		</div>
	)
}
