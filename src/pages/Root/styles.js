// pallet https://coolors.co/app/ffffff-3dd6d0-15b097-513c2c-28190e
import styled from 'styled-components';

import logoBanner from '../../assets/img/banner-smaller.jpg';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Banner = styled.img.attrs({
  src: logoBanner,
})`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
