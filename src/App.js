import React, {Component} from 'react';
import Footer from './Footer';
import Timer from './Timer';
// import './Timer.css';

class App extends Component {
    // why can't any code be written here?


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
            // different timer values are stored for different modes
            // different page header
            // toggle bubble has different text 
            // whether the body has bubbles or a countdown
            // the background - is different if the timer is on
        // things that mode doesn't affect 
            // the history log, members list, and settings toolbar

        const initMode = true;
        const currMode = initMode;
        const timerStatus = false; // true if timer is currently running

        // the heading at the top of the cuckoo timer page
        const timerHeading = currMode 
            ? 'work time'
            : 'break time';

        const breakTimes = [2, 5, 7, 10, 20];
        const workTimes = [5, 10, 15, 25, 30, 50];
        const body = 
            timerStatus 
            ? <Timer /> 
            : <Timer /> // change this to bubbles when its ready


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
                <Footer />
            </div>
        )
    }
}

export default App