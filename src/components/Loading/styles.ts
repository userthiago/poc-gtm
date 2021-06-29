import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 3rem;
    width: 3rem;
    animation: ${spinning} 2.5s infinite linear;
  }

  span {
    margin-left: 0.8rem;

    color: var(--purple-dark);
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
