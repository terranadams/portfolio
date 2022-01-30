import React from "react";
import mtechLogo from './media/mtech.png'

const Education = () => {
  return (
    <div className="text-center whiteText">
      <br></br>
      <h3>Education:</h3>
      <br></br>
      <p style={{ fontSize: "8px" }}>Click logo to learn more</p>
      <a href='https://mtec.edu/programs/web-programming-development/' target='_blank'>
      <img src={mtechLogo} width='300px'/>
      </a>
      <br></br><br></br>
      <div className="paragraphContainer">
        <p className="content">
          I am a graduate of Mountainland Technical College in Lehi UT,
          achieving my Web Programming and Development certificate in June of
          2021. 
        </p>
      </div>
    </div>
  );
};

export default Education;
