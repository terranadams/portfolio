import React, { Component } from 'react';
import helpers from './Helpers.js';
import TimerActionButton from './TimerActionButton'

export default class Timer extends Component {

    componentDidMount() {                        // This helps clock functionality
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
      }
    
      componentWillUnmount() {                     // This one too
        clearInterval(this.forceUpdateInterval);
      }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
      };  // Self explanatory 

      handleStartClick = () => {                // These Start and Stop handlers are for the button functionality
        this.props.onStartClick(this.props.id);
      };
      
      handleStopClick = () => {                 
        this.props.onStopClick(this.props.id);
      };

  render() {
    const elapsedString = helpers.renderElapsedString(   // helps clock functionality
        this.props.elapsed, this.props.runningSince
      );
      return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'> {this.props.title}
          </div>
          <div className='meta'> {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2></div>
          <div className='extra content'>
          <span 
              className='right floated edit icon'
              onClick={this.props.onEditClick}     // creates prop for Timer that handles Edit functionality to be ran in EditableTimer
            >
              <i className='edit icon'/>
            </span>
            <span
              className='right floated trash icon'
              onClick={this.handleTrashClick}     // handles a function that creates props for Timer called OnTrashClick that has the id for that function's attribute 
            >              <i className='trash icon'/>
            </span>
          </div>
        </div>
        
        <TimerActionButton    // Final new component will pass up handler props for start and stop functionality, and change button colors depending on whichever one currently happening
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick} // We will bubble these handler Start Stop props all the way up to TimerDashboard where their functions will be defined and waiting for use.
          onStopClick={this.handleStopClick} // ... ^ ^ ^ 
        />
      </div>
    );
  }
}