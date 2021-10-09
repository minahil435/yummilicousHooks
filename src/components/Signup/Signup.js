import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import jwtDecode from "jwt-decode";
import BackgroundImagesDisplay from "../Home/BackgroundImagesDisplay"
import setAxiosAuthToken from "../utils/checkAxioAuth";
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
    emailErrorMessage, ,
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

  const BackgroundImages = [
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
  ]


  useEffect(() => {
    if (user !== null) {
      props.history.push("/");
    }

    if (emailOnFocus && passwordOnFocus && confirmPasswordOnFocus) {
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
      else {
        setCanSubmit(true)
      }
    }
    else {
      setCanSubmit(true)
    }
  }, [emailOnFocus, passwordOnFocus, confirmPasswordOnFocus, emailErrorMessage, passwordErrorMessage, confirmPasswordError]);


  function onFileChange(event) {
    setselectedFile(event.target.files[0]);
  };

  function handleConfirmPasswordInput(e) {
    let value = e.target.value;
    setconfirmPassword(value)

    if (password !== e.target.value) {
      setconfirmPasswordError("Password does not match!")
    } else {
      setconfirmPasswordError("")
    }
  };

  function handleconfirmPasswordOnFocus() {
    setconfirmPasswordOnFocus(true)
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("userImage", selectedFile);
      formData.append("email", email);
      formData.append("password", password);

      let success = await axios.post("http://localhost:3001/api/user/sign-up", formData);
      let jwtToken = success.data.payload;
      setAxiosAuthToken(jwtToken);

      let decodedToken = jwtDecode(jwtToken);
      dispatch({
        type: "LOGIN",
        user: {
          email: decodedToken.email,
          userImage: decodedToken.userImage
        },
      });

      window.localStorage.setItem("jwtToken", jwtToken);
      props.history.push("/");

    } catch (e) {
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
      <div className="recipeGrid" >
        {BackgroundImages.map((item, index) => {
          return <BackgroundImagesDisplay
            key={item.id}
            item={item}
            index={index}
            searchModeOn={false}
          />
        })
        }
      </div>
      <div className="welcomeDiv">
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
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
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
                  type="password"
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
            <div className="form-group-block">
              <div className="block-container">
                <input type="file" onChange={onFileChange} />
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
