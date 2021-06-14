import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

export const Pagination = ({ cardsOnPage, allCards, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCards / cardsOnPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='list'>
      {pageNumbers.map(number => (
        <li key={number}>
          {/* eslint-disable-next-line */}
          <a className='list__link' onClick={() => paginate(number)} href='#'>{number}</a>
        </li>
      ))}
    </ul>
  )
};

Pagination.propTypes = {
  cardsOnPage: PropTypes.number.isRequired,
  allCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
