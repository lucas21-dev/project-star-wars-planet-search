import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { inputFilter, setInputFilter } = useContext(MyContext);
  const [inputsData, setInputsData] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [optionsAvailable, setOptionsAvailable] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const { filterByName: { name } } = inputFilter;

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
      filterByNumericValues: [...inputFilter.filterByNumericValues, {
        column: inputsData.column,
        comparison: inputsData.comparison,
        value: inputsData.value,
      }],
    });
    const newOptions = optionsAvailable.filter((opt) => opt !== inputsData.column);
    setOptionsAvailable(newOptions);
  };

  return (
    <div>
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
          {
            optionsAvailable.map((opt, index) => (
              <option value={ opt } key={ index }>{ opt }</option>
            ))
          }
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
      <div>
        {
          inputFilter.filterByNumericValues.map((filter, index) => (
            <div key={ index }>
              <span>{ filter.column }</span>
              <span>{ filter.comparison }</span>
              <span>{ filter.value }</span>
              <button type="button" data-testid="filter">X</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Header;
