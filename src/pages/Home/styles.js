import styled from 'styled-components';

export const Main = styled.div`
  margin: 50px 15%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    margin: 50px 3%;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    margin: 50px 3%;
  }
`;
