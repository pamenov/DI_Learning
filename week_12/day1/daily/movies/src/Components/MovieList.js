import {connect} from 'react-redux'
import React from 'react'
import {selectMovie} from '../redux/actions'

class MovieList extends React.Component {
    constructor(props) {
        super(props)

    }

    handleClick(details) {
        console.log(details, 'in handle')
        this.props.dispatch(selectMovie(details))
    }

    render() {
        console.log("prps", this.props)
        return ( 
            <div>
                {this.props.listOfMovies.map((item, index) => {
                    return (
                        <div key={item.title}>
                        <p key={index}>{item.title}</p>
                        <button key={`btn${index}`} onClick={() => this.handleClick(item)}> Details </button>
                        </div>
                    )
                })

                }
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('store test', state)
    return ({
        listOfMovies: state.listOfMovies,
        selectedDetails: state.selectedDetails
    })
}

export default connect(mapStateToProps)(MovieList);