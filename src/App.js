import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pie from './components/Pie';
import Header from './components/Header';
import IngredientCreationForm from './components/IngredientCreationForm';
import './App.css';


const App = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(0);

  const [ingredientsList, setIngredientsList] = useState([]);

  const IngredientCreationFormList = [...new Array(countOfIngredients)].map((_, idx) => (
    <IngredientCreationForm key={idx} ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
  ));

  return (
    <div className="page">
      <Header countOfIngredients={countOfIngredients} setCountOfIngredients={setCountOfIngredients} />
      <section className="content">
        <div className='content-wrapper'>
          <Switch>
            <Route path="/" exact render={() => (
              <>
                <h2 className="content__title">Список ингредиентов: </h2>
                {IngredientCreationFormList}
              </>
            )}>
            </Route>
            <Route path="/pie"  >
              <Pie ingredientsList={ingredientsList} />
            </Route>
          </Switch>
        </div>
      </section>
    </div >
  );
}

export default App;
