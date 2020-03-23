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
  UserMoreButton,
} from './styles';

export default function Users({ skill, name, photo }) {
  return (
    <Container>
      <UserLogoBox>
        <UserLogo src={photo} />
      </UserLogoBox>
      <UserInfoBox>
        <UserTextBox>
          <UserDetails>{name}</UserDetails>
          <UserLocation>{skill}</UserLocation>
        </UserTextBox>
        <UserActionsBox>
          <UserMoreButton />
        </UserActionsBox>
      </UserInfoBox>
    </Container>
  );
}
