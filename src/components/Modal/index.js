import React, { useEffect } from 'react';

import { toast } from 'react-toastify';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  CloseButton,
  ModalPhotoContainer,
  ModalPhoto,
  ModalInfoContainer,
  ModalInfo,
  ModalInfoTitle,
  ModalText,
  ModalInfoList,
  ModalInfoListItem,
  Strong,
  ModalAdviserForm,
  ModalAdviserInput,
  SendAdviserRequest,
  SendAdviserRequestText,
} from './styles';
import { adviserCreate } from '../../services/advisers.service';
import schema from './schema';

export default function Modal({ openModal = false, handleOpenModal, data }) {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        handleOpenModal();
      }
    }

    if (openModal) {
      document.onkeydown = e => handleKeyPress(e);
    }
  }, [handleOpenModal, openModal]);

  async function handleSubmit(_data) {
    const userTarget = { user_target: data.id };
    try {
      await adviserCreate({ ..._data, ...userTarget });
      toast.success('Conselho enviado com sucesso, aguarde a resposta');
    } catch (error) {
      toast.error('Ops, houve algum erro, tente novamente');
    }
  }

  return (
    <ModalContainer openModal={openModal}>
      <ModalContent>
        <ModalHeader>
          <ModalPhotoContainer>
            <ModalPhoto src={data.photo} />
          </ModalPhotoContainer>
          <CloseButton onClick={handleOpenModal}>&times;</CloseButton>
        </ModalHeader>
        <ModalInfoContainer>
          <ModalInfo>
            <ModalInfoTitle>Perfil de {data.name}</ModalInfoTitle>
            <ModalInfoList>
              <ModalInfoListItem>
                <ModalText>
                  <Strong>Profissão:</Strong> {data.skill}
                </ModalText>
              </ModalInfoListItem>
              <ModalInfoListItem>
                <ModalText>
                  <Strong>Descrição:</Strong> {data.description}
                </ModalText>
              </ModalInfoListItem>
            </ModalInfoList>
          </ModalInfo>
          <ModalAdviserForm id="form" schema={schema} onSubmit={handleSubmit}>
            <ModalAdviserInput
              type="text"
              name="message"
              placeholder="...descreva brevemente o conselho que busca"
              required
            />
            <SendAdviserRequest>
              <SendAdviserRequestText>
                Solicitar Conselho
              </SendAdviserRequestText>
            </SendAdviserRequest>
          </ModalAdviserForm>
        </ModalInfoContainer>
      </ModalContent>
    </ModalContainer>
  );
}
