import React from 'react';
import Chart from './Chart';
import './pie.css';

function Pie({ ingredientsList }) {

  const getMaxCount = index => ingredientsList
    .filter((_, idx) => idx >= index)
    .reduce((acc, next) => acc + +next.ingredientPercent, 0);

  return (
    <>
      <h2 className="content__title">Пирог: </h2>
      <section className="pie-container">
        <svg className="pie">
          <circle className='pie__chart' cx={70} cy={70} r={70} style={{ stroke: '#fff', strokeDashoffset: 0 }} />
          {ingredientsList.map((ingredient, index) => (
            <Chart key={ingredient.id} chartInPercents={getMaxCount(index)} />
          ))}
        </svg>
      </section>
    </>
  );
}

export default Pie;
