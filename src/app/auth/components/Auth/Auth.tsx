'use client'

import cn from 'clsx'
import { SquarePlay } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { PAGE } from '@/config/public-page.config'

import cls from './Auth.module.scss'

interface IAuthForm {
	email: string
	password: string
	confirmPassword?: string
}

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		const { confirmPassword, ...formattedData } = data
		if (isLogin) {
			console.log('Login', formattedData)
		} else {
			console.log('Registration', data)
		}
	}

	return (
		<div className={cls.auth}>
			<div className={cls.container}>
				<Link
					href={PAGE.HOME}
					className={cls.logoWrapper}
				>
					<SquarePlay
						className={cls.logo}
						size={29}
					/>
					<span className={cls.title}>Youtube clone</span>
				</Link>
				<div className={cls.inner}>
					<Button
						type='button'
						className={cn(cls.loginBtn, { [cls.active]: isLogin })}
						onClick={() => setIsLogin(true)}
					>
						Login
					</Button>
					<Button
						type='button'
						className={cn(cls.registerBtn, { [cls.active]: !isLogin })}
						onClick={() => setIsLogin(false)}
					>
						Registration
					</Button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label='Email'
						type='email'
						registration={register('email', { required: 'Email is required' })}
						error={errors.email?.message}
						placeholder='Enter email'
					/>
					<Field
						label='Password'
						type='password'
						registration={register('password', { required: 'Password is required' })}
						error={errors.password?.message}
						placeholder='Enter password'
					/>
					{!isLogin && (
						<Field
							label='Confirmation password'
							type='password'
							registration={register('confirmPassword', {
								required: 'Password need confirm',
								validate: value => value === watch('password') || 'Passwords are not match'
							})}
							error={errors.confirmPassword?.message}
							placeholder='Confirm password'
						/>
					)}
					<Button type={'submit'}>{isLogin ? 'Login' : 'Registration'}</Button>
				</form>
			</div>
		</div>
	)
}
