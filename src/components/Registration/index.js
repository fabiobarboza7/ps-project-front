import React, { useContext, useState } from 'react';

import { userRegistration } from '../../services/registrations.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import Login from '../Login';
import schema from './schema';
// import { Container } from './styles';
import {
  Container,
  CreateForm,
  CreateInput,
  CreateButton,
  CreateButtonName,
  GoToLogin,
} from './styles';

export default function Registration() {
  const [, dispatch] = useContext(Store);
  const [userExists, setUserExists] = useState(false);

  async function handleSubmit(data) {
    const response = await userRegistration({ user: { ...data } });
    dispatch(userStatus({ data: response }));
  }

  function handleLogin() {
    setUserExists(!userExists);
  }

  return (
    <Container>
      {!userExists ? (
        <>
          <CreateForm id="form" schema={schema} onSubmit={handleSubmit}>
            <CreateInput
              type="email"
              name="email"
              placeholder="...seu email"
              required
            />
            <CreateInput
              type="password"
              name="password"
              placeholder="...sua senha"
              required
            />

            <CreateButton type="submit">
              <CreateButtonName>CRIAR</CreateButtonName>
            </CreateButton>
          </CreateForm>
          <GoToLogin onClick={handleLogin}>Já tenho conta, acessar</GoToLogin>
        </>
      ) : (
        <>
          <Login />
          <GoToLogin onClick={handleLogin}>Não tenho conta, criar</GoToLogin>
        </>
      )}
    </Container>
  );
}
