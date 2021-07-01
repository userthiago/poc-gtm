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
  margin-top: 1rem;

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
        text-transform: lowercase;
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
    margin: 2rem auto 0;
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
  }
`;
