import React, { Component } from 'react';
import './index.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.updateCurrentTime = this.updateCurrentTime.bind(this)
    }

    state = {
        isTimerPaused: true, // should be false unless testing
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
        const resume = () => this.setState({isTimerPaused: false})

        const pause = () => this.setState({isTimerPaused: true})

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

        // const calcTimeLeft = () => {
            // subtracting two date objects gives millisec 
            let diff = this.state.timeLeft - (this.state.currTime - this.state.startTime)
            minLeft = Math.floor(diff / 60000)
            secLeft = Math.floor((diff % 60000) / 1000) 
        // }

        // ? bug: think time passes too fast that, if you start from 25:00, you don't see 24:59?
        return (
            <div id="timer-container">
                <p id="timer-value">{minLeft}:{secLeft}</p>
                {timerCtrl}
            </div>
        )
    }
}
export default Timer