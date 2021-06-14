import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Users.scss';

import { Pagination } from '../Pagination';
import {User} from '../User';

export const Users = ({users, onUpdateUser, onDeleteUser}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsOnPage] = useState(5);

  const indexOfLastCards = currentPage * cardsOnPage;
  const indexOfFirstCards = indexOfLastCards - cardsOnPage;
  const currentCards = users.slice(indexOfFirstCards, indexOfLastCards);

  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className='cards'>
        {currentCards.map(user => (
          <div className="card" key={user.id}>
            <User
              user={user}
              onUpdateUser={onUpdateUser}
              onDeleteUser={() => onDeleteUser(user.id)}
            />
          </div>
        ))}
      </div>

      <Pagination cardsOnPage={cardsOnPage} allCards={users.length} paginate={paginate} />
    </>
  )
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};