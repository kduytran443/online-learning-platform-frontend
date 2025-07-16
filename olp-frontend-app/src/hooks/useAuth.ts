import { AuthStatus } from "enumeration/authStatus";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface UserDTO {
  sub: string;
  username: string;
  roles: string[];
  permissions: string[];
}

const axiosAuthClient = axios.create({
  baseURL: "http://localhost:8072/auth-management/api",
  withCredentials: true
});

export function useAuth() {
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.LOADING);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosAuthClient.get<UserDTO>("/my-info");
        setUser(res.data);
        setStatus(AuthStatus.AUTHENTICATED);
      } catch (error) {
        console.error("Auth failed", error);
        setStatus(AuthStatus.UNAUTHENTICATED);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  return {
    status, user
  };
}
