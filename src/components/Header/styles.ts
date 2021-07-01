import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 2rem 1rem;

  h1 {
    font-size: 3rem;
    color: #ffffff;
    font-weight: bold;

    @media (max-width: 830px) {
      font-size: 2.5rem;
    }
  }

  img {
    height: 6rem;
    width: 6rem;
    margin-left: 1.5rem;
  }
`;
