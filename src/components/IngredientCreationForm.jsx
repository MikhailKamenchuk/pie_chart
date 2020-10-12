import React, { useState } from 'react';
import { idGenerator } from '../utils';
import './ingredientCreationForm.css'

const IngredientCreationForm = ({ ingredientsList, setIngredientsList, maxPossible }) => {
  const [newIngredient, setNewIngredient] = useState({ id: idGenerator(), ingredientName: '', ingredientPercent: '' })
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
    <>
      <form className="ingredient form">
        <div className="form-field">
          <input
            className="ingredient__name"
            type="text"
            name="ingredientName"
            id="ingredientName"
            placeholder="Продукт: "
            onBlur={updateIngredients}
            value={newIngredient.ingredientName}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-field">
          <input
            className="ingredient__percent"
            type="number"
            name="ingredientPercent"
            id="ingredientPercent"
            placeholder="Количество в %: "
            value={newIngredient.ingredientPercent}
            onChange={handleChangeInput}
            onBlur={updateIngredients}
          />
        </div>
      </form>
    </>

  )
}

export default React.memo(IngredientCreationForm)