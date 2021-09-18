import React, { Component } from 'react';
import './index.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.updateCurrentTime = this.updateCurrentTime.bind(this)
        this.setIntervalFx = this.setIntervalFx.bind(this)
    }

    // initialise startTime/currTime when component has mounted
    state = {
        isTimerPaused: false, // should be false unless testing
        timeLeft: this.props.timerValue * 60000, // using an intermediate variable doesn't work. might need to bind this.
        startTime: null,
        currTime: null, // not very sure of best js date practices
        durationInMins: 25
    }

    componentDidMount() {
        this.setState(() => {
            let d = new Date();
            return {startTime: d, currTime: d}
        })
        this.setIntervalFx();
    }
    
    setIntervalFx() {
        this.timerID = setInterval(this.updateCurrentTime, 1000); // * note how you set variables
    }

    componentDidUpdate() {
        // if (this.state.timeLeft )
        // if ()   
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    updateCurrentTime() {
        // bind needed above to perform this
        this.setState({currTime: new Date()});
        // this.setState({currTime: new Date()},  
        //     () => this.setState((prevState) => ({timeLeft: prevState.timeLeft - (prevState.currTime - prevState.startTime)}))
        // );
    }

    render() {

        // timer control functions
        // revise these if implementation of this component('s state) changes
        const resume = () => {
            this.setState({
                isTimerPaused: false,
                startTime: new Date(),
                currTime: new Date()
            })
            this.setIntervalFx();
        }
        
        const pause = () => {
            this.setState((prevState) => ({
                isTimerPaused: true,
                timeLeft: prevState.timeLeft - (prevState.currTime - prevState.startTime) //* shouldn't use this.state
            }))
            clearInterval(this.timerID);
        }

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