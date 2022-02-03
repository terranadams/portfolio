import React from "react";

const Card = (props) => {
  const profile = props.profile;

  return (
    <div className="github-profile" style={{marginBottom: '80px'}}>
      <img variant='top' src={profile.avatar_url} style={{width: '300px', height:'300px'}}/>
      <div className="info whiteText">
        <h3 className="name">{profile.name}</h3>
        <p>Github Username: {profile.login}</p>
        <p>Number of followers on Github: {profile.followers}</p>
        <div>{profile.bio}</div>
        <div className="company">
          I work for{" "}
          {profile.company ? profile.company + '.' : "an unspecified company, according to my Github profile."}
        </div>
      </div>
    </div>
  );
};

export default Card;


