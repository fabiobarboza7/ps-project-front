import React from 'react';

import Registration from '../../components/Registration';

import { Container, Banner } from './styles';

export default function Root() {
  return (
    <Container>
      <Registration />
      <Banner />
    </Container>
  );
}
