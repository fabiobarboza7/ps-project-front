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
} from './styles';

export default function EditModal({
  openModal = false,
  handleOpenEditModal,
  data,
}) {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        handleOpenEditModal();
      }
    }

    if (openModal) {
      document.onkeydown = e => handleKeyPress(e);
    }
  }, [handleOpenEditModal, openModal]);

  return (
    <ModalContainer openModal={openModal}>
      <ModalContent>
        <ModalHeader>
          <ModalPhotoContainer>
            <ModalPhoto src={data.photo} />
          </ModalPhotoContainer>
          <CloseButton onClick={handleOpenEditModal}>&times;</CloseButton>
        </ModalHeader>
        <ModalInfoContainer>
          <ModalInfo>
            <ModalInfoTitle>Editar meu perfil</ModalInfoTitle>
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
        </ModalInfoContainer>
      </ModalContent>
    </ModalContainer>
  );
}
