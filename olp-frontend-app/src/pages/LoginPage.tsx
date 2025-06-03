import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import KeycloakTokenResponse from 'models/KeycloakTokenResponse';
import UserInfo from 'models/UserInfo';
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from '@toolpad/core/SignInPage';
import { AppProvider } from '@toolpad/core';
import { AuthService } from 'services/authService';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function LoginPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const signIn: (provider: AuthProvider, formData: FormData) => Promise<AuthResponse> = async (
    provider,
    formData,
  ) => {

    try {
      await AuthService.login({
        username: formData?.get('email')?.toString() ?? '',
        password: formData?.get('password')?.toString() ?? '',
      });

      navigate('/dashboard');

      return {
        success: 'Login successfully!'
      };
    } catch (error) {
      return {
        error: 'Login failed',
        type: 'LoginError',
      };
    }

  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false, type: "text", placeholder: "Username" } }}
      />
    </AppProvider>
  );
}
