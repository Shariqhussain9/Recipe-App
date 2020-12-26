import React from 'react'
import Styles from './recipe.module.css';
const recipe = (props) => {
    const { Recipe } = props;
    // console.log(Recipe);
    return (
        <div className={Styles.recipe}>
            <h1>{Recipe.label}</h1>
            <ol>
                {Recipe.ingredients.map((ing, index) => {
                    return (<li key={index}>{ing.text}</li>)
                })}
            </ol>
            <p><b>Calories:</b>{Recipe.calories}</p>
            <img className={Styles.image} src={Recipe.image} alt="" />

        </div>
    )
}
export default recipe
