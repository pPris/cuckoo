import React, {Component} from 'react';
import './Sidebar.css'


class Sidebar extends Component {
    render() {

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
        }


        return (
            <div>
                {/* <!-- sources used for sidebar designing and tooltips: w3schools.com --> */}

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" />

                <div id="sidenav" class="sidenav">
                    <p onclick={openNav}><span class="material-icons">perm_identity</span></p>
                    <p><span class="material-icons">hourglass_empty</span></p>
                    <p><span class="material-icons">info_outline</span></p>
                    <p><i class="material-icons">chat_bubble_outline</i></p>
                    <p onclick={closeNav}><i class="material-icons">exit_to_app</i></p>
                </div>

                <div id="infobar">
                    <p>This is meant to be more long text and information </p>
                </div>
            </div>
        )
    }
}

export default Sidebar