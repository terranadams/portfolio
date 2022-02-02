import React, { useState } from "react";

const TimersDashboard = () => {
  const [state, setState] = useState({ timers: [] });

  const handleCreateFormSubmit = (timer) => {
    // This inserts new timer into our state, and get auto-rendered
    createTimer(timer);
  };

  const handleEditFormSubmit = (attrs) => {
    // This handler runs a function below (updateTimer) for submitting an edit to state
    updateTimer(attrs);
  };

  const handleTrashClick = (timerId) => {
    // This handler runs a function defined here that deletes a specific timer with it's id as the attribute
    deleteTimer(timerId); // This handler is handled as a value in a prop by EditableTimerList
  };

  const handleStartClick = (timerId) => {
    // These handlers have been waiting on handler props being passed up from the very bottom to finally call us
    startTimer(timerId);
  };

  const handleStopClick = (timerId) => {
    // These handlers have been waiting on handler props being passed up from the very bottom to finally call us
    stopTimer(timerId);
  };

  const createTimer = (timer) => {
    // This creates the clock I think
    const t = helpers.newTimer(timer);
    setState({
      timers: this.state.timers.concat(t),
    });
  };

  const deleteTimer = (timerId) => {
    // Self explanatory
    setState({
      timers: this.state.timers.filter((t) => t.id !== timerId),
    });
  };

  const updateTimer = (attrs) => {
    // This updates the timer when the TimerForm gets edited and submitted
    setState({
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

  const startTimer = (timerId) => {
    // Self explanatory
    const now = Date.now();
    setState({
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

  const stopTimer = (timerId) => {
    // Self explanatory
    const now = Date.now();
    setState({
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

  return (
    <>
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={state.timers}
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick} // We made iiiiiit! (props bubbled up by EditableTimerList's children from the bottom to be used by handlers created in this component)
            onStopClick={handleStopClick} // We made iiiiiit! (props bubbled up by EditableTimerList's children from the bottom to be used by handlers created in this component)
          />

          <ToggleableTimerForm
            onFormSubmit={handleCreateFormSubmit} // This runs the function that adds the new timer to state
          />
        </div>
      </div>
    </>
  );
};

export default TimersDashboard;
