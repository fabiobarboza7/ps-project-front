import { FaHeart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import styled from 'styled-components';

export const Container = styled.div`
  height: 350px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  transition: 0.1s ease-in;
  box-shadow: 0 1px 2px 0 #ababab;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 2px 4px 1px #ababab;
  }

  position: relative;
`;

export const UserLogoBox = styled.div`
  height: 100%;
`;

export const UserInfoBox = styled.div`
  height: 69px;
  background-color: #3dd6d0;
  padding: 5px 15px;
  color: #f7fff7;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const UserLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const UserTextBox = styled.div`
  width: 100%;
`;

export const UserLocation = styled.p``;

export const UserDetails = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const UserActionsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserLikeButton = styled(FaHeart).attrs({
  size: 30,
})`
  margin-left: 20px;
  color: #ff6b6b;
`;

export const UserMoreButton = styled(FiSearch).attrs({
  size: 30,
})`
  color: #f7fff7;
`;
