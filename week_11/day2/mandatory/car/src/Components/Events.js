import React from 'react';

class MyButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
    }
    
    ClickMe = () => {
        alert('I was clicked')
    }

    onClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }
    
    Keydown = (event) =>  {
        if (event.key === 'Enter') {
            alert("Enter pressed input is " + event.target.value)
        }

    }

    render() {
        const buttonText = this.state.isToggleOn ? "on" : "off"
        return(
            <>
            <input onKeyDown={this.Keydown} />
            <br />
            <button onClick={this.ClickMe}> Click me</button>
            <br />
            <button onClick={this.onClick}> {buttonText} </button>
            </>
        )
    }
}

export default MyButton;
