import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

function RecipeList(props) { 
    return (
      <div className = "dish"
      >
        <Link
          to={{
            pathname: `/recipe-detail/${props.item.idMeal}`,
            
          }}>
          <img className = "dishImage"
          src={props.item.strMealThumb}
          alt={props.item.strMeal} />
          <h3 className = "whitefontcolor">{props.item.strMeal}</h3>

        </Link>
      </div>
    ); 
}

export default RecipeList;

