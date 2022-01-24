import React from 'react'


const Resume = () => {
    return (
        <div>
            <h3>Skills:</h3>
            <ul>
                <li>Linux</li>
                <li>HTML</li>
                <li>CSS/ SASS</li>
                <li>Javascript / JQuery</li>
                <li>React.js</li>
                <li>Angular.js</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Mongo DB</li>
                <li>SQL</li>
            </ul>

            <h3>Experience:</h3>
            <h5><strong>Accela, Inc.</strong> <i>April 2021 - present</i></h5>
            <p>I work to diagnose issues with Accela’s software products. I interact with Accela’s clients 
                to detail replication steps of the problem at hand and find a resolution to it if I can’t 
                diagnose it as a software glitch. I specialized in diagnosing issues with the company’s main 
                mobile application, which involved utilizing our API using Postman to decipher where errors come 
                from in the mobile app using Trace IDs provided in the API call’s response.</p>
        </div>
    )
}

export default Resume
