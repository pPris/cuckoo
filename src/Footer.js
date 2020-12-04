import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
    // todo
    // a plus button on the fake cuckoo to simulate people joining in
    // and then the profile pictures can be clicked to simulate them leaving

    render() {
        return (
            <div id="footer">
                <p id="log">X did something 6 minutes ago.</p>
                <p id="profile pictures">Coming soon.</p>
            </div>
        )
    }
}

export default Footer;
