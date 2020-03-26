import React, { useEffect } from 'react';

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
          <ModalAdviserForm>
            <ModalAdviserInput
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
