import { Form, Input } from '@rocketseat/unform';
import styled from 'styled-components';

import logoBanner from '~/assets/img/banner-smaller.jpg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  /* grid-gap: 10px; */
  height: 100%;
  width: 100%;
  /* width: 40%;
  padding: 60px 20px 60px 20px;
  background-color: #3dd6d0;
  border-radius: 5px; */
`;

export const LoginForm = styled(Form)`
  /* background-color: #3dd6d0; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled(Input)`
  width: 75%;
  background-color: transparent;
  font-size: 35px;
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

export const LoginButton = styled.button`
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
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    letter-spacing: 1px;
  }
`;

export const LoginButtonName = styled.p``;

export const LoginBanner = styled.img.attrs({
  src: logoBanner,
})`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
