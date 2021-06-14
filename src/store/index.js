import { createStore, combineReducers, applyMiddleware } from 'redux';
import {users} from './reducerUsers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
