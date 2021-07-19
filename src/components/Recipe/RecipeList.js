import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";


function RecipeList(props) {
    return (
      <div className = "dish">
        <Link
          to={{
            pathname: `/recipe-detail/${props.item.idMeal}`,
            
          }}>
          <div><img className = "dishImage"
          src={props.item.strMealThumb}
          alt={props.item.strMeal} /></div></Link>
          <div className = "whitefontcolor">{props.item.strMeal}
          <button 
          className={`${props.savedItemSearch ? "" : "hide"}`}
          onClick={() => props.deleteItemClicked(props.item._id)}
          >{"delete"}
           </button></div>
        {/* </Link> */}
      </div>
    ); 
}

export default RecipeList;

