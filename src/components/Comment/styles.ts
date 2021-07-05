import styled from 'styled-components';

export const CommentContainer = styled.li`
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: 1rem;
  }

  .comment {
    &__user {
      position: relative;
      display: flex;
      align-items: center;

      width: 100%;
      max-width: 20%;
      padding-right: 1rem;

      @media (max-width: 830px) {
        width: unset;
      }

      &:before {
        content: '';
        position: absolute;
        right: -0.75rem;

        background: var(--purple-dark);
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: solid 4px #ffffff;
      }

      .user {
        &__avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;

          background: var(--purple-dark);
          height: 2.6rem;
          width: 2.6rem;
          border-radius: 50%;

          color: var(--purple-super-light);
          font-size: 1.5rem;
          line-height: 1;
          font-weight: bold;
          text-transform: uppercase;
        }

        &__holder {
          margin-left: 0.5rem;
          width: calc(100% - 3.1rem);

          @media (max-width: 830px) {
            display: none;
          }
        }

        &__name {
          color: var(--purple);
          font-weight: 600;
        }

        &__email {
          color: var(--purple-dark);
          font-size: 0.7rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }

    &__content {
      background: var(--post-background);
      padding: 1rem;
      border-radius: 4px;
      width: 80%;

      @media (max-width: 830px) {
        width: unset;
      }

      h2 {
        margin-bottom: 0.5rem;

        color: var(--purple-dark);
        font-size: 1.4rem;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      p {
        text-indent: 2rem;

        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`;
