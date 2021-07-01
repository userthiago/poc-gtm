import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  color: var(--purple);
  font-size: 0.8rem;

  & + h2 {
    margin-top: 1rem;
  }

  a {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;

    color: var(--purple);
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background: var(--purple);

      color: #ffffff;
    }
  }

  svg {
    margin: 0 0.2rem;
    flex-shrink: 0;
  }

  span {
    padding: 0.25rem 0.5rem;
  }
`;
