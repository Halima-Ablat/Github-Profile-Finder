import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("halima");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      setUserData(data);

      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (errorMessage) {
    return <h1>Error! {errorMessage}</h1>;
  }

  if (loading) {
    return <h1>Loading... Please wait !</h1>;
  }

  function handleUsernameSubmit() {
    fetchData();
  }

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleUsernameSubmit}>Search</button>
      </div>
      {userData !== null ? <UserProfile user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
