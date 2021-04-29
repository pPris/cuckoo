import React, {Component} from 'react';
import './Infobar.css' // for contents inside the infobar

// bug: form submits string according to react devtool
class TimingsForm extends Component {
    state = {
        inputValue: ''
    }

    render() {
        const {isWork} = this.props
        let placeholder;
        if (isWork) { 
            placeholder = "enter a whole number here"
        } else {
            placeholder = "add another break"
        }


        const {inputValue} = this.state

        const handleChange = (event) => {
            // event.preventDefault();
            const {value} = event.target // value field of the form element
            this.setState({inputValue: value})
            console.log("handlechange hi")

        }


        const keyDown = (event) => {
            if (event.key == 'Enter') {
                event.preventDefault(); // without this, page is refreshed after enter
                console.log("hi")

                // todo: pass in a prop from infobar > displaytimings that decides the first argument for add timing
                // ignore enter on empty input
                if (this.state.inputValue) { 
                    this.setState((state) => {
                        console.log("is this happening twice: ", state)
                        this.props.addTiming(isWork, this.state.inputValue) // todo bug: this should only be called once for each state, even if setstate is called twice for the same state
                        // not sure what the proper workaround is
                        // but for this context, we only need unique timing values so
                        // in add timing function, only add if unique value

                        return ({inputValue: ''})
                    })
                }
            }
        }

        return (
            <form>
                <input type="number" id="help" name="help" 
                placeholder={placeholder} 
                min="0" step="1"
                value={inputValue} 
                onKeyDown={keyDown}
                onChange={handleChange}>
                {console.log("this is curr state: ", this.state.inputValue) /* logged twice for each change. is that behaviour correct?*/}
                </input>
            </form>
        )
    }
}
export default TimingsForm