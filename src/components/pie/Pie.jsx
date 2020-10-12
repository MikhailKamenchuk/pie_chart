import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from '../chart/Chart';
import './pie.css';

function Pie({ ingredientsList }) {

  const [selectedChart, setSelectedChart] = useState(null)

  const selectedIngredient = useMemo(
    () =>
      ingredientsList.find(({ id }) => selectedChart === id),
    [ingredientsList, selectedChart]
  );

  const getMaxCount = index => ingredientsList
    .filter((_, idx) => idx >= index)
    .reduce((acc, next) => acc + +next.ingredientPercent, 0);


  return (
    <>
      <h2 className="content__title">Пирог: </h2>
      <figure className="pie-container">
        <svg className="pie">
          <circle className='pie__chart' cx={70} cy={70} r={70} style={{ stroke: 'transparent', strokeDashoffset: 0 }} />
          {ingredientsList.map((ingredient, index) => (
            <Chart
              key={ingredient.id}
              chartInPercents={getMaxCount(index)}
              setSelectedChart={setSelectedChart}
              {...ingredient}
            />
          ))}
        </svg>
        <figcaption className="pie__selected-chart-info">
          {selectedChart && `${selectedIngredient.ingredientName} - ${selectedIngredient.ingredientPercent}%`}
        </figcaption>
      </figure>
    </>
  );
};

Pie.propTypes = {
  ingredientsList: PropTypes.array.isRequired,
}

export default React.memo(Pie);
