import React, { useState } from 'react';
import Pie from './components/Pie';
import IngredientCreationForm from './components/IngredientCreationForm';

const App = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(0);

  const [ingredientsList, setIngredientsList] = useState([]);
// debugger
  return (
    <div className="App">
      <button className="add-ingredient-btn" onClick={() => setCountOfIngredients(countOfIngredients + 1)}>Добавить ингредиент</button>
      {[...new Array(countOfIngredients)].map((_, idx) => (
        <IngredientCreationForm key={idx} ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
      ))}
      <Pie ingredientsList={ingredientsList} />
    </div>
  );
}

export default App;
