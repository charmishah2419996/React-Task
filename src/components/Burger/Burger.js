import React from 'react'
import Classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) =>{
    return (
            <div className={Classes.Burger}>
            <h1>burgerjs</h1>

            <BurgerIngredient type="salad" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />

            </div>
    );

};

export default burger;