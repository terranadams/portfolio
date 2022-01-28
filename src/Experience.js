import React from "react";

const Experience = () => {
  return (
    <div className="text-center">
      <h3>Experience:</h3>
      <br></br>
      <h3>
        <strong>Accela, Inc.</strong>
      </h3>
      <i>April 2021 - present</i>
      <div className="paragraphContainer">
        <p className="content">
          I work to diagnose issues with Accela’s software products. I interact
          with Accela’s clients to detail replication steps of the problem at
          hand and find a resolution to it if I can’t diagnose it as a software
          glitch. I specialized in diagnosing issues with the company’s main
          mobile application, which involved utilizing our API using Postman to
          decipher where errors come from in the mobile app using Trace IDs
          provided in the API call’s response.
        </p>
      </div>
      <br></br>
      <br></br>
      <h3>
        <strong>Fast Fill Systems</strong>
      </h3> 
      <br></br>
      <i>August 2017 - April 2021</i>
      <div className="paragraphContainer">
        <p className="content">
          I build, QA, box and ship fuel nozzles made for the mining industry.
          When we obtain returned defective products, I take them apart and
          diagnose the issue by examining any faulty parts, where they get
          replaced and the product is repurposed.
        </p>
      </div>
    </div>
  );
};

export default Experience;
