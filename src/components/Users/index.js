import React from 'react';

import {
  Container,
  UserLogo,
  UserLocation,
  UserDetails,
  UserLogoBox,
  UserInfoBox,
  UserActionsBox,
  UserLikeButton,
  UserTextBox,
  UserMessagesButton,
} from './styles';

export default function Users() {
  return (
    <Container>
      <UserLogoBox>
        <UserLogo />
      </UserLogoBox>
      <UserInfoBox>
        <UserTextBox>
          <UserDetails>Ração indefinida</UserDetails>
          <UserLocation>São Paulo - SP</UserLocation>
        </UserTextBox>
        <UserActionsBox>
          <UserMessagesButton />
          <UserLikeButton />
        </UserActionsBox>
      </UserInfoBox>
    </Container>
  );
}
