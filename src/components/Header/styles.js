import { IoIosLogOut } from 'react-icons/io';

import styled from 'styled-components';

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

export const UserLogo = styled.img.attrs(({ userIcon }) => ({
  src: userIcon,
  width: 100,
  height: 100,
}))`
  position: absolute;
  top: 39px;
  border-radius: 50%;
  border: 3px solid #3dd645;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #3dd6d0;
  margin-right: 20px;
  margin-left: auto;
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
