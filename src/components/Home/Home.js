import React, { useState, useContext, useEffect } from "react";
import "./Home.css"
import BackgroundImagesDisplay from "./BackgroundImagesDisplay"
import axios from "axios";
import RecipeList from "../Recipe/RecipeList"
import Axios from "../utils/Axios"
import ReactPaginate from 'react-paginate';
import { AuthContext } from "../../context/AuthContext";

function Home() {
    const [BackgroundImages, setBackgroundImages] = useState([
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
    ]);

    const [recipeName, setRecipeName] = useState("");
    const [recipeArray, setRecipeArray] = useState([]);
    const [searchModeOn, setSearchModeOn] = useState(false);
    const [savedItemSearch, setSavedItemSearch] = useState(false);
    const [perPage, setPerPage] = useState(4);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);

    const [items, setitems] = useState([]);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

    const {
        state: { user }
    } = useContext(AuthContext);

    useEffect(() => {
        // let searchedMovieTitle = window.sessionStorage.getItem("searchedrecipeName");
        // if (searchedMovieTitle) {
        //     handleSearchMovie()
        // }

    }, [])

    const handleSearchMovie = async () => {
        let searchedMovieTitle = window.sessionStorage.getItem("searchedrecipeName");
        if (searchedMovieTitle) {
            try {
                const recipeData = await axios.get(url + searchedMovieTitle);
                setRecipeArray(recipeData.data.meals)
                setSearchModeOn(true)
                setSavedItemSearch(false)
                setPage(0)
                setPages(Math.floor(recipeData.data.meals.length / perPage))
                setitems(recipeData.data.meals.slice(page * perPage, (page + 1) * perPage))
            }
            catch (e) {
                return e;
            }
        }
    };

    function handleOnChange(event) {
        setRecipeName(event.target.value)
    };

    async function onSubmit(event) {
        if (recipeName === null || recipeName === ' ' || recipeName === '') { }
        else {
            window.sessionStorage.setItem("searchedrecipeName", recipeName);
            handleSearchMovie()
        };
    }

    function handlePageClick(event) {
        setPage(event.selected)
        let newArray = recipeArray.slice(event.selected * perPage, (event.selected + 1) * perPage)
        setitems(newArray)
    }

    async function savedItemClicked() {
        try {
            let recipeData = await Axios.get("/api/recipe/get-all-recipes");
            setSearchModeOn(true)
            setRecipeArray(recipeData.data.recipes)
            setSavedItemSearch(true)
            setPage(0)
            setPages(Math.floor(recipeData.data.recipes.length / perPage))
            setitems(recipeData.data.recipes.slice(page * perPage, (page + 1) * perPage))
        } catch (e) {
            console.log(e);
        }
    };

    async function deleteItemClicked(id) {
        try {
            let recipeData = await Axios.delete(`/api/recipe/delete-recipe-by-id/${id}`);
            let deletedid = (recipeData.data.payload._id).toString()
            let filteredRecipesArray = recipeArray.filter((item) => {
                return deletedid !== item._id
            });
            setRecipeArray(filteredRecipesArray)
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div>
            <div className={`secondNav ${user ? "" : "hide"}`}>
                <button type="submit" onClick={savedItemClicked}>
                    {"Saved Recipes"}</button>
            </div>
            <div className="recipeGrid" >
                {BackgroundImages.map((item, index) => {
                    return <BackgroundImagesDisplay
                        key={item.id}
                        item={item}
                        index={index}
                        searchModeOn={searchModeOn}
                    />
                })
                }
            </div>

            <div id='background'
                style={{ top: searchModeOn ? "70px" : "" }}>
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
                        value={recipeName}
                        onChange={handleOnChange} /></div>
                    <div>
                        <button id="submit"
                            type="submit"
                            onClick={onSubmit}>
                            <img src={"/images/search.jpeg"} alt={"search"} /></button>
                    </div>
                </div>
            </div>
            <div className={` whitefontcolor ${searchModeOn ? "" : "hide"}`}> {"Recipe Searched"}</div>
            <div className="recipesGrid">
                {items.map((item) => {
                    return (
                        <RecipeList
                            key={item.id}
                            item={item}
                            savedItemSearch={savedItemSearch}
                            deleteItemClicked={deleteItemClicked}
                        />
                    );
                })}
            </div>
            <div className={`${(recipeArray.length < 5) ? "hide" : ""}`}>
                <ReactPaginate
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    pageCount={pages}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default Home;
