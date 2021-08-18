import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import jwtDecode from "jwt-decode";
import { isAlpha, isEmail, isAlphanumeric, isStrongPassword } from "validator";
import { toast } from "react-toastify";
import Axios from "../utils/Axios";
import checkIfUserIsAuth from "../utils/checkAuth";
import BackgroundImagesDisplay from "../Home/BackgroundImagesDisplay"

import useChangeInputConfig from "../hooks/inputFieldHooks";
import { AuthContext } from "../../context/AuthContext";


function Signup(props) {

  const {
    state: { user }, dispatch
  } = useContext(AuthContext);

  const [
    email,
    handleEmailChange,
    isEmailError,
    emailErrorMessage,
    ,
    emailOnFocus,
    handleEmailOnFocus
  ] = useChangeInputConfig("email");


  const [
    password,
    handlepasswordChange,
    isPasswordError,
    passwordErrorMessage,
    ,
    passwordOnFocus,
    handlepasswordOnFocus
  ] = useChangeInputConfig("password");


    const [canSubmit, setCanSubmit] = useState(true);
    
     const [confirmPassword, setconfirmPassword] = useState("");
     const [confirmPasswordError, setconfirmPasswordError] = useState("")
     const [confirmPasswordOnFocus, setconfirmPasswordOnFocus] = useState(false)

     const [selectedFile, setselectedFile] = useState(null)

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
  

  useEffect(() => {
    if (user !== null) {
      // props.history.push("/");
    }  

    if (emailOnFocus && passwordOnFocus && confirmPasswordOnFocus ) {
        if (
          emailErrorMessage.length === 0 &&
          passwordErrorMessage.length === 0 &&
          confirmPasswordError.length === 0 && 
          email.length !== 0 &&
          password.length !== 0 &&
          confirmPassword.length !== 0
        ) {
          setCanSubmit(false)
        }
        else{
          setCanSubmit(true)
        }
      }
    else {
      setCanSubmit(true)
    }
  }, [emailOnFocus, passwordOnFocus, confirmPasswordOnFocus, emailErrorMessage, passwordErrorMessage, confirmPasswordError]);


  function onFileChange (event) {
    setselectedFile(event.target.files[0]);

  };

  function onFileUpload () {

    // Create an object of formData
    const formData = new FormData();

    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };
  function handleConfirmPasswordInput (e) {
    let value = e.target.value;
    setconfirmPassword(value)

    if (password !== e.target.value) {

     setconfirmPasswordError("Password does not match!")
     
  
    } else {
         setconfirmPasswordError("")
    }
  };
  function handleconfirmPasswordOnFocus(){
    setconfirmPasswordOnFocus(true)

  }

  // function  handlePasswordInput  ()  {
  //   if (confirmPasswordOnFocus) {
  //     if (password !== confirmPassword) {
 
  //         confirmPasswordError: "Password does not match",
  //         isButtonDisabled: true,
  
  //     } else {

  //         confirmPasswordError: "",
  //     }
  //   }

  //   if (this.state.password.length === 0) {
  //     this.setState({
  //       passwordError: "Password cannot be empty",
  //       isButtonDisabled: true,
  //     });
  //   } else {
  //     if (isStrongPassword(this.state.password)) {
  //       this.setState({
  //         passwordError: "",
  //       });
  //     } else {
  //       this.setState({
  //         passwordError:
  //           "Password must contains 1 uppercase, 1 lowercase, 1 special character, 1 number and minimul of 8 charactors long",
  //         isButtonDisabled: true,
  //       });
  //     }
  //   }
  // };

  async function handleOnSubmit (event){
    event.preventDefault();

    try {
      let userInputObj = {
        email: email,
        password: password,
      };
      let success = await axios.post("http://localhost:3001/api/user/sign-up", userInputObj);
      let jwtToken = success.data.payload;
      let decodedToken = jwtDecode(jwtToken);

      dispatch({
        type: "LOGIN",
        user: {
          email: jwtToken.email
        },
      });
      window.localStorage.setItem("jwtToken", jwtToken);

    //   //toast.success(`${success.data.message}`);
        props.history.push("/");
    } catch (e) {
    //   // toast.error(`${e.response.data.message}`);
      console.log("failed");
    }
  };

  // handleOnBlur = (event) => {
  //   if (this.state[event.target.name].length === 0) {
  //     this.setState({
  //       [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`,
  //     });
  //   }
  // };


    return (
      <div>
        <div class="recipeGrid" >
          {BackgroundImages.map((item, index) => {
            return <BackgroundImagesDisplay
              item={item}
              index={index}
              searchModeOn={false}
            />
          })
          }
        </div>

        <div class="welcomeDiv">
          {"Sign up and make dinner that perfectly fits your life"}
        </div>

        <div className="container">
          <div className="form-text">Sign up</div>

          <div className="form-div">
            <form className="form" onSubmit={handleOnSubmit}>
             
               
              <div className="form-group-block">
                <div className="block-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleEmailChange}
                    name="email"
                    // onBlur={this.handleOnBlur}
                    onFocus={handleEmailOnFocus}
                  />
                  <div className="errorMessage">{isEmailError && emailErrorMessage}</div>
                </div>
              </div>

              <input type="file" onChange={onFileChange} />
              <button onClick={onFileUpload}>
                Upload! </button>

  
              <div className="form-group-block">
                <div className="block-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={handlepasswordChange}
                    name="password"
                    // onBlur={this.handleOnBlur}
                    onFocus={handlepasswordOnFocus}
                  />
                  <div className="errorMessage">
                    {isPasswordError && passwordErrorMessage}
                  </div>
                </div>
              </div>

              <div className="form-group-block">
                <div className="block-container">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="text"
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordInput}
                    name="confirmPassword"
                    // onBlur={this.handleOnBlur}
                    onFocus={handleconfirmPasswordOnFocus}
                  />
                  <div className="errorMessage">
                    {/* {confirmPasswordError && confirmPasswordError} */}
                    {confirmPasswordError}
                  </div>
                </div>
              </div>

              <div className="button-container">
                <button type="submit" disabled={canSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


export default Signup;
