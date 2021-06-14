import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import {Form} from '../Form';

export const User = ({user, onUpdateUser, onDeleteUser}) => {

  const [isEditing, setEditing] = useState(false);

  const startEditing = () => setEditing(true);
  const finishEditing = () => setEditing(false);

  const saveUser = (formData) => {
    onUpdateUser({ ...user, ...formData });
    finishEditing();
  };

  if (isEditing) {
    return (
      <div className='edit'>
        <Form user={user} onAddUser={saveUser} />
        <button className='edit__button' onClick={finishEditing}>Cancel</button>
      </div>
    )
      
  }

  return (
    <>
      <div className='card__wrapper'>
        {user.avatar ? (
          <img src={user.avatar} className="img" alt="avatar" />
        ) : (
          <div className='img__none'>
            <span>{user.name.substr(0, 1).toUpperCase()}</span>
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{user.name} {user.surname}</h5>
          <p className="card-text">{user.desc}</p>
          <button
            className='bg-primary'
            onClick={startEditing}
          >
            Update
          </button>
          <button
            className='bg-danger'
            onClick={onDeleteUser}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

User.defaultProps = {
  avatar: null,
};
