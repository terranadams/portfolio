import React, { useState } from 'react'
import CardList from './CardList';
import Card from './Card'
import Form from './Form';

const Github = () => {
    const [profiles, setProfiles] = useState([])
    const [currentProfile, setCurrentProfile] = useState()
    const addNewProfile = (profileData) => {
      // setProfiles([...profiles, profileData])
      setCurrentProfile(profileData)

    }
    return (
      <div className='objects'>
        <h3 className='header whiteText text-center' style={{margin: '20px'}}>The GitHub Cards App</h3>
        <div className='text-center'>
        <Form onSubmit={addNewProfile} />
        {profiles.length > 0 ? <p
        className="whiteText text-center"
        style={{ fontSize: "12px", margin: "20px" }}
      >
        Click on cards to visit respective Github pages
      </p> : <p></p>}
        <hr></hr>
        {/* <CardList profiles={profiles} />  */}
          {currentProfile ? <Card profile={currentProfile}/> : <br></br>}
        </div>
      </div>
    );
};

export default Github;

