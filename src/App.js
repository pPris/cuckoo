import React, {Component} from 'react';
import Footer from './Footer';
import Bubbles from './Bubbles';
import Timer from './Timer';
import Sidebar from './Sidebar';
import './index.css'

class App extends Component {
    state = {
        currMode: true,
        timerStatus: true, // currently setting to open because haven't implemented switching from bubble to timer
        breakTimes: [2, 5, 7, 10, 20],
        workTimes: [5, 10, 15, 25, 30, 50]
    }

    render() {
        // **things that the mode affects:
            // different timer values are stored for different modes (in app)
            // different page header (in app component)
            // toggle bubble has different text (in bubbles)
            // whether the body has bubbles or a countdown (in app)
            // the background - is different if the timer is on (in app)
        // things that mode doesn't affect 
            // the history log, members list, and settings toolbar

        // toggle timer and bubbles
        const toggleTimerStatus = () => {
            this.setState((state) => ({timerStatus: !state.timerStatus}))
        }

        // toggles between break and work
        const toggleFunction = () => {
            this.setState((state) => ({currMode: !state.currMode})) // ({}) impt, you're likely returning an object 
        }

        const addTiming = (isWorkTime, timingValue) => {
            if (isWorkTime) {
                console.log("is this happening twice too: ")
                this.setState((state) => {
                    console.log("is this happening twice tooo: ", state)
                    if (state.workTimes.includes(timingValue))  
                        return state
                    else 
                        return ({workTimes: [...state.workTimes, timingValue]})
                })
            } else {
                // todo like above
                this.setState((state) => state.breakTimes.push(timingValue))
            }
        }

        // the heading at the top of the cuckoo timer page
        const timerHeading = this.state.currMode 
            ? 'work time'
            : 'break time';

        const body = 
            this.state.timerStatus 
            ? <Timer toggleMode={toggleFunction} toggleTimerStatus={toggleTimerStatus}/> 
            : <Bubbles mode={this.state.currMode} 
            toggleFx={toggleFunction}
            timings={this.state.currMode ? this.state.workTimes : this.state.breakTimes}/> 

        const workColor = '#3480eb';
        const breakColor = '#8934eb';

        if (this.state.currMode) {
            document.body.style.backgroundColor = 
            // workColor 
            '#dad';
        } else {
            document.body.style.backgroundColor = 
            // breakColor 
            '#aaf';
        }


        return (
            <body>
                <p id="timer-mode">{timerHeading}</p>
                <div id="app-body">{body}</div>

                {/* <Timer id="timer-comp" mode={currMode} 
                    timerValues={currMode ? workTimes : breakTimes}/> */}

                
                <Sidebar addTiming={addTiming} breakTimes={this.state.breakTimes} workTimes={this.state.workTimes}/>
                <Footer id="app-footer" />
                {console.log("updated: " + this.state.workTimes + "\n break: " + this.state.breakTimes)}
            </body>
        )
    }
}

export default App