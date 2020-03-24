import React, { useContext } from 'react';

import Header from '../../components/Header';
import Users from '../../components/Users';
import { Main } from './styles';

import user0 from '../../assets/img/user.png';
import user1 from '../../assets/img/user1.png';
import user2 from '../../assets/img/user2.png';
import user3 from '../../assets/img/user3.png';
import user4 from '../../assets/img/user4.png';
import user5 from '../../assets/img/user5.png';
import user6 from '../../assets/img/user6.png';
import user7 from '../../assets/img/user7.png';
import user8 from '../../assets/img/user8.png';
import { Store } from '../../store';

export default function Home() {
  const [{ user }] = useContext(Store);

  const { name } = user.data;
  const { image } = user;

  return (
    <>
      {console.log(user)}
      <Header userName={name} userIcon={image} />
      <Main>
        <Users skill="Psicóloga" name="Cátia" photo={user0} />
        <Users skill="Terapeuta" name="João" photo={user6} />
        <Users skill="Psiquiatra" name="Maria da Silva" photo={user1} />
        <Users skill="Conselheiro" name="Catarina" photo={user2} />
        <Users skill="Psiquiatra" name="Larissa" photo={user3} />
        <Users skill="Terapeuta" name="Thaís" photo={user4} />
        <Users skill="Psicanalista" name="César" photo={user7} />
        <Users skill="Psiquiatra" name="Fábio Souza" photo={user8} />
        <Users skill="Conselheiro" name="Letícia" photo={user5} />
      </Main>
    </>
  );
}
