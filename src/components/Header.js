import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { inputFilter, setInputFilter } = useContext(MyContext);
  const [inputsData, setInputsData] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filterByName: { name } } = inputFilter;
  // const { column, comparison, value } = filterByNumericValues[0];

  const handleFilter = ({ target }) => {
    setInputFilter({
      ...inputFilter,
      filterByName: {
        name: target.value,
      },
    });
  };

  const handleSelectFilter = ({ target }) => {
    setInputsData({
      ...inputsData,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    setInputFilter({
      ...inputFilter,
      filterByNumericValues: [{
        column: inputsData.column,
        comparison: inputsData.comparison,
        value: inputsData.value,
      }],
    });

    console.log(inputsData.value);
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
      <select
        data-testid="column-filter"
        onChange={ handleSelectFilter }
        value={ inputsData.column }
        name="column"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleSelectFilter }
        value={ inputsData.comparison }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleSelectFilter }
        value={ inputsData.value }
        name="value"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Header;
