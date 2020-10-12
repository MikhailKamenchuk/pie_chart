import React from 'react';
import { useState } from 'react';
import { idGenerator } from '../utils';

const IngredientCreationForm = ({ ingredientsList, setIngredientsList }) => {
  const [newIngredient, setNewIngredient] = useState({ id: idGenerator(), ingredientName: '', ingredientPercent: '' })
// debugger
  const updateIngredients = () => {
    const elemIndex = ingredientsList.findIndex(el => newIngredient.id === el.id);
    const updatedIngredient = { ...ingredientsList[elemIndex], ...newIngredient };

    elemIndex === -1
      ? setIngredientsList([...ingredientsList, newIngredient])
      : setIngredientsList([
        ...ingredientsList.slice(0, elemIndex),
        updatedIngredient,
        ...ingredientsList.slice(elemIndex + 1),
      ])
  }

  const handleChangeInput = async e => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  }

  return (
    <form >
      <div className="form-field">
        <label className="ingredient-name__label" htmlFor="ingredientName">Продукт:</label>
        <input
          className="ingredient-name__input"
          type="text"
          name="ingredientName"
          id="ingredientName"
          onBlur={updateIngredients}
          value={newIngredient.ingredientName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-field">
        <label className="ingredient-percent__label" htmlFor="ingredientPercent">Количество в %:</label>
        <input
          className="ingredient-percent__input"
          type="text"
          name="ingredientPercent"
          id="ingredientPercent"
          value={newIngredient.ingredientPercent}
          onChange={handleChangeInput}
          onBlur={updateIngredients}
        />
      </div>
    </form>
  )
}

export default IngredientCreationForm