import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

export const Form = ({onAddUser}) => {

  const [name, setName] = useState('');
  const [surname, setSurename] = useState('');
  const [desc, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorSurename, setErrorSurename] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setErrorName(true);
    }
    if (!surname) {
      setErrorSurename(true);
    }
    if (!desc) {
      setErrorDescription(true);
      return;
    }

    onAddUser({name, surname, desc, avatar});

    setName('');
    setSurename('');
    setDescription('');
    setAvatar('');
  }
  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Your Name*</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          value={name}
          onChange={({target}) => {
            setName(target.value);
            setErrorName(false);
          }}
        />
        {errorName && (
          <div className='form__error form__error--name'>This field is required</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputSurename" className="form-label">Your Surename*</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputSurename"
          value={surname}
          onChange={({target}) => {
            setSurename(target.value);
            setErrorSurename(false);
          }}
        />
        {errorSurename && (
          <div className='form__error form__error--surename'>This field is required</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDescription" className="form-label">Your Description*</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputDescription"
          value={desc}
          onChange={({target}) => {
            setDescription(target.value);
            setErrorDescription(false);
          }}
        />
        {errorDescription && (
          <div className='form__error form__error--description'>This field is required</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAvatar" className="form-label">Link on your Avatar</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAvatar"
          value={avatar}
          onChange={({target}) => setAvatar(target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={
          errorName
          || errorSurename
          || errorDescription
        }
      >
        Submit
      </button>
    </form>
  )
};

Form.propTypes = {
  onAddUser: PropTypes.func.isRequired,
}
