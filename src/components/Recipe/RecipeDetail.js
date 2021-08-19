import React, { useState, useContext, useEffect } from 'react'
import axios from "axios";
import "./RecipeDetail.css";
import Axios from "../utils/Axios"
import { AuthContext } from "../../context/AuthContext";


function RecipeDetail(props) {
    const [strMeal, setstrMeal] = useState("");
    const [strMealThumb, setstrMealThumb] = useState("");
    const [strInstructions, setstrInstructions] = useState("");
    const [strYoutube, setstrYoutube] = useState("");
    const [idMeal, setidMeal] = useState("");
    const [alreadyFavorite, setalreadyFavorite] = useState(false);

    const [strIngredient1, setstrIngredient1] = useState("");
    const [strIngredient2, setstrIngredient2] = useState("");
    const [strIngredient3, setstrIngredient3] = useState("");
    const [strIngredient4, setstrIngredient4] = useState("");
    const [strIngredient5, setstrIngredient5] = useState("");
    const [strIngredient6, setstrIngredient6] = useState("");
    const [strIngredient7, setstrIngredient7] = useState("");
    const [strIngredient8, setstrIngredient8] = useState("");
    const [strIngredient9, setstrIngredient9] = useState("");
    const [strIngredient10, setstrIngredient10] = useState("");
    const [strIngredient11, setstrIngredient11] = useState("");
    const [strIngredient12, setstrIngredient12] = useState("");
    const [strIngredient13, setstrIngredient13] = useState("");
    const [strIngredient14, setstrIngredient14] = useState("");
    const [strIngredient15, setstrIngredient15] = useState("");
    const [strIngredient16, setstrIngredient16] = useState("");
    const [strIngredient17, setstrIngredient17] = useState("");
    const [strIngredient18, setstrIngredient18] = useState("");
    const [strIngredient19, setstrIngredient19] = useState("");
    const [strIngredient20, setstrIngredient20] = useState("");

    const [strMeasure1, setstrMeasure1] = useState("");
    const [strMeasure2, setstrMeasure2] = useState("");
    const [strMeasure3, setstrMeasure3] = useState("");
    const [strMeasure4, setstrMeasure4] = useState("");
    const [strMeasure5, setstrMeasure5] = useState("");
    const [strMeasure6, setstrMeasure6] = useState("");
    const [strMeasure7, setstrMeasure7] = useState("");
    const [strMeasure8, setstrMeasure8] = useState("");
    const [strMeasure9, setstrMeasure9] = useState("");
    const [strMeasure10, setstrMeasure10] = useState("");
    const [strMeasure11, setstrMeasure11] = useState("");
    const [strMeasure12, setstrMeasure12] = useState("");
    const [strMeasure13, setstrMeasure13] = useState("");
    const [strMeasure14, setstrMeasure14] = useState("");
    const [strMeasure15, setstrMeasure15] = useState("");
    const [strMeasure16, setstrMeasure16] = useState("");
    const [strMeasure17, setstrMeasure17] = useState("");
    const [strMeasure18, setstrMeasure18] = useState("");
    const [strMeasure19, setstrMeasure19] = useState("");
    const [strMeasure20, setstrMeasure20] = useState("");

    const {
        state: { user }
    } = useContext(AuthContext);

    useEffect(() => {
        fetchRecipe()

    }, [])

    const fetchRecipe = async () => {
        try {
            let result = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.recipeID}`
            );

            let liked = await Axios.post("/api/recipe/already-liked-Recipe",
                {
                    idMeal: props.match.params.recipeID
                });


            setstrMeal(result.data.meals[0].strMeal)
            setstrMealThumb(result.data.meals[0].strMealThumb)
            setstrInstructions(result.data.meals[0].strInstructions)
            setidMeal(result.data.meals[0].idMeal)
            setalreadyFavorite(liked.data.payload)

            setstrIngredient1(result.data.meals[0].strIngredient1)
            setstrIngredient2(result.data.meals[0].strIngredient2)
            setstrIngredient3(result.data.meals[0].strIngredient3)
            setstrIngredient4(result.data.meals[0].strIngredient4)
            setstrIngredient5(result.data.meals[0].strIngredient5)
            setstrIngredient6(result.data.meals[0].strIngredient6)
            setstrIngredient7(result.data.meals[0].strIngredient7)
            setstrIngredient8(result.data.meals[0].strIngredient8)
            setstrIngredient9(result.data.meals[0].strIngredient9)
            setstrIngredient10(result.data.meals[0].strIngredient10)
            setstrIngredient11(result.data.meals[0].strIngredient11)
            setstrIngredient12(result.data.meals[0].strIngredient12)
            setstrIngredient13(result.data.meals[0].strIngredient13)
            setstrIngredient14(result.data.meals[0].strIngredient14)
            setstrIngredient15(result.data.meals[0].strIngredient15)
            setstrIngredient16(result.data.meals[0].strIngredient16)
            setstrIngredient17(result.data.meals[0].strIngredient17)
            setstrIngredient18(result.data.meals[0].strIngredient18)
            setstrIngredient19(result.data.meals[0].strIngredient19)
            setstrIngredient20(result.data.meals[0].strIngredient20)

            setstrMeasure1(result.data.meals[0].strMeasure1)
            setstrMeasure2(result.data.meals[0].strMeasure2)
            setstrMeasure3(result.data.meals[0].strMeasure3)
            setstrMeasure4(result.data.meals[0].strMeasure4)
            setstrMeasure5(result.data.meals[0].strMeasure5)
            setstrMeasure6(result.data.meals[0].strMeasure6)
            setstrMeasure7(result.data.meals[0].strMeasure7)
            setstrMeasure8(result.data.meals[0].strMeasure8)
            setstrMeasure9(result.data.meals[0].strMeasure9)
            setstrMeasure10(result.data.meals[0].strMeasure10)
            setstrMeasure11(result.data.meals[0].strMeasure11)
            setstrMeasure12(result.data.meals[0].strMeasure12)
            setstrMeasure13(result.data.meals[0].strMeasure13)
            setstrMeasure14(result.data.meals[0].strMeasure14)
            setstrMeasure15(result.data.meals[0].strMeasure15)
            setstrMeasure16(result.data.meals[0].strMeasure16)
            setstrMeasure17(result.data.meals[0].strMeasure17)
            setstrMeasure18(result.data.meals[0].strMeasure18)
            setstrMeasure19(result.data.meals[0].strMeasure19)
            setstrMeasure20(result.data.meals[0].strMeasure20)

            let link = result.data.meals[0].strYoutube.split("watch?v=")[1]
            setstrYoutube("https://www.youtube.com/embed/" + link)
        }
        catch (e) {
            console.log(e);
        }
    };

    async function loveItemClicked() {
        if (user) {
            try {
                let recipeObj = {
                    idMeal: idMeal,
                    strMealThumb: strMealThumb,
                    strMeal: strMeal
                }
                let recipeData = await Axios.post("/api/recipe/save-recipe", recipeObj);
                setalreadyFavorite(true)
            } catch (e) {
                console.log(e);
            }
        }
        else { this.props.history.push("/sign-up") }
    }

    return (
        <div id="Maindiv" className=".whitefontcolor">
            <div id="TopBOX">
                <div id="recipeDetailBox">
                    <div id="recipeDetailLeftBox">
                        <div><img id="recipeImage" src={strMealThumb} alt={strMeal}
                        /></div>
                    </div>
                    <div id="recipeDetailRightBox">
                        <div>{strMeal}</div>
                        <button id="loveButton" type="submit" disabled={alreadyFavorite} onClick={loveItemClicked}
                            style={{
                                backgroundColor: `${alreadyFavorite ? "red" : ""}`
                            }}>
                        </button>
                    </div>
                </div>
            </div>

            <iframe src={strYoutube} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

            <div id="BottomBOX">
                <div id="recipeInstruction">
                    <div id="ingridents">
                        <div className="headings"> INGRIDENTS</div>
                        <div className="space"></div>
                        <div className={`${strIngredient1 === null ? "hide" : ""}`}> {strIngredient1}</div>
                        <div className={`${strIngredient2 === null ? "hide" : ""}`}> {strIngredient2}</div>
                        <div className={`${strIngredient3 === null ? "hide" : ""}`}> {strIngredient3}</div>
                        <div className={`${strIngredient4 === null ? "hide" : ""}`}> {strIngredient4}</div>
                        <div className={`${strIngredient5 === null ? "hide" : ""}`}> {strIngredient5}</div>
                        <div className={`${strIngredient6 === null ? "hide" : ""}`}> {strIngredient6}</div>
                        <div className={`${strIngredient7 === null ? "hide" : ""}`}> {strIngredient7}</div>
                        <div className={`${strIngredient8 === null ? "hide" : ""}`}> {strIngredient8}</div>
                        <div className={`${strIngredient9 === null ? "hide" : ""}`}> {strIngredient9}</div>
                        <div className={`${strIngredient10 === null ? "hide" : ""}`}> {strIngredient10}</div>
                        <div className={`${strIngredient11 === null ? "hide" : ""}`}> {strIngredient11}</div>
                        <div className={`${strIngredient12 === null ? "hide" : ""}`}> {strIngredient12}</div>
                        <div className={`${strIngredient13 === null ? "hide" : ""}`}> {strIngredient13}</div>
                        <div className={`${strIngredient14 === null ? "hide" : ""}`}> {strIngredient14}</div>
                        <div className={`${strIngredient15 === null ? "hide" : ""}`}> {strIngredient15}</div>
                        <div className={`${strIngredient16 === null ? "hide" : ""}`}> {strIngredient16}</div>
                        <div className={`${strIngredient17 === null ? "hide" : ""}`}> {strIngredient17}</div>
                        <div className={`${strIngredient18 === null ? "hide" : ""}`}> {strIngredient18}</div>
                        <div className={`${strIngredient19 === null ? "hide" : ""}`}> {strIngredient19}</div>
                        <div className={`${strIngredient20 === null ? "hide" : ""}`}> {strIngredient20}</div>
                    </div>
                    <div id="quantity">
                        <div className="headings"> QUANTITY</div>
                        <div className="space"></div>
                        <div className={`${strMeasure1 === null ? "hide" : ""}`}> {strMeasure1}</div>
                        <div className={`${strMeasure2 === null ? "hide" : ""}`}> {strMeasure2}</div>
                        <div className={`${strMeasure3 === null ? "hide" : ""}`}> {strMeasure3}</div>
                        <div className={`${strMeasure4 === null ? "hide" : ""}`}> {strMeasure4}</div>
                        <div className={`${strMeasure5 === null ? "hide" : ""}`}> {strMeasure5}</div>
                        <div className={`${strMeasure6 === null ? "hide" : ""}`}> {strMeasure6}</div>
                        <div className={`${strMeasure7 === null ? "hide" : ""}`}> {strMeasure7}</div>
                        <div className={`${strMeasure8 === null ? "hide" : ""}`}> {strMeasure8}</div>
                        <div className={`${strMeasure9 === null ? "hide" : ""}`}> {strMeasure9}</div>
                        <div className={`${strMeasure10 === null ? "hide" : ""}`}> {strMeasure10}</div>
                        <div className={`${strMeasure11 === null ? "hide" : ""}`}> {strMeasure11}</div>
                        <div className={`${strMeasure12 === null ? "hide" : ""}`}> {strMeasure12}</div>
                        <div className={`${strMeasure13 === null ? "hide" : ""}`}> {strMeasure13}</div>
                        <div className={`${strMeasure14 === null ? "hide" : ""}`}> {strMeasure14}</div>
                        <div className={`${strMeasure15 === null ? "hide" : ""}`}> {strMeasure15}</div>
                        <div className={`${strMeasure16 === null ? "hide" : ""}`}> {strMeasure16}</div>
                        <div className={`${strMeasure17 === null ? "hide" : ""}`}> {strMeasure17}</div>
                        <div className={`${strMeasure18 === null ? "hide" : ""}`}> {strMeasure18}</div>
                        <div className={`${strMeasure19 === null ? "hide" : ""}`}> {strMeasure19}</div>
                        <div className={`${strMeasure20 === null ? "hide" : ""}`}> {strMeasure20}</div>
                    </div>
                </div>
                <div>
                    <div className="headings">INSTRUCTION</div>
                    <div className="space"></div>
                    <div id="instruction">{strInstructions}</div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail






