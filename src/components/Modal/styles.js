import styled from 'styled-components';
import { Form } from '@unform/web';
import TextArea from '../Input/textarea';

export const ModalContainer = styled.div`
  transition: 1s;
  display: ${({ openModal }) => (openModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalPhotoContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const ModalInfoContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 720px) {
    display: block;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    display: block;
  }
`;

export const ModalInfo = styled.div`
  width: 50%;
  padding: 0 20px;

  @media (max-width: 720px) {
    width: 100%;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    width: 100%;
  }
`;

export const ModalInfoTitle = styled.h2`
  color: #3dd6d0;
  margin-bottom: 10px;
`;

export const ModalPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  border-radius: 5px;
  /* border: 1px solid #3dd6d0; */
  width: 70%;
  overflow: hidden;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  color: #ff556b;
  font-size: 35px;
  font-weight: bold;
  transition: 0.4s;

  &:hover {
    transform: rotate(180deg) scale(1.1);
    color: #ff0022;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalText = styled.p`
  color: #585858;
`;

export const ModalInfoList = styled.ul``;

export const ModalInfoListItem = styled.li`
  margin-bottom: 5px;
`;

export const Strong = styled.span`
  font-weight: bold;
`;

export const ModalAdviserForm = styled(Form)`
  width: 50%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: showForm 0.3s forwards 0s ease-out;

  @media (max-width: 720px) {
    width: 100%;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    width: 100%;
  }
`;

export const ModalAdviserInput = styled(TextArea)`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  background-color: transparent;
  font-size: 22px;
  padding-left: 5px;
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: #3dd6d0;
  color: #3dd6d0;

  &::placeholder {
    color: #3dd6d0;
    font-size: 22px;
  }
`;

export const SendAdviserRequest = styled.button`
  font-family: 'Raleway', sans-serif;
  margin-top: 20px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #3dd6d0;
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  border: transparent;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    letter-spacing: 1px;
  }
`;

export const SendAdviserRequestText = styled.p``;
