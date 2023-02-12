import { Route, Routes } from 'react-router';
import { Home } from '../screens/Home';
import { NotFound } from '../screens/NotFound';
import { Profile } from '../screens/Profile';
import { SignIn } from '../screens/SignIn';
import { PrivateRoute } from './PrivateRoute';

export const MainRouter = () => {  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/signin' element={ <SignIn /> } />

      <Route element={ <PrivateRoute />}>
        <Route path='/profile' element={ <Profile /> } />
      </Route>

      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
};
