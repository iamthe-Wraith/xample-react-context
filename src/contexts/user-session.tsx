import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

interface IUserData {
  id: string;
  username: string;
}

interface IUserSession {
  data: IUserData | null;
  isProcessing: boolean;
  isSignedIn: boolean;
  signin: (username: string, password: string) => void;
  signout: () => void;
}

interface IProps {
  children: ReactNode;
}

const UserSessionContext = createContext<IUserSession | null>(null);

export const useUserSession = () => useContext(UserSessionContext);

export const UserSessionProvider: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<IUserData | null>(null);
  const [processing, setProcessing] = useState(false);

  const signin = useCallback((username: string, password: string) => {
    setProcessing(true);
    
    // using setTimeout to simulate a request
    console.log('POST /api/signin', { username, password });

    setTimeout(() => {
      setData({
        id: Math.random().toString(),
        username,
      });
      setProcessing(false);
      navigate('/');
    }, 500);
  }, []);

  const signout = useCallback(() => {
    setProcessing(true);
    
    // using setTimeout to simulate a request
    console.log('POST /api/signout');

    setTimeout(() => {
      setData(null);
      setProcessing(false);
      navigate('/');
    }, 500);
  }, []);

  const userSession: IUserSession = useMemo(() => ({
    data,
    isProcessing: processing,
    isSignedIn: !!data?.id,
    signin,
    signout,
  }), [
    data,
    processing,
    signin,
    signout,
  ]);

  return (
    <UserSessionContext.Provider value={ userSession }>
      { children }
    </UserSessionContext.Provider>
  );
};