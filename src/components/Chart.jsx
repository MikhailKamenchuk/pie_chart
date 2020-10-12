import React from 'react';
import { getRandomColor } from '../utils';

const Chart = props => {
  const { id, chartInPercents, setSelectedChart } = props;

  const styles = {
    stroke: getRandomColor(),
    strokeDashoffset: 440 - (440 * +chartInPercents / 100),
  }
  const handleMouseOver = e => {
    setSelectedChart(id);
    e.target.style.stroke = '#000'
  }
  const handleMouseOut = e => {
    setSelectedChart(null);
    e.target.style.stroke = styles.stroke
  }

  return (
    <circle
      className='pie__chart'
      cx={70} cy={70} r={70}
      style={styles}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  )
}

export default React.memo(Chart)