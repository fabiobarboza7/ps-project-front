import React, { useContext } from 'react';

import { logout } from '../../services/logout.service';
import { Store } from '../../store';
import { userLoggedOut } from '../../store/modules/users/actions';

import {
  Container,
  UserLogo,
  LogoContainer,
  HeaderTitle,
  LogoutButton,
} from './styles';
import history from '../../services/history';

export default function Header({ userName, UserIcon }) {
  const [, dispatch] = useContext(Store);

  async function handleLogout() {
    try {
      const { logged_out } = await logout();
      dispatch(userLoggedOut({ logged_out }));
      history.push('/');
    } catch (error) {
      return error;
    }

    return false;
  }

  return (
    <Container>
      <LogoContainer>
        <UserLogo />
      </LogoContainer>
      <HeaderTitle>Olá {userName}</HeaderTitle>
      <LogoutButton onClick={() => handleLogout()} />
    </Container>
  );
}
