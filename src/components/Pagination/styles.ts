import styled from 'styled-components';

export const Container = styled.nav`
  margin: 2rem auto 0.5rem;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    list-style: none;

    li {
      background: var(--purple-light);
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      margin: 0.25rem;
      transition: background-color 0.2s ease;

      font-size: 1rem;

      &.active {
        background: var(--purple-dark);
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
