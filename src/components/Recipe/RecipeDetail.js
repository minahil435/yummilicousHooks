import React, { useState, useContext, useEffect }from 'react'
import axios from "axios";
import "./RecipeDetail.css";
import Axios from "../utils/Axios"


function RecipeDetail() {
    const [strMeal, setstrMeal] = useState("");
    const [strMealThumb, setstrMealThumb] = useState("");
    const [strInstructions, setstrInstructions] = useState("");
    const [strYoutube, setstrYoutube] = useState("");
    const [idMeal, setidMeal] = useState("");
    const [alreadyFavorite, setalreadyFavorite] = useState(false);

    const [strIngredient1, setstrIngredient1] = useState("");
    const [strIngredient2 ,setstrIngredient2] = useState("");
    const [strIngredient3 ,setstrIngredient3] = useState("");
    const [strIngredient4 ,setstrIngredient4] = useState("");
    const [strIngredient5 ,setstrIngredient5] = useState("");
    const [strIngredient6 ,setstrIngredient6] = useState("");
    const [strIngredient7, setstrIngredient7] = useState("");
    const [strIngredient8 ,setstrIngredient8] = useState("");
    const [strIngredient9 ,setstrIngredient9] = useState("");
    const [strIngredient10, setstrIngredient10] = useState("");
    const [strIngredient11, setstrIngredient11] = useState("");
    const [strIngredient12, setstrIngredient12] = useState("");
    const [strIngredient13, setstrIngredient13] = useState("");
    const [strIngredient14, setstrIngredient14] = useState("");
    const [strIngredient15, setstrIngredient15] = useState("");
    const [strIngredient16, setstrIngredient16] = useState("");
    const [strIngredient17 ,setstrIngredient17] = useState("");
    const [strIngredient18 ,setstrIngredient18] = useState("");
    const [strIngredient19 ,setstrIngredient19] = useState("");
    const [strIngredient20 ,setstrIngredient20] = useState("");

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

    // async componentDidMount() {
    //     this.fetchRecipe();

    // }

    fetchRecipe = async () => {
        try {
            let result = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.recipeID}`
            );

            let liked = await Axios.post("/api/recipe/already-liked-Recipe",
                {
                    idMeal: this.props.match.params.recipeID
                });

            this.setState(
                {
                    strMeal: result.data.meals[0].strMeal,
                    strMealThumb: result.data.meals[0].strMealThumb,
                    strInstructions: result.data.meals[0].strInstructions,
                    idMeal: result.data.meals[0].idMeal,

                    alreadyFavorite: liked.data.payload,

                    strIngredient1: result.data.meals[0].strIngredient1,
                    strIngredient2: result.data.meals[0].strIngredient2,
                    strIngredient3: result.data.meals[0].strIngredient3,
                    strIngredient4: result.data.meals[0].strIngredient4,
                    strIngredient5: result.data.meals[0].strIngredient5,
                    strIngredient6: result.data.meals[0].strIngredient6,
                    strIngredient7: result.data.meals[0].strIngredient7,
                    strIngredient8: result.data.meals[0].strIngredient8,
                    strIngredient9: result.data.meals[0].strIngredient9,
                    strIngredient10: result.data.meals[0].strIngredient10,
                    strIngredient11: result.data.meals[0].strIngredient11,
                    strIngredient12: result.data.meals[0].strIngredient12,
                    strIngredient13: result.data.meals[0].strIngredient13,
                    strIngredient14: result.data.meals[0].strIngredient14,
                    strIngredient15: result.data.meals[0].strIngredient15,
                    strIngredient16: result.data.meals[0].strIngredient16,
                    strIngredient17: result.data.meals[0].strIngredient17,
                    strIngredient18: result.data.meals[0].strIngredient18,
                    strIngredient19: result.data.meals[0].strIngredient19,
                    strIngredient20: result.data.meals[0].strIngredient20,

                    strMeasure1: result.data.meals[0].strMeasure1,
                    strMeasure2: result.data.meals[0].strMeasure2,
                    strMeasure3: result.data.meals[0].strMeasure3,
                    strMeasure4: result.data.meals[0].strMeasure4,
                    strMeasure5: result.data.meals[0].strMeasure5,
                    strMeasure6: result.data.meals[0].strMeasure6,
                    strMeasure7: result.data.meals[0].strMeasure7,
                    strMeasure8: result.data.meals[0].strMeasure8,
                    strMeasure9: result.data.meals[0].strMeasure9,
                    strMeasure10: result.data.meals[0].strMeasure10,
                    strMeasure11: result.data.meals[0].strMeasure11,
                    strMeasure12: result.data.meals[0].strMeasure12,
                    strMeasure13: result.data.meals[0].strMeasure13,
                    strMeasure14: result.data.meals[0].strMeasure14,
                    strMeasure15: result.data.meals[0].strMeasure15,
                    strMeasure16: result.data.meals[0].strMeasure16,
                    trMeasure17: result.data.meals[0].strMeasure17,
                    strMeasure18: result.data.meals[0].strMeasure18,
                    strMeasure19: result.data.meals[0].strMeasure19,
                    strMeasure20: result.data.meals[0].strMeasure20,
                },
                () => {
                    let link = result.data.meals[0].strYoutube.split("watch?v=")[1]
                    this.setState(
                        {
                            strYoutube: "https://www.youtube.com/embed/" + link
                        },
                    )
                }
            )
        }
        catch (e) {
            console.log(e);
        }
    };

    loveItemClicked = async () => {
        let isAuth = checkIfUserIsAuth();

        if (isAuth) {
            try {
                let recipeObj = {
                    idMeal: this.state.idMeal,
                    strMealThumb: this.state.strMealThumb,
                    strMeal: this.state.strMeal
                }
                let recipeData = await Axios.post("/api/recipe/save-recipe", recipeObj);
                this.setState({
                    alreadyFavorite: true
                })


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
                            <div><img id="recipeImage" src={this.state.strMealThumb} alt={this.state.strMeal}
                            /></div>
                        </div>
                        <div id="recipeDetailRightBox">
                            <div>{this.state.strMeal}</div>
                            <button id="loveButton" type="submit" disabled={this.state.alreadyFavorite} onClick={this.loveItemClicked}
                                style={{
                                    backgroundColor: `${this.state.alreadyFavorite ? "red" : ""}`
                                }}>
                            </button>
                        </div>
                    </div>
                </div>

                <iframe src={this.state.strYoutube} title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <div id="BottomBOX">
                    <div id="recipeInstruction">
                        <div id="ingridents">
                            <div className="headings"> INGRIDENTS</div>
                            <div className="space"></div>
                            <div className={`${this.state.strIngredient1 === null ? "hide" : ""}`}> {this.state.strIngredient1}</div>
                            <div className={`${this.state.strIngredient2 === null ? "hide" : ""}`}> {this.state.strIngredient2}</div>
                            <div className={`${this.state.strIngredient3 === null ? "hide" : ""}`}> {this.state.strIngredient3}</div>
                            <div className={`${this.state.strIngredient4 === null ? "hide" : ""}`}> {this.state.strIngredient4}</div>
                            <div className={`${this.state.strIngredient5 === null ? "hide" : ""}`}> {this.state.strIngredient5}</div>
                            <div className={`${this.state.strIngredient6 === null ? "hide" : ""}`}> {this.state.strIngredient6}</div>
                            <div className={`${this.state.strIngredient7 === null ? "hide" : ""}`}> {this.state.strIngredient7}</div>
                            <div className={`${this.state.strIngredient8 === null ? "hide" : ""}`}> {this.state.strIngredient8}</div>
                            <div className={`${this.state.strIngredient9 === null ? "hide" : ""}`}> {this.state.strIngredient9}</div>
                            <div className={`${this.state.strIngredient10 === null ? "hide" : ""}`}> {this.state.strIngredient10}</div>
                            <div className={`${this.state.strIngredient11 === null ? "hide" : ""}`}> {this.state.strIngredient11}</div>
                            <div className={`${this.state.strIngredient12 === null ? "hide" : ""}`}> {this.state.strIngredient12}</div>
                            <div className={`${this.state.strIngredient13 === null ? "hide" : ""}`}> {this.state.strIngredient13}</div>
                            <div className={`${this.state.strIngredient14 === null ? "hide" : ""}`}> {this.state.strIngredient14}</div>
                            <div className={`${this.state.strIngredient15 === null ? "hide" : ""}`}> {this.state.strIngredient15}</div>
                            <div className={`${this.state.strIngredient16 === null ? "hide" : ""}`}> {this.state.strIngredient16}</div>
                            <div className={`${this.state.strIngredient17 === null ? "hide" : ""}`}> {this.state.strIngredient17}</div>
                            <div className={`${this.state.strIngredient18 === null ? "hide" : ""}`}> {this.state.strIngredient18}</div>
                            <div className={`${this.state.strIngredient19 === null ? "hide" : ""}`}> {this.state.strIngredient19}</div>
                            <div className={`${this.state.strIngredient20 === null ? "hide" : ""}`}> {this.state.strIngredient20}</div>
                        </div>
                        <div id="quantity">
                            <div className="headings"> QUANTITY</div>
                            <div className="space"></div>
                            <div className={`${this.state.strMeasure1 === null ? "hide" : ""}`}> {this.state.strMeasure1}</div>
                            <div className={`${this.state.strMeasure2 === null ? "hide" : ""}`}> {this.state.strMeasure2}</div>
                            <div className={`${this.state.strMeasure3 === null ? "hide" : ""}`}> {this.state.strMeasure3}</div>
                            <div className={`${this.state.strMeasure4 === null ? "hide" : ""}`}> {this.state.strMeasure4}</div>
                            <div className={`${this.state.strMeasure5 === null ? "hide" : ""}`}> {this.state.strMeasure5}</div>
                            <div className={`${this.state.strMeasure6 === null ? "hide" : ""}`}> {this.state.strMeasure6}</div>
                            <div className={`${this.state.strMeasure7 === null ? "hide" : ""}`}> {this.state.strMeasure7}</div>
                            <div className={`${this.state.strMeasure8 === null ? "hide" : ""}`}> {this.state.strMeasure8}</div>
                            <div className={`${this.state.strMeasure9 === null ? "hide" : ""}`}> {this.state.strMeasure9}</div>
                            <div className={`${this.state.strMeasure10 === null ? "hide" : ""}`}> {this.state.strMeasure10}</div>
                            <div className={`${this.state.strMeasure11 === null ? "hide" : ""}`}> {this.state.strMeasure11}</div>
                            <div className={`${this.state.strMeasure12 === null ? "hide" : ""}`}> {this.state.strMeasure12}</div>
                            <div className={`${this.state.strMeasure13 === null ? "hide" : ""}`}> {this.state.strMeasure13}</div>
                            <div className={`${this.state.strMeasure14 === null ? "hide" : ""}`}> {this.state.strMeasure14}</div>
                            <div className={`${this.state.strMeasure15 === null ? "hide" : ""}`}> {this.state.strMeasure15}</div>
                            <div className={`${this.state.strMeasure16 === null ? "hide" : ""}`}> {this.state.strMeasure16}</div>
                            <div className={`${this.state.strMeasure17 === null ? "hide" : ""}`}> {this.state.strMeasure17}</div>
                            <div className={`${this.state.strMeasure18 === null ? "hide" : ""}`}> {this.state.strMeasure18}</div>
                            <div className={`${this.state.strMeasure19 === null ? "hide" : ""}`}> {this.state.strMeasure19}</div>
                            <div className={`${this.state.strMeasure20 === null ? "hide" : ""}`}> {this.state.strMeasure20}</div>
                        </div>
                    </div>
                    <div>
                        <div className="headings">INSTRUCTION</div>
                        <div className="space"></div>
                        <div id="instruction">{this.state.strInstructions}</div>
                    </div>
                </div>
            </div>
        )
    }


export default RecipeDetail






