import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import { userLogin } from '../../services/sessions.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import schema from './schema';
import {
  Container,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginButtonName,
} from './styles';
import history from '../../services/history';

export default function Login() {
  const [, dispatch] = useContext(Store);

  async function handleSubmit(data) {
    try {
      const response = await userLogin({ user: { ...data } });
      dispatch(userStatus({ data: response }));
      if (response.logged_in) {
        history.push('/home');
      }
    } catch (e) {
      toast.error('Usuário ou senha inválidos');
    }
  }

  return (
    <Container>
      <LoginForm schema={schema} onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          name="email"
          placeholder="...seu email"
          required
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="...sua senha"
          required
        />

        <LoginButton type="submit">
          <LoginButtonName>ENTRAR</LoginButtonName>
        </LoginButton>
      </LoginForm>
    </Container>
  );
}
