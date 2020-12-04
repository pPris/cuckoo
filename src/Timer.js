import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    render() {
        return (
            <div id="timer-comp">
                {/* <h1>Huge circles are here</h1> */}
                <div class="circle-container">
                    <p class="circles" id="c50">50</p>
                    <p class="circles">20</p>
                    {/* Error: The `style` prop expects a mapping from style properties to values, not a string. 
                    For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
                    {/* style={{"flex-grow: 1.5"}} */}
                    <p class="circles">30</p>
                </div>
                {/* shouldn't have two divs but im doing for aesthetic purposes 
                single digit messes up layout*/}
                <div class="circle-container">
                    <p class="circles">15</p> 
                    <p class="circles">10</p>
                </div>
            </div>
        )
        }
}

export default Timer