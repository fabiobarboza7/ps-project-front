import React, { useContext, useState } from 'react';

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
import Modal from '../../components/Modal';
import EditModal from '../../components/Modal/editModal';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [clickedUser, setClickedUser] = useState({});
  const [users] = useState([
    {
      skill: 'Psicóloga',
      name: 'Cátia',
      photo: user0,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Terapeuta',
      name: 'João',
      photo: user6,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Psiquiatra',
      name: 'Maria da Silva',
      photo: user1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Conselheiro',
      name: 'Catarina',
      photo: user2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Psiquiatra',
      name: 'Larissa',
      photo: user3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Terapeuta',
      name: 'Thaís',
      photo: user4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Psicanalista',
      name: 'César',
      photo: user5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Psiquiatra',
      name: 'Fábio Souza',
      photo: user8,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
    {
      skill: 'Conselheiro',
      name: 'Letícia',
      photo: user7,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque vero ex, nihil autem, vitae doloribus, quo dolorem in distinctio eius numquam laboriosam sint? Odit inventore odio alias. Accusantium, eos.',
    },
  ]);

  const [{ user }] = useContext(Store);

  const { name } = user.data;
  const { image } = user;

  function handleOpenEditModal() {
    setOpenEditModal(!openEditModal);
  }

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function handleClickedUser(_user) {
    setClickedUser({ ..._user });
    handleOpenModal();
  }

  return (
    <>
      <Header
        userName={name}
        userIcon={image}
        handleOpenEditModal={handleOpenEditModal}
      />
      ,
      <Main>
        {users.map(_user => (
          <Users data={_user} handleClickedUser={handleClickedUser} />
        ))}
      </Main>
      <Modal
        handleOpenModal={handleOpenModal}
        openModal={openModal}
        data={clickedUser}
      />
      <EditModal
        handleOpenEditModal={handleOpenEditModal}
        openModal={openEditModal}
        data={{ name, photo: image }}
      />
    </>
  );
}
