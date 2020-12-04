import React, {Component} from 'react';
import Footer from './Footer';
import Timer from './Timer';
// import './Timer.css';

class App extends Component {
    render() {
        return (
            <div>
                {/* <h2>hello! This is my test. This header should come from timer eventually</h2> */}
                <p id="timer-mode">work time</p>
                <Timer id="timer-comp"/>
                {/* a component content should be here 
                    stores the bubbles when no timer, 
                    and has the timer when break or work session going on*/}
                    {/* where should the state of timer = work or timer = break be kept? */}
                    {/* what controls the state? */}
                    {/* how do you control what options there are? -> prop to timer and the settings bar?*/}
                <Footer />
            </div>
        )
    }
}

export default App