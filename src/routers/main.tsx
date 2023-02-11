import { Route, Routes } from 'react-router';
import { Home } from '../screens/Home';
import { NotFound } from '../screens/NotFound';
import { Profile } from '../screens/Profile';
import { SignIn } from '../screens/SignIn';

export const MainRouter = () => {  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/signin' element={ <SignIn /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
};
