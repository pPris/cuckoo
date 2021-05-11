import React, { Component } from 'react';
import './Bubbles.css';

class Bubbles extends Component {
    // todo Warning: Each child in a list should have a unique "key" prop. Check the render method of `Bubbles`. See https://fb.me/react-warning-keys for more information. in p (at Bubbles.js:10) in Bubbles (at App.js:66) in div (at App.js:88) in body (at App.js:86) in App (at src/index.js:9) in StrictMode (at src/index.js:8)

    render() {
        const mainBubbles = this.props.timings.map((value, index) => {
            return (
                <p class="circles" onClick={() => {
                    this.props.startTimerFx(value)
                    // console.log("here",)
                }}>{value}</p>
            )
        })

        const toggleText = this.props.mode ? 'Have a break' : 'Skip break';

        const toggleBubble = (<p class="circles toggle-text" onClick={this.props.toggleFx}>{toggleText}</p>);
        
        const fx = () => {
            alert(0)
            return 0;
        }

        return (
            <div id="timer-comp">
                <div class="circle-container">
                    {mainBubbles}
                    {toggleBubble}
                </div>
            </div>
        )
    }
}

export default Bubbles