import {connect} from 'react-redux'
import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
    const details = useSelector(state => state.selectedDetails)
    console.log(details, "movie details")
    return (
        <div>
            <h6>Title</h6>
            <p>{details.title}</p>
            <h6>Release date</h6>
            <p>{details.releaseDate}</p>
            <h6>Rating</h6>
            <p>{details.rating}</p>
        </div>
    )
}


// class MovieDetails extends React.Component {
//     render() {
//         return ( 
//             <div>
//             aaa
//             </div>
//         )
//     }
// }

export default MovieDetails