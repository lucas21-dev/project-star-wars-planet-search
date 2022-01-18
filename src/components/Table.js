import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import './table.css';

function Table() {
  const { data, inputFilter, sort } = useContext(MyContext);
  const { filterByName: { name }, filterByNumericValues } = inputFilter;
  const nameToFilter = name.toUpperCase();
  const MINUS_SORT = -1;

  const filterByNumber = (planet) => {
    const filteredData = planet.filter((plan) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          return Number(plan[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(plan[column]) < Number(value);
        }

        return Number(plan[column]) === Number(value);
      }));

    if (sort.column === 'name') {
      const sortedData = filteredData.sort(
        (a, b) => (a[sort.column].toLowerCase() > b[sort.column].toLowerCase()
          ? 1
          : MINUS_SORT),
      );
      return sortedData;
    }

    return filteredData;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filterByNumber(data).filter((plan) => plan.name.toUpperCase()
          .includes(nameToFilter)).map((planet, index) => {
          const {
            name: planetName,
            gravity,
            climate,
            diameter,
            films,
            created,
            edited,
            url,
            surface_water: surfaceWater,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            population,
            terrain,
          } = planet;

          return (
            <tr key={ index }>
              <td data-testid="planet-name">{ planetName }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ films }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

export default Table;
