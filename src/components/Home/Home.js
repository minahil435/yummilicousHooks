import React, { Component } from "react";
import "./Home.css"
import BackgroundImagesDisplay from "./BackgroundImagesDisplay"
import axios from "axios";
import RecipeList from "../Recipe/RecipeList"
import checkIfUserIsAuth from "../utils/checkAuth";
import Axios from "../utils/Axios"
import ReactPaginate from 'react-paginate';

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

            "/images/cover3.jpg",
            "/images/cover2.jpg",
            "/images/cover1.jpg",
            "/images/cover.jpg",
        ],
        recipeName: "",
        recipeArray: [],
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        searchModeOn: false,
        savedItemSearch: false,

        perPage: 4,
        page: 0,
        pages: 0,

    }

    async componentDidMount() {
        let searchedMovieTitle = window.sessionStorage.getItem("searchedrecipeName");
        if (searchedMovieTitle) {
            try {
                let result = await this.handleSearchMovie(searchedMovieTitle);
                this.setState({
                    searchModeOn: true,
                    recipeArray: result.data.meals,
                    savedItemSearch: false,
                    page: 0,
                }, () => {
                    this.setState({ pages: Math.floor(this.state.recipeArray.length / this.state.perPage) })
                });
            } catch (e) {
                console.log(e);
            }
        }
    }

    handleOnChange = (event) => {
        this.setState({
            recipeName: event.target.value,
        });
    };

    onSubmit = async (event) => {

        let searchedMovieTitle = window.sessionStorage.getItem("searchedrecipeName");


        if (this.state.recipeName === null || this.state.recipeName === ' ' || this.state.recipeName === '') { }
        else {
            try {
                let result = await this.handleSearchMovie(this.state.recipeName);

                window.sessionStorage.setItem("searchedrecipeName", this.state.recipeName);

                this.setState({
                    searchModeOn: true,
                    recipeArray: result.data.meals,
                    savedItemSearch: false,
                    page: 0,
                }, () => {
                    this.setState({ pages: Math.floor(this.state.recipeArray.length / this.state.perPage) })
                });

            } catch (e) {
                console.log(e);
            }
        };
    }

    handlePageClick = (event) => {
        let page = event.selected;
        this.setState({ page })
    }

    handleSearchMovie = async (recipeName) => {
        try {
            let recipeData = await axios.get(this.state.url + recipeName);
            return recipeData;
        } catch (e) {
            return e;
        }
    };

    savedItemClicked = async () => {
        try {
            let recipeData = await Axios.get("/api/recipe/get-all-recipes");

            this.setState({
                searchModeOn: true,
                recipeArray: recipeData.data.recipes,
                savedItemSearch: true,
                page: 0,
            }, () => {
                this.setState({ pages: Math.floor(this.state.recipeArray.length / this.state.perPage) })
            });
        } catch (e) {
            console.log(e);
        }
    };

    deleteItemClicked = async (id) => {
        try {
            let recipeData = await Axios.delete(`/api/recipe/delete-recipe-by-id/${id}`);
            let deletedid = (recipeData.data.payload._id).toString()

            let filteredRecipesArray = this.state.recipeArray.filter((item) => {
                return deletedid !== item._id

            });

            this.setState({
                recipeArray: filteredRecipesArray
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const { page, perPage, pages, recipeArray } = this.state;
        let items = recipeArray.slice(page * perPage, (page + 1) * perPage);
        return (
            <div>
                <div className={`secondNav" ${checkIfUserIsAuth()} ? "hide" : "" `}>
                    <button type="submit" onClick={this.savedItemClicked}>
                        {"Saved Recipes"}</button>
                </div>
                <div className="recipeGrid" >
                    {this.state.BackgroundImages.map((item, index) => {
                        return <BackgroundImagesDisplay
                            key={item.id}
                            item={item}
                            index={index}
                            searchModeOn={this.state.searchModeOn}
                        />
                    })
                    }
                </div>

                <div id='background'
                    style={{ top: this.state.searchModeOn ? "70px" : "" }}>
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
                    {items.map((item) => {
                        return (
                            <RecipeList
                                key={item.id}
                                item={item}
                                savedItemSearch={this.state.savedItemSearch}
                                deleteItemClicked={this.deleteItemClicked}
                            />
                        );
                    })}
                </div>
                <div className={`${(this.state.recipeArray.length === 0)  ? "hide" : ""}`}>
                <ReactPaginate
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    pageCount={pages}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
                </div>
            </div>

        );
    }
}

export default Home;
