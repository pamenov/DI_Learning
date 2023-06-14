import React from 'react';

class Garage extends React.Component {
    render(){
        const {size } = this.props
        return (
            <>
                <p> Who lives in my {size} Garage </p>
            </>
        )
    }
}


export default Garage