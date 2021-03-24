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
                {/* <div class="circle-container"> 
                    <p class="circles" id="c50">50</p>
                    <p class="circles">20</p> */}
                    {/* Error: The `style` prop expects a mapping from style properties to values, not a string. 
                    For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
                    {/* style={{"flex-grow: 1.5"}} */}
                    
                <div class="circle-container">
                    {mainBubbles}
                    <p class="circles toggle-text" onClick={this.props.toggleFx}>{toggleBubble}</p>
                </div>
            </div>
        )
        }
}

export default Bubbles