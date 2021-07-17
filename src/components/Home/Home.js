import React, { Component } from "react";
import "./Home.css"
import BackgroundImagesDisplay from "./BackgroundImagesDisplay"
import axios from "axios";
import RecipeList from "../Recipe/RecipeList"
import checkIfUserIsAuth from "../utils/checkAuth";
import Axios from "../utils/Axios"

export class Home extends Component {
    state = {
        BackgroundImages: [
            "/images/cover.jpg",
            "/images/cover1.jpg",
            "/images/cover2.jpg",
            "/images/cover3.jpg",

            "/images/cover4.jpg",
            "/images/cover.jpg",
            "/images/cover1.jpg",
            "/images/cover2.jpg",
        
            "/images/cover4.jpg",
            "/images/cover.jpg",
            "/images/cover1.jpg",
            "/images/cover2.jpg",
        ],
        recipeName: "",
        recipeArray: [],
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        searchModeOn : false

    }

    handleOnChange = (event) => {
        this.setState({
            recipeName: event.target.value,
        });
    };

    onSubmit = async (event) => {
        if (this.state.recipeName === null || this.state.recipeName === ' ' || this.state.recipeName === '') { }
        else {
            try {
                let result = await this.handleSearchMovie(this.state.recipeName);
                
                window.sessionStorage.setItem("searchedrecipeName", this.state.recipeName);
              
                this.setState({
                    searchModeOn:true,
                    recipeArray: result.data.meals,
                });

            } catch (e) {
                console.log(e);
            }
        };
    }

    handleSearchMovie = async (recipeName) => {
        try {
            let recipeData = await axios.get(this.state.url + recipeName);
            return recipeData;
        } catch (e) {
            return e;
        }
    };

    savedItemClicked= async () => {
 
        try {
            let recipeData = await Axios.get("/api/recipe/get-all-recipes");
            console.log(recipeData)
            this.setState({
                searchModeOn:true,
                recipeArray: recipeData.data.recipes
            });
        } catch (e) {
            console.log(e);
        }
    };
    
    


    render() {
        return (
            <div>
                <div className = {`secondNav" ${checkIfUserIsAuth()} ? "hide" : "" `}>
                <button type="submit" onClick={this.savedItemClicked}>
                {"Saved Recipes"}</button>
                </div>
                <div className="recipeGrid" > 
                    {this.state.BackgroundImages.map((item, index) => {
                        return <BackgroundImagesDisplay
                            key={item.id} 
                            item={item}
                            index={index}
                            searchModeOn = {this.state.searchModeOn}
                        />
                    })
                  }
                </div>

                <div id='background' 
                     style={{ top : this.state.searchModeOn ? "50px" : ""}}
                      >
                    <div>
                        <h2 className="whitefontcolor">Find a Recipe</h2>
                    </div>
                    <br />
                    <div className="search-container">
                        <div><input
                            id="search"
                            type="text"
                            placeholder="Search.."
                            name="recipe"
                            onChange={this.handleOnChange} /></div>
                        <div>
                            <button id="submit"
                                type="submit"
                                onClick={this.onSubmit}>
                                <img src={"/images/search.jpeg"} alt={"search"} /></button>
                        </div>
                    </div>
                </div>
                <div className={` whitefontcolor ${this.state.searchModeOn ? "" : "hide"}`}> {this.state.strMeasure20}{"Recipe Searched"}</div>
                <div className="recipesGrid">
                            {this.state.recipeArray.map((item) => {
                                return (
                                    <RecipeList
                                        key={item.id}
                                        item={item}
                                    />
                                );
                            })}
                        </div>
            </div>

        );
    }
}

export default Home;
