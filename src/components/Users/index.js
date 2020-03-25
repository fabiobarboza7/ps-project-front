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

export default function Users({ data, handleClickedUser }) {
  const { skill, name, photo } = data;

  return (
    <Container onClick={() => handleClickedUser(data)}>
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
