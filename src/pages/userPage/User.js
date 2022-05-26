
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useReducer } from "react";
import { AuthContext } from "../../context/AppContext";
import "./UserPage.css";


function User() {
  const { login } = useParams();
  const navigate = useNavigate();
  const { getFollowers, getUser, 
      getOrganizations, 
    } = useContext(AuthContext);
  
    // User
  const [user, setUser] = useState([]);
  // Repositories of an User
  const [repos, setRepos] = useState([]);
  const [gettingRepositories, setGettingRepositories] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const user = data.find(element => element.login == login);
  const reposIsAlive = repos.length > 0 && Array.isArray(repos);
  


  console.log(user);
  // I'm gettin users with login here. I take login from UserCard component, where cards of 
  //users are created and after rendered in Dashboard component.
  useEffect(() => {
    setLoading(true);
    getUser(`https://api.github.com/users/${login}`)
      .then((response) => setUser(response.data))
      .catch((error) => setError(error.message))
      .finally(setLoading(false));
  }, []);

  // This call is to fetch Organizations. sometimes (and quite often, tbh) it fails
  useEffect(() => {
    setLoading(true);
    getOrganizations(user.organizations_url)
    .then((response) => setOrganizations(response))
    .catch((error) => setError(error.message))
    .finally(setLoading(false));
  }, [user]);

  // With this call, We are getting repositories of users.
  useEffect(() => {
    setLoading(true)

    getFollowers(user.repos_url)
    .then((response) => setRepos(response))
    .catch((error) => setError(error.message))
    .finally(setLoading(false));
  }, [gettingRepositories]);

  function handleClick() {
    setGettingRepositories((prevstate) => !prevstate);
  }

  return (
    <div>
      {!user && <h1>Error while fetching data</h1>}
      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>Loading ...</h1>
        ): (
        <div>
          <div  className="user-page-container">
            <h1 className="title">{user.login}</h1>
            <div className="first-column">
              <img 
                className="avatar-image"
                src={user.avatar_url}
                alt="just photo"
              />
              {user.bio && 
                <div>
                  <h2>User Bio</h2>
                  <p>{user.bio}</p>
                </div>
              }
              <br />
              <h3>Followers: {user.followers}</h3>
              <h3>Following: {user.following}</h3>
              <br />
              <div className="organizations">
                <h3>Organizations</h3>
                <div className="org-container">
                  {organizations.length > 0 && Array.isArray(organizations) ? (
                    organizations.map((org) => (
                      <div 
                        key={org.login}
                        className="organization">
                        <h4 className="org-title">{org.login}</h4>
                        <a href={org.url}>
                          <img
                            className="org-img"
                            key={org.login}
                            src={org.avatar_url}
                            alt={org.login}
                          />
                        </a>
                      </div>
                    ))
                    
                  ) : (
                    <h3>App couldn't get organizations</h3>
                  ) 
                  }
                
                </div>
              </div>

            </div>
            <div className="second-column">
              <h2>Repositories</h2>
              <button 
                className="button"
                onClick={handleClick}
              >
                Get Repos
              </button>
              {!reposIsAlive ? (
                <h2>No Repositories to display, yet. Try, CyberAngels might get something</h2>
              ) : (
                repos
                  .filter((repo, index) => index < 10)
                  .map((repo) => (
                    <div className="repository"
                      key={repo.id}>
                      <h4>
                        <a 
                          href={repo.archive_url}
                          className="repo-link">
                            {repo.name}
                          </a>
                        </h4>
                        <h4 className="repo-forks">Forks: {repo.forks}</h4>
                    </div>
                  ))

              )
              } 
            
            </div>

            <button 
              onClick={() => navigate(-1)}
              className="button go-back"
            >
              Go Back
            </button>
          </div>
        </div>
      )}      
    </div>
    )
}

export default User;


