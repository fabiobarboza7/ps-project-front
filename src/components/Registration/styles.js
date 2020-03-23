import { Form } from '@unform/web';
import styled from 'styled-components';
import Input from '../Input/index';
import InputImage from '../Input/imageInput';

export const Container = styled.div``;

export const CreateForm = styled(Form)`
  margin: 0 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: showForm 0.3s forwards 0s ease-out;

  @keyframes showForm {
    0% {
      transform: translateX(-1500px);
    }
    95% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const CreateInput = styled(Input)`
  font-family: 'Raleway', sans-serif;
  background-color: transparent;
  font-size: 28px;
  height: 60px;
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

export const CreateInputImage = styled(InputImage)`
  font-family: 'Raleway', sans-serif;
  background-color: transparent;
  font-size: 28px;
  height: 60px;
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

export const CreateButton = styled.button`
  font-family: 'Raleway', sans-serif;
  position: relative;
  margin-top: 20px;
  height: 55px;
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

export const CreateButtonName = styled.p``;

export const GoToLogin = styled.p`
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin: 0 20%;
  margin-top: 20px;
  text-align: left;
  color: #6c6ea0;
  transition: 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;
