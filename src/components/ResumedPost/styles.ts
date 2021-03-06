import styled from 'styled-components';

export const ResumedPostContainer = styled.li`
  & + li {
    margin-top: 1rem;
  }

  a {
    display: flex;
    align-items: center;

    background: var(--post-background);
    width: 100%;
    padding: 1rem 0.6rem 1rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    &:hover {
      transform: translateX(4px);
    }

    .resumedPostContainer {
      &__content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;

        h2 {
          color: var(--purple-dark);
          font-size: 1.2rem;

          &::first-letter {
            text-transform: capitalize;
          }
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;

          background: var(--purple-dark);
          height: 2.5rem;
          width: 2.5rem;
          padding: 0.5rem;
          border-radius: 50%;
          margin-right: 1rem;

          color: var(--purple-super-light);
          font-size: 1.5rem;
          line-height: 1;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }

    svg {
      margin-left: 1rem;

      color: var(--purple-dark);
      font-size: 2rem;
    }
  }
`;
