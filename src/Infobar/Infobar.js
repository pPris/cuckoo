import React, {Component} from 'react';
import './Infobar.css' // for contents inside the infobar
import '../Sidebar.css' 

// this component is not going to be rendered unless it's opened by clicking an icon
// will need to render correct information based on props
// const Infobar = () => {

const tempStaticTimings = [5, 20, 50];

function adjustTimings(workTimings, breakTimings) {
    const wt = workTimings.map(x => (<p>{x}</p>));
    const bt = breakTimings.map(x => (<p>{x}</p>));

    return (
        <div class="timings-box">
            <h3>Work sessions</h3>
            {wt}
            <h3>Breaks</h3>
            {bt}
        </div>
    )
}

class Infobar extends Component {

    render() {

        let className = 'infobar';
        className += ' open-infobar' // always add this class

        let body; 
        if (this.props.display == 1) {
            body = adjustTimings(tempStaticTimings, tempStaticTimings);
        } else if (this.props.display == 2) {
            
        } else {
            // temp
            body = <p>This is meant to be more long text and information </p>
        }

        return (
            <div id="infobar" class={className}>
                
                {body}
            </div>
        )
    }
}

export default Infobar