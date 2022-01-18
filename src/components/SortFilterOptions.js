import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

const defaultOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

// const MINUS_SORT = -1;

function SortFilterOptions() {
  const { sort, setSort, data, setData } = useContext(MyContext);
  const [sortOrder, setSortOrder] = useState({
    column: 'population',
    sortBy: 'ASC',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setSortOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSortClick = () => {
    setSort({
      column: sortOrder.column,
      sortBy: sortOrder.sortBy,
    });
  };

  useEffect(() => {
    const sortData = () => {
      if (sort.sortBy === 'ASC') {
        const sortedData = [...data].sort(
          (a, b) => Number(a[sort.column]) - Number(b[sort.column]),
        );
        return sortedData;
      }

      const sortedData = [...data].sort(
        (a, b) => Number(b[sort.column]) - Number(a[sort.column]),
      );
      return sortedData;
    };
    const sortedData = sortData();
    setData(sortedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div>
      <div>
        <select data-testid="column-sort" name="column" onChange={ handleChange }>
          {
            defaultOptions.map((opt, index) => (
              <option key={ index }>{opt}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="asc">
          Ascendente
          <input
            type="radio"
            id="asc"
            name="sortBy"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ handleChange }
          />
        </label>
        <label htmlFor="desc">
          Descendente
          <input
            type="radio"
            id="desc"
            name="sortBy"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ handleChange }
          />
        </label>
      </div>
      <button type="button" data-testid="column-sort-button" onClick={ handleSortClick }>
        Ordenar
      </button>
    </div>
  );
}

export default SortFilterOptions;
