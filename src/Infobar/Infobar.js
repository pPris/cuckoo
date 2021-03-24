import React, {Component} from 'react';
import './Infobar.css' // for contents inside the infobar
import '../Sidebar.css' 
import TimingsForm from './TimingsForm.js'

// this component is not going to be rendered unless it's opened by clicking an icon
// will need to render correct information based on props
// const Infobar = () => {


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

        if (this.props.display === 1) {
            body = displayTimings(
                this.props.workTimes, this.props.breakTimes, this.props.addTiming);
        } else if (this.props.display === 2) {
            body = 
                <div class="left">
                    <p>The user's account information goes here.</p>
                    <p>The feature of having user accounts, profile pictures, have not been implemented in this page yet.</p>
                </div>
        } else if (this.props.display === 3) {
            body = <p class="left">This is meant to be more long text and information about the app and the company behind it. </p> // temp
        } else if (this.props.display === 4) {
            body = <p class="left">This button is supposed to 1ink to a feedback form.</p>
        } else if (this.props.display === 5) {
            body = <p class="left">This button is supposed to let the user exit this timer and let them set up a timer at a new link. <br></br> <br></br> For the purposes of this project, it has not been implemented yet.</p>
        }

        return (
            <div id="infobar" class={className}>
                {body}
            </div>
        )
    }
}

export default Infobar