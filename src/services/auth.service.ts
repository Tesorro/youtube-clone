import { axiosBase } from "@/api/axios";
import type { IAuthData } from "@/app/auth/components/auth/auth-form.types";
import type { IUser } from "@/types/user.types";
import Cookies from "js-cookie";

export enum Tokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

class AuthService {

  private _AUTH = '/auth'

  async getNewTokens() {
    const response = await axiosBase.post<IAuthResponse>(`${this._AUTH}/access-token`);

    if (response.data.accessToken) {
      this._saveTokenStorage(response.data.accessToken)
    }

    return response;
  }

  async getNewTokenByRefresh(refreshToken: string) {
    const response = await axiosBase.post<IAuthResponse>(`${this._AUTH}/access-token`, {}, { headers: { Cookie: `refreshToken=${refreshToken}` } })

    return response.data;
  }

  async main(type: 'login' | 'register', data: IAuthData, recaptcha?: string | null) {
    const response = await axiosBase.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
      headers: {
        recaptcha
      }
    });

    if (response.data.accessToken) {
      this._saveTokenStorage(response.data.accessToken)
    }

    return response;
  }

  async logout() {
    const response = await axiosBase.post<boolean>(`/${this._AUTH}/logout`);

    if (response.data) this._removeFromStorage();

    return response;
  }

  private _saveTokenStorage(accessToken: string) {
    Cookies.set(Tokens.ACCESS_TOKEN, accessToken, {
      domain: 'localhost', //TODO: не забыдь поменять при деплое
      sameSite: 'strict',
      expires: 1 // день
    })
  }

  private _removeFromStorage() {
    Cookies.remove(Tokens.ACCESS_TOKEN)
  }
}

export const authService = new AuthService();