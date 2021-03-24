import React, {Component} from 'react';
import './Sidebar.css'
import Infobar from './Infobar/Infobar'

/* <!-- sources used for sidebar designing and tooltips: w3schools.com --> */

/* 
bring icon bar thing inside sidebarcomponent
every onclick function --> toggle state whether infobar is open, and pass a prop to infobar to determine what info should be displayed
render info bar only if state is true
*/



class Sidebar extends Component {
    state = {
        // infoBarOpen: false,
        // infoToDisplay: 0 // 1-5 corresponds to each icon, from top to bottom order

        // temporary for testing infobar with less clicks
        infoBarOpen: false,
        infoToDisplay: 1 
    }
    

    render() {

        const toggleOpen = (x) => {
            // when close, just toggle
            // when open, should toggle only if same x/icon is clicked
            // if not same, then should change the information being displayed that's all
            console.log(x);
            if (x === 5) this.setState(() => ({ infoBarOpen: false }))
            else {
                this.setState((state) => ({
                    infoBarOpen: (!state.infoBarOpen || x === state.infoToDisplay
                        ? (!state.infoBarOpen)
                        : state.infoBarOpen),
                    infoToDisplay: x
                }))
            }
        }

        const infobar = () => {
            if (this.state.infoBarOpen) {
                return (<Infobar display={this.state.infoToDisplay} 
                    breakTimes={this.props.breakTimes} 
                    workTimes={this.props.workTimes}
                    addTiming={this.props.addTiming}/>)
            }
        }

        //// EXTRA STYLING ON TOP OF CSS SHEET
        // ICONBAR/SIDENAV
        let className = 'sidenav';

        // add all hover properties when extended bar is open 
        if (this.state.infoBarOpen) className += ' sidenavhover open-iconbar'


        return (
            <div>

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                {/* // on click, each icon will lead to a different set of info being displayed on the info bar */}
                    <div id="sidenav" class={className}>
                        <p onClick={() => toggleOpen(1)}><span class="material-icons">hourglass_empty</span></p>
                        <p onClick={() => toggleOpen(2)}><span class="material-icons">perm_identity</span></p>
                        <p onClick={() => toggleOpen(3)}><span class="material-icons">info_outline</span></p>
                        <p onClick={() => toggleOpen(4)}><span class="material-icons">chat_bubble_outline</span></p>
                        <p onClick={() => toggleOpen(5)}><i class="material-icons">exit_to_app</i></p>
                    </div>
                
                {infobar()}
            </div>
        )
    }
}

export default Sidebar