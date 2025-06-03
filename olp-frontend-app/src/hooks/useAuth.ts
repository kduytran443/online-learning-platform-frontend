import { AuthStatus } from "enumeration/authStatus";

export function useAuth() {
  const token = localStorage.getItem('accessToken');

  return {
    status: token ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED,
  };
}
