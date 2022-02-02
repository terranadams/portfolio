import React, { Component } from 'react';
import TimerForm from "./TimerForm";
import { Button } from 'react-bootstrap';
// This represents the plus button that can switch to a TimerForm based on a prop isOpen that gets toggled true or false
export default class ToggleableTimerForm extends Component {

    state = {
        isOpen: false
    };
    // This is the only memory this component needs, checking if the EditableTimer should be a TimerForm component or plus icon

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };
    // This function gets ran to switch this display between the two different phases it can take

    handleFormClose = () => {                    
        this.setState({ isOpen: false });
    };
    // This function does the opposite of the one above it

    handleFormSubmit = (timer) => {              
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };
    // This function is ran by the prop passed (bubbled) up from the child to be ran by being clicked


    render() {
        if (this.state.isOpen) { // THIS ORIGINALLY SAID 'this.props.isOpen' WHICH IS AN ERROR IN THE LESSON SCRIPT
            return (
                <TimerForm 
                onFormSubmit={this.handleFormSubmit} // These props are pre-defined and were passed (bubbled) up
                onFormClose={this.handleFormClose} // These props run the functions defined in this component when clicked
                />
            );
        } else { // If props.isOpen is true, it'll display the form. If false, it will just be a plus button
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon'
                    onClick={this.handleFormOpen}> 
                        <Button variant='info'>Create a New Timer :)</Button>
                    </button>
                </div>);
        } // The "this" keyword must be remembered when using a component's own method within return.
    }
}