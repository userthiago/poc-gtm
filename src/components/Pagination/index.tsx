import React, { MouseEvent } from 'react';
import { usePostsContext } from '../../hooks/PostsHook';

import { Container } from './styles';

const Pagination: React.FC = () => {
  const pageNumbers = [];
  const { posts, postsPerPage, currentPage, handleChangePage } =
    usePostsContext();

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function changePage(e: MouseEvent<HTMLAnchorElement>, pageNumber: number) {
    e.preventDefault();
    handleChangePage(pageNumber);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map(pageNumber => (
          <li
            className={currentPage === pageNumber ? 'active' : undefined}
            key={pageNumber}
          >
            <a onClick={e => changePage(e, pageNumber)} href="/">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Pagination;
