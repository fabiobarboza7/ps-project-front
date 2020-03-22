import React from 'react';

import {
  Container,
  UserLogo,
  UserLocation,
  UserDetails,
  UserLogoBox,
  UserInfoBox,
  UserActionsBox,
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
          <UserDetails>Fulada da Silva</UserDetails>
          <UserLocation>São Paulo - SP</UserLocation>
        </UserTextBox>
        <UserActionsBox>
          <UserMessagesButton />
        </UserActionsBox>
      </UserInfoBox>
    </Container>
  );
}
