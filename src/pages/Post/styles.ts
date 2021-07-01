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
    color: var(--purple);
    text-decoration: none;
  }

  svg {
    margin: 0 0.4rem;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  .post-information {
    background: var(--post-background);
    width: 100%;
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
    margin-top: 0.4rem;
    border-radius: 4px;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const CommentsContainer = styled.div`
  margin-top: 1rem;

  h2 {
    color: var(--purple-dark);
    margin-bottom: 1rem;
  }
`;
