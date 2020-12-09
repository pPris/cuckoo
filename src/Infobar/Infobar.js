import React, {Component} from 'react';
import './Infobar.css' // for contents inside the infobar
import '../Sidebar.css' 
import TimingsForm from './TimingsForm.js'

// this component is not going to be rendered unless it's opened by clicking an icon
// will need to render correct information based on props
// const Infobar = () => {

const tempStaticTimings = [5, 20, 50];


function displayTimings(workTimings, breakTimings, addTimingFx) {
    const wt = workTimings.map(x => (<p>{x}</p>));
    const bt = breakTimings.map(x => (<p>{x}</p>));

    return (
        <div class="timings-box">
            <h3>Work sessions</h3>
            {wt}
            <TimingsForm addTiming={addTimingFx} isWork={true}/>
            <h3>Breaks</h3>
            <TimingsForm addTiming={addTimingFx} isWork={false}/>
            {bt}
        </div>
    )
}

class Infobar extends Component {

    render() {

        let className = 'infobar open-infobar' // info bar is always open if rendered, in this implementation

        let body; 

        if (this.props.display == 1) {
            body = displayTimings(
                this.props.workTimes, this.props.breakTimes, this.props.addTiming);
        } else if (this.props.display == 2) {
            
        } else {
            body = <p>This is meant to be more long text and information </p> // temp
        }

        return (
            <div id="infobar" class={className}>
                {body}
            </div>
        )
    }
}

export default Infobar