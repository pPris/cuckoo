import React, {Component} from 'react';
import './Sidebar.css'

const infoBarOffset = '250px';
const isOpen = true;

const Iconbar = () => {
    // replace isOpen with state later
    

    //// EXTRA STYLING ON TOP OF CSS SHEET
    // styling when infobar is open
    let className = 'sidenav';

    // add all hover properties when extended bar is open 
    if (isOpen) className += ' sidenavhover open-iconbar'

    // need to revert styling when infobar closes?

    return (
        <div id="sidenav" class={className}>
            <p><span class="material-icons">perm_identity</span></p>
            <p><span class="material-icons">hourglass_empty</span></p>
            <p><span class="material-icons">info_outline</span></p>
            <p><i class="material-icons">chat_bubble_outline</i></p>
            <p><i class="material-icons">exit_to_app</i></p>
        </div>
    )
}

const Infobar = () => {

    //// EXTRA STYLING ON TOP OF CSS SHEET
    // styling when infobar is open
    let className = 'infobar';

    // add all hover properties when extended bar is open 
    if (isOpen) className += ' open-infobar'

    return (
        <div id="infobar" class={className}>
            <p>This is meant to be more long text and information </p>
        </div>
    )
}

class Sidebar extends Component {
    state = {
        infoBarOpen: false
    }

    render() {

        /*
        function openNav() {
            document.getElementById("infobar").style.width = "250px";
            document.getElementById("sidenav").style.right = "250px";
            // console.log(1);

            // sidenav background colour should match hover colour when infobar is open 
        }

        // automatically close whenever out of focus too
        function closeNav() {
            document.getElementById("infobar").style.width = "0px";
            document.getElementById("sidenav").style.right = "0px";
        } */


        return (
            <div>
                {/* <!-- sources used for sidebar designing and tooltips: w3schools.com --> */}

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" />

                <Iconbar />
                <Infobar />
            </div>
        )
    }
}

export default Sidebar