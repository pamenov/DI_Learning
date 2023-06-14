import React from 'react'


class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: 'red',
        };
    };

    changeToBlue = () => {
        this.setState({
            favoriteColor: 'blue'
        })        
    }

    render() {
        return(
            <header>
                <h2>My favorite color is {this.state.favoriteColor} </h2>
                <button onClick={this.changeToBlue}> Change to blue </button>
            </header>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoriteColor: 'yellow'
            })

        }, 5000)
    }
}

export default Color