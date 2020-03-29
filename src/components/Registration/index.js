import React, { useState, useContext } from 'react';

import { toast } from 'react-toastify';
import { userRegistration } from '../../services/registrations.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import Login from '../Login';
import schema from './schema';
import history from '../../services/history';
import Loading from '../Loading';
import {
  Container,
  CreateForm,
  CreateInput,
  CreateInputImage,
  CreateButton,
  CreateButtonName,
  GoToLogin,
} from './styles';
import { userLogin } from '../../services/sessions.service';

export default function Registration() {
  const [, dispatch] = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await userRegistration(data);

      const { name, email, password } = data;

      const login = await userLogin({ user: { name, email, password } });
      dispatch(userStatus({ data: login }));

      history.push('/home');
    } catch (error) {
      toast.error('Ops, houve algum erro, tente novamente');
    }
    setLoading(false);
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
              type="string"
              name="name"
              placeholder="...seu nome"
              required
            />
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

            <CreateButton loading={loading} type="submit">
              {loading ? (
                <Loading />
              ) : (
                <CreateButtonName>CRIAR</CreateButtonName>
              )}
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
