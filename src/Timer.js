import React, { Component } from 'react';
import './index.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.updateCurrentTime = this.updateCurrentTime.bind(this)
    }

    state = {
        isTimerPaused: false, // should be false unless testing
        timeLeft: 25 * 60000,
        startTime: new Date(),
        currTime: new Date(), // not very sure of best js date practices
        durationInMins: 25
    }

    componentDidMount() {
        this.timerID = setInterval(this.updateCurrentTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    updateCurrentTime() {
        this.setState({currTime: new Date()}); // bind needed above to perform this
    }

    render() {

        // timer control functions
        // revise these if implementation of this component('s state) changes
        const resume = () => this.setState({
            isTimerPaused: false,
            startTime: new Date(),
            currTime: new Date()
        })

        const pause = () => this.setState({
            isTimerPaused: true,
            timeLeft: this.state.timeLeft - (this.state.currTime - this.state.startTime)
        })

        let timerCtrl;

        if (this.state.isTimerPaused) {
            timerCtrl = (
                <div class="timer-control">
                    <p onClick={resume}>resume</p>
                    <p>reset</p>
                    <p onClick={this.props.toggleTimerStatus}>stop</p>
                </div>
            )
        } else {
            timerCtrl = (
                <div class="timer-control">
                    <p onClick={pause}>pause</p>
                </div>
            )
        }

        let minLeft, secLeft;

        if (!this.state.isTimerPaused) {
            let diff = this.state.timeLeft - (this.state.currTime - this.state.startTime)
            minLeft = Math.floor(diff / 60000)
            secLeft = Math.floor((diff % 60000) / 1000) 
        } else {
            let diff = this.state.timeLeft
            minLeft = Math.floor(diff / 60000)
            secLeft = Math.floor((diff % 60000) / 1000)
        }

        // if x is a one digit number, pads it with zero
        const returnTwoDigits = (x) => {
            return (x < 10)
            ? "0" + x.toString()    
            : x.toString();
        }

        // ? bug: think time passes too fast that, if you start from 25:00, you don't see 24:59?
        return (
            <div id="timer-container">
                <p id="timer-value">{returnTwoDigits(minLeft)}:{returnTwoDigits(secLeft)}</p>
                {timerCtrl}
            </div>
        )
    }
}
export default Timer

/**
 * Note: current implementation of pause / resume
 * 
 * So this component stores start and current date to calculate how much time has passed
 * Amount of time passed is calculated each time the component is rendered 
 * 
 * When pausing, we need the calculation to stop, and on resuming, it needs to resume from the correct time left
 * As such upon pausing, we update the state about how much time is left 
 * And upon resuming we update the start time to the time the timer was resumed
 * 
 * An improvement would be: to store the time elapsed on the updateCurrentTime and do the calculations 
 * when that function is called, not inside the render?
 * 
 */