import React, { useState } from 'react';
import Pie from './components/Pie';
import IngredientCreationForm from './components/IngredientCreationForm';
import './App.css';

const App = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(0);

  const [ingredientsList, setIngredientsList] = useState([]);
  return (
    <div className="page">
      <header className="header">
        <div className="btns-wrapper">
          <button className="add-ingredient-btn btn" onClick={() => setCountOfIngredients(countOfIngredients + 1)}>Добавить ингредиент</button>
          <button className="to-visualization btn">К визуализации <i class="fas fa-arrow-right"></i></button>
        </div>
      </header>
      <section className="ingredients">
        <div className='ingredients-wrapper'>
          <h2 className="ingredients__title">Список ингредиентов: </h2>
          {[...new Array(countOfIngredients)].map((_, idx) => (
            <IngredientCreationForm key={idx} ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
          ))}
        </div>
      </section>
      {/* <Pie ingredientsList={ingredientsList} /> */}
    </div>
  );
}

export default App;
