import React, {Component} from 'react';
import Footer from './Footer';
import Bubbles from './Bubbles';
import Timer from './Timer';
// import './Timer.css';

class App extends Component {
    // why can't any code be written here?
    state = {
        currMode: true,
        timerStatus: false,
        breakTimes: [2, 5, 7, 10, 20],
        workTimes: [5, 10, 15, 25, 30, 50]
    }

    render() {
        // enums of the different modes this cuckoo application supports
        // if only have four modes then can group them into work/break and timer ongoing/timer not selected
        // const modes = { 
        //     // ENUM: description / debug message
        //     WORK: 'select a work timer',
        //     BREAK: 'select a break timer',
        //     WORK_TIMER_ON: 'work timer is running',
        //     BREAK_TIMER_ON: 'break timer is running'
        // }
        // Object.freeze(modes) 

        // **things that the mode affects:
            // different timer values are stored for different modes (in app)
            // different page header (in app component)
            // toggle bubble has different text (in bubbles)
            // whether the body has bubbles or a countdown (in app)
            // the background - is different if the timer is on (in app)
        // things that mode doesn't affect 
            // the history log, members list, and settings toolbar

        // work vs break mode
        

        // const initMode = true;
        // const currMode = initMode;

        // const timerStatus = false; // true if timer is currently running

        const toggleFunction = () => {
            this.setState((state) => ({currMode: !state.currMode})) // ({}) impt, you're likely returning an object 
        }


        // the heading at the top of the cuckoo timer page
        const timerHeading = this.state.currMode 
            ? 'work time'
            : 'break time';

        const breakTimes = [2, 5, 7, 10, 20];
        const workTimes = [5, 10, 15, 25, 30, 50];
        const body = 
            this.state.timerStatus 
            ? <Timer toggleFx={toggleFunction}/> // change this to timer when its ready
            : <Bubbles mode={this.state.currMode} 
            toggleFx={toggleFunction}
            timings={this.state.currMode ? this.state.workTimes : this.state.breakTimes}/> 

        // let elem = document.querySelector("#timer-mode");
        // elem.style.color = "#ffccff";

        
        return (
            <div>
                <p id="timer-mode">{timerHeading}</p>
                {body}

                {/* <Timer id="timer-comp" mode={currMode} 
                    timerValues={currMode ? workTimes : breakTimes}/> */}

                {/* a component content should be here 
                    stores the bubbles when no timer, 
                    and has the timer when break or work session going on*/}
                    {/* what controls the modes? */}
                <Footer id="app-footer" />
            </div>
        )
    }
}

export default App