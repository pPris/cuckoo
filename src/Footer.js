import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
    // todo
    // a plus button on the fake cuckoo to simulate people joining in
    // and then the profile pictures can be clicked to simulate them leaving

    render() {
        return (
            <div id="footer">
                <div id="log">
                    <p id="log1">This user did something 6 minutes ago.</p>
                </div>
                <div id="members-list">
                    <p class="members-circles">P</p>
                    <p>Coming soon.</p>
                </div>
                <p id="logos">Insert credits here.</p>
            </div>
        )
    }
}

export default Footer;
