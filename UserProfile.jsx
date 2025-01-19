import React from "react";

function UserProfile({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img className="avatar" src={avatar_url} alt="user-profile" />
      </div>
      <div className="github-details">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on {""}
          {`${createDate.getDate()} ${createDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Public Repos:  {public_repos}</p>

        <p>Followers:  {followers}</p>

        <p>Following:  {following}</p>
      </div>
    </div>
  );
}

export default UserProfile;
