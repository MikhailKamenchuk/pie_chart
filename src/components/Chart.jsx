import React from 'react';
import { getRandomColor } from '../utils';

const Chart = ({ chartInPercents }) => {
  const styles = {
    stroke: getRandomColor(),
    strokeDashoffset: 440 - (440 * +chartInPercents / 100),
  }
  const handleClick = e => {
    console.log(e.target.style.strokeDashoffset)
  }
  return (
    <circle className='pie__chart' cx={70} cy={70} r={70} style={styles} onClick={handleClick} />
  )
}

export default Chart