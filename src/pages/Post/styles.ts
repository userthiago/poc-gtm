import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  color: var(--purple);
  font-size: 0.8rem;

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

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  .post-information {
    background: var(--post-background);
    width: 100%;
    margin-bottom: 0.2rem;
    padding: 1rem;
    border-radius: 4px;

    h1 {
      color: var(--purple-dark);
      line-height: 1;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    .user-information {
      display: flex;
      align-items: center;

      margin-top: 0.6rem;

      &__name {
        color: var(--purple);
        font-weight: 500;
        font-size: 0.8rem;
      }

      &__username {
        margin-left: 0.2rem;

        color: var(--purple);
        font-size: 0.8rem;
      }
    }
  }

  .post-body {
    background: var(--post-background);
    width: 100%;
    padding: 1rem;
    border-radius: 4px;

    p {
      text-indent: 2rem;
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h2 {
    color: var(--purple-dark);
    margin-bottom: 1rem;
  }

  button {
    background: var(--purple);
    margin: 1.5rem auto 0;
    padding: 1rem 1.4rem;
    outline: none;
    border: 0;

    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;

    transition: background-color 0.2s ease;

    &:hover {
      background: var(--purple-light);
    }
  }

  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;

      & + li {
        margin-top: 1rem;
      }
    }

    .post {
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

          background: var(--purple);
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
    }

    .comment {
      &__content {
        background: var(--post-background);
        padding: 1rem;
        border-radius: 4px;
        width: 80%;

        @media (max-width: 830px) {
          width: unset;
        }

        h2 {
          margin-bottom: 0;

          font-size: 1.4rem;
          text-align: end;

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
  }
`;
