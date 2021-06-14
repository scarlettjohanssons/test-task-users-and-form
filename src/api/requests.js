export const getUsers = () => {
  return fetch('http://77.120.241.80:8811/api/users')
    .then(response => response.json());
};

export const postUser = ({name, surname, desc, avatar}) => {
  return fetch('http://77.120.241.80:8811/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, surname, desc, avatar}),
  })
    .then(response => response.json());
};

export const putUser = ({id, name, surname, desc, avatar}) => {
  return fetch(`http://77.120.241.80:8811/api/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, name, surname, desc, avatar}),
  })
    .then(response => response.json());
};

export const removeUser = (userId) => {
  return fetch(`http://77.120.241.80:8811/api/user/${userId}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
};
