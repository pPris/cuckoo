import React, { Component } from 'react';
import './Bubbles.css';

class Bubbles extends Component {
    

    render() {
        const {timings} = this.props;

        const mainBubbles = this.props.timings.map((value, index) => {
            return (
                <p class="circles">{value}</p>
            )
        })

        const toggleBubble = this.props.mode ? 'Have a break' : 'Skip break';
        
        const fx = () => {
            alert(0)
            return 0;
        }

        return (
            <div id="timer-comp">
                <div class="circle-container">
                    {mainBubbles}
                    <p class="circles toggle-text" onClick={this.props.toggleFx}>{toggleBubble}</p>
                </div>
            </div>
        )
        }
}

export default Bubbles