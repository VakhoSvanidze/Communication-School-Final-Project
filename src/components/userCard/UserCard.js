import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AppContext";
import "./userCard.css";


function UserCard({ data, loading }){
  
  const { setPage } = useContext(AuthContext);
  


  function handleClick() {
    setPage((prevState) => prevState + 1);
  }

  if(loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="card-container">
      {data.map(user => (
        <div className="card" key={user.id}>
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
          {/* <h4>Followers: {getFollowers(user.followers_url)}</h4> */}
          {/* <h4>Following: </h4> */}
          <br />
          <Link 
            className="button"
            to={`/user/${user.login}`}
          >
            Read More
          </Link>
        </div>
      ))}
      <button className="button-1"
          onClick={handleClick} 
        >
          Load More
        </button>
    </div>

    // <Card>
    //   <h4>{username}</h4>
    //   <Image 
    //     src={image}
    //     alt={`${username}'s image`}
    //   />
    //   <h4>Followers: {followers}</h4>
    //   <h4>Following: {following}</h4>
    //   <Link
    //     className="button"
    //     to={`/user/${id}`}>Read More</Link>
    // </Card>
  );
}

export default UserCard;
