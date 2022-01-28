import React from "react";

const Experience = () => {
  return (
    <div className="text-center">
      <h3>Experience:</h3>
      <br></br>
      <h5>
        <strong>Accela, Inc.</strong> <br></br>
        <i>April 2021 - present</i>
      </h5>
      <p className="">
        I work to diagnose issues with Accela’s software products. I interact
        with Accela’s clients to detail replication steps of the problem at hand
        and find a resolution to it if I can’t diagnose it as a software glitch.
        I specialized in diagnosing issues with the company’s main mobile
        application, which involved utilizing our API using Postman to decipher
        where errors come from in the mobile app using Trace IDs provided in the
        API call’s response.
      </p>
      <br></br><br></br>
      <h5>
        <strong>FastFill Systems LLC</strong> <br></br>
        <i>August 2017 - April 2021</i>
      </h5>
      <p>
      I build, QA, box and ship fuel nozzles made for the mining industry. 
      When we obtain returned defective products, I take them apart and diagnose the
      issue by examining any faulty parts, where they get replaced and the product is 
      repurposed.
      </p>
    </div>
  );
};

export default Experience;
