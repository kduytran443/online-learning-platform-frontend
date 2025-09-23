import { useTheme } from '@mui/material';
import { SignInPage, type AuthProvider, type AuthResponse } from '@toolpad/core/SignInPage';
import { AppProvider } from '@toolpad/core';

const providers = [{ id: 'google', name: 'Google' }];

const googleLoginUrl = import.meta.env.VITE_API_GOOGLE_OAUTH2_LOGIN_URL;

export default function LoginPage() {
  const theme = useTheme();

  const signIn: (provider: AuthProvider, formData: FormData) => Promise<AuthResponse> = async (
    provider,
    formData,
  ) => {
    window.location.href = googleLoginUrl;
    return {
      success: 'Redirect to Google login',
    };
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false, type: 'text', placeholder: 'Username' } }}
      />
    </AppProvider>
  );
}
