import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { inputFilter, setInputFilter } = useContext(MyContext);
  const { filterByName: { name } } = inputFilter;

  const handleFilter = ({ target }) => {
    setInputFilter({
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <div>
      <h1>StarWars Planet Search</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilter }
        value={ name }
      />
    </div>
  );
}

export default Header;
