import React, { useContext } from 'react';

import { logout } from '../../services/logout.service';
import { Store } from '../../store';
import { userLoggedOut } from '../../store/modules/users/actions';

import {
  Container,
  UserLogo,
  LogoContainer,
  HeaderTitle,
  EditMenuText,
  EditIcon,
  LogoutIcon,
  LogoutText,
  Menu,
  MenuItem,
} from './styles';
import history from '../../services/history';

export default function Header({ userName, userIcon, handleOpenEditModal }) {
  const [, dispatch] = useContext(Store);
  console.log(userIcon);
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
        <UserLogo userIcon={userIcon} />
      </LogoContainer>
      <HeaderTitle>Olá {userName}</HeaderTitle>
      <Menu>
        <MenuItem onClick={handleOpenEditModal}>
          <EditMenuText>editar</EditMenuText>
          <EditIcon />
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>
          <LogoutText>sair</LogoutText>
          <LogoutIcon />
        </MenuItem>
      </Menu>
    </Container>
  );
}
