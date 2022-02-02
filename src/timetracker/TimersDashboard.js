import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import  helpers  from './Helpers';


import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

/* 
Once you understand state, you can see how props act as its one-way data pipeline. 
state is managed in some select parent components and then that data flows down through children as props. 
If state is updated, the component managing that state re-renders by calling render(). 
This, in turn, causes any of its children to re-render as well. And the children of those children. 
And on and on down the chain.
*/

export default class TimersDashboard extends Component {
    state = {
      timers: [],
    };

    handleCreateFormSubmit = (timer) => { // This inserts new timer into our state, and get auto-rendered
        this.createTimer(timer);
      };
    
      handleEditFormSubmit = (attrs) => { // This handler runs a function below (updateTimer) for submitting an edit to state
        this.updateTimer(attrs);
      };

      handleTrashClick = (timerId) => { // This handler runs a function defined here that deletes a specific timer with it's id as the attribute
        this.deleteTimer(timerId); // This handler is handled as a value in a prop by EditableTimerList
      };
    
      handleStartClick = (timerId) => {  // These handlers have been waiting on handler props being passed up from the very bottom to finally call us
        this.startTimer(timerId);
      };
      
      handleStopClick = (timerId) => {     // These handlers have been waiting on handler props being passed up from the very bottom to finally call us
        this.stopTimer(timerId);
      };

      createTimer = (timer) => {   // This creates the clock I think
        const t = helpers.newTimer(timer);
        this.setState({
          timers: this.state.timers.concat(t),
        });
      };
  
      deleteTimer = (timerId) => { // Self explanatory
        this.setState({
          timers: this.state.timers.filter(t => t.id !== timerId),
        });
      };

      updateTimer = (attrs) => {  // This updates the timer when the TimerForm gets edited and submitted
        this.setState({
          timers: this.state.timers.map((timer) => {
            if (timer.id === attrs.id) {
              return Object.assign({}, timer, {
                title: attrs.title,
                project: attrs.project,
              });
            } else {
              return timer;
            }
          }),
        });
      };

      startTimer = (timerId) => { // Self explanatory
        const now = Date.now();
        this.setState({
          timers: this.state.timers.map((timer) => {
            if (timer.id === timerId) {
              return Object.assign({}, timer, {
                runningSince: now,
              });
            } else {
              return timer;
            }
          }),
        });
      };
    
      stopTimer = (timerId) => { // Self explanatory
        const now = Date.now();
        this.setState({
          timers: this.state.timers.map((timer) => {
            if (timer.id === timerId) {
              const lastElapsed = now - timer.runningSince;
              return Object.assign({}, timer, {
                elapsed: timer.elapsed + lastElapsed,
                runningSince: null,
              });
            } else {
              return timer;
            }
          }),
        });
      };
      render() {
        return (
          <div className='ui three column centered grid' style={{marginTop: '30px'}}>
            <div className='column'>
            <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}  // We made iiiiiit! (props bubbled up by EditableTimerList's children from the bottom to be used by handlers created in this component) 
            onStopClick={this.handleStopClick}    // We made iiiiiit! (props bubbled up by EditableTimerList's children from the bottom to be used by handlers created in this component)
          />

          <ToggleableTimerForm 
                onFormSubmit={this.handleCreateFormSubmit} // This runs the function that adds the new timer to state
              />
            </div>
          </div>
        );
      }
  }