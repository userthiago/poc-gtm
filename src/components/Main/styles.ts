import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: var(--secondary-background);
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;

  @media (max-width: 565px) {
    padding: 1rem;
  }
`;
