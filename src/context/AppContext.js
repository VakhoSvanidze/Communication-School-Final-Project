import { createContext, useEffect, useState, useContext } from "react";
import { parse, removeToken, setToken } from "../helpers/jwt";
import { signInUser } from "../http/authentification";
import { getUsers } from "../http/getUsers";
import { getUser } from "../http/getUser";
import { getFollowers } from "../http/GetFollowers";
import { getOrganizations } from "../http/getOrganizations";

const AuthContext = createContext({
  user: null, 
  isAuthenticated: false,
  isInitialized: false,
})



function AuthContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  function getFavorites() {
    return useContext(favorites);
  }
  function SetFavorites() {
    return useContext(setFavorites());
  }

  console.log(favorites);

  //This variables are for SingIn and Signup
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  //And here we have a variables for fetching users 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  
  //
  //Now fetch those amazing programmers, CyberShamans
  useEffect(() => {
    setLoading(true);
    getUsers(page)
      .then((response) => setData([...data, ...response]))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [page])

//response.items
  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token } = response;
    setToken(token);
    const { payload } = parse(token);
    setIsAuthenticated(true);
    setUser(payload);
    console.log(isAuthenticated);
  }

  function logout() {
    removeToken();
    setIsAuthenticated(false);
    setUser(null);
  }

  function handleFailInit() {
    setIsInitialized(true);
    setIsAuthenticated(false);
  }

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      const { valid, payload } = parse(token);
      if (token && valid) {
        setIsInitialized(true);
        setIsAuthenticated(true);
        setUser(payload);
      } else {
        handleFailInit();
      }
    } catch (error) {
      handleFailInit();
    }
  }, []);

  if (!isInitialized) {
    return <h1>Loading ...</h1>
  }

  return (
    <AuthContext.Provider
      value={{ 
        user, isAuthenticated, 
        isInitialized, login, 
        logout, data,
        loading, error,
        setPage, getFollowers, 
        getUsers, getUser,
        getFavorites, SetFavorites,
        getOrganizations
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };