import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, setAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');
  // state = {
  //   text: '',
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter Something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          placeholder='Search User'
        />
        <input
          type='submit'
          value='search'
          className='btn btn-block btn-dark'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
