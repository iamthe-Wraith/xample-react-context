import { FC, FormEventHandler, useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Screen } from '../Screen';
import './styles.css';

export const SignIn: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    console.log('Signing in...', username, password);
  }, [username, password]);

  return (
    <Screen className='sign-in-screen'>
      <form className='signin-form' onSubmit={onSubmit}>
        <h1>Sign In</h1>

        <InputField
          id='username'
          label='Username'
          inputProps={{
            type: 'text',
            placeholder: 'Enter your username',
            value: username,
            onChange: (e) => setUsername(e.target.value),
          }}
        />

        <InputField
          id='password'
          label='Password'
          inputProps={{
            type: 'password',
            placeholder: 'Enter your password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
          }}
        />

        <div className='buttons-container'>
          <Button disabled={ !username || !password}>
            Sign In
          </Button>
        </div>
      </form>
    </Screen>
  );
}
