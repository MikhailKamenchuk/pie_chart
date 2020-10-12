import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pie from './components/pie/Pie';
import Header from './components/header/Header';
import IngredientCreationForm from './components/ingredientCreationForm/IngredientCreationForm';
import './App.css';

const App = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(0);
  const [ingredientsList, setIngredientsList] = useState([]);

  const maxPossible = 100 - ingredientsList.reduce((acc, next) => acc + +next.ingredientPercent, 0);

  const IngredientCreationFormList = useMemo(() => {
    return [...new Array(countOfIngredients)].map((_, idx) => (
      <IngredientCreationForm
        key={idx}
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
        maxPossible={maxPossible}
      />
    ))
  }, [ingredientsList, countOfIngredients, maxPossible]);

  return (
    <div className="page">
      <Header countOfIngredients={countOfIngredients} setCountOfIngredients={setCountOfIngredients} />
      <section className="content">
        <div className='content-wrapper'>
          <Switch>
            <Route path="/" exact render={() => (
              <>
                <h2 className="content__title">Список ингредиентов: </h2>
                <span className='content__empty-place'>{`Свободного места: ${maxPossible}`}</span>
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
