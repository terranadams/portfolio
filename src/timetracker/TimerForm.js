import React, { Component } from 'react';

export default class TimerForm extends Component {

    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    }; // The input fields will hold these state values if they come down defined...
    // ... otherwise (in the case of a new TimerForm from ToggleableTimerForm), they start off blank.
    // The values, again, get passed down thru props by their parent components.

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleProjectChange = (e) => {
        this.setState({ project: e.target.value });
    };
    // These two functions get ran to change state when the input values change in any way.

    handleSubmit = () => {
        this.props.onFormSubmit({
          id: this.props.id,
          title: this.state.title,
          project: this.state.project,
        });
      };


    render() {
        const submitText = this.props.id ? 'Update' : 'Create'; // This changes the button wording if it's a new form...
        return ( //... or a timer form being edited, by seeing if it has an existing props.id
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text'
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            /></div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text'
                                value={this.state.project}
                                onChange={this.handleProjectChange}
                            />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'
                                onClick={this.handleSubmit}
                            >
                                {submitText}
                            </button>
                            <button className='ui basic red button'
                                onClick={this.props.onFormClose}
                            >
                                Cancel
              </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}