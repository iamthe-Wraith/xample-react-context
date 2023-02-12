import { Navigate, Outlet } from "react-router";
import { useUserSession } from "../../contexts/user-session";

export const PrivateRoute = () => {
  const userSession = useUserSession()!;
  return userSession.isSignedIn ? <Outlet /> : <Navigate to="/signin" />;
}