import { useMutation } from "@tanstack/react-query";

import { useRef, useTransition } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import type { IAuthData, IAuthForm } from "./auth-form.types";
import { authService } from "@/services/auth.service";
import type { SubmitHandler, UseFormReset } from "react-hook-form";
import { PAGE } from "@/config/public-page.config";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthForm>) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { mutateAsync, isPending: isAuthPending } = useMutation({
    mutationKey: [type],
    mutationFn: (data: IAuthData) => authService.main(type, data, recaptchaRef.current?.getValue()),
  })

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    const { confirmPassword, ...formattedData } = data
    const token = recaptchaRef.current?.getValue()

    if (!token) {
      toast.error('Pass the captcha!', { id: 'recaptcha' });
      return;
    }

    if (type === 'login') {
      toast.promise(mutateAsync(formattedData), {
        loading: 'Loading...', success: () => {
          startTransition(() => {
            reset();
            router.push(PAGE.HOME);

          })
          return 'Success login'
        }, error: e => {
          if (axios.isAxiosError(e)) {
            return e.response?.data?.message
          }
        }
      });
    } else {
      toast.promise(mutateAsync(data), { loading: 'Loading...' })
    }
  }
  const isLoading = isPending || isAuthPending;

  return { onSubmit, recaptchaRef, isLoading }
}