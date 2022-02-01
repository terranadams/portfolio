import React from "react";
import mtechLogo from "./media/mtech.png";
import { Spring, animated } from "react-spring";

const Education = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 3000 }}
    >
      {(styles) => (
        <animated.div style={styles}>
          <div className="text-center whiteText">
            <br></br>
            <h3>Education:</h3>
            <br></br>
            <p style={{ fontSize: "8px" }}>Click logo to learn more</p>
            <a
              href="https://mtec.edu/programs/web-programming-development/"
              target="_blank"
            >
              <img src={mtechLogo} width="300px" />
            </a>
            <br></br>
            <br></br>
            <div className="paragraphContainer">
              <p className="content">
                I am a graduate of Mountainland Technical College in Lehi UT,
                achieving my Web Programming and Development certificate in June
                of 2021.
              </p>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Education;
