'use client'

import cn from 'clsx'
import { SquarePlay } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { SkeletonLoader } from '@/ui/skeleton-loader/SkeletonLoader'

import { PAGE } from '@/config/public-page.config'

import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

import cls from './Auth.module.scss'

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const type = isLogin ? 'login' : 'register'

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(type, reset)

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
					{isLoading ? (
						<SkeletonLoader count={1} />
					) : (
						<>
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
							<ReCAPTCHA
								ref={recaptchaRef}
								size='normal'
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
								theme='light'
								className={cls.recaptcha}
							/>
						</>
					)}
					<Button
						isLoading={isLoading}
						type={'submit'}
					>
						{isLogin ? 'Login' : 'Registration'}
					</Button>
				</form>
			</div>
		</div>
	)
}
