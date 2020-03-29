import styled, { keyframes } from 'styled-components';
import { AiOutlineReload } from 'react-icons/ai';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {transform: rotate(0deg)};
  to {transform: rotate(360deg)};
`;

export const LoadingIcon = styled(AiOutlineReload).attrs({
  size: 40,
})`
  color: var(--primary-color);
  animation: ${rotate} 2s linear infinite;
`;
