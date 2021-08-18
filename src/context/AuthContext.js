import { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";
import setAxiosAuthToken from "../components/utils/checkAxioAuth";
import checkIfUserIsAuth from "../components/utils/checkAuth"
export const AuthContext = createContext({});

const initialState = {
    user: isUserExits()
};
console.log(initialState.user)

console.log(initialState.user)
function isUserExits(){
    if (checkIfUserIsAuth() != null) {
        console.log(checkIfUserIsAuth())
        return {email :checkIfUserIsAuth().email,
            userImage: checkIfUserIsAuth().userImage}
    }
    return null
}
   
function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                user: {
                    email: action.user.email,
                    userImage: action.user.userImage
                },
            };
        case "LOG_OUT":
            setAxiosAuthToken(null);
            window.localStorage.removeItem("jwtToken");
            return {
                user: null,
            };
        
        default:
            return state;
    }
}

function AuthContextWrapper({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextWrapper;