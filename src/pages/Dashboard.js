import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AppContext";
import UserCard from "../components/userCard/UserCard";


// I moved geting data of users in AppContext;

function Dashboard() {
  const { user, logout, data, loading, error } = useContext(AuthContext);
 

  return (
    <div className="container">
      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <UserCard data={ data } loading={loading} />

      )}
        
      {/* <pre>
        <code>{JSON.stringify(user, null, 4)}</code>
      </pre> */}
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;