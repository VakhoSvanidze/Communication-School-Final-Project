import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AppContext";
import "./Search.css";

function Search() {
  const [name, setName] = useState("");
  const [user, setUser] = useState();
  const [searchButton, setSearchButton] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { getUser } = useContext(AuthContext);


  useEffect(() => {
    // This logic solves the problem of initial render of useEffect;
    if(searchButton > 0){
      setLoading(true);
      getUser(`https://api.github.com/users/${name}`)
        .then((response) => setUser(response.data))
        .catch((error) => setError(error.message))
        .finally(setLoading(false));

    }
  }, [searchButton]);

  console.log(user);

  function handleSubmit() {
    setSearchButton((prevState) => prevState + 1);
  }

  return (
    <div>
      <div className="search">
        {error && <h1>{error}</h1>}
        {loading ? (
          <h1>Loading...</h1>
        ): (
          <div>
          <label htmlFor="name">
            <input
              className="search-input"
              id="name"
              type="text"
              placeholder="Enter User's Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <br />
          <button 
            className="button"
            onClick={handleSubmit}
          >
            Search user
          </button>
          { user ? (
            <div className="search-card" key={user.id}>
              <div className="name">
                <h4>Name</h4>
                <br />
                <h3>{user.login}</h3>
              </div> 
            
            <img
              className="img"
              src={user.avatar_url}
              alt={`${user.login}'s image`}
            />
            <h4>Followers: {user.followers}</h4>
            <h4>Following: {user.following}</h4>
            <br />
            <Link 
              className="button"
              to={`/user/${user.login}`}
            >
              Read More
            </Link>
          </div>

          ) : (
            <h1 className="error-message">Search for user</h1>
          )

          }
            
        
          </div>
        )}   
        </div>
      </div>
  )
}

export default Search;