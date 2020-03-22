import { IoIosLogOut } from 'react-icons/io';

import styled from 'styled-components';

import userLogo from '~/assets/img/user.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f7fff7;
  background-attachment: fixed;
`;

export const LogoContainer = styled.div``;

export const UserLogo = styled.img.attrs({
  src: userLogo,
  width: 100,
  height: 100,
})`
  position: absolute;
  top: 23px;
  border-radius: 50%;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #3dd6d0;
`;

export const LogoutButton = styled(IoIosLogOut).attrs({
  size: 30,
})`
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  color: #15b097;
`;
