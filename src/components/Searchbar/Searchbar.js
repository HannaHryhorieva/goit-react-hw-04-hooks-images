import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      return toast.error('Введите поисковый запрос!');
    }
    onSubmit(searchValue.toLowerCase());
    setSearchValue('');
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={searchValue}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
