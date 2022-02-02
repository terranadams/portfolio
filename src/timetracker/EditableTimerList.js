import React, { Component } from 'react';
import  EditableTimer  from "./EditableTimer";

 // This will receive the list of timers and their properties as a component prop to be mapped as EditableTimer instances.
 export  default class EditableTimerList extends Component {
    render() {// We use a higher order function to create an array of EditableTimer instances and store them in a variable called timers...
      const timers = this.props.timers.map((timer) => ( 
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={this.props.onFormSubmit} // This is a new prop being defined to be used by its parent, in this case a function.
          onTrashClick={this.props.onTrashClick}  // Prop being redefined and bubbled up for it's parent to pass data into, which will be a function.
          onStartClick={this.props.onStartClick} // Being bubbled up from the very bottom, almost there...
          onStopClick={this.props.onStopClick}   // Being bubbled up from the very bottom, almost there...
        />
      ));
      return ( //... and then we just return that variable, containing all of our timer instances.
        <div id='timers'>
          {timers}
        </div>);
    }
  }