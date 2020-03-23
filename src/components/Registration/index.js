import React, { useState, useContext } from 'react';

import { toast } from 'react-toastify';
import { userRegistration } from '../../services/registrations.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import Login from '../Login';
import schema from './schema';
import history from '../../services/history';
// import { Container } from './styles';
import {
  Container,
  CreateForm,
  CreateInput,
  CreateInputImage,
  CreateButton,
  CreateButtonName,
  GoToLogin,
} from './styles';

export default function Registration() {
  const [, dispatch] = useContext(Store);
  const [userExists, setUserExists] = useState(false);

  async function handleSubmit(data) {
    try {
      const response = await userRegistration(data);
      dispatch(userStatus({ data: response }));
      history.push('/home');
    } catch (error) {
      toast.error('Ops, houve algum erro, tente novamente');
    }
  }

  function handleLogin() {
    setUserExists(!userExists);
  }

  return (
    <Container>
      {userExists ? (
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

            <CreateInputImage type="file" name="image" required />

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
