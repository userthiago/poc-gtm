import styled from 'styled-components';

export const Container = styled.nav`
  margin: 2rem 0 0.5rem;

  ul {
    display: flex;
    list-style: none;

    li {
      background: var(--purple-light);
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      transition: background-color 0.2s ease;

      font-size: 1rem;

      &.active {
        background: var(--purple-dark);
      }

      & + li {
        margin-left: 1rem;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;
        border-radius: 50%;

        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
