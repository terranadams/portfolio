import React from "react";
import { Spring, animated } from "react-spring";

const Skills = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(styles) => (
        <animated.div style={styles}>
          <div>
            <div className="text-center whiteText">
              <br></br>
              <h3>Skills:</h3>
              <br></br>
              <p>Linux</p>
              <p>HTML / CSS / Javascript</p>
              <p>React.js</p>
              <p>Angular.js</p>
              <p>Elixir / Phoenix</p>
              <p>GraphQL</p>
              <p>Node.js</p>
              <p>Python</p>
              <p>Mongo DB</p>
              <p>SQL</p>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Skills;
