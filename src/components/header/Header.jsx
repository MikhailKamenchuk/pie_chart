import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = ({ countOfIngredients, setCountOfIngredients }) => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="btns-wrapper">
        {pathname !== '/'
          ? (
            <Link to='/'>
              <button className="to-visualization btn"><i className="fas fa-arrow-left"></i> На главную </button>
            </Link>
          )
          : (
            <>
              <button className="add-ingredient-btn btn" onClick={() => setCountOfIngredients(countOfIngredients + 1)}>Добавить ингредиент</button>
              <Link to='/pie'>
                <button className="to-visualization btn">К визуализации <i className="fas fa-arrow-right"></i></button>
              </Link>
            </>
          )
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  countOfIngredients: PropTypes.number.isRequired,
  setCountOfIngredients: PropTypes.func.isRequired,
}

export default Header