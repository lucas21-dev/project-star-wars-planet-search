import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function ShowFilters({ handleFilter }) {
  const { inputFilter: { filterByNumericValues } } = useContext(MyContext);

  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{ column }</span>
            <span> | </span>
            <span>{ comparison }</span>
            <span> | </span>
            <span>{ value }</span>
            <span>  </span>
            <button
              type="button"
              onClick={ () => handleFilter(column) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}

ShowFilters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default ShowFilters;
