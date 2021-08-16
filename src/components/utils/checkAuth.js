import jwtDecode from "jwt-decode";
import setAxiosAuthToken from "./checkAxioAuth";

const checkIfUserIsAuth = () => {
  //check if token exists, if it doesnt exists return false
  //if it does exists, check if token valid (meaning not expired)
  //if expired return false
  //else return true

  let getJwtToken = window.localStorage.getItem("jwtToken");

  if (getJwtToken) {
    const currentTime = Date.now() / 1000;
    let decodedToken = jwtDecode(getJwtToken);

    if (decodedToken.exp < currentTime) {
      setAxiosAuthToken(null);
      window.localStorage.removeItem("jwtToken");
      return null;
    } else {
      setAxiosAuthToken(getJwtToken);
      return decodedToken.email
    }
  }
   else {
    return null;
  }
}

export default checkIfUserIsAuth;