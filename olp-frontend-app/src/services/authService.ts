import axios from "axios";

const API_BASE_URL = 'http://localhost:8160/api/v1/auth';

export interface LoginRequestDTO {
  username: string | undefined;
  password: string | undefined;
}

export interface AccessTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  id_token: string | null;
  not_before_policy: number;
  session_state: string;
  scope: string;
  error?: string | null;
  error_description?: string | null;
  error_uri?: string | null;
}

export const AuthService = {
  async login(dto: LoginRequestDTO): Promise<void> {
    const response = await axios.post<AccessTokenResponse>(`${API_BASE_URL}/login`, dto);
    const data = response.data;

    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    localStorage.setItem('expiresAt', (Date.now() + data.expires_in * 1000).toString());
  },

  async logout(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return;

    try {
      await axios.post(`${API_BASE_URL}/logout`, null, {
        params: { refreshToken },
      });
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiresAt');
    }
  },

  async refreshToken(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('Refresh token not found');

    const response = await axios.post<AccessTokenResponse>(`${API_BASE_URL}/refresh-token`, null, {
      params: { refreshToken },
    });

    const data = response.data;

    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    localStorage.setItem('expiresAt', (Date.now() + data.expires_in * 1000).toString());
  },

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  },

  isTokenExpired(): boolean {
    const expiresAt = localStorage.getItem('expiresAt');
    return expiresAt ? Date.now() > parseInt(expiresAt) : true;
  },
};
