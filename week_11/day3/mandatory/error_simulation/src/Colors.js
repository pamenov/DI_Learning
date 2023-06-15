import React from 'react'


class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: 'red',
            show: true,
        };
    };

    changeToBlue = () => {
        this.setState({
            favoriteColor: 'blue'
        })        
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate")
        return null
    }

    shouldComponentUpdate() {
        return true
    }

    componentDidUpdate() {
        console.log("after update")
    }

    onClick = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return(
            <header>
                {this.state.show && <Child />}
                <button onClick={this.onClick}> Delete hello </button>
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

class Child extends React.Component{

    componentWillUnmount() {
        alert("component header will be unmounted")
    }

    render() {
        return(
            <header>
                hello world!
            </header>
        )
    }
}

export default Color