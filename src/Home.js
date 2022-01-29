import React from 'react'
import me from './media/me.JPG'
import fam1 from './media/fam1.JPG'
import lucy from './media/lucy.png'
import fam2 from './media/fam2.jpg'
import skate1 from './media/skate.gif'
import skate2 from './media/skate2.gif'
import skate3 from './media/skate3.gif'
import skate4 from './media/skate4.gif'
import calvin1 from './media/calvin.jpg'
import calvin2 from './media/calvin2.jpg'
import calvinGif from './media/calvinGif.gif'
import rocknroll from './media/rocknroll.gif'
import games from './media/games.gif'
import f1 from './media/f1.gif'


const Home = () => {

    const imgStyle = {
        margin: '10px'
    }

    return (
        <div className="text-center">
      <br></br>
      <br></br>
      <img src={me} width='300px' style={{marginBottom: '10px'}}/>
      <div className="paragraphContainer">
        <p className="content">
          My name is Terran Adams, and I'm an aspiring ReactJS developer.
        </p>
      </div>
      <br></br><br></br>
        <img src={fam1} style={imgStyle} width='300px' height='390px'/>
        <img src={lucy} style={imgStyle} width='300px' height='390px'/>
        <img src={fam2} style={imgStyle} width='300px' height='390px'/>
        <p>I love my family</p>
        <br></br><br></br>
        <img src={skate1} style={imgStyle} width='300px' height='270px'/>
        <img src={skate2} style={imgStyle} width='300px' height='270px'/>
        <img src={skate3} style={imgStyle} width='300px' height='270px'/>
        <img src={skate4} style={imgStyle} width='300px' height='270px'/>
        <p>I love skateboarding</p>
        <br></br><br></br>
        <img src={calvin1} style={imgStyle} width='300px' height='390px'/>
        <img src={calvinGif} style={imgStyle} width='300px'/>
        <img src={calvin2} style={imgStyle} width='300px' height='390px'/>
        <p>I love Calvin & Hobbes</p>
        <br></br><br></br>
        <img src={f1} style={imgStyle} width='400px' />
        <img src={games} style={imgStyle} width='400px' />
        <img src={rocknroll} style={imgStyle} width='400px' />
        <p>And I LIVE for Formula 1, modifying retro Gameboys, and Rock 'n' Roll</p>
        <br></br><br></br>
    </div>
    )
}

export default Home
