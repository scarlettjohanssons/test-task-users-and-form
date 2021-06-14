import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Users } from './components/Users';
import { Form } from './components/Form';
import { getUsers, postUser, putUser, removeUser } from './api/requests';
// import { useDispatch } from 'react-redux';
// import { getUsers } from './store/users';



function App() {

  const [users, setUsers] = useState([]);
  // const dispatch = useDispatch();
  // const people = useSelector(state => state.users.users);

  const loadTodos = () => {
    getUsers()
      .then(setUsers);
  };

  useEffect(() => {
    loadTodos();
    // dispatch(getUsers());
  }, [])

  const addUser = (newUser) => {
    postUser(newUser)
      .then(loadTodos);
  }

  const updateUser = async (updateUser) => {
    await putUser(updateUser);
    loadTodos();
  }

  const deleteUser = async (userId) => {
    await removeUser(userId);
    loadTodos();
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/form">Form</Link>
            </div>
          </nav>
            
          <div style={{ flex: 1, padding: "10px" }}>
            <Route path='/home'>
              <h1>USERS APP</h1>
            </Route>
            <Route path='/users'>
              <Users 
                users={users}
                onUpdateUser={updateUser}
                onDeleteUser={deleteUser}
              />
            </Route>
            <Route path='/form'>
              <Form 
                onAddUser={addUser}
              />
            </Route>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;


