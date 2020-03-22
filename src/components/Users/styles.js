import { FaHeart } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

import styled from 'styled-components';

import dogLogo from '~/assets/img/dog.png';

export const Container = styled.div`
  cursor: pointer;
  background-color: #ffe66d;
  border-radius: 5px;
  transition: 0.3s ease-in;
  &:hover {
    box-shadow: 0px 3px 5px 2px #ababab;
  }
`;

export const UserLogoBox = styled.div``;

export const UserInfoBox = styled.div`
  background-color: #4ecdc4;
  padding: 5px 15px;
  color: #f7fff7;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserLogo = styled.img.attrs({
  src: dogLogo,
})`
  width: 100px;
`;

export const UserTextBox = styled.div`
  width: 100%;
`;

export const UserLocation = styled.p``;

export const UserDetails = styled.p``;

export const UserActionsBox = styled.div`
  width: 100%;
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

export const UserMessagesButton = styled(TiMessages).attrs({
  size: 30,
})`
  color: #f7fff7;
`;
