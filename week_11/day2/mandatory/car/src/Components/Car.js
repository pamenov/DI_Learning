import React from 'react';
import Garage from './Garage'

class CarInfo extends React.Component {
    constructor(props) {
        super(props);

        // Add a property to the class component
        this.color = 'black';
    }
    render(){
        const { name, model } = this.props
        return (
            <>
            <header>
                <h1> name {name} model {model} </h1>
            </header>
                <Garage size='small' />
                <p>
                    tthis is {this.color} {model}
                </p>
            </>
        )
    }
}


export default CarInfo