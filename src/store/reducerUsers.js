const initialState = {
  users: [],
}

const GET_ALL_USERS = 'GET_ALL_USERS'
const ADD_USERS = 'ADD_USERS'
const REMOVE_USERS = 'GET_USERS'
const UPDATE_USERS = 'UPDATE_USERS'

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: [...state.users, ...action.users]}
    case ADD_USERS:
      return {...state, users: [...state.users, action.users]}
    case UPDATE_USERS:
      return {...state, users: state.users.findIndex(user => user.id === action.users.id)}
    case REMOVE_USERS:
      return {...state, users: state.users.filter(user => user.id !== action.users)}
  
    default:
      return state;
  }
}

export const addUserAction = (users) => ({type: ADD_USERS, users})
export const getAllUserAction = (users) => ({type: GET_ALL_USERS, users})
export const removeUserAction = (users) => ({type: REMOVE_USERS, users})
export const updateUserAction = (users) => ({type: UPDATE_USERS, users})
