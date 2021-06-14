import { getAllUserAction, addUserAction, updateUserAction, removeUserAction } from "./reducerUsers";

export const getUsers = () => {
  return function(dispatch) {
    return fetch('http://77.120.241.80:8811/api/users')
      .then(response => response.json())
      .then(json => dispatch(getAllUserAction(json)))
      .then(res => console.log(res));
  }
}

export const postUser = ({name, surname, desc, avatar}) => {
  return function(dispatch) {
    return fetch('http://77.120.241.80:8811/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, surname, desc, avatar}),
    })
      .then(response => response.json())
      .then(json => dispatch(addUserAction(json)))
      .then(res => console.log(res));
  }
}

export const putUser = ({id, name, surname, desc, avatar}) => {
  return function(dispatch) {
    return fetch(`http://77.120.241.80:8811/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, surname, desc, avatar}),
    })
      .then(response => response.json())
      .then(json => dispatch(updateUserAction(json)))
      .then(res => console.log(res));
  }
}

export const removeUser = () => {
  return function(dispatch) {
    return fetch(`http://77.120.241.80:8811/api/user/${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => dispatch(removeUserAction(json)))
      .then(res => console.log(res));
  }
}