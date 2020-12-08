import React, { Component } from 'react';
// import './Timer.css';

class Timer extends Component {

    render() {
        return (
            <div>
                <p id="timer-value">25:00</p>
                <p class="timer-control">pause</p>
            </div>
        )
    }
}
export default Timer