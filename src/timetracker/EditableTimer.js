import React, { Component } from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
    state = {
      editFormOpen: false
    };

    handleEditClick = () => {
        this.openForm();
      };
      
      handleFormClose = () => {
        this.closeForm();
      };
      
      handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
      };
      
      closeForm = () => {
        this.setState({ editFormOpen: false });
      };
      
      openForm = () => {
        this.setState({ editFormOpen: true });
      };


  // The properties of each EditableItem instance are passed to these children components as props themselves.
    render() {
      if (this.state.editFormOpen) {
        return (
          <TimerForm
            id={this.props.id} // this prop is created here, same with the next two (because it has .props in it)
            title={this.props.title}
            project={this.props.project}
            onFormSubmit={this.handleSubmit} // This prop that is pre-defined will run a function defined up here in its parent.
          onFormClose={this.handleFormClose} // ... same with this one.
          />
        );
      } else {
        return (
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
            onEditClick={this.handleEditClick}  // This prop that is pre-defined will run a function defined up here in its parent.
            onTrashClick={this.props.onTrashClick}    // This will define a prop to be used by its parent EditableTimerList, which will do the exact same thing for its parent TimersDashboard. "bubbling"
            onStartClick={this.props.onStartClick} // These Start and Stop handlers are being bubbled from the very bottom (TimerActionButton) to the top (TimersDashboard) where handler functions are waiting for them
            onStopClick={this.props.onStopClick}   // ... ^ ^ ^ 
          />
        )
          ;
      }
    }
  }