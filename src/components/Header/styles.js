import { FiEdit, FiLogOut } from 'react-icons/fi';

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

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 1px 7px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;

  &:first-child {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #bee6e0;
    font-weight: bold;
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  margin-left: 10px;
  color: #60b1a4;
`;

export const EditIcon = styled(FiEdit)`
  margin-left: 10px;
  color: #60b1a4;
`;

export const LogoutText = styled.p`
  color: #60b1a4;
`;

export const EditMenuText = styled.p`
  color: #60b1a4;
`;
