import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchPlanets from '../services/getPlanets';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputFilter, setInputFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [sort, setSort] = useState({
    column: 'name',
    sortBy: 'ASC',
  });

  useEffect(() => {
    async function fetchData() {
      const planetsData = await fetchPlanets();
      setData(planetsData.results);
    }
    fetchData();
  }, [setData]);

  const context = {
    data,
    setData,
    inputFilter,
    setInputFilter,
    setSort,
    sort,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
