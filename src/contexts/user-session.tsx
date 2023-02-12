import { createContext, FC, ReactNode, useContext, useMemo, useRef, useState } from 'react';

interface IUserSession {
  isSignedIn: boolean;
}

interface IProps {
  children: ReactNode;
}

const UserSessionContext = createContext<IUserSession | null>(null);

export const useUserSession = () => useContext(UserSessionContext);

export const UserSessionProvider: FC<IProps> = ({ children }) => {
  const userSession: IUserSession = useMemo(() => ({
    isSignedIn: true,
  }), []);

  return (
    <UserSessionContext.Provider value={ userSession }>
      { children }
    </UserSessionContext.Provider>
  );
};