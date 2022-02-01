import React from "react";
import accelaLogo from "./media/accela.png";
import fastfillLogo from "./media/fastfill.png";
import { Spring, animated } from "react-spring";

const Experience = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(styles) => (
        <animated.div style={styles}>
          <div className="text-center whiteText">
            <br></br>
            <h3>Experience:</h3>
            <br></br>
            <p style={{ fontSize: "8px" }}>Click logo to learn more</p>
            <a href="https://www.accela.com/about" target="_blank">
              <img src={accelaLogo} width="200px" />
            </a>
            <h3>{/* <strong>Accela, Inc.</strong> */}</h3>
            <i>April 2021 - present</i>
            <p>Technical Support Engineer</p>
            <div className="paragraphContainer">
              <p className="content">
                I work to diagnose issues with Accela’s software products. I
                interact with Accela’s clients to detail replication steps of
                the problem at hand and find a resolution for it if I can’t
                diagnose it as a software glitch. I specialized in diagnosing
                issues with the company’s main mobile application, which
                involved utilizing our API using Postman to decipher where
                errors come from in the mobile app using Trace IDs provided in
                the API call response.
              </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://www.fastfillsystems.com/about.htm" target="_blank">
              <img src={fastfillLogo} width="200px" />
            </a>
            <h3>{/* <strong>Fast Fill Systems</strong> */}</h3>
            <i>August 2017 - April 2021</i>
            <p>Workshop Production Worker</p>
            <div className="paragraphContainer">
              <p className="content">
                I build, QA, box and ship fuel nozzles made for the mining
                industry. When we obtain returned defective products, I take
                them apart and diagnose the issue by examining any faulty parts,
                where they get replaced and the product is repurposed.
              </p>
            </div>
            <br></br>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Experience;
